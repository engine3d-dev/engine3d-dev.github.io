

# File vk\_pipeline.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_pipeline.hpp**](vk__pipeline_8hpp.md)

[Go to the documentation of this file](vk__pipeline_8hpp.md)


```C++
#pragma once
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_shader_group.hpp>
#include <drivers/vulkan-cpp/vk_descriptor_set.hpp>

namespace atlas::vk {

    class vk_pipeline {
    public:
        vk_pipeline() = default;
        vk_pipeline(const VkRenderPass& p_renderpass,
                    vk_shader_group& p_shader_group);
        vk_pipeline(
          const VkRenderPass& p_renderpass,
          const vk_shader_group& p_shader_group,
          const std::span<VkDescriptorSetLayout>& p_descriptor_layout);

        void create(const VkRenderPass& p_renderpass);

        void bind(const VkCommandBuffer& p_current);

        void destroy();

        [[nodiscard]] VkPipelineLayout get_layout() const {
            return m_pipeline_layout;
        }

        [[nodiscard]] VkPipelineLayout layout() const {
            return m_pipeline_layout;
        }

        operator VkPipeline() { return m_pipeline_handler; }

        operator VkPipeline() const { return m_pipeline_handler; }

    private:
        VkDevice m_driver = nullptr;
        VkPipelineLayout m_pipeline_layout = nullptr;
        VkPipeline m_pipeline_handler = nullptr;
        vk_shader_group m_shader_group;
        // VkDescriptorSetLayout m_descriptor_set_layout=nullptr;
        std::span<VkDescriptorSetLayout> m_descriptor_layouts{};
    };
};
```


