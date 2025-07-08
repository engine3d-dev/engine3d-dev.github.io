

# File jolt\_api.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**jolt**](dir_3d876be8cd66de39c1e103aa97223d9b.md) **>** [**jolt\_api.hpp**](physics__3d_2jolt_2jolt__api_8hpp.md)

[Go to the documentation of this file](physics__3d_2jolt_2jolt__api_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <flecs.h>
#include <physics/physics_3d/physics_api.hpp>
#include <scene/components.hpp>
#include <physics/jolt-cpp/jolt_components.hpp>

namespace atlas::physics {
    class jolt_api : public physics_api {
    public:
        jolt_api(const jolt_config& p_config,
                 const ref<JPH::PhysicsSystem>& p_physics_system,
                 const flecs::world& p_registery);

    private:
        void retrieve_values() override;

        void return_values() override;

        void add_force(const glm::vec3& p_force,
                       const uint32_t& p_body_id) override;

        void add_linear_velocity(const glm::vec3& p_linear_velocity,
                                 const uint32_t& p_body_id) override;
        void add_angular_velocity(const glm::vec3& p_angular_velocity,
                                  const uint32_t& p_body_id) override;

        void set_linear_velocity(const glm::vec3& p_velocity,
                                 const uint32_t& p_body_id) override;

        void set_angular_velocity(const glm::vec3& p_angular_velocity,
                                  const uint32_t& p_body_id) override;

        jolt_config m_config;
        ref<JPH::PhysicsSystem> m_physics_system;
        flecs::world m_registery;

        flecs::query<transform, collider_body> m_read_transform;
        flecs::query<physics_body> m_read_body;

        flecs::query<transform, collider_body> m_query_transform;
        flecs::query<physics_body> m_query_body;
    };
};
```


