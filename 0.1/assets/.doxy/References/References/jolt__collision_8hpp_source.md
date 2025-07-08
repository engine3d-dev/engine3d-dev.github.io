

# File jolt\_collision.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_collision.hpp**](jolt__collision_8hpp.md)

[Go to the documentation of this file](jolt__collision_8hpp.md)


```C++
#pragma once

#include <core/scene/scene.hpp>
#include <physics/jolt-cpp/jolt_contact_listener.hpp>
#include <physics/jolt-cpp/jolt_components.hpp>
namespace atlas::physics {
    class jolt_collision {

    public:
        jolt_collision();
        jolt_collision(flecs::entity_t p_entity_id);

        void collision_added(contact_event& p_event);

        // void collision_removed();
        // void collison_persisted();

    private:
        virtual void on_collision_added(contact_event& p_event);

        // virtual void on_collision_persisted() = 0;
        // virtual void on_collision_removed() = 0;

    protected:
        uint64_t m_id;
    };
};
```


