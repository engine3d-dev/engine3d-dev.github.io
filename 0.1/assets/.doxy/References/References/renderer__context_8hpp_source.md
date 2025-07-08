

# File renderer\_context.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**renderer\_context.hpp**](renderer__context_8hpp.md)

[Go to the documentation of this file](renderer__context_8hpp.md)


```C++
#pragma once
#include <string>
#include <core/core.hpp>
#include <drivers/vulkan-cpp/vk_swapchain.hpp>
#include <span>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>

namespace atlas {
    class render_context {
    public:
        virtual ~render_context() = default;

        void begin_frame(const vk::vk_command_buffer& p_current,
                         const vk::vk_swapchain& p_swapchain_handler) {
            return start_frame(p_current, p_swapchain_handler);
        }

        void end_frame() { return post_frame(); }

        void set_background_color(const std::array<float, 4>& p_color) {
            return background_color(p_color);
        }

    private:
        virtual void start_frame(
          const vk::vk_command_buffer& p_current,
          const vk::vk_swapchain& p_swapchain_handler) = 0;
        virtual void post_frame() = 0;

        virtual void background_color(const std::array<float, 4>& p_color) = 0;
    };

    scope<render_context> initialize_renderer(
      const vk::vk_swapchain& p_swapchain,
      const std::string& p_tag);
};
```


