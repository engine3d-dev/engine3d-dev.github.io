

# File utilities.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**math**](dir_fc6e8c66c05c843f66c0bec401a38de9.md) **>** [**utilities.cpp**](core_2math_2utilities_8cpp.md)

[Go to the documentation of this file](core_2math_2utilities_8cpp.md)


```C++
#include <core/math/utilities.hpp>
#include <core/common.hpp>
#include <glm/gtx/quaternion.hpp>

namespace atlas {

    glm::quat to_quat(const glm::vec4& p_values) {
        return glm::quat({
          p_values.w,
          p_values.x,
          p_values.y,
          p_values.z,
        });
    }

    glm::highp_vec4 from_quat(const glm::vec3& p_values) {
        // converts glm::vec3 rotation to a quaternion returning the
        // quaternion-converted values to glm::highp_vec4
        auto quaternion = glm::quat(p_values);
        return glm::vec4(
          { quaternion.x, quaternion.y, quaternion.z, quaternion.w });
    }

    glm::quat to_quat(const glm::vec3& p_values) {
        return glm::quat(p_values);
    }

    glm::quat to_quathp(const glm::highp_vec4& p_values) {
        return glm::quat({
          p_values.w,
          p_values.x,
          p_values.y,
          p_values.z,
        });
    }

    namespace math {

        glm::vec3 zeroes() {
            return glm::vec3(0.f);
        }

        glm::vec3 ones() {
            return glm::vec3(1.f);
        }

        glm::quat identity() {
            return glm::quat_identity<float, glm::defaultp>();
        }

        glm::vec3 forward() {
            return glm::vec3(0.f, 0.f, 1.f);
        }

        glm::vec3 right() {
            return glm::vec3(1.f, 0.f, 0.f);
        }

        glm::vec3 left() {
            return glm::vec3(-1.f, 0.f, 0.f);
        }

        glm::vec3 backward() {
            return glm::vec3(0.f, 0.f, -1.f);
        }

        glm::vec3 up() {
            return glm::vec3(0.f, 1.f, 0.f);
        }

        glm::vec3 down() {
            return glm::vec3(0.f, -1.f, 0.f);
        }
    };

};
```


