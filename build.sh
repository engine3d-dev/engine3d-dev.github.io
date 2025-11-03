
rm -rf TheAtlasEngine
git clone https://github.com/engine3d-dev/TheAtlasEngine

python3 -m venv venv

source venv/bin/activate


pip install -r requirements.txt


# Generate doxygen

# cd TheAtlasEngine
# doxygen -g Doxyfile
# Modify PROJECT_NAME
# Modify INPUT = ./
# Modify RECURSIVE = YES
# Modify OUTPUT_DIRECTORY docs
# doxygen Doxyfile
# Then add that to mkdocs