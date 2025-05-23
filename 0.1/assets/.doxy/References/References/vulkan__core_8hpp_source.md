

# File vulkan\_core.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_core.hpp**](vulkan__core_8hpp.md)

[Go to the documentation of this file](vulkan__core_8hpp.md)


```C++
#pragma once
#include <span>
#include <type_traits>
#include <vulkan/vulkan.h>
#include <vulkan/vulkan_core.h>

namespace atlas::vk {

    template<typename Type>
    concept ReturnInvoke = std::is_same_v<std::span<VkCommandBuffer>, Type>;

    VkCommandBuffer create_command_buffer_and_record(
      const VkDevice& p_driver,
      const VkCommandPool& p_command_buffer);

    void begin_command_buffer(const VkCommandBuffer& p_command_buffer);

    void end_command_buffer(const VkCommandBuffer& p_command_buffer);

    void submit(VkQueue p_queue_to_use,
                const std::span<VkCommandBuffer>& p_command_buffers);

    VkImage create_image(VkFormat p_format,
                         uint32_t p_width,
                         uint32_t p_height);
    VkImageView create_image_view(VkImage p_image, VkFormat p_format);

    VkCommandBuffer begin_single_time_command_buffer(
      const VkCommandPool& p_command_pool);
    void end_single_time_command_buffer(const VkCommandBuffer& p_command_buffer,
                                        const VkCommandPool& p_command_pool);

    VkCommandPool create_command_pool();

    void pipeline_image_barrier(VkCommandBuffer p_command_buffer,
                                VkImage Image,
                                VkAccessFlags srcAccessmask,
                                VkAccessFlags dstAccessMask,
                                VkImageLayout OldImageLayout,
                                VkImageLayout NewImageLayout,
                                VkPipelineStageFlags srcStageFlags,
                                VkPipelineStageFlags dstStageFlags,
                                VkImageSubresourceRange subresourceRange);
};
```


