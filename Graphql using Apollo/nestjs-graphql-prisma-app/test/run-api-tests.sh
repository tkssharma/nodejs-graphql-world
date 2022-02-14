#!/usr/bin/env bash
set -x

SCRIPTDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null && pwd)"

APISCHEME=${APISCHEME:-http}
APIURL=${APIURL:-conduit.productionready.io/api}
USERNAME=${USERNAME:-u$(date +%s)}
EMAIL=${EMAIL:-$USERNAME@mail.com}
PASSWORD=${PASSWORD:-password}

npx newman run $SCRIPTDIR/Conduit.postman_collection.json \
    --delay-request 100 \
    --global-var "APISCHEME=$APISCHEME" \
    --global-var "APIURL=$APIURL" \
    --global-var "USERNAME=$USERNAME" \
    --global-var "EMAIL=$EMAIL" \
    --global-var "PASSWORD=$PASSWORD"
