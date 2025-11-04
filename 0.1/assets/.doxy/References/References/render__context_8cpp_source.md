

# File render\_context.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**drivers**](dir_608dc5b7aaba5a488a1cee762bfade26.md) **>** [**render\_context.cpp**](render__context_8cpp.md)

[Go to the documentation of this file](render__context_8cpp.md)


```C++
#include <drivers/renderer_context.hpp>
#include <core/engine_logger.hpp>
#include <core/application.hpp>
#include <drivers/vulkan-cpp/vk_renderer.hpp>

namespace atlas {

    scope<render_context> initialize_renderer(
      const window_settings& p_window_extent,
      uint32_t p_image_size,
      const std::string& p_tag) {
        switch (application::current_api()) {
            case api::vulkan:
                return create_scope<vk::vk_renderer>(
                  p_window_extent, p_image_size, p_tag);
            default:
                return nullptr;
        }
    }
};
```


