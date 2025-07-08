

# File jolt\_contact\_listener.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_contact\_listener.hpp**](jolt__contact__listener_8hpp.md)

[Go to the documentation of this file](jolt__contact__listener_8hpp.md)


```C++
#pragma once

#include <Jolt/Jolt.h>
#include <Jolt/Physics/Collision/ContactListener.h>
#include <physics/jolt-cpp/jolt_components.hpp>
#include <core/scene/scene.hpp>

namespace atlas::physics {
    class contact_listener : public JPH::ContactListener {
    private:
        JPH::ValidateResult OnContactValidate(
          const JPH::Body& in_body1,
          const JPH::Body& in_body2,
          JPH::RVec3Arg in_base_offset,
          const JPH::CollideShapeResult& in_collision_result) override;

        void OnContactAdded(const JPH::Body& body1,
                            const JPH::Body& body2,
                            const JPH::ContactManifold& manifold,
                            JPH::ContactSettings& settings) override;

        void OnContactPersisted(const JPH::Body& in_body1,
                                const JPH::Body& in_body2,
                                const JPH::ContactManifold& in_manifold,
                                JPH::ContactSettings& io_settings) override;
        void OnContactRemoved(
          const JPH::SubShapeIDPair& in_sub_shape_pair) override;

    public:
        contact_listener();

        void clear_events();

        void run_events_added();

        void run_events_persisted();

        void run_events_removed();

    private:
        std::vector<contact_event> m_contacts_added;

        std::vector<contact_event> m_contacts_persisted;
        std::vector<contact_event> m_contacts_removed;

        ref<scene_scope> m_scene;
        flecs::world m_registry;
    };
};
```


