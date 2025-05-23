

# File vulkan\_swapchain.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**vulkan\_swapchain.hpp**](vulkan__swapchain_8hpp.md)

[Go to the documentation of this file](vulkan__swapchain_8hpp.md)


```C++
#pragma once
#include <drivers/swapchain.hpp>
#include <drivers/vulkan/vulkan_driver.hpp>
#include <vulkan/vulkan.hpp>

namespace atlas::vk {
    class vk_swapchain : public swapchain {
    public:
        ~vk_swapchain() override = default;
        static constexpr uint32_t max_frames_in_flight = 2;

        vk_swapchain() = default;
        vk_swapchain(const vk_physical_driver& p_physical,
                     const vk_driver& p_driver,
                     const VkSurfaceKHR& p_surface);

        static void resize_reset();
        static bool is_resized();

    private:
        void on_create(uint32_t p_width, const uint32_t p_height);

    private:
        void resize_status(bool p_is_resized_signaled) override;

        bool swapchain_resized() override;
        void recreate_swapchain(uint32_t p_width, uint32_t p_height) override;
        VkSwapchainKHR vk_swapchain_handler() override;
        VkRenderPass read_swapchain_renderpass() override;
        VkFormat& read_swapchain_format() override;

        [[nodiscard]] uint32_t images_size() const override;
        VkFramebuffer read_framebuffer(uint32_t idx) override;
        VkImageView read_image_view(uint32_t index) override;
        VkExtent2D read_swapchain_extent() override;
        void submit_and_write_command_buffer(
          VkCommandBuffer* p_command_buffers) override;
        uint32_t read_acquire_next_frame() override;
        uint32_t current_frame_per_tick() override;

    private:
        VkPresentModeKHR select_compatible_present_mode(
          const VkPresentModeKHR& p_request_mode,
          const std::vector<VkPresentModeKHR>& p_modes);
        VkExtent2D select_valid_extent(
          const VkSurfaceCapabilitiesKHR& p_surface_capabilities);

        uint32_t select_memory_type(
          VkPhysicalDeviceMemoryProperties p_memory_properties,
          uint32_t p_type_filter,
          VkMemoryPropertyFlags p_property_flag);

        VkFormat select_depth_format(const VkPhysicalDevice& p_physical);

        VkFormat select_supported_format(VkPhysicalDevice p_physical,
                                         const std::vector<VkFormat>& p_formats,
                                         VkImageTiling p_tiling,
                                         VkFormatFeatureFlags p_feature_flags);

    private:
        uint32_t m_width = -1;
        uint32_t m_height = -1;
        bool m_is_resized_requested = false;
        VkQueue m_presentation_queue = nullptr;
        VkSurfaceKHR m_current_surface = nullptr;

        struct swapchain_image {
            VkImage Image;
            VkImageView ImageView;
        };

        struct swapchain_depth_image {
            VkImage Image;
            VkImageView ImageView;
            VkDeviceMemory DeviceMemory;
        };

        std::vector<swapchain_image> m_swapchain_images;
        std::vector<swapchain_depth_image> m_swapchain_depth_images;
        std::vector<VkFramebuffer> m_swapchain_framebuffers;

        VkSwapchainKHR m_swapchain = nullptr;
        VkSurfaceFormatKHR m_surface_format;
        VkPresentModeKHR m_presentation_mode;
        uint32_t m_presentation_index = -1;
        VkExtent2D m_swapchain_extent;

        // VkCommandBuffer m_CommandBufferForSwapchain;
        std::vector<VkCommandBuffer>
          m_swapchain_command_buffers; // command buffers per swapchain
        VkCommandPool m_swapchain_command_pool;

        VkRenderPass m_swapchain_renderpass;

        std::vector<VkSemaphore>
          m_semaphores_images_available; // semaphores for when images are
                                         // available
        std::vector<VkSemaphore>
          m_semaphores_render_completed; // semaphores when working on the
                                         // current frame has been completed

        std::vector<VkFence>
          m_swapchain_fences; // fences for when frames in flight
        std::vector<VkFence>
          m_swapchain_in_flight_fences; // images fences for when we currently
                                        // have images currently in flight

        vk_physical_driver m_physical;
        vk_driver m_driver;

        size_t m_current_frame_index = 0;

        uint32_t m_current_image_index =
          0; // contains the index of the image we are currently working through
    };
};
```


