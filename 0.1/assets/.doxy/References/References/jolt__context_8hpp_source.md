

# File jolt\_context.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**jolt**](dir_3d876be8cd66de39c1e103aa97223d9b.md) **>** [**jolt\_context.hpp**](jolt__context_8hpp.md)

[Go to the documentation of this file](jolt__context_8hpp.md)


```C++
#pragma once

#include <physics/jolt-cpp/jolt_contact_listener.hpp>
#include <core/core.hpp>

#include <physics/physics_3d/physics_context.hpp>
#include <physics/jolt-cpp/jolt_components.hpp>
#include <components/transform.hpp>
#include <physics/physics_3d/jolt/interface/jolt_broad_phase.hpp>

namespace atlas::physics {
    class jolt_context : public physics_context {
    public:
        jolt_context(const jolt_settings& p_settings);
        ~jolt_context() override;

        ref<JPH::PhysicsSystem> m_physics_system;

    private:
        void engine_create_physics_bodies() override;

        void engine_clean_physics_bodies() override;

        void engine_run_physics_step() override;

        void engine_run_contact_added() override;

        void store_shape(uint64_t id, const JPH::RefConst<JPH::Shape>& shape);

        JPH::RefConst<JPH::Shape> create_shape_from_collider(
          flecs::entity e,
          const collider_body& collider);

        void add_body(flecs::entity e,
                      const physics_body* body_opt,
                      const collider_body& collider,
                      const transform_physics& location,
                      std::vector<JPH::BodyCreationSettings>& settings_list,
                      std::vector<flecs::entity>& entity_list);

        jolt_settings m_settings;

        ref<JPH::TempAllocatorImpl> m_temp_allocator;

        scope<JPH::JobSystemThreadPool> m_thread_system;

        ref<broad_phase_layer_interface> m_broad_phase_layer_interface;

        ref<object_vs_broadphase_layer> m_object_vs_broadphase_filter;

        ref<object_layer_pair_filter> m_object_layer_pair_filter;

        ref<contact_listener> m_contact_listener;

        std::unordered_map<uint64_t, JPH::RefConst<JPH::Shape>>
          m_shape_registry;
    };
};
```


