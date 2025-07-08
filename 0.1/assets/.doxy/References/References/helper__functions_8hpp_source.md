

# File helper\_functions.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**helper\_functions.hpp**](helper__functions_8hpp.md)

[Go to the documentation of this file](helper__functions_8hpp.md)


```C++
#pragma once
#include <string>
#include <span>
#include <vulkan/vulkan_core.h>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>
#include <source_location>

namespace atlas::vk {

    void vk_check(
      const VkResult& p_result,
      const std::string& p_name,
      const std::source_location& p_source = std::source_location::current());

    void vk_check_format(VkFormat p_format,
                         const char* p_filepath,
                         uint32_t p_line,
                         const char* p_function_name);

    VkFormat to_vk_format(const format& p_format);

    VkImageView create_image_view(const VkImage& p_image,
                                  VkFormat p_format,
                                  VkImageAspectFlags p_aspect_flags);

    VkImageView create_image_view(const VkDevice& p_driver,
                                  VkImage p_image,
                                  VkSurfaceFormatKHR p_surface_format,
                                  VkImageAspectFlags p_aspect_flags,
                                  VkImageViewType p_view_t,
                                  uint32_t p_layer_count,
                                  uint32_t p_mip_level = 1);

    vk_image create_image2d(uint32_t p_width,
                            uint32_t p_height,
                            VkFormat p_format,
                            VkImageUsageFlags p_usage,
                            VkMemoryPropertyFlagBits p_property);

    VkSampler create_sampler(const vk_filter_range& p_range,
                             VkSamplerAddressMode p_address_mode);

    vk_image_handle create_image2d(const VkDevice& p_driver,
                                   const image_extent& p_extent);

    void free_buffer(const VkDevice& p_driver, vk_buffer& p_buffer);

    void free_image(const VkDevice& p_driver, vk_image& p_image);

    VkShaderStageFlags to_vk_shader_stage(const shader_stage& p_stage);

    VkShaderStageFlagBits to_vk_shader_stage_bits(const shader_stage& p_stage);

    vk_buffer create_uniform_buffer(uint32_t p_size);

    VkDescriptorType to_vk_descriptor_type(const buffer& p_type);

    VkCommandBufferLevel to_vk_command_buffer_level(
      const command_buffer_levels& p_levels);

    VkSemaphore create_semaphore(const VkDevice& p_driver);

    vk_buffer create_buffer(const vk_buffer_info& p_info);

    bool has_stencil_attachment(VkFormat p_format);

    std::string vk_present_mode_to_string(VkPresentModeKHR p_present_mode);

    std::string vk_format_to_string(VkFormat p_format);

    int bytes_per_texture_format(VkFormat p_format);

    VkPresentModeKHR select_compatible_present_mode(
      const VkPresentModeKHR& p_request,
      const std::span<VkPresentModeKHR>& p_modes);

    uint32_t select_images_size(
      const VkSurfaceCapabilitiesKHR& p_surface_capabilities);

    VkPipelineBindPoint to_vk_pipeline_bind_point(
      const pipeline_bind_point& p_bind_point);

    VkAttachmentLoadOp to_vk_attachment_load(attachment_load p_attachment_type);

    VkAttachmentStoreOp to_vk_attachment_store(
      const attachment_store& p_attachment_type);

    VkSampleCountFlagBits to_vk_sample_count_bits(
      const sample_bit& p_sample_count_bit);

    VkImageLayout to_vk_image_layout(const image_layout& p_layout);

    VkVertexInputRate to_vk_input_rate(const input_rate& p_input_rate);
};
```


