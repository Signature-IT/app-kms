#!/usr/bin/env bash

shopt -s nocasematch

pre_process(){
    # Validate options
    case $1 in
      *)
         for i in $@; do
            case $i in
                --simulation)
                    SIMULATION=1 && shift
                    ;;
                -s)
                    SYSTEM_INSTANCE=$2 && shift
                    APP_INSTANCE="app-${SYSTEM_INSTANCE}"
                    FE_INSTANCE="${DIR_FE_POSTFIX}-${SYSTEM_INSTANCE}"
                    SYSTEM_TARGET=$2 && shift
                    SYSTEM_TARGET_DIR=$(echo $SYSTEM_TARGET | grep -oP "(?<=\:).+")
                    TARGET_DOMAIN=$(echo $SYSTEM_TARGET | grep -oP ".+(?=\:)")
                    DB_NAME=$2 && shift
                    DB_USER=$2 && shift
                    DB_PASS=$2 && shift
                    [[ $2 != "" && $2 != 0 ]] && DEVELOPER=$2 || DEVELOPER="www-data"
                    ;;
            esac
         done
    esac

echo -e "\n\n[1/100%]
---- TERMINAL ARGUMENTS ----
SIMULATION: $SIMULATION
UQKEY: $UQKEY
SYSTEM_INSTANCE: $SYSTEM_INSTANCE
SYSTEM_TARGET: $SYSTEM_TARGET
SYSTEM_TARGET_DIR: $SYSTEM_TARGET_DIR
TARGET_DOMAIN: $TARGET_DOMAIN
DB_NAME: $DB_NAME
DB_USER: $DB_USER
DB_PASS: $DB_PASS
DEVELOPER: $DEVELOPER
APP_INSTANCE: $APP_INSTANCE
FE_INSTANCE: $FE_INSTANCE
--------"

# simulation mode selected
[[ $SIMULATION -eq 1 ]] && exit
}

start_process(){
    echo -e "\n---- STARTING POST_DEPLOY PROCESS [${SCRIPT_VERSION}]----"

    cd $SYSTEM_TARGET_DIR/
    echo -e "\nDeploy target directory: ${PWD}"

    validate_env
    exit_on_error $?
    modify_be
    build_frontend_app
    create_fe_instance_link
    import_translations
    chown_repos
    virtual_symlinks

    echo -e "\n\n[100/100%]
----- POST_DEPLOY PROCESS IS DONE ----\n"
}

validate_env(){
    local _e=0
    echo -e "\n\n[10/100%]
---- VALIDATING ENV. ----"

    validate_if_env_exists $APP_INSTANCE
    [[ $? -ne 0 ]] && ((_e++))

    validate_if_env_exists $SYSTEM_INSTANCE
    [[ $? -ne 0 ]] && ((_e++))

    echo -e "--------"
    [[ $_e -ne 0 ]] && return $_e || return 0
}

validate_if_env_exists(){
    local _env=$1

    # check if system exists
    if [[ ! -d $_env ]]; then
        msg_op_will_cancel "WARNING: ${_env} system doesn't exists!"
        return $?
    else
        echo "${_env}: Exists"
    fi
}

modify_be() {
    echo -e "\n\n---- BE MODIFICATIONS ----"

    # skins
    rm -fr $SYSTEM_INSTANCE/skins
    mkdir $SYSTEM_INSTANCE/skins
    ln -sfv /opt/labs/skins2/ratag_style ${SYSTEM_INSTANCE}/skins/ratag_style
    ln -sfv /opt/labs/skins2/skin_362 ${SYSTEM_INSTANCE}/skins/skin_362
    # images
    unlink $SYSTEM_INSTANCE/images/Fittings
    mkdir $SYSTEM_INSTANCE/images/Fittings
    ln -sfv /product_pictures/ratag $SYSTEM_INSTANCE/images/Fittings/ratag

    echo -e "\n--------"
}

create_fe_instance_link() {
    echo -e "\n\n---- CREATE FE/DIST INSTANCE ----"

    # environment-fe
    ln -sfv "${APP_INSTANCE}/dist" $FE_INSTANCE

    echo -e "\n--------"
}

