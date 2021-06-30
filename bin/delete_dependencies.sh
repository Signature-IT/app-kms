#!/usr/bin/env bash

shopt -s nocasematch


start_process(){
    echo -e "\n---- STARTING ENV CLEAN PROCESS [${SCRIPT_VERSION}] ----"
    delete_dependencies
    echo -e "\n\n---- ENV UPDATE PROCESS IS DONE ----\n"
}





delete_dependencies() {
    if [[ $ENTITY == true ]]; then
            declare -a projects=("ngx-generic" "ngx-entity" "ngx-catalogue" "ngx-admin")
    else
        declare -a projects=("ngx-generic" "ngx-catalogue" "ngx-admin" )
    fi
    echo -e "\n DELETE DIST FOLDER"
    rm -rf $DIR_PROJ_ROOT/dist
    echo -e "\n DELETE node_modules"
    rm -rf $DIR_PROJ_ROOT/node_modules
    echo -e "\n DELETE package-lock.json\n"
    rm -rf $DIR_PROJ_ROOT/package-lock.json
    for project in "${projects[@]}"
    do
      echo $DIR_PROJ_ROOT/projects/signature-it/$project
        if [ -d $DIR_PROJ_ROOT/projects/signature-it/$project/node_modules ];  then
            echo -e "\n DELETE node_modules"
            rm -rf $DIR_PROJ_ROOT/projects/signature-it/$project/node_modules/
            echo -e "\n DELETE package-lock.json"
            rm -rf $DIR_PROJ_ROOT/projects/signature-it/$project/package-lock.json
        fi
    done
}

if [[ ${BASH_SOURCE} == $0 ]]; then
    clear
    # Terminal's arguments
    SIMULATION=0
    readonly DIR_PROJ_ROOT=$PWD
    # Get & Set flags data
    while getopts s:e: option
      do
        case "${option}" in
          s) SYSTEM_NAME=${OPTARG};;
          e) ENTITY=${OPTARG};;
        esac
      done
    # ready to go!
    start_process
fi
