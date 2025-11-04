
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
# We check if TheAtlasEngine directory exists then we remove it and re-clone repository again
if ! [ -d TheAtlasEngine ]; then
    echo "Cloning TheAtlasEngine Repo..."
    git clone https://github.com/engine3d-dev/TheAtlasEngine
else
    echo "TheAtlasEngine Repo Found!"
    rm -rf TheAtlasEngine
    echo "Deleted TheAtlasEngine/ Repo"
    echo "Cloning TheAtlasEngine Repo..."
    git clone https://github.com/engine3d-dev/TheAtlasEngine
fi

# Copies Doxyfile to TheAtlasEngine directory to modify it for the documentation website
echo "cp Doxyfile TheAtlasEngine/Doxyfile"
cp Doxyfile TheAtlasEngine/Doxyfile
echo "ls TheAtlasEngine | grep \"Doxyfile\""
echo "Output:"
ls TheAtlasEngine | grep "Doxyfile"

# Generating the doxygen documentation from the specified Doxyfile in the repository
doxygen TheAtlasEngine/Doxyfile

# # Copying the doxygen documentation to the mkdocs/html directory
cp -R docs/html mkdocs/html


# chmod +x apply_css.sh
./apply_css.sh