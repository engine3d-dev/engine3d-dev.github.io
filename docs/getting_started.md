# 🛸 Getting Started

## ✅ Prerequisites

These are needed before working to get engine3d building successfully on your platform.

* `python`: 3.10 or above
* `conan`: 2.2.0 or above
* `llvm`: 17 or above
* `make`: CMake downloaded using conan to build Engine3D
* `git`: (only needs to be installed via installer on Windows)
* `Visual Studio`: (Installing it just for getting C++ Windows SDK to work)

=== "Windows"

    !!! tip
        
        Adding it as an option for future change to using DirectX when you run on Windows.

    !!! info
        Needs to install Visual Studio installed because it comes with C++ Windows SDK kits

        Until there is an easier way of installing the C++ Windows SDK Kit for the Windows platform.

    It is recommended to use Choco for an easy installatoin process on Windows.
    
    To install `choco`, open powershell with admin access and run the following command in your terminal (powershell must be admin):
    
    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```
    
    !!! tip
    
        If `choco` command does not work after running this script try closing and reopening powershell again.
        When `choco` prompts you to run install scripts from the commands below, enter `all` so it can install everything.
    
    Install `git` (powershell must be admin):
    
    ```powershell
    choco install git
    ```
    
    Install `python` (powershell must be admin):
    
    ```powershell
    choco install python --version=3.12.0
    ```
    
    Install `llvm` (powershell must be admin):
    
    ```powershell
    choco install llvm
    ```
    
    Install `conan` (powershell must be admin)
    ```powershell
    python -m pip install -U "conan>=2.2.2"
    ```

    Install cmake
    ```powershell
    choco install cmake
    ```

    Install mingw
    ```powershell
    choco install mingw
    ```

    [comment]: <> (Install Vulkan  using the vulkan installer from [here](https://vulkan.lunarg.com/sdk/home#windows))
    

    Installing Vulkan's installer from the terminal. (in Powershell)
    ```powershell
    Invoke-WebRequest -Uri https://sdk.lunarg.com/sdk/download/1.3.290.0/windows/VulkanSDK-1.3.290.0-Installer.exe -OutFile $env:USERPROFILE\Downloads\VulkanSDK-1.3.290.0-Installer.exe
    ```


    During installation select the `SDK 32-bit Core Components` as shown

    ![screencap of component selection on vulkan installer](pics/vulkan_components_win_md.png)

    ```
    
=== "Ubuntu"

    Install wget if it isn't already on your system

    `sudo apt-get install wget`

    Install the latest version of `llvm`
    
    ``` bash
    wget https://apt.llvm.org/llvm.sh
    chmod +x llvm.sh
    sudo ./llvm.sh
    ```
    
    !!! info
    
        If your using 20.04, you have to upgrade Python to 3.10
    
    ``` bash
    sudo apt update
    sudo apt install software-properties-common -y
    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt install Python3.10
    ```

    Installing Conan
    ``` bash
    python -m pip install -U "conan>=2.2.2"
    ```

    On Linux vulkan does not need 

=== "Mac OS"

    Install Homebrew:
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Install latest version of Python && llvm:
    
    ```
    brew install python
    brew install llvm@17
    ```
    
    Install conan:
    
    !!! tip
        If using the conan command does not work after pip installing.

        Type the `brew install conan` command, instead.

    ```
    python3 -m pip install "conan>=2.2.2"
    ```
    
    Make `clang-tidy` available on the command line:
    
    ```
    sudo ln -s $(brew --prefix llvm)/bin/clang-tidy /usr/local/bin/
    ```
    
    Install Rosetta (only required for M1 macs):
    
    ```
    /usr/sbin/softwareupdate --install-rosetta --agree-to-license
    ```

    [comment]: <> (Installing Vulkan using the installer from [here](https://vulkan.lunarg.com/sdk/home#mac))

    ```zsh
    curl -O https://sdk.lunarg.com/sdk/download/1.3.290.0/mac/vulkansdk-macos-1.3.290.0.dmg ${HOME}/Downloads
    ```

    During the installation select the checkbox's shown below.

    ![screencap of component selection on vulkan installer](pics/vulkan_components_mac_md.png)

    Once vulkan's installed apply the following export commands into your mac's `.zshrc` file
    
    ```zsh
        export VULKAN_SDK="${HOME}/VulkanSDK/1.3.290.0/macOS"
        export DYLD_LIBRARY_PATH="${VULKAN_SDK}/lib/libvulkan.1.3.290.dylib"
        export VK_ICD_FILENAMES="$VULKAN_SDK/share/vulkan/icd.d/MoltenVK_icd.json"
        export VK_LAYER_PATH="$VULKAN_SDK/share/vulkan/explicit_layer.d"
    ```

    !!! note

        To check if vulkan is installed, you should be able to type the following command `vkvia`

        This runs the vulkan basic cube program validating vulkan's been installed correctly.

    After adding these exports, refresh your `.zshrc` by doing `source ~/.zshrc`

---

## Setting up Conan

Setting up a conan profile for your specific platforms.

=== "Windows"

    If you are on an x86 architecture for Windows.
    
    ```powershell
    conan config install -sf profiles/x86_64/Windows/ -tf profiles https://github.com/engine3d-dev/conan-config.git
    ```

=== "X86 Linux"

    If you are on a linux platform that uses an x86 architecture.
    
    ```bash
    conan config install -sf profiles/x86_64/linux/ -tf profiles https://github.com/engine3d-dev/conan-config.git
    ```

=== "M1 Mac"

    If you are on an M1 Mac OS.

    ```zsh
    conan config install -sf profiles/armv8/mac/ -tf profiles https://github.com/engine3d-dev/conan-config.git
    ```

---

## Contributing to Engine3D

- Create a fork of the Engine3D repository. Then clone your fork of the Engine3d repo.

- Then use conan to build the project.

!!! tip
    `-b missing` means that there are missing binaries in your conan cache.

!!! note
    You only need to do the `conan create` command once. Then just continue using `conan build` afterwards.
    
- `conan create` command will install all the dependencies of engine3d, build, and test the project.

- `conan build .` will build the entire project

```bash
git clone https://github.com/<username>/engine3d
cd engine3d/

conan create . -b missing

conan build .
```

## Running Editor

The editor executable will be in `build/clang-17-x86_64-23-release/Editor/Editor.exe`

You can simply run the editor just by doing `.\build/clang-17-x86_64-23-release/Editor/Editor.exe`

Depending on your current platform the editor executable will be in `./build/<arch-Release>/Editor/Editor.exe`

---

## Different Build Types
There are two different build types that you can build engine3d in, `Release` and `Debug`.

`Release` will be turning on optimization and making your code size.

`Debug` is much slower than `Release`. Not recommended because used for testing and enabling debugging information.

---


