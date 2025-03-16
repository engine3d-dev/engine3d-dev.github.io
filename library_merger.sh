#!/bin/bash

set -e

LIBRARIES=(
  "TheAtlasEngine"
)

rm -rf libraries
mkdir -p libraries
cd libraries
mkdir include

for library in ${LIBRARIES[@]}
do
    git clone "https://github.com/engine3d-dev/$library.git"
done