

# File vk\_uniform\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_uniform\_buffer.hpp**](vk__uniform__buffer_8hpp.md)

[Go to the documentation of this file](vk__uniform__buffer_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_types.hpp>

namespace atlas::vk {

    class vk_uniform_buffer {
    public:
        vk_uniform_buffer() = default;

        vk_uniform_buffer(uint32_t p_size_in_bytes);

        [[nodiscard]] uint32_t size_bytes() const { return m_size_bytes; }

        void update(const void* p_data);

        operator VkBuffer() const { return m_uniform_buffer_data.handler; }

        operator VkBuffer() { return m_uniform_buffer_data.handler; }

        void destroy();

    private:
        VkDevice m_driver = nullptr;
        uint32_t m_size_bytes = 0;
        vk_buffer m_uniform_buffer_data{};
    };
};
```


