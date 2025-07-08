

# File vk\_index\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_index\_buffer.hpp**](vk__index__buffer_8hpp.md)

[Go to the documentation of this file](vk__index__buffer_8hpp.md)


```C++
#pragma once
#include <span>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_types.hpp>

namespace atlas::vk {
    class vk_index_buffer {
    public:
        vk_index_buffer() = default;
        vk_index_buffer(const std::span<uint32_t>& p_indices);

        void bind(const VkCommandBuffer& p_current);

        void draw(const VkCommandBuffer& p_current);

        void destroy();

        [[nodiscard]] size_t size() const { return m_indices_count; }

    private:
        VkDevice m_driver = nullptr;
        uint32_t m_indices_count = 0;
        vk_buffer m_index_buffer_handler{};
    };
};
```


