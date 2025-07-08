

# File vk\_texture.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_texture.hpp**](vk__texture_8hpp.md)

[Go to the documentation of this file](vk__texture_8hpp.md)


```C++
#pragma once
#include <filesystem>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_types.hpp>
#include <drivers/vulkan-cpp/vk_command_buffer.hpp>
#include <drivers/vulkan-cpp/vk_graphics_queue.hpp>

namespace atlas::vk {
    struct texture_extent {
        uint32_t width;
        uint32_t height;
        // Considering parameters here for setting mipmap parameters (??)
        // bool mipmap_enabled=false;
        // uint32_t mipmappings=0;
    };
    class texture {
    public:
        texture() = default;
        texture(const texture_extent& p_extent);
        texture(const std::filesystem::path& p_filepath);

        void create(const std::filesystem::path& p_path);

        [[nodiscard]] bool loaded() const { return m_is_image_loaded; }

        [[nodiscard]] vk_image data() const { return m_texture_image; }

        [[nodiscard]] VkImageView image_view() const {
            return m_texture_image.image_view;
        }

        [[nodiscard]] VkImage image() const { return m_texture_image.image; }

        [[nodiscard]] VkSampler sampler() const {
            return m_texture_image.sampler;
        }

        void destroy();

        [[nodiscard]] uint32_t width() const;

        [[nodiscard]] uint32_t height() const;

    private:
        VkDevice m_driver = {};
        bool m_is_image_loaded = false;
        vk_image m_texture_image{};

        uint32_t m_width = 0;
        uint32_t m_height = 0;
    };
};
```


