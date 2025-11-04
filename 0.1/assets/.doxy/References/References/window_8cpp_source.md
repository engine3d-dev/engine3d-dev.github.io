

# File window.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**window.cpp**](window_8cpp.md)

[Go to the documentation of this file](window_8cpp.md)


```C++
#include <GLFW/glfw3.h>
#include <core/application.hpp>
#include <core/engine_logger.hpp>
#include <core/window.hpp>
#include <drivers/vulkan-cpp/vk_window.hpp>

namespace atlas {
    ref<window> create_window(const window_settings& p_settings) {
        switch (application::current_api()) {
            case api::vulkan:
                return create_ref<vk::vk_window>(p_settings);
            default:
                console_log_error(
                  "API that was input was not specifiying valid backend!");
                return nullptr;
        }

        return nullptr;
    }

    uint32_t window::width() const {
        return settings().width;
    }

    uint32_t window::height() const {
        return settings().height;
    }

    bool window::available() const {
        return !glfwWindowShouldClose(native_window());
    }

    void window::close() {
        glfwSetWindowShouldClose(native_window(), true);
    }

    void window::present(const uint32_t& p_current_frame_idx) {
        return presentation_process(p_current_frame_idx);
    }

    float window::aspect_ratio() const {
        return (float)width() / (float)height();
    }
};
```


