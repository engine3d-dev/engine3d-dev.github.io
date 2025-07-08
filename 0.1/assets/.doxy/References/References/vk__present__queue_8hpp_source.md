

# File vk\_present\_queue.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_present\_queue.hpp**](vk__present__queue_8hpp.md)

[Go to the documentation of this file](vk__present__queue_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_driver.hpp>

namespace atlas::vk {

    class vk_present_queue {
    public:
        vk_present_queue() = default;

        vk_present_queue(const VkSwapchainKHR& p_swapchain,
                         const vk_queue_options& p_queue_options);

        void submit_immediate_async(const VkCommandBuffer& p_command);

        void submit_immediate_sync(const VkCommandBuffer& p_command);

        // These are ??? atm because the idea is we submit commands to the
        // presentation queue's then flush them at once
        // void submit(const VkCommandBuffer& p_command);

        // void execute();

        void present_frame(const uint32_t& p_current_frame);

        void wait_idle();

        uint32_t acquired_frame();

        [[nodiscard]] bool resize_requested() const {
            return m_resize_requested;
        }

        void set_resize_status(bool p_status) { m_resize_requested = p_status; }

        [[nodiscard]] bool is_alive() const {
            return (m_present_queue_handler != nullptr);
        }

        void destroy();

        operator VkQueue() { return m_present_queue_handler; }

        operator VkQueue() const { return m_present_queue_handler; }

    private:
        vk_driver m_driver{};
        VkQueue m_present_queue_handler = nullptr;
        VkSwapchainKHR m_swapchain_handler = nullptr;
        VkSemaphore m_render_completed_semaphore = nullptr;
        VkSemaphore m_present_completed_semaphore = nullptr;
        bool m_resize_requested = false;
    };
};
```


