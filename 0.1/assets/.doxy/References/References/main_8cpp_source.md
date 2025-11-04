

# File main.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**platforms**](dir_8d4914c5e7dfa41cebb35065bb0be3d0.md) **>** [**main.cpp**](main_8cpp.md)

[Go to the documentation of this file](main_8cpp.md)


```C++
#include <core/engine_logger.hpp>
#include <GLFW/glfw3.h>
extern int win_main();

int
main() {
    atlas::console_log_manager::initialize_logger_manager();
    if (!glfwInit()) {
        console_log_warn("GLFW: Failed to initialize");
        return -1;
    }

    return win_main();
}
```


