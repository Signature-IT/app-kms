#!/usr/bin/env bash

shopt -s nocasematch

start_process(){
    echo -e "\n---- STARTING ENV UPDATE PROCESS [${SCRIPT_VERSION}] ----"

    git_pull && \
    npm_update && \
    composer_update && \
    sys_update && \
    npm_build

    echo -e "\n\n---- ENV UPDATE PROCESS IS DONE ----\n"
}

git_pull() {
    echo -e "\nRunning \"git pull\" ..."
    local _result
    _result=`git pull`
    echo $_result

    # checks local changed files
#    _result="remote: Counting objects: 15, done.
#              remote: Compressing objects: 100% (6/6), done.
#              remote: Total 15 (delta 9), reused 15 (delta 9), pack-reused 0
#              Unpacking objects: 100% (15/15), done.
#              From https://github.com/Signature-IT/ngx-app-signature
#                 888d9cf..975551b  master     -> origin/master
#              Updating 888d9cf..975551b
#              error: Your local changes to the following files would be overwritten by merge:
#              	web/app/components/cart/orders/tmpl/full/full.scss
#              	web/app/components/cc-cart/cc-orders/tmpl/full/full.scss
#              Please, commit your changes or stash them before you can merge.
#              Aborting"

    # reverts local changes files if exists
    local _mgs_error_local_changes="error: Your local changes to the following files would be overwritten by merge:"
    if [[ $_result =~ $_mgs_error_local_changes ]]; then
        local _files=$(echo $_result | grep -oP "(?<=${_mgs_error_local_changes}).+(?=\s*Please)")

        local _ans_is_revert
        echo -e "\n${GREEN}Do you want to revert these files?${DEFAULT}"
        read -ep "`echo -e $'[y/n/all] > '`" _ans_is_revert
        _ans_is_revert=`echo "$_ans_is_revert" | tr '[:lower:]' '[:upper:]'`
        
        for _f in $_files; do
            if [ $_ans_is_revert = "Y" ]; then
                local _ans_do_revert
                echo -e "\n${GREEN}Do you want to revert \"${_f}\" ?${DEFAULT}"
                read -ep "`echo -e $'[y/n] > '`" _ans_do_revert
                _ans_do_revert=`echo "$_ans_do_revert" | tr '[:lower:]' '[:upper:]'`
                if [ $_ans_do_revert = "N" ]; then
                    continue
                fi
            elif [ $_ans_is_revert = "N" ]; then
                break
            elif [ $_ans_is_revert = "ALL" ]; then
                pp=4 # not make sense
            fi

            echo "Running \"git checkout -- ${_f}\""
            git checkout -- $_f
        done
    fi

    exit_on_error $?
}

npm_update() {
    echo -e "\nRunning \"npm update\" ..."
    npm update && \
    exit_on_error $?
}

composer_update() {
    echo -e "\nRunning \"composer update\" ..."
    php composer.phar update && \
    exit_on_error $?
}

sys_update() {
    local _answer

    echo -e "\n${GREEN}Do you want to pull system env ? (${DIR_SYSTEM})${DEFAULT}"
    read -ep "`echo -e $'[y/n] > '`" _answer

    _answer=`echo "$_answer" | tr '[:lower:]' '[:upper:]'`

    if [ $_answer = "Y" ]; then
        echo -e "\nRunning svn up..."
        cd $DIR_SYSTEM && \
        svn up && \
        exit_on_error $?
        cd $DIR_PROJ_ROOT
    fi
}

npm_build() {
    local _answer

    echo -e "\n${GREEN}Do you want to build env ? (npm run build-production)${DEFAULT}"
    read -ep "`echo -e $'[y/n] > '`" _answer

    _answer=`echo "$_answer" | tr '[:lower:]' '[:upper:]'`

    if [ $_answer = "Y" ]; then
        echo -e "\nRunning \"npm run build-production\"..."
        npm run build-production && \
        exit_on_error $?
    fi
}

exit_on_error() {
    if [[ $1 -ne 0 ]]; then
        echo -e "\n\nExiting..."
        exit $1
    fi
}

if [[ ${BASH_SOURCE} == $0 ]]; then
    clear

    # Terminal's arguments
    SIMULATION=0

    # Global constants/variables
    readonly SCRIPT_VERSION="v1.0.0"
    readonly DIR_PROJ_ROOT=$PWD
    readonly DIR_SYSTEM="vendor/signature/system"

    # ready to go!
    start_process
fi