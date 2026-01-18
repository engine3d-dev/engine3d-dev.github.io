# 📚 Getting Started

## 💥 Prerequisites

These are needed before working to get TheAtlasEngine building successfully on your platform.

* `python`: 3.18 or above
* `conan`: latest or above
* `llvm`: 20 or above

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
    choco install llvm --version=20.1.4
    ```
    
    Install `conan` (powershell must be **admin**)
    ```powershell
    pip install "conan>=2.18.1"
    ```

    Install CMake

    ```powershell
    choco install cmake.install --version=3.31.6
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

    Installing LLVM

    ```bash
    sudo apt-get install libc++-20-dev libc++abi-20-dev
    ```
    
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

    <details>
        <summary> Installing Vulkan SDK is optional and only required if you plan to contribute to TheAtlasEngine. </summary>
    
    ```bash
    wget -qO- https://packages.lunarg.com/lunarg-signing-key-pub.asc | sudo tee /etc/apt/trusted.gpg.d/lunarg.asc
    sudo wget -qO /etc/apt/sources.list.d/lunarg-vulkan-noble.list http://packages.lunarg.com/vulkan/lunarg-vulkan-noble.list
    sudo apt update
    sudo apt install vulkan-sdk
    ```
    </details>


=== "MacOS X"

    Install Homebrew:
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Install latest version of Python && llvm:
    
    ```
    brew install python pipx llvm@20
    ```
    
    Install conan:
    
    ```zsh
    pipx install "conan>=2.18.1"
    ```
    
    Make `clang-tidy` available on the command line:
    
    ```
    sudo ln -s $(brew --prefix llvm)/bin/clang-tidy /usr/local/bin/
    ```
    
    Install Rosetta (only required for M1 macs):
    
    ```
    /usr/sbin/softwareupdate --install-rosetta --agree-to-license
    ```

    <details>
        <summary> Installing Vulkan SDK is optional and only required if you plan to contribute to TheAtlasEngine. </summary>
    
    !!! note
        There are future plans to use the Metal graphics API on Mac.
    
    ```zsh
    curl -O https://sdk.lunarg.com/sdk/download/1.4.335.1/mac/vulkansdk-macos-1.4.335.1.zip
    unzip https://sdk.lunarg.com/sdk/download/1.4.335.1/mac/vulkansdk-macos-1.4.335.1.zip
    sudo ./vulkansdk-macOS-1.4.335.1.app/Contents/MacOS/vulkansdk-macOS-1.4.335.1 --accept-licenses --default-answer --confirm-command install
    ```
    </details>


---

# 📦 Setting up Conan

First install the Conan configuration

```bash
conan config install https://github.com/engine3d-dev/conan-config.git
```

This will install the `conan atlas` command and files needed to build for your particular platforms and architecture.

Now run the `setup` command:

```
conan atlas setup
```

## ✅ Development Environment Completed!!

Once the development environment is completed. Then go to the [repos](https://github.com/engine3d-dev) to see the list of repositories that you plan to contribute to.

Then follow the instructions to cloning the repository.

## **Changing Build Type**

The build type determines level of optimizations for the project you are building for. TheAtlasEngine by default is `Release` is because performance is one of the most important aspects of the project.

It is highly recommended during developing of features to build with `Debug` enabled.

!!! tip
    
    `-b missing` only used during your first build.

    Will install any missing binaries from your dependencies into conan cache before compiling the actual project.

You can change `build_type` to the following types:

* `Debug`: Turns on some optimizations to reduce binary size and improve performance while still maintaining the structure to make debugging easier. Recommended for testing and prototyping.

* `Release`: Turns on optimizations and favors high-performance optimizations over space-saving optimizations.

* `MinSizeRel`: Turns on optimizations and favor higher space saving optimizations over higher-performance.
