

# File renderer.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**renderer**](dir_fa8a80cc4ed6793f178a8a05028bb97a.md) **>** [**renderer.cpp**](renderer_8cpp.md)

[Go to the documentation of this file](renderer_8cpp.md)


```C++
#include <renderer/renderer.hpp>
#include <drivers/renderer_context.hpp>

namespace atlas {

    renderer::renderer(const window_settings& p_window_extent,
                       uint32_t p_image_size,
                       const std::string& p_tag) {
        m_render_context =
          initialize_renderer(p_window_extent, p_image_size, p_tag);
    }

    void renderer::begin(const ::vk::command_buffer& p_current,
                         const window_settings& p_settings,
                         const VkRenderPass& p_renderpass,
                         const VkFramebuffer& p_framebuffer,
                         const glm::mat4& p_proj_view) {
        return m_render_context->begin_frame(
          p_current, p_settings, p_renderpass, p_framebuffer, p_proj_view);
    }

    void renderer::end() {
        return m_render_context->end_frame();
    }

    void renderer::set_background_color(const std::array<float, 4>& p_color) {
        m_render_context->set_background_color(p_color);
    }
};
```


