

# File jolt\_settings.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**data**](dir_979e5e81d6b989d5f059c91b3771cf0a.md) **>** [**jolt\_settings.hpp**](jolt__settings_8hpp.md)

[Go to the documentation of this file](jolt__settings_8hpp.md)


```C++

#include <cstdint>
#include <glm/glm.hpp>
#include <thread>
namespace atlas::physics {

    struct jolt_settings {

        // For job system
        uint32_t physics_threads = std::thread::hardware_concurrency();
        bool is_multithreaded = true;

        // Collision detection
        float broadphase_scale = 1.0f;
        bool use_4_layer_broadphase = true;
        uint32_t default_collision_group = 0;

        // Filtering out specifica collisions
        uint32_t collision_filter_layer_count = 32;
        uint32_t default_filter_mask = 0xFFFFFFFF;

        // Scene position in the world
        glm::vec3 physics_scene_position = glm::vec3(0.0f, 0.0f, 0.0f);

        glm::vec3 world_bounds_min = glm::vec3(-500.0f, -500.0f, -500.0f);

        glm::vec3 world_bounds_max = glm::vec3(500.0f, 500.0f, 500.0f);
        // Max memory size per scene
        uint32_t max_bodies = 16384;
        uint32_t max_body_pairs = 32768;
        uint32_t max_contact_constraints = 8192;

    };
};
```