build_frontend_app(){
    echo -e "\n\n---- BUILD FRONTEND APP ----"

    local _tmp_dir=${PWD}
    cd $APP_INSTANCE

    # - bower install && npm install && build-sass
    npm run deploy && \
    npm run build-sass

    cd $_tmp_dir

    echo -e "\n--------"
}

import_translations(){
    echo -e "\n\n---- IMPORT TRANSLATIONS ----"

    # set require variables
    local _file=$SYSTEM_INSTANCE/$FILE_CONFIG_INC_PHP

    local _var1=$(grep -oP "translationFilePath" $_file)
    [[ $_var1 == "" ]] && \
        echo "${_file}: " && \
        echo "\$translationFilePath = '${SYSTEM_TARGET_DIR}/${APP_INSTANCE}/dist/assets/i18n/';" | tee -a $_file
    local _var2=$(grep -oP "system_name_app" $_file)
    [[ $_var2 == "" ]] && \
        echo "\$system_name_app = '${APP_INSTANCE}';" | tee -a $_file

    echo -e "\n--------"

    # update network_subsidiaries
    local _url=""
    # if production or developer host
    if [[ $HOSTNAME =~ ^m && $SYSTEM_TARGET_DIR =~ ^/prod ]]; then
        _url=$(ls $DIR_VIRTUAL | grep "app.${SYSTEM_INSTANCE}")
    elif [[ $HOSTNAME =~ ^il && $SYSTEM_TARGET_DIR =~ ^/work ]]; then
        _url="http://${APP_INSTANCE}.${DEVELOPER}.d.${TARGET_DOMAIN}"
    fi

    mysql -u $DB_USER --password=$DB_PASS -e \
        "USE ${DB_NAME}; INSERT INTO network_subsidiaries (dealer_system_instance,dealer_main_url) VALUES('${APP_INSTANCE}','${_url}') ON DUPLICATE KEY UPDATE dealer_main_url = VALUES(dealer_main_url);"

    if [[ $? -eq 0 ]]; then
        echo -e "\n- `dealer_main_url`:${_url} has added into DB table `network_subsidiaries`."

        echo -e "\n--------"

        # run cli from package.json
        npm run translations-import
    fi

    echo -e "\n--------"
}

chown_repos(){
    echo -e "\n\n---- CHOWN REPOS ----"

    chown_it $DEVELOPER $APP_INSTANCE
    chown_it $DEVELOPER $FE_INSTANCE

    echo -e "\n--------"
}

chown_it(){
    local _dev=$1
    local _repo=$2

    echo -e "\n---- Running chown & chmod Commands ----
chown ${_dev}:developers -R ${_repo}/
chmod g+rw -R ${_repo}/
chmod +rw -R ${_repo}/
--------"

    chown $_dev:developers -R $_repo/
    chmod g+rw -R $_repo/
    chmod +rw -R $_repo/
}

virtual_symlinks(){
    # if production server
    if [[ ${HOSTNAME} =~ ^m ]]; then
        echo -e "\n\n---- VIRTUAL SYMLINKS ----"

        # create symlinks to virtual
        ln -sfv "${SYSTEM_TARGET_DIR}/${FE_INSTANCE}" "${DIR_VIRTUAL}/${DIR_FE_POSTFIX}.${SYSTEM_INSTANCE}.${TARGET_DOMAIN}"

        echo -e "\n--------"
    fi
}

msg_op_will_cancel(){
    echo -e "\n$1"
    echo "Operation will cancel."
    echo -e "\n--------"
    return 1
}

exit_on_error(){
    if [[ $1 -ne 0 ]]; then
        echo -e "\n\nExiting..."
        exit $1
    fi
}

if [[ ${BASH_SOURCE} == $0 ]]; then
    # Terminal's arguments
    SIMULATION=0
    DEVELOPER=0

    # Global constants/variables
    readonly SCRIPT_VERSION="v2.2.0"
    readonly UQKEY=$(date '+%Y%m%d%H%M%S')
    readonly DIR_FE_POSTFIX="fe"
    readonly DIR_VIRTUAL="/var/www/virtual"
    readonly DIR_APP_CONFIG="app/config"
    readonly FILE_CONFIG_INC_PHP="config.inc.php"
    # Validate terminal values
    pre_process $@

    # ready to go!
    start_process
fi