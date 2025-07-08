

# File vk\_swapchain.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_swapchain.hpp**](vk__swapchain_8hpp.md)

[Go to the documentation of this file](vk__swapchain_8hpp.md)


```C++
#pragma once
#include <core/utilities/types.hpp>
#include <drivers/vulkan-cpp/vk_driver.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_present_queue.hpp>
#include <drivers/vulkan-cpp/vk_renderpass.hpp>

namespace atlas::vk {
    class vk_swapchain {
    public:
        vk_swapchain() = default;

        vk_swapchain(const VkSurfaceKHR& p_surface,
                     const window_settings& p_settings);

        void configure(const window_settings& p_settings);

        // NOTE: Should remove this. Leaving this here is because currently
        // deciding what might be an approach for setting up swapchain void
        // reconfigure(const window_settings& p_settings);

        uint32_t read_acquired_image();

        [[nodiscard]] vk_command_buffer active_command_buffer(
          uint32_t p_frame) const {
            return m_swapchain_command_buffers[p_frame];
        }

        [[nodiscard]] VkFramebuffer active_framebuffer(uint32_t p_frame) const {
            return m_swapchain_framebuffers[p_frame];
        }

        [[nodiscard]] VkRenderPass swapchain_renderpass() const {
            return m_swapchain_main_renderpass;
        }

        [[nodiscard]] window_settings settings() const {
            return m_window_settings;
        }

        [[nodiscard]] uint32_t image_size() const { return m_image_size; }

        [[nodiscard]] surface_properties data() const {
            return m_surface_properties;
        }

        void destroy();

        void submit(const VkCommandBuffer& p_command);

        operator VkSwapchainKHR() const { return m_swapchain_handler; }

        operator VkSwapchainKHR() { return m_swapchain_handler; }

        void present(const uint32_t& p_current_frame);

    private:
        void recreate();
        void on_create();

    private:
        vk_physical_driver m_physical{};
        vk_driver m_driver{};
        VkSurfaceKHR m_current_surface_handler = nullptr;
        VkSwapchainKHR m_swapchain_handler = nullptr;
        VkExtent2D m_swapchain_extent{};
        window_settings m_window_settings{};

        uint32_t m_image_size = 0;

        VkRenderPass m_color_renderpass = nullptr;

        VkSurfaceKHR m_current_surface = nullptr;
        surface_properties m_surface_properties{};
        std::vector<vk_command_buffer> m_swapchain_command_buffers{};
        std::vector<VkFramebuffer> m_swapchain_framebuffers{};

        std::vector<vk_image_handle> m_swapchain_images{};
        std::vector<vk_image> m_swapchain_depth_images{};

        // VkRenderPass m_swapchain_renderpass=nullptr;
        vk_renderpass m_swapchain_main_renderpass{};

        vk_present_queue m_present_to_queue{};
    };

};
```


