

# File vulkan\_physical\_driver.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_physical\_driver.hpp**](vulkan__physical__driver_8hpp.md)

[Go to the documentation of this file](vulkan__physical__driver_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <vulkan/vulkan.hpp>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {
    class vk_physical_driver {
    public:
        struct queue_family_indices {
            uint32_t Graphics = -1;
            uint32_t Compute = -1;
            uint32_t Transfer = -1;
        };

        vk_physical_driver() = default;
        vk_physical_driver(const VkInstance& p_instance);

        uint32_t get_presentation_index(VkSurfaceKHR p_surface) const;

        uint32_t search_memory_type(uint32_t p_type_filter,
                                    VkMemoryPropertyFlags p_properties);

        queue_family_indices get_queue_indices() const {
            return m_queue_family_indices;
        }

        VkPhysicalDeviceProperties get_properties() const {
            return m_physical_properties;
        }

        operator VkPhysicalDevice() { return m_physical; }

        operator VkPhysicalDevice() const { return m_physical; }

    private:
        queue_family_indices select_queue_family_indices();

    private:
        VkPhysicalDevice m_physical;
        VkPhysicalDeviceProperties m_physical_properties;
        std::vector<VkQueueFamilyProperties> m_queue_family_properties;

        // checking if queue families have queues and they are graphical,
        // compute (optional atm), transfer(optional atm)
        queue_family_indices m_queue_family_indices;
    };
};
```


