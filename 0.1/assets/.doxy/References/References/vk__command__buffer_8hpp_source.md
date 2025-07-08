

# File vk\_command\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_command\_buffer.hpp**](vk__command__buffer_8hpp.md)

[Go to the documentation of this file](vk__command__buffer_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_types.hpp>

namespace atlas::vk {

    class vk_command_buffer {
    public:
        vk_command_buffer() = default;

        vk_command_buffer(const command_buffer_settings& p_settings);

        void begin(const VkCommandBufferUsageFlags& p_usage_flags);

        void end();

        [[nodiscard]] bool is_valid() const {
            return (m_command_buffer_handler != nullptr);
        }

        void destroy();

        operator VkCommandBuffer() const {
            if (m_begin_end_count != 2) {
            }
            return m_command_buffer_handler;
        }
        operator VkCommandBuffer() { return m_command_buffer_handler; }

    private:
        VkDevice m_driver = nullptr;
        VkCommandBuffer m_command_buffer_handler = nullptr;
        VkCommandPool m_command_pool = nullptr;
        uint32_t m_begin_end_count = 0;
    };
};
```


