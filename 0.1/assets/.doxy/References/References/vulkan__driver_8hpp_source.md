

# File vulkan\_driver.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_driver.hpp**](vulkan__driver_8hpp.md)

[Go to the documentation of this file](vulkan__driver_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan/vulkan_physical_driver.hpp>
#include <vulkan/vulkan.hpp>

namespace atlas::vk {
    class vk_driver {
    public:
        vk_driver() = default;
        vk_driver(const vk_physical_driver& p_physical);

        VkQueue get_graphics_queue() const { return m_graphics_queue; }

        operator VkDevice() { return m_driver; }

        uint32_t select_memory_type(uint32_t p_type_filter,
                                    VkMemoryPropertyFlags p_property_flag);

    private:
        VkDevice m_driver;
        VkQueue m_graphics_queue;
    };
};
```


