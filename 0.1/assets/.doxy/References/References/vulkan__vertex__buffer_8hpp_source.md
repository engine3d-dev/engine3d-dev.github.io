

# File vulkan\_vertex\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_vertex\_buffer.hpp**](vulkan__vertex__buffer_8hpp.md)

[Go to the documentation of this file](vulkan__vertex__buffer_8hpp.md)


```C++
#pragma once
#include <drivers/vertex_buffer.hpp>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {
    class vk_vertex_buffer : public vertex_buffer {
    public:
        vk_vertex_buffer(const std::vector<vertex>& p_vertices);
        virtual ~vk_vertex_buffer() {}

    protected:
        void bind_vertex_buffer(
          const VkCommandBuffer& p_command_buffer) override;

        void render_vertex_buffer(
          const VkCommandBuffer& p_command_buffer) override;

    private:
        VkBuffer m_vertex_buffer_handler;
        VkDeviceMemory m_vertex_buffer_device_memory;
        uint32_t m_count; // count of vertices
    };
};
```


