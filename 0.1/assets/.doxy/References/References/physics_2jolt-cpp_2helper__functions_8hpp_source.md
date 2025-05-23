

# File helper\_functions.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**helper\_functions.hpp**](physics_2jolt-cpp_2helper__functions_8hpp.md)

[Go to the documentation of this file](physics_2jolt-cpp_2helper__functions_8hpp.md)


```C++
#pragma once
#include <Jolt/Jolt.h>
#include <core/math/types.hpp>
#include <glm/fwd.hpp>

namespace atlas {
    template<>
    struct vector3<JPH::Vec3> {
        vector3() = default;

        vector3(const JPH::Vec3& p_other) {
            value = { p_other.GetX(), p_other.GetY(), p_other.GetZ() };
        }

        operator glm::vec3() { return value; }

        glm::vec3 operator=(const JPH::Vec3& p_other) {
            return { p_other.GetX(), p_other.GetY(), p_other.GetZ() };
        }

        bool operator==(const glm::vec3& p_other) {
            return (value.x == p_other.x and value.y == p_other.y and
                    value.z == p_other.z);
        }

    private:
        glm::vec3 value;
    };
};

namespace atlas::physics {
    /* Converting from glm::vec3 to a jolt's vec3 math data type */
    JPH::RVec3 to_rvec3(const glm::vec3& p_Value);

    JPH::Vec3 to_vec3(const glm::vec3& p_Value);

    /* Converting jolt's vec3 back to a glm::vec3 */
    glm::vec3 to_vec3(const JPH::Vec3& p_Value);

    /* Converting Jolt's quaternion to glm's quaternion */
    glm::quat to_quat(const JPH::Quat& p_Value);

    JPH::Quat to_quat(glm::quat& p_Value);
};
```


