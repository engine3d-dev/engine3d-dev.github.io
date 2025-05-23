

# File shader.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**shader.hpp**](shader_8hpp.md)

[Go to the documentation of this file](shader_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <drivers/vulkan/shaders/vulkan_shader_pipeline_config.hpp>
#include <string>
#include <vulkan/vulkan.h>

namespace atlas {
    class shader {
    public:
        virtual ~shader() = default;
        static ref<shader> create(const std::string& p_vert_shader,
                                  const std::string& p_frag_shader,
                                  const vk::shader_pipeline_config& p_config);

        VkPipeline get_graphics_pipeline();

    private:
        virtual VkPipeline graphics_pipeline() = 0;
    };
};
```


