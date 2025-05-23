

# File vulkan\_window.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_window.hpp**](vulkan__window_8hpp.md)

[Go to the documentation of this file](vulkan__window_8hpp.md)


```C++
#pragma once
#include <GLFW/glfw3.h>
#include <core/window.hpp>
#include <drivers/swapchain.hpp>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {
    class vk_window : public window {
    public:
        vk_window(uint32_t p_width,
                  uint32_t p_height,
                  const std::string& p_tag);
        ~vk_window() override = default;

    private:
        [[nodiscard]] uint32_t read_width() const override;
        [[nodiscard]] uint32_t read_height() const override;

    private:
        static void on_resize();

    private:
        ref<swapchain> current_swapchain() override { return m_swapchain; }
        [[nodiscard]] GLFWwindow* native_window() const override;

    private:
        GLFWwindow* m_window;
        ref<swapchain> m_swapchain;
        VkSurfaceKHR m_surface;
    };
};
```


