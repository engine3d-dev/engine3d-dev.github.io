

# File swapchain.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**swapchain.hpp**](swapchain_8hpp.md)

[Go to the documentation of this file](swapchain_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <vulkan/vulkan_core.h>

namespace atlas {
    class swapchain {
    public:
        static bool is_rebuild();
        static void reset_build();
        virtual ~swapchain() = default;
        static ref<swapchain> initialize(VkSurfaceKHR p_surface);

        void on_resize(uint32_t p_width, uint32_t p_height);

        uint32_t get_images_size() const;

        VkFramebuffer get_framebuffer(uint32_t p_index);

        VkImageView get_image_view(uint32_t p_index);

        VkSwapchainKHR get_vk_swapchain();

        VkExtent2D get_extent();

        void submit_command_buffer(VkCommandBuffer* p_command_buffers);

        uint32_t acquire_next_image();

        uint32_t get_current_per_tick();

        VkFormat& get_swapchain_format();

        VkRenderPass get_renderpass();

        bool is_resized();
        void set_resize_status(bool p_is_resized_signaled);

    private:
        virtual void resize_status(bool) = 0;
        virtual bool swapchain_resized() = 0;
        virtual void recreate_swapchain(uint32_t p_width,
                                        uint32_t p_height) = 0;
        virtual VkSwapchainKHR vk_swapchain_handler() = 0;
        virtual VkRenderPass read_swapchain_renderpass() = 0;
        virtual VkFormat& read_swapchain_format() = 0;
        virtual uint32_t images_size() const = 0;
        virtual VkFramebuffer read_framebuffer(uint32_t idx) = 0;
        virtual VkImageView read_image_view(uint32_t index) = 0;
        virtual VkExtent2D read_swapchain_extent() = 0;
        virtual void submit_and_write_command_buffer(
          VkCommandBuffer* p_command_buffers) = 0;
        virtual uint32_t read_acquire_next_frame() = 0;
        virtual uint32_t current_frame_per_tick() = 0;
    };
};
```


