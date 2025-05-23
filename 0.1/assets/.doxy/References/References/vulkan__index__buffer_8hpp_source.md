

# File vulkan\_index\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_index\_buffer.hpp**](vulkan__index__buffer_8hpp.md)

[Go to the documentation of this file](vulkan__index__buffer_8hpp.md)


```C++
#pragma once
#include <drivers/index_buffer.hpp>

namespace atlas::vk {
    class vk_index_buffer : public index_buffer {
    public:
        vk_index_buffer(const std::vector<uint32_t>& p_indices);
        ~vk_index_buffer() override = default;

    private:
        void bind_to_index_buffer(
          const VkCommandBuffer& p_command_buffer) override;
        void render_index_buffer(
          const VkCommandBuffer& p_command_buffer) override;
        [[nodiscard]] bool contains_indices() const override;

    private:
        VkBuffer m_index_buffer_handler;
        VkDeviceMemory m_index_device_buffer_memory;
        uint32_t m_indices_count;
        bool m_has_indices = false;
    };
};
```


