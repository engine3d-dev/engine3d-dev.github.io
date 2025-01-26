# Engine3D Documentation Repository
Documentation for Engine3D, to look at how to get started

## Prerequisites
To install the dependencies make sure you have python and pip pre-installed already on your system. \
Check https://sfsu-dev.github.io/engine3d.github.io to learn mode.


## Virtual Environment
* Create virtualenv `python3 -m venv venv`
* Activate virtualenv `source venv/bin/activate`

## Pip Install
* Installing the dependencies for this project.
`pip install -r requirements.txt`


# Doxygen-Breath-Sphinx
* cd into Sphinx/source folder `cd Sphinx\source`
* run `python generate_sphinx_dyn.py`
* run `sphinx-build -b html ./ ../../docs/Documentation/API_Release`
* go back to top folder `cd ../..`

# Shortcuts

## Windows
* Run `build_docs.ps1`

> ⚠️ **Note**: The `build_docs.ps1` script must be executed using PowerShell.  
> Attempting to run it in Command Prompt or other shells may result in errors. To execute the script:
> 1. Open PowerShell.
> 2. Navigate to the project directory.
> 3. Run the command: `.\build_docs.ps1`
> 4. the path depends on what your trying to do but it should be absolute


# Run mkdocs
* run `mkdocs serve`