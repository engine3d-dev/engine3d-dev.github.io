#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if the user provided an argument
if [ -z "$1" ]; then
    echo "Usage: $0 <User Given Path>"
    exit 1
fi

USER_GIVEN_PATH=$1
FINAL_FOLDER_NAME=$(basename "$USER_GIVEN_PATH")

# 1. Remove folder docs/Documentation/API_Release if it exists
if [ -d "docs/Documentation/API_Release" ]; then
    echo "Removing folder docs/Documentation/API_Release..."
    rm -rf docs/Documentation/API_Release
fi

# 2. Remove folder doxygen_output if it exists
if [ -d "doxygen_output" ]; then
    echo "Removing folder doxygen_output..."
    rm -rf doxygen_output
fi

# 3. Run doxygen Doxyfile_api with the user-given path
echo "Running Doxygen with input path: $USER_GIVEN_PATH..."
sed "s|{{INPUT_PATH}}|$USER_GIVEN_PATH|" Doxyfile_api > ProcessedDoxyfile_api
doxygen ProcessedDoxyfile_api
rm ProcessedDoxyfile_api

# 4. Change directory to Sphinx/source
echo "Changing directory to Sphinx/source..."
cd Sphinx/source

# 5. Remove folder matching the final folder name
if [ -d "$FINAL_FOLDER_NAME" ]; then
    echo "Removing folder $FINAL_FOLDER_NAME..."
    rm -rf "$FINAL_FOLDER_NAME"
fi

# 6. Run the Python script to generate dynamic Sphinx content
echo "Running Python script generate_sphinx_dyn.py..."
python generate_sphinx_dyn.py

# 7. Build Sphinx documentation
echo "Building Sphinx documentation..."
sphinx-build -b html ./ ../../docs/Documentation/API_Release

# 8. Return to the root directory
echo "Returning to the root directory..."
cd ../..
