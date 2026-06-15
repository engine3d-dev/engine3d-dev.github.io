
# # This script generates the docs html files required for the documentation web-page

# Setting working directory to the file path of the shell script
# so that it doesn't depend on where the script is run from
SCRIPT_PATH=$(pwd)
cd "$SCRIPT_PATH"
echo "[Build Script] Current working directory: $SCRIPT_PATH"

# Directory of where the Atlas Engine source repository will be stored.
# This is relative to where this script file is.
ATLAS_SRC_DIR="./TheAtlasEngine"

# Cloning the TheAtlasEngine repository
# We check if TheAtlasEngine directory exists before we can generate Doxygen HTML files.
if ! [ -d "$ATLAS_SRC_DIR" ]; then
    echo "[Git] Cloning TheAtlasEngine Repo..."
    git clone https://github.com/engine3d-dev/TheAtlasEngine "$ATLAS_SRC_DIR"
else
    echo "[Git] TheAtlasEngine Repo Found! Updating Repository..."
		cd "$ATLAS_SRC_DIR"
		git pull
		cd "$SCRIPT_PATH"
fi

# We will set up a log file to redirect doxygen logs/warnings/errors to because it can generate a lot of messages that clutter the user's terminal
echo "[Doxygen] Generating documentation from ./Doxyfile..."
if ! [ -d "logs" ]; then
		mkdir logs
fi

doxygen ./Doxyfile > ./logs/doxygen.log 2>&1
