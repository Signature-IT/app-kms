#!/usr/bin/env bash

shopt -s nocasematch

start_process() {
  install_npm_dependencies
}

install_npm_dependencies() {
    string=`cat projects/signature-it/ngx-generic/dependencies.json`
    packages="${string:1:${#string}-2}"
    packages=${mod//[:]/@}
    packages=${mod//[\"]/}
    packages=${mod//[\ ,]/}
    npm_install $packages
}

npm_install() {
    echo -e "\nRunning \"npm install from projects/signature-it/ngx-generic/dependencies.json\" ..."
    npm install $@ && \
    exit_on_error $?
}

exit_on_error() {
    if [[ $1 -ne 0 ]]; then
        echo -e "\n\nExiting..."
        exit $1
    fi
}

start_process
