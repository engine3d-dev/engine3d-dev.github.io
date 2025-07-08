

# File physics\_api.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**physics\_api.hpp**](physics__api_8hpp.md)

[Go to the documentation of this file](physics__api_8hpp.md)


```C++
#pragma once
#include <physics/jolt-cpp/jolt_components.hpp>

namespace atlas::physics {

    class physics_api {
    public:
        void update_jolt_values();

        void update_atlas_values();

        void add_force_by_body(const glm::vec3& p_force,
                               const physics_body& p_body);

        // void add_force_by_world_point();

        void add_linear_velocity_by_body(const glm::vec3& p_velocity,
                                         const physics_body& p_body);

        void add_angular_velocity_by_body(const glm::vec3& p_angular_velocity,
                                          const physics_body& p_body);

        void set_linear_velocity_by_body(const glm::vec3& p_velocity,
                                         const physics_body& p_body);

        void set_angular_velocity_by_body(const glm::vec3& p_angular_velocity,
                                          const physics_body& p_body);

        virtual ~physics_api() = default;

    private:
        virtual void retrieve_values() = 0;

        virtual void return_values() = 0;

        virtual void add_force(const glm::vec3& p_force,
                               const uint32_t& p_body_id) = 0;

        // virtual void add_force_world_point(const glm::vec3& force,
        //                                    const glm::vec3& position,
        //                                    const uint32_t& body_id) = 0;

        virtual void add_linear_velocity(const glm::vec3& p_velocity,
                                         const uint32_t& p_body_id) = 0;

        virtual void add_angular_velocity(const glm::vec3& angular_velocity,
                                          const uint32_t& body_id) = 0;

        virtual void set_linear_velocity(const glm::vec3& p_velocity,
                                         const uint32_t& p_body_id) = 0;

        virtual void set_angular_velocity(const glm::vec3& angular_velocity,
                                          const uint32_t& body_id) = 0;
    };
};
```


