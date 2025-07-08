

# File vk\_renderer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_renderer.hpp**](vk__renderer_8hpp.md)

[Go to the documentation of this file](vk__renderer_8hpp.md)


```C++
#pragma once
#include <string>
#include <drivers/renderer_context.hpp>
#include <drivers/vulkan-cpp/vk_swapchain.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>
#include <drivers/vulkan-cpp/vk_shader_group.hpp>
#include <drivers/vulkan-cpp/vk_pipeline.hpp>
#include <vector>
#include <drivers/vulkan-cpp/mesh.hpp>
#include <drivers/vulkan-cpp/vk_uniform_buffer.hpp>
#include <vector>
#include <map>
#include <core/scene/components.hpp>

namespace atlas::vk {
    class vk_renderer : public render_context {
    public:
        vk_renderer(const vk_swapchain& p_swapchain, const std::string& p_tag);

        ~vk_renderer() override = default;

    private:
        void start_frame(const vk_command_buffer& p_current,
                         const vk_swapchain& p_swapchain_handler) override;
        void post_frame() override;
        void background_color(const std::array<float, 4>& p_color) override;

    private:
        vk_swapchain m_main_swapchain{};
        vk_command_buffer m_current_command_buffer{};
        VkClearColorValue m_color;

        vk_shader_group m_shader_group;
        vk_pipeline m_main_pipeline{};
        uint32_t m_image_count = 0;

        // descriptors for global uniforms for global camera data
        std::vector<vk_uniform_buffer> m_global_uniforms{};
        descriptor_set m_global_descriptor{};

        // Contain descriptor layouts that gets used by the main VkPipeline
        // (graphics pipeline)
        std::vector<VkDescriptorSetLayout> m_geometry_descriptor_layout;

        // This is for caching any loaded mesh and only modifying this mesh if
        // that entity is there. It is for this vk_renderer to manage
        // std::string = the name of the entity
        // mesh = corresponding to the entity that is being loaded
        std::map<std::string, mesh> m_cached_meshes;

        // std::string = entity name
        // descriptor_set for now will represent the material descriptor set
        // std::map<std::string, descriptor_set> m_geometry_descriptor;

        std::map<std::string, std::map<std::string, descriptor_set>>
          m_mesh_descriptors;
        descriptor_set_layout m_material_descriptor_layout;

        bool m_begin_initialize = true;
        uint32_t m_current_frame = 0;
        camera m_camera;
        glm::mat4 m_model = { 1.f };
    };
};
```


