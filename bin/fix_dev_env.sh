#!/usr/bin/env bash

shopt -s nocasematch

start_process() {
  install_dist_dependencies
}

install_dist_dependencies() {
  declare -a projects=("ngx-generic" "ngx-catalogue" "ngx-admin")
  for project in "${projects[@]}"
  do
      if [ -d "dist/signature-it/${project}" ];  then
        local folder=dist/signature-it/${project};
        cd $folder && \
        npm_install $folder && cd ../../
    fi
  done
}

npm_install() {
    echo -e "\nRunning \"npm install on $@\" ..."
    npm install && \
    exit_on_error $?
}

exit_on_error() {
    if [[ $1 -ne 0 ]]; then
        echo -e "\n\nExiting..."
        exit $1
    fi
}

start_process
