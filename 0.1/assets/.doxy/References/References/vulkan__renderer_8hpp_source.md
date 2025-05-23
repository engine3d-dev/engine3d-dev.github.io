

# File vulkan\_renderer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_renderer.hpp**](vulkan__renderer_8hpp.md)

[Go to the documentation of this file](vulkan__renderer_8hpp.md)


```C++
#pragma once
#include <drivers/renderer_backend.hpp>
#include <string>
#include <vulkan/vulkan_core.h>

// #include <drivers/vulkan/buffer_tutorial.hpp>
// #include <drivers/vulkan/descriptor_tutorial.hpp>

namespace atlas::vk {
    class vk_renderer : public render_context {
    public:
        vk_renderer(const std::string& tag);
        ~vk_renderer() override;

        static VkCommandBuffer get_current_command_buffer();
        // static VkCommandBuffer current_command_buffer();
        static VkFramebuffer current_frame_buffer();
        static uint32_t get_current_command_buffer_index();

    private:
        void begin_frame() override;
        void end_frame() override;

    private:
        void initialize_pipeline();

    private:
        VkCommandPool m_command_pool;
        // std::atomic<uint32_t> g_current_frame_index = -1;
        bool m_is_frame_started = false;
        VkPipelineLayout m_pipeline_layout;
        std::vector<ref<scene_object>> m_scene_object_queue;

        std::deque<std::function<void()>> m_main_deletion_queue;
        VkDevice m_driver = nullptr;

        // ref<descriptor_pool> m_global_pool;
        // std::vector<BufferTutorial> m_global_ubo_list;
        // scope<descriptor_set_layout> m_global_set_layout;
        // std::vector<VkDescriptorSet> m_global_descriptor_set;

        camera m_current_camera_component;
    };
};
```


