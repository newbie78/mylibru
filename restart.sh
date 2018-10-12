#!/usr/bin/env bash

export UID=${UID}
export GID=${GID}

docker-compose -f docker-compose.single.yml down
docker-compose -f docker-compose.single.yml up -d
