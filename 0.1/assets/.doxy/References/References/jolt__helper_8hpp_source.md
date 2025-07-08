

# File jolt\_helper.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**jolt**](dir_3d876be8cd66de39c1e103aa97223d9b.md) **>** [**jolt\_helper.hpp**](jolt__helper_8hpp.md)

[Go to the documentation of this file](jolt__helper_8hpp.md)


```C++
#pragma once
#include <type_traits>
#include <Jolt/Jolt.h>
#include <core/math/types.hpp>
#include <glm/gtc/quaternion.hpp>
#include <glm/fwd.hpp>

namespace atlas {
    template<>
    struct vector3<JPH::Vec3> {
        vector3() = default;

        vector3(const JPH::Vec3& p_other) {
            m_value = { p_other.GetX(), p_other.GetY(), p_other.GetZ() };
        }

        operator glm::vec3() { return m_value; }

        glm::vec3 operator=(const JPH::Vec3& p_other) {
            return { p_other.GetX(), p_other.GetY(), p_other.GetZ() };
        }

        bool operator==(const glm::vec3& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y and
                    m_value.z == p_other.z);
        }

    private:
        glm::vec3 m_value;
    };
};

namespace atlas::physics {

    inline JPH::Vec3 to_jph(const glm::vec3& v) {
        return { v.x, v.y, v.z };
    }

    inline JPH::Quat to_jph(const glm::vec4& q) {
        return { q.x, q.y, q.z, q.w };
    }
};
```


