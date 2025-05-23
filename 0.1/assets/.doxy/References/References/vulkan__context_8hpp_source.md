

# File vulkan\_context.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_context.hpp**](vulkan__context_8hpp.md)

[Go to the documentation of this file](vulkan__context_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan/vulkan_driver.hpp>
#include <vulkan/vulkan.hpp>

namespace atlas::vk {
    class vk_context {
    public:
        static void initialize();
        static VkInstance get_vk_instance() { return s_instance; }

        static vk_physical_driver& get_current_selected_physical_driver() {
            return s_physical_driver;
        }

        static vk_driver& get_current_driver() { return s_driver; }

    private:
        static std::vector<const char*> initialization_validation_layers();

        static std::vector<const char*> initialize_instance_extensions();

    private:
        static VkInstance s_instance;
        static vk_physical_driver s_physical_driver;
        static vk_driver s_driver;
    };
};
```


