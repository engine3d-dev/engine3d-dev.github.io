

# File jolt\_components.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_components.hpp**](jolt__components_8hpp.md)

[Go to the documentation of this file](jolt__components_8hpp.md)


```C++
#pragma once

#include <glm/glm.hpp>
#include <cstdint>
#include <thread>
#include <Jolt/Jolt.h>
#include <Jolt/Physics/PhysicsSystem.h>
#include <Jolt/Physics/Collision/ContactListener.h>

namespace atlas::physics {

    enum class collider_shape : uint8_t {
        Box,
        Sphere,
        Capsule,
    };

    enum thread_system : uint8_t {
        Default = 0,
        JobSystem = 1,
    };

    struct collider_body {
        bool collision_enabled = true;

        collider_shape shape_type = collider_shape::Box;

        glm::vec3 half_extents = glm::vec3(0.5f);
        float radius = 0.5f;
        float capsule_half_height = 0.5f;

        // The id of the actuall JPH physics body
        uint32_t body_id = 0;
    };

    enum body_type : uint8_t { Static = 0, Kenmatic = 1, Dynamic = 2, BodyNum };

    enum body_layer : uint8_t { NonMoving = 0, Moving = 1, LayerNum };

    struct physics_body {
        glm::vec3 linear_velocity = glm::vec3(0.0);
        glm::vec3 angular_velocity = glm::vec3(0.0f);

        glm::vec3 cumulative_force = glm::vec3(0.0);
        glm::vec3 cumulative_torque = glm::vec3(0.0);

        float mass_factor = 1.0f;
        glm::vec3 center_mass_position = glm::vec3(0.0);
        float linear_damping = 0.0f;
        float angular_damping = 0.0f;

        bool use_gravity = true;
        float gravity_factor = 1.0f;

        uint8_t body_type = 2;
        float friction = 0.8f;
        float restitution = 0.2f;

        uint8_t body_movement_type = body_type::Static;
        uint8_t body_layer_type = body_layer::Moving;

        uint32_t body_id = 0;
        int count = 0;
    };

    struct collider_event {
        uint64_t id = 0;
    };
}

enum combine_friction : uint8_t {
    FrictionDefualt = 0,
    FrictionMax = 1,
    FrictionMin = 2,
    FrictionNumTypes = 3,
};

enum combine_restitution : uint8_t {
    RestitutionDefualt = 0,
    RestitutionMax = 1,
    RestitutionMin = 2,
    RestitutionNumTypes = 3,
};

namespace atlas::physics {

    struct jolt_config {
        // Global gravity vector for all in scene
        glm::vec3 gravity = glm::vec3(0.0f, -9.80665f, 0.0f);

        // Friction Setting
        // This needs to be set to a function which makes it harder
        combine_friction friction_type = combine_friction::FrictionDefualt;

        // Restitution Settings
        // Same thing need functions for each.
        combine_restitution restitution_type =
          combine_restitution::RestitutionDefualt;

        float time_before_sleep = 5.0f;

        // What 1 unit refers to in meters
        float world_unit_scale = 1.0f;

        // Helps stop the lauching of objects during numerical/flaoting point
        // errors when collision happen bertween to objects.
        float contact_bias_factor = 0.2f;
        float restitution_threshold = 1.0f;

        bool enable_constraints = true;
        bool enable_collision_callbacks = true;
    };

    struct jolt_settings {

        unsigned int allocation_amount = 10 * 1024 * 1024;

        // For job system
        thread_system thread_type = Default;

        uint32_t physics_threads =
          std::max(1u, std::thread::hardware_concurrency() - 2);

        uint32_t max_jobs_power = 10;
        uint32_t max_barriers = physics_threads * 16;
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

        // Time step for fps within the physics
        // If false set to 1/maxFps
        float fixed_time_step = 1.0f / 60.0f;
        bool use_fixed_timestep = false;

        // solver for velocity and position
        uint32_t position_iterations = 1;
        uint32_t velocity_iterations = 8;

        // When to turn objects on and off depending on speed
        float sleep_velocity_threshold = 0.05f;
        float sleep_angular_velocity_threshold = 0.05f;

    };

    // This might be able to be generalized eventually but we will have to
    // create our own manifold before that happens.
    struct contact_event {
        uint64_t entity_a = 0;
        uint64_t entity_b = 0;
        JPH::ContactManifold manifold;
        JPH::ContactSettings settings;
    };

};
```


