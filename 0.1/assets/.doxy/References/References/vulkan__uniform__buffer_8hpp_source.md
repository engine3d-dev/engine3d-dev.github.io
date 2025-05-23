

# File vulkan\_uniform\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_uniform\_buffer.hpp**](vulkan__uniform__buffer_8hpp.md)

[Go to the documentation of this file](vulkan__uniform__buffer_8hpp.md)


```C++
#pragma once
#include <vulkan/vulkan_core.h>

namespace atlas::vk {

    class VulkanUniformBuffer {
    public:
        VulkanUniformBuffer() = default;
        VulkanUniformBuffer(uint32_t p_size, uint32_t p_count);

        void AllocateUniforms();
        void MapWrite(uint32_t p_size, uint32_t p_offset, const void* p_src);

    private:
        VkBuffer m_BufferObject;
        VkDeviceMemory m_BufferMemory;
    };
};
```


