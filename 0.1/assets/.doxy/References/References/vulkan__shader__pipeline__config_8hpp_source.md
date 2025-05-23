

# File vulkan\_shader\_pipeline\_config.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**shaders**](dir_9b3214b9b707733a210e487fc36953eb.md) **>** [**vulkan\_shader\_pipeline\_config.hpp**](vulkan__shader__pipeline__config_8hpp.md)

[Go to the documentation of this file](vulkan__shader__pipeline__config_8hpp.md)


```C++
#pragma once
#include <vulkan/vulkan.h>

namespace atlas::vk {
    struct shader_pipeline_config {
        VkViewport Viewport;
        VkRect2D Scissor;
        // VkPipelineViewportStateCreateInfo PipelineViewportCreateInfo;
        VkPipelineInputAssemblyStateCreateInfo PipelineInputAsmInfo;
        VkPipelineRasterizationStateCreateInfo PipelineRasterizationCreateInfo;
        VkPipelineMultisampleStateCreateInfo PipelineMultisampleCreateInfo;
        VkPipelineColorBlendAttachmentState PipelineColorBlendAttachments;
        VkPipelineColorBlendStateCreateInfo PipelineColorBlendCreateInfo;
        VkPipelineDepthStencilStateCreateInfo PipelineDepthStencilCreateInfo;
        VkPipelineLayout PipelineLayout;
        VkRenderPass PipelineRenderPass;
        uint32_t SubpassCount;
    };
};
```


