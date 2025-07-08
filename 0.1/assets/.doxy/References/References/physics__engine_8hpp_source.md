

# File physics\_engine.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**physics\_engine.hpp**](physics__engine_8hpp.md)

[Go to the documentation of this file](physics__engine_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <physics/jolt-cpp/jolt_components.hpp>
#include <physics/physics_3d/jolt/jolt_context.hpp>
#include <physics/physics_3d/physics_api.hpp>

namespace atlas::physics {

    class physics_engine {
    public:
        // Required by maps but should not be used in anyother circumstance.
        physics_engine() = default;
        physics_engine(const jolt_settings& p_settings,
                       const ref<physics_context>& p_engine,
                       const ref<physics_api>& p_user_api);

        void start_runtime();

        void physics_step();

        void stop_runtime();

        void run_contact_add();

    private:
        jolt_settings m_settings;
        ref<physics_context> m_engine_api;
        ref<physics_api> m_backend_api;
    };
};
```


