

# File vk\_descriptor\_set.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_descriptor\_set.hpp**](vk__descriptor__set_8hpp.md)

[Go to the documentation of this file](vk__descriptor__set_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <string>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <span>
#include <vulkan/vulkan.h>
#include <vector>
#include <drivers/vulkan-cpp/vk_uniform_buffer.hpp>
#include <drivers/vulkan-cpp/vk_vertex_buffer.hpp>
#include <drivers/vulkan-cpp/vk_uniform_buffer.hpp>
#include <drivers/vulkan-cpp/vk_texture.hpp>

namespace atlas::vk {

    // TODO: These structs are for adding some high-level specifications for
    // writing resources via to the descriptors struct write_buffer_descriptor {
    //     std::span<vk_uniform_buffer> data;
    // };

    // struct write_image_descriptor {
    //     std::span<texture> data;
    //     image_layout layout;
    // };

    // struct write_descriptors {
    //     std::span<vk_uniform_buffer> uniforms;
    //     // std::span<texture> images;
    //     write_image_descriptor image;
    //     uint32_t dst_binding;
    //     uint32_t descriptor_count;
    //     buffer descriptor_type;
    // };

    class descriptor_set {
    public:
        descriptor_set() = default;
        descriptor_set(const uint32_t& p_set_slot,
                       const descriptor_set_layout& p_entry);
        ~descriptor_set() = default;

        void bind(const VkCommandBuffer& p_current,
                  uint32_t p_frame_index,
                  const VkPipelineLayout&);

        [[nodiscard]] VkDescriptorSetLayout get_layout() const {
            return m_descriptor_set_layout;
        }

        void update(const std::span<vk_uniform_buffer>& p_uniforms,
                    const std::span<texture>& p_textures);

        void update(const std::span<vk_uniform_buffer>& p_uniforms);

        // void update(const std::span<write_descriptors>& p_descriptors);
        // void update(const vk_uniform_buffer& p_uniforms);

        void destroy();

    private:
        VkDevice m_driver = nullptr;
        uint32_t m_set_slot = 0;
        uint32_t m_allocated_descriptors = 0;
        uint32_t m_size_bytes = 0;
        VkDescriptorPool m_descriptor_pool = nullptr;
        VkDescriptorSetLayout m_descriptor_set_layout = nullptr;
        std::vector<VkDescriptorSet> m_descriptor_sets{};
        texture m_error_texture;
    };
};
```


