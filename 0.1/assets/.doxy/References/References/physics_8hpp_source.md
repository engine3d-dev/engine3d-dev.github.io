

# File physics.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**physics.hpp**](physics_8hpp.md)

[Go to the documentation of this file](physics_8hpp.md)


```C++
#pragma once

#include <physics/physics_3d/physics_engine.hpp>
#include <physics/jolt-cpp/jolt_components.hpp>
#include <core/scene/scene_object.hpp>

namespace atlas::physics {
    enum physics_backend : uint8_t { JoltBackend };

    ref<physics_engine> initialize_engine(
      const ref<scene_object>& p_physics_object,
      flecs::world& p_registery);

    void add_force(const glm::vec3& force, const physics_body& body);

    // void add_force_world_point(glm::vec3 force,
    //   glm::vec3 position,
    //   physics_body body);

    void add_velocity(const glm::vec3& velocity, const physics_body& body);

    void add_angular_velocity(const glm::vec3& angular_velocity,
                              const physics_body& body);

    void set_velocity(const glm::vec3& velocity, const physics_body& body);

    void set_angular_velocity(const glm::vec3& angular_velocity,
                              const physics_body& body);

};
```


