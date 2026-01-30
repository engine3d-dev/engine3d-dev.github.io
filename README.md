# engine3d-dev.github.io

Documentation website for TheAtlasEngine to provide information on guidelines and development environment setup.

## Instructions

To install the website please install the needed dependencies for the project:

```
pip install -r requirements.txt
```

Then to build the actual documentation

!!! tip

    You may need to run `chmod +x build.sh` to execute the build script

```
./build.sh
```

Finally run the serve command to run the documentation website.

```
mkdocs serve
```

This page should be available on your local address at `https://127.0.0.1:8000`

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
```

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
