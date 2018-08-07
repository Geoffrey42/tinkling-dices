#!/bin/bash

if [ -d "./node_modules" ]; then
    echo "node_modules already exists\n"
    echo "Delete it and restart container to reinstall binaries."
else
    echo "Installing dependencies"
    npm install
fi

exec "$@";
