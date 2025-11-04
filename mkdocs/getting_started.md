# 📚 Getting Started

## 💥 Prerequisites

These are needed before working to get TheAtlasEngine building successfully on your platform.

* `python`: 3.12 or above
* `conan`: 2.18.0 or above
* `llvm`: 17 or above
* `CMake` Build tool for the project
* `git`: Version control

=== "Windows"

    !!! info

        `winget` command is to install Visual Studio with minimal default C++ configurations installation

    Run this `winget` command to setup C++ with Visual Studio installer in powershell (in admin mode)

    ```powershell
    winget install Microsoft.VisualStudio.2022.BuildTools --override "--add Microsoft.VisualStudio.Workload.VCTools --includeRecommended -p --installWhileDownloading"
    ```

    It is recommended to use Choco for an easy installation process on Windows.
    
    To install `choco`, open powershell with admin access and run the following command in your terminal (powershell must be admin):
    
    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```
    
    !!! tip
        If `choco` command does not work after running this script try closing and reopening powershell again.
        When `choco` prompts you to run install scripts from the commands below, enter `all` so it can install everything.
    
    Install `git` (powershell must be **admin**):
    ```powershell
    choco install git
    ```
    
    Install `python` (powershell must be **admin**):
    ```powershell
    choco install python --version=3.18.0
    ```
    
    Install `llvm` (powershell must be **admin**):

    !!! error
        If you get this error make sure that your environment variable is set to LLVM's clang.exe and clang++.exe filepath.

        While also making sure 
        
        ```
        CMake Error at CMakeLists.txt:2 (project):
        The CMAKE_CXX_COMPILER:

            C:/Program Files/LLVM/bin/clang++.exe

        is not a full path to an existing compiler tool.
        ```

    Installing llvm toolchain (powershell must be in **admin**)
    ```powershell
    choco install llvm
    ```
    
    Install `conan` (powershell must be **admin**)
    ```powershell
    pip install "conan>=2.10.2"
    ```

    Install cmake and make

    !!! error
        you can get this error if you DO NOT have 'make' installed via choco

        ```
        CMake Error: CMake was unable to find a build program corresponding to "Unix Makefiles".  CMAKE_MAKE_PROGRAM is not set.  You probably need to select a different build tool.
        ```
    
    !!! error
        you can get this error if you DO NOT have 'mingw' installed via choco

        CMake Error: CMake was unable to find a build program corresponding to "MinGW Makefiles".  CMAKE_MAKE_PROGRAM is not set.  You probably need to select a different build tool.

    ```powershell
    choco install make cmake
    ```

    !!! info

        mingw is installed because we need `mingw32-make.exe` as dependencies will default to using "MinGW Makefiles" generator specified.
        which means that their CMake will look for `mingw32-make.exe` specific make executables instead of `make.exe`

    Install mingw (powershell must be in **admin**)
    ```powershell
    choco install mingw
    ```

    [comment]: <> (Vulkan Installer can be found here [here](https://vulkan.lunarg.com/sdk/home#windows))

    !!! info

        Using this `winget` command will install Vulkan's installer, set it up for you, and set the environment path variable.
    
    Get Vulkan's installer. (powershell must be in **admin**)
    ```powershell
    winget install --id=KhronosGroup.VulkanSDK -e
    ```

    !!! important

        DO NOT FORGET to refresh or close out of your terminal before compiling. Once installation has been completed.


=== "Ubuntu 20.0+"

    Install wget if it isn't already on your system

    `sudo apt-get install wget`

    Install the latest version of `llvm`
    
    ``` bash
    wget https://apt.llvm.org/llvm.sh
    chmod +x llvm.sh
    sudo ./llvm.sh
    ```

    Install LLVM's C+ standard library (this will use the llvm apt repos)

    ```bash
    sudo apt install libc++-17-dev libc++abi-17-dev
    ```

    <details>
        <summary> Installing Linux Prerequisites </summary>

    ```bash
    sudo apt install -y lsb-release wget software-properties-common gnupg libgtk2.0-dev libgl1-mesa-dev
    sudo apt-get install -y libx11-dev libx11-xcb-dev libfontenc-dev libice-dev libsm-dev libxau-dev libxaw7-dev libxt-dev libxtst-dev libxrender-dev libxrandr-dev libxi-dev
    sudo apt install -y software-properties-common
    sudo add-apt-repository ppa:deadsnakes/ppa
    ```
    </details>
    
    <details>
        <summary> If your using 20.04, you have to upgrade Python to 3.10 </summary>
    
    ```bash
    sudo apt update
    sudo apt install software-properties-common -y
    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt install Python3.10
    ```
    </details>
    
    Install pipx which is used to install conan

    ```bash
    sudo apt install pipx
    ```

    Installing conan

    ```bash
    pipx install "conan>=2.18.1"
    ```

    !!! important

        If you are installing to compile TheAtlasEngine. Conan already installs Vulkan for you automatically.


=== "MacOS X"

    Install Homebrew:
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Install latest version of Python && llvm:
    
    ```
    brew install python pipx llvm@17
    ```
    
    Install conan:
    
    ```zsh
    pipx install "conan>=2.18.2"
    ```
    
    Make `clang-tidy` available on the command line:
    
    ```
    sudo ln -s $(brew --prefix llvm)/bin/clang-tidy /usr/local/bin/
    ```
    
    Install Rosetta (only required for M1 macs):
    
    ```
    /usr/sbin/softwareupdate --install-rosetta --agree-to-license
    ```

    !!! note

        On MacOS there are plans in using metal (metal-cpp) instead of Vulkan. Which conan also handles for you.

---

# 📦 Setting up Conan

Install host profiles for your specific platforms

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

## 📥 Getting project repositories from Artifactory

Add the engine3d-conan repository to your system. This repository holds all of the TheAtlasEngine packages.

```zsh
conan remote add engine3d-conan https://libhal.jfrog.io/artifactory/api/conan/engine3d-conan
```

## ✅ Development Environment Completed!!

Once the development environment is completed. Then go to the [repos](https://github.com/engine3d-dev) to see the list of repositories that you plan to contribute to.


## **Changing Build Type**

The build type determines level of optimizations for the project you are building for. TheAtlasEngine by default is `Release` is because performance is one of the most important aspects of the project.

It is highly recommended during developing of features to build with `Debug` enabled.

!!! tip
    
    `-b missing` only used during your first build.

    Means to install any missing dependency binaries into conan cache before compiling the project.

You can change `build_type` to the following types:

* `Debug`: Turns on some optimizations to reduce binary size and improve performance while still maintaining the structure to make debugging easier. Recommended for testing and prototyping.

* `Release`: Turns on optimizations and favors high-performance optimizations over space-saving optimizations.

* `MinSizeRel`: Turns on optimizations and favor higher space saving optimizations over higher-performance.
