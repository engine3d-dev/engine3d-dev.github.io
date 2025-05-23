

# File physics\_engine.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**physics\_engine.hpp**](physics__engine_8hpp.md)

[Go to the documentation of this file](physics__engine_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <physics/jolt-cpp/jolt-imports.hpp>
#include <Jolt/Physics/Collision/ObjectLayer.h>
#include <Jolt/Physics/Body/BodyManager.h>
#include <Jolt/Physics/Body/BodyActivationListener.h>
#include <Jolt/Physics/Collision/ContactListener.h>

namespace atlas::physics {

    // struct setting{
    //     float gravity = -10.f;
    // };


    // class PhysicSystem{
    // public:
    //     //! @note Constructor will instantiate the physics sysytem
    //     //! @note NOTE: Apply dedicated threads for this physic system
    //     // PhysicSystem(const setting& p_Settings = {});

    //     static JPH::PhysicsSystem& GetInstance();

    //     // static ref<JPH::Body> CreateBody(const JPH::BodyCreationSettings&
    //     settings); static JPH::BodyInterface& CreateBodyInterface();

    //     static void OptimizeBroadPhase();
    //     // void Init();
    // };

    class physics_engine {};
};
```


