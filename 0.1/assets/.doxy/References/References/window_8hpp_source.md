

# File window.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**window.hpp**](window_8hpp.md)

[Go to the documentation of this file](window_8hpp.md)


```C++
#pragma once
#include <GLFW/glfw3.h>
#include <core/core.hpp>
#include <vulkan/vulkan.h>
#include <core/utilities/types.hpp>
#include <drivers/vulkan-cpp/vk_swapchain.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>

namespace atlas {

    class window {
    public:
        virtual ~window() = default;

        [[nodiscard]] uint32_t width() const;

        [[nodiscard]] uint32_t height() const;

        [[nodiscard]] bool available() const;

        [[nodiscard]] float aspect_ratio() const;

        [[nodiscard]] uint32_t acquired_next_frame() {
            return read_acquired_next_frame();
        }

        [[nodiscard]] vk::vk_swapchain current_swapchain() const {
            return window_swapchain();
        }

        vk::vk_command_buffer active_command_buffer(uint32_t p_frame_idx) {
            return current_active_command_buffer(p_frame_idx);
        }

        operator GLFWwindow*() const { return native_window(); }

        operator GLFWwindow*() { return native_window(); }

        void close();

        void present(const uint32_t& p_current_frame_idx);

    private:
        [[nodiscard]] virtual window_settings settings() const = 0;
        [[nodiscard]] virtual GLFWwindow* native_window() const = 0;
        [[nodiscard]] virtual uint32_t read_acquired_next_frame() = 0;
        [[nodiscard]] virtual vk::vk_swapchain window_swapchain() const = 0;
        [[nodiscard]] virtual vk::vk_command_buffer
        current_active_command_buffer(const uint32_t& p_frame_idx) = 0;
        virtual void presentation_process(const uint32_t& p_current_frame) = 0;
    };

    ref<window> create_window(const window_settings& p_settings);
};
```


