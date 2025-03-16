# Setting VSCode w/ `clangd`

The majority of the contributors and users uses Visual Studio Code. These guidelines should also help with non-vscoders as well

## Setup Steps

Make sure you already install clang via [getting started](../getting_started.md).

1. Install [VSCode](https://code.visualstudio.com/) if you haven't already done so.
2. Go to the "Extensions" section on left-side of the bar. It looks like 4 blocks with the upper right-hand block disconnected from the other 3. Hover over the icons to get their name.
3. Search for "C/C++" and disable the Windows intellisense extension if it is already installed and enabled.
4. Search for the extension `clangd` and install the extension.
5. Go to the `clangd` extension settings page. Find `clangd` extension and press the GEAR ⚙️ icon to open in settings.
6. Find the settings `clangd: Arguments` and add:
    1. In `Clangd: Arguments` input `--header-insertion=never`


Clangd arguments should look like this:

![clangd arguments](../assets/clangd-arguments.png "Clangd Arguments")