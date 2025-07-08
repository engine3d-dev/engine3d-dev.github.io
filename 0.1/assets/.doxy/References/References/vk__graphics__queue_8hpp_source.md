

# File vk\_graphics\_queue.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_graphics\_queue.hpp**](vk__graphics__queue_8hpp.md)

[Go to the documentation of this file](vk__graphics__queue_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_driver.hpp>

namespace atlas::vk {
    class vk_graphics_queue {
    public:
        vk_graphics_queue() = default;

        vk_graphics_queue(const vk_queue_options& p_queue_options);

        void immediate_submit_sync(const VkCommandBuffer& p_command_buffer);

        void immediate_submit_async(const VkCommandBuffer& p_command_buffer);

        void wait_idle();

        void destroy();

        operator VkQueue() { return m_graphics_queue_handler; }

        operator VkQueue() const { return m_graphics_queue_handler; }

    private:
        vk_physical_driver m_physical{};
        vk_driver m_driver{};
        VkQueue m_graphics_queue_handler = nullptr;

        VkSemaphore m_render_completed_semaphore = nullptr;
        VkSemaphore m_present_completed_semaphore = nullptr;
    };
};
```


