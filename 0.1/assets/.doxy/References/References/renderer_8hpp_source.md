

# File renderer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**renderer**](dir_8ab98dc538dea21b0c00575cec6c8f5c.md) **>** [**renderer.hpp**](renderer_8hpp.md)

[Go to the documentation of this file](renderer_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <core/scene/scene.hpp>
#include <vulkan/vulkan.hpp>

namespace atlas {
    class scene_object;
    class renderer {
    public:
        static void initialize();

        static uint32_t get_current_frame();

        static void begin();
        static void end();
    };
};
```


