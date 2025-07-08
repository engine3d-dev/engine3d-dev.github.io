

# File renderer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**renderer**](dir_8ab98dc538dea21b0c00575cec6c8f5c.md) **>** [**renderer.hpp**](renderer_8hpp.md)

[Go to the documentation of this file](renderer_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <vulkan/vulkan.hpp>
#include <drivers/renderer_context.hpp>
#include <drivers/vulkan-cpp/vk_swapchain.hpp>

namespace atlas {
    class renderer {
    public:
        renderer() = default;
        renderer(const vk::vk_swapchain& p_swapchain,
                 const std::string& p_tag = "Renderer");
        void begin(const vk::vk_command_buffer& p_current,
                   const vk::vk_swapchain& p_current_rp);

        void end();

        void set_background_color(const std::array<float, 4>& p_color);

    private:
        static renderer* s_instance;
        scope<render_context> m_render_context = nullptr;
    };
};
```


