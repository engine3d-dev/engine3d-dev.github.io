
# This script generates the docs html files required for the documentation web-page

# Sets up the virtual environment
python3 -m venv venv

source venv/bin/activate


pip install -r requirements.txt


# Generate doxygen

# cd TheAtlasEngine
# doxygen -g Doxyfile
# Modify PROJECT_NAME
# Modify INPUT = ./TheAtlasEngine/atlas
# Modify RECURSIVE = YES
# Modify OUTPUT_DIRECTORY docs
# doxygen TheAtlasEngine/Doxyfile
# Then add that to mkdocs

# Cloning the TheAtlasEngine repository
git clone https://github.com/engine3d-dev/TheAtlasEngine

# We check if TheAtlasEngine directory exists then we remove it and re-clone repository again
if ! [ -d TheAtlasEngine ]; then
    git clone https://github.com/engine3d-dev/TheAtlasEngine
else
    rm -rf TheAtlasEngine
    git clone https://github.com/engine3d-dev/TheAtlasEngine
fi

# Copies Doxyfile to TheAtlasEngine directory to modify it for the documentation website
cp Doxyfile TheAtlasEngine/Doxyfile

# Generating the doxygen documentation from the specified Doxyfile in the repository
doxygen TheAtlasEngine/Doxyfile

# Copying the doxygen documentation to the mkdocs/html directory
cp -R doxygen_output/html mkdocs/html