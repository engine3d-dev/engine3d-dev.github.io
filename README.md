# engine3d-dev.github.io

Documentation website for TheAtlasEngine to provide information on guidelines and development environment setup.

## Set Up Instructions

To set up a local development environment for the documentation website,
you will need:
- [NodeJS](https://nodejs.org/en/download): A runtime environemnt to execute JavaScript code.
- [Git](https://git-scm.com/install/): To let the build script download the source code of the Atlas engine to your local machine. You probbaly already have this installed if you had cloned this repository to your machine.

This guide assumes that you are setting up the development environment on the command line.

First, clone the repository to your machine. 
Make sure to update your command line's working directory to the newly cloned repository once the documentation repository is cloned.
```zsh
git clone https://github.com/engine3d-dev/TheAtlasEngine.git
cd ./TheAtlasEngine
```

Then install package dependencies for this Node project such as Vite and the Typescript transpiler, etc. 

```zsh
npm i
```

With the Node packages installed properly, we can start a local development server. 
The following command will run Vite which itself is configured to run the `build.sh` before starting the dev server. 
```zsh
npm run dev
```
By default, you should be able to access the local documentation site at 
http://localhost:5173/. 
The port number may change if the port was already occupied. 
If that's the case, just follow the URL that was provided by Vite in the command line.

### !!! tip
You may need to run `chmod +x build.sh` to let Vite run the build script

<!-- 
When making changes to the page itself, it will auto-reload.

If the API documentation gets modified. You must rebuild the documentation. If your changes involve just `rst` or `md` files in the sphinx directory.

You can just run the sphinx commands shown below.

```
cd sphinx
sphinx-build -b html -Dbreathe_projects.atlas=doxygen_output/xml . output
```

If there are changes within the actual code for the documentation. Doxygen files are going to need to be rebuilt.

Starting in the root of this repository.

```
doxygen Doxyfile.in

cd sphinx
sphinx-build -b html -Dbreathe_projects.atlas=doxygen_output/xml . output
``` -->

# Contribution Instructions


## CSS Layout Modifications

Whenever the CSS modifications are made. Manually reload the doxygen using the `./build.sh` script.


## Resources

To learn more about checkout [mkdocs-material](https://squidfunk.github.io/mkdocs-material) for
more details on features that can be used within this static side of the documentation


[sphinx-url](https://www.sphinx-doc.org/en/master/) for how to use sphinx at a basic level

[breathe-url](https://breathe.readthedocs.io/en/latest/) on how to use doxygen directives on how to organize your code inside of sphinx `rst` or `md` files

[theme-url](https://pydata-sphinx-theme.readthedocs.io/en/stable/) for theme-specifications use for API docs.

## License

Apache 2.0; see [`LICENSE`](LICENSE) for more details
