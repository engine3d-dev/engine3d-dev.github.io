

# File vk\_types.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_types.hpp**](vk__types_8hpp.md)

[Go to the documentation of this file](vk__types_8hpp.md)


```C++
#pragma once
#include <vulkan/vulkan.h>
#include <span>
#include <glm/glm.hpp>
#include <string>

namespace atlas::vk {
    enum command_buffer_levels : uint8_t {
        primary = 0,
        secondary = 1,
        max_enum = 2
    };

    struct command_buffer_settings {
        command_buffer_settings(uint32_t p_queue_family,
                                const command_buffer_levels& p_levels,
                                const VkCommandPoolCreateFlagBits& p_pool_flags)
          : levels(p_levels)
          , queue_index(p_queue_family)
          , pool_flag(p_pool_flags) {}

        command_buffer_levels levels;
        uint32_t queue_index = -1;
        VkCommandPoolCreateFlagBits pool_flag;
    };

    struct image_extent {
        uint32_t width;
        uint32_t height;
        VkDeviceMemory device_memory;
        uint32_t mip_level = 1;
    };

    struct vk_image_handle {
        VkImage image = nullptr;
        VkImageView image_view = nullptr;
    };

    struct vk_image {
        VkImage image = nullptr;
        VkImageView image_view = nullptr;
        VkSampler sampler = nullptr;
        VkDeviceMemory device_memory = nullptr;
    };

    struct vk_filter_range {
        VkFilter min;
        VkFilter max;
    };

    struct vk_queue_options {
        // uint32_t device_index=0; // device num
        uint32_t family_index = -1;
        uint32_t queue_index = 0;
    };

    enum class format : uint64_t {
        rgb32_sfloat, // Represent R32G32B32_SFLOAT
        rg32_sfloat,  // Represent R32G32_SFLOAT
    };

    enum buffer : uint8_t {
        uniform = 0,
        storage = 1,
        combined_image_sampler = 2,
        sampled_image = 3
    };

    enum shader_stage { undefined = -1, vertex = 0, fragment = 1 };

    enum class input_rate : uint8_t { vertex, instance, max_enum };

    enum class image_layout : uint8_t {
        undefined = 0,     // VK_IMAGE_LAYOUT_UNDEFINED
        general = 1,       // VK_IMAGE_LAYOUT_GENERAL
        color_optimal = 2, // VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL
        depth_stencil_optimal =
          3, // VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL
        depth_stencil_read_only_optimal =
          4, // VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_READ_ONLY_OPTIMAL
    };

    enum class sample_bit : uint8_t {
        count_1,
        count_2,
        count_4,
        count_8,
        count_16,
        count_32,
        count_64,
        max_enum
    };

    enum class attachment_load : uint8_t {
        load = 0,  // LOAD_OP_LOAD
        clear,     // LOAD_OP_CLEAR
        dont_care, // lOAD_OP_DONT_CARE
        none_khr,  // LOAD_OP_NONE_KHR
        none_ext,  // LOAD_OP_NONE_EXT
        max_enum,  // LOAD_OP_MAX_ENUM
    };

    enum class attachment_store : uint8_t {
        store = 0, // STORE_OP_STORE
        dont_care, // STORE_OP_CLEAR
        none_khr,  // STORE_OP_NONE
        none_qcom, // STORE_OP_NONE_EXT
        none_ext,  // STORE_OP_NONE_KHR
        max_enum,  // STORE_OP_MAX_ENUM
    };

    enum class pipeline_bind_point : uint8_t {
        graphics = 0,           // VK_PIPELINE_BIND_POINT_GRAPHICS
        compute = 1,            // VK_PIPELINE_BIND_POINT_COMPUTE
        ray_tracing_khr,        // VK_PIPELINE_BIND_POINT_RAY_TRACING_KHR
        subpass_shading_hauwei, // VK_PIPELINE_BIND_POINT_SUBPASS_SHADING_HUAWEI
        ray_tracing_nv,         // VK_PIPELINE_BIND_POINT_RAY_TRACING_NV
        max_enum                // VK_PIPELINE_BIND_POINT_MAX_ENUM
    };

    // TODO: Find a way to differentiate the different VkAttachmentReference
    // specifications of color and depth attachments that get referenced
    /*

        std::array<renderpass_attachment, 2> renderpass_attachments = {
            renderpass_attachment{ // this sets up the VkAttachmentDescription
       and VkAttachmentReference .layout = image_layout::color_optimal, .format
       = surface_format, .sample_count = sample_bit::count_1, .load =
       attachment_load::load, .store = attachment_store::store, .stencil_load =
       attachment_load::load, .stencil_store = attachment_store::store, .initial
       = image_layout::undefined, .finalize = image_layout::present_src
            },
            renderpass_attachment{
                .layout = image_layout::depth_optimal, // this sets up the
       VkAttachmentDescription and VkAttachmentReference .format = depth_format,
                .sample_count = sample_bit::count_1,
                .load = attachment_load::load,
                .store = attachment_store::store,
                .stencil_load = attachment_load::load,
                .stencil_store = attachment_store::store,
                .initial = image_layout::undefined,
                .finalize = image_layout::present_src
            }
        };

    */

    enum class renderpass_type : uint8_t { color, depth };

    struct renderpass_attachment {
        renderpass_type type;
        image_layout layout;
        format format;
        sample_bit sample_count;
        attachment_load load;
        attachment_store store;
        attachment_load stencil_load;
        attachment_store stencil_store;
        image_layout initial;  // initial starting layout
        image_layout finalize; // final layout
    };

    struct vk_renderpass_options {
        bool cache = false; // set this to true if you want to use the default
                            // constructed configuration
        std::span<VkClearColorValue> clear_values{};
        std::span<VkAttachmentDescription> attachments{};
        std::span<VkSubpassDescription> subpass_descriptions{};
        std::span<VkSubpassDependency> dependencies{};
    };

    struct renderpass_options {
        std::span<VkClearColorValue> clear_values{};
        std::span<renderpass_attachment> color_attachments{};
        std::span<renderpass_attachment> depth_attachments{};
    };

    struct vk_buffer {
        VkBuffer handler = nullptr;
        VkDeviceMemory device_memory = nullptr;
        uint32_t allocation_size = 0; // device allocation size
    };

    struct vk_buffer_info {
        uint32_t device_size = 0;
        VkBufferUsageFlags usage;
        VkMemoryPropertyFlags memory_property_flag;
    };

    struct vertex_attribute_entry {
        uint32_t location;
        format format;
        uint32_t stride;
    };

    struct vertex_attribute {
        uint32_t binding;
        std::span<vertex_attribute_entry> entries;
        uint32_t stride;
        input_rate input_rate;
    };

    struct shader_info {
        std::string source = "";
        shader_stage stage = undefined;
    };

    struct vk_shader_module {
        VkShaderModule module_handler = nullptr;
        shader_stage stage = undefined;
    };

    struct texture_properties {
        uint32_t width;
        uint32_t height;
        VkImageUsageFlagBits usage;
        VkMemoryPropertyFlagBits property;
        VkFormat format;
    };

    struct descriptor_binding_point {
        uint32_t binding;
        shader_stage stage;
    };

    struct descriptor_binding_entry {
        buffer type;
        descriptor_binding_point binding_point;
        uint32_t descriptor_count;
    };

    struct descriptor_set_layout {
        uint32_t allocate_count = 0;
        uint32_t max_sets = 0;
        uint32_t size_bytes = 0;
        std::span<descriptor_binding_entry> entry;
    };

    struct vertex_input {
        glm::vec3 position;
        glm::vec3 color;
        glm::vec3 normals;
        glm::vec2 uv;

        bool operator==(const vertex_input& other) const {
            return position == other.position and color == other.color and
                   uv == other.uv and normals == other.normals;
        }
    };

    struct camera_ubo {
        glm::mat4 projection{ 1.f };
        glm::mat4 view{ 1.f };
    };

    struct global_ubo {
        glm::mat4 mvp = { 1.f };
    };

    struct material_uniform {
        glm::mat4 model{ 1.f };
        glm::vec4 color{ 1.f };
        // std::vector<std::string> texture_paths;
    };

};
```


