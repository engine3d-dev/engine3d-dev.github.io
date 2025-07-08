

# File vk\_shader\_group.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_shader\_group.hpp**](vk__shader__group_8hpp.md)

[Go to the documentation of this file](vk__shader__group_8hpp.md)


```C++
#pragma once
#include <initializer_list>
#include <span>
#include <vector>
#include <vulkan/vulkan.h>
#include <drivers/vulkan-cpp/vk_driver.hpp>
#include <drivers/vulkan-cpp/vk_types.hpp>

namespace atlas::vk {

    class vk_shader_group {
    public:
        vk_shader_group() = default;

        vk_shader_group(const std::initializer_list<shader_info>& p_list);

        // Does not limit users to the data structure type they need to pass in
        // for the shader sources
        vk_shader_group(const std::span<shader_info>& p_shader_sources);

        void set_vertex_attributes(
          const std::initializer_list<VkVertexInputAttributeDescription>&
            p_attributes);

        void set_vertex_bind_attributes(
          const std::initializer_list<VkVertexInputBindingDescription>&
            p_bind_attributes);

        void set_vertex_attributes(
          const std::span<VkVertexInputAttributeDescription>& p_attributes);

        void set_vertex_bind_attributes(
          const std::span<VkVertexInputBindingDescription>& p_bind_attributes);

        void vertex_attributes(
          const std::span<vertex_attribute>& p_vertex_attributes);

        [[nodiscard]] std::span<const vk_shader_module> data() const {
            return m_shader_modules;
        }

        [[nodiscard]] std::span<VkVertexInputAttributeDescription>
        vertex_attributes() {
            return m_vertex_attributes;
        }

        [[nodiscard]] std::span<VkVertexInputBindingDescription>
        vertex_bind_attributes() {
            return m_vertex_binding_attributes;
        }

        [[nodiscard]] uint32_t size() const { return m_shader_modules.size(); }

        void compile();

        void destroy();

    private:
        vk_driver m_driver{};
        std::vector<shader_info> m_shader_sources{};
        std::vector<vk_shader_module> m_shader_modules{};

        std::vector<VkVertexInputAttributeDescription> m_vertex_attributes{};
        std::vector<VkVertexInputBindingDescription>
          m_vertex_binding_attributes{};
    };
};
```


