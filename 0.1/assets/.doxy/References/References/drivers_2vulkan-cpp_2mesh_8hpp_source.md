

# File mesh.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**mesh.hpp**](drivers_2vulkan-cpp_2mesh_8hpp.md)

[Go to the documentation of this file](drivers_2vulkan-cpp_2mesh_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan-cpp/vk_vertex_buffer.hpp>
#include <drivers/vulkan-cpp/vk_index_buffer.hpp>

#include <drivers/vulkan-cpp/vk_types.hpp>

#define GLM_ENABLE_EXPERIMENTAL
#include <glm/gtx/hash.hpp>
#include <drivers/vulkan-cpp/vk_texture.hpp>
#include <filesystem>
#include <drivers/vulkan-cpp/vk_uniform_buffer.hpp>

namespace atlas::vk {

    class mesh {
    public:
        mesh() = default;
        mesh(const std::span<vertex_input>& p_vertices,
             const std::span<uint32_t>& p_indices);
        mesh(const std::filesystem::path& p_filename);

        void reload_mesh(const std::filesystem::path& p_path);

        void initialize_uniforms(uint32_t p_size_bytes_ubo);

        void update_uniform(const material_uniform& p_material_ubo);

        [[nodiscard]] vk_uniform_buffer material_ubo() const {
            return m_geoemtry_ubo;
        }

        void draw(const VkCommandBuffer& p_command_buffer);

        void destroy();

        void add_texture(const std::filesystem::path& p_path);

        [[nodiscard]] std::span<texture> read_textures() { return m_textures; }

        [[nodiscard]] bool loaded() const { return m_model_loaded; }

    private:
        void load_obj(const std::filesystem::path& p_filename);
        void load_gltf(const std::filesystem::path& p_filename);

    private:
        std::vector<texture> m_textures;
        vk_vertex_buffer m_vbo{};
        vk_index_buffer m_ibo{};
        vk_uniform_buffer m_geoemtry_ubo;
        bool m_model_loaded = false;
    };
};
```


