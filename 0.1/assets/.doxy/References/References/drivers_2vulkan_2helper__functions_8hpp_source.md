

# File helper\_functions.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**helper\_functions.hpp**](drivers_2vulkan_2helper__functions_8hpp.md)

[Go to the documentation of this file](drivers_2vulkan_2helper__functions_8hpp.md)


```C++
#pragma once
#include <string>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {
    // const char* vk_to_string(VkResult res);
    void vk_check(VkResult p_result,
                  const char* p_tag,
                  const char* p_filepath,
                  uint32_t p_line,
                  const char* p_function_name);

    void vk_check_format(VkFormat p_format,
                         const char* p_filepath,
                         uint32_t p_line,
                         const char* p_function_name);

    std::string vk_queue_flags_to_string(VkQueueFlagBits p_flags);
};
```


