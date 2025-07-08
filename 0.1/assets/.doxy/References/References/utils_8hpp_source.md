

# File utils.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**utilties**](dir_2f399d7733500af2adc0d3df97496b3f.md) **>** [**utils.hpp**](utils_8hpp.md)

[Go to the documentation of this file](utils_8hpp.md)


```C++
#pragma once
#include <span>
#include <vulkan/vulkan_core.h>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>

namespace atlas::vk {

    void begin_command_buffer(const VkCommandBuffer& p_command_buffer,
                              VkCommandBufferUsageFlags p_usage_flags);

    void end_command_buffer(const VkCommandBuffer& p_command_buffer);

    VkCommandPool create_single_command_pool();

    VkCommandBuffer create_single_command_buffer(
      const VkCommandPool& p_command_pool);

    void copy(vk_command_buffer& p_command_buffer,
              VkImage& p_image,
              VkBuffer& p_buffer,
              uint32_t p_width,
              uint32_t p_height);

    void copy(const vk_buffer& p_src,
              const vk_buffer& p_dst,
              size_t p_size_of_bytes);

    void write(const vk_buffer& p_buffer,
               const void* p_data,
               size_t p_size_in_bytes);

    void write(const vk_buffer& p_buffer,
               const std::span<uint32_t>& p_in_buffer);

    void write(const vk_buffer& p_buffer,
               const std::span<vertex_input>& p_in_buffer);

    void transition_image_layout(VkImage& p_image,
                                 VkFormat p_format,
                                 VkImageLayout p_old,
                                 VkImageLayout p_new);

    void transition_image_layout(VkCommandBuffer& p_command_buffer,
                                 VkImage& p_image,
                                 VkFormat p_format,
                                 VkImageLayout p_old,
                                 VkImageLayout p_new);

    void image_memory_barrier(VkCommandBuffer& p_command_buffer,
                              VkImage& p_image,
                              VkFormat p_format,
                              VkImageLayout p_old,
                              VkImageLayout p_new);
    //

    void queue_submit(const VkQueue& p_queue_handle,
                      const std::span<VkCommandBuffer>& p_commands);
};
```


