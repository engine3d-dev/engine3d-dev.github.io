

# File jolt\_collision\_manager.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_collision\_manager.hpp**](jolt__collision__manager_8hpp.md)

[Go to the documentation of this file](jolt__collision__manager_8hpp.md)


```C++
#pragma once

#include <cstdint>
#include <physics/jolt-cpp/jolt_collision.hpp>
namespace atlas::physics {

    class jolt_collision_manager {
    public:
        jolt_collision_manager() = default;

        static scope<jolt_collision_manager> initialize(
          const std::string& p_tag);

        void run_collision_added(uint64_t p_id, contact_event& p_event);

        // run_collision_persisted(uint64_t id);
        // run_collision_removed(uint64_t id);

        static void subscribe_action(uint64_t p_id,
                                     jolt_collision& p_collision_action);

    private:
        static std::unordered_map<uint64_t, jolt_collision> m_handlers;

        static std::string m_tag;
    };
};
```


