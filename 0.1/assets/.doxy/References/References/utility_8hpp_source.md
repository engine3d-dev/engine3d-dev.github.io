

# File utility.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**utility.hpp**](utility_8hpp.md)

[Go to the documentation of this file](utility_8hpp.md)


```C++
#pragma once

#include <vulkan/vulkan_core.h>
namespace atlas::vk {

    void BeginCommandBuffer(VkCommandBuffer* p_CommandBuffer);
    void EndCommandBuffer(VkCommandBuffer* p_CommandBuffer);
};
```


