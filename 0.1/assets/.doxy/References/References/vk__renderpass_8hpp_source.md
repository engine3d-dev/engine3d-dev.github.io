

# File vk\_renderpass.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_renderpass.hpp**](vk__renderpass_8hpp.md)

[Go to the documentation of this file](vk__renderpass_8hpp.md)


```C++
#pragma once
#include <string>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_driver.hpp>

namespace atlas::vk {

    class vk_renderpass {
    public:
        vk_renderpass() = default;

        vk_renderpass(const vk_renderpass_options& p_renderpass_options);

        // TODO: Add this constructor once renderpass_options is implemented to
        // handle VkAttachmentReference vk_renderpass(const renderpass_options&
        // p_renderpass_configuration);

        // Used when needing to reconstruct the renderpass state
        // Usable when resizing event occurs and renderpass state of the handler
        // needs to match the swapchain during resizing
        void configure(const vk_renderpass_options& p_renderpass_options);

        // TODO: Implement this function to setup renderpass attachments and
        // handle VkAttachmentReference void configure(const renderpass_options&
        // p_renderpass_options);

        void destroy();

        operator VkRenderPass() const { return m_renderpass_handler; }

        operator VkRenderPass() { return m_renderpass_handler; }

    private:
        vk_driver m_driver{};
        vk_renderpass_options m_renderpass_options{};
        VkRenderPass m_renderpass_handler = nullptr;
    };
};
```


