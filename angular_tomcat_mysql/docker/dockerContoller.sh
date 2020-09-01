#!/bin/bash

CONTAINERS=(database backend front)

function create(){
    for container in ${CONTAINERS[@]}; do
        cd $container
        ./run.sh create
        cd ..
    done
}

function delete(){
    for container in ${CONTAINERS[@]}; do
        cd $container
        ./run.sh delete
        cd ..
    done
}

function main(){
    if [[ $1 == 'create' ]]; then
        create
    elif [[ $1 == 'delete' ]]; then
        delete
    else
        echo 'You need only single valid argument.'
        exit 1
    fi
}

main $1
