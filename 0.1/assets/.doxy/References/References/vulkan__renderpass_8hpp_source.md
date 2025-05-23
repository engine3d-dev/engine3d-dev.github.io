

# File vulkan\_renderpass.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_renderpass.hpp**](vulkan__renderpass_8hpp.md)

[Go to the documentation of this file](vulkan__renderpass_8hpp.md)


```C++
#pragma once
#include <drivers/render_pass.hpp>
#include <vulkan/vulkan.hpp>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {
    class VulkanRenderPass : public renderpass {
    public:
        VulkanRenderPass(const renderpass_properties& p_Properties);

    protected:
        void BeginRenderPass() override;
        void EndRenderPass() override;

    private:
        VkRenderPass m_RenderPassHandler;
    };
};
```


