

# File graphics\_context.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**drivers**](dir_608dc5b7aaba5a488a1cee762bfade26.md) **>** [**graphics\_context.cpp**](graphics__context_8cpp.md)

[Go to the documentation of this file](graphics__context_8cpp.md)


```C++
#include <drivers/graphics_context.hpp>
#include <drivers/vulkan-cpp/vk_context.hpp>
#include <core/application.hpp>

namespace atlas {
    ref<graphics_context> initialize_context(const std::string& p_tag) {
        switch (application::current_api()) {
            case api::vulkan:
                return create_ref<vk::vk_context>(p_tag);
            default:
                return nullptr;
        }
    }
};
```


