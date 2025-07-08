

# File hash.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**hash.hpp**](drivers_2vulkan-cpp_2hash_8hpp.md)

[Go to the documentation of this file](drivers_2vulkan-cpp_2hash_8hpp.md)


```C++
#pragma once
#include <drivers/vulkan-cpp/vk_types.hpp>
#define GLM_ENABLE_EXPERIMENTAL
#include <glm/gtx/hash.hpp>

namespace atlas {
    template<typename T, typename... Rest>
    void hash_combine(size_t& seed, const T& v, const Rest&... rest) {
        seed ^= std::hash<T>()(v) + 0x9e3779b9 + (seed << 6) + (seed << 2);
        (hash_combine(seed, rest), ...);
    }

};

namespace std {

    template<>
    struct hash<atlas::vk::vertex_input> {
        size_t operator()(const atlas::vk::vertex_input& vertex) const {
            size_t seed = 0;
            atlas::hash_combine(
              seed, vertex.position, vertex.color, vertex.normals, vertex.uv);
            return seed;
        }
    };
}
```


