

# File types.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**math**](dir_cd513ce3e965767955df67d416f47de6.md) **>** [**types.hpp**](core_2math_2types_8hpp.md)

[Go to the documentation of this file](core_2math_2types_8hpp.md)


```C++
#pragma once
#include <glm/glm.hpp>
#include <initializer_list>

namespace atlas {

    /*
    Will not be handling it like this, my reasons for changing it is within the
    test cases I made that uses the new approach to doing this template<typename
    T> concept IsVec2 = requires(T vec2){ { vec2.x } ->
    std::convertible_to<float>; { vec2.y } -> std::convertible_to<float>;
    };

    template<typename T>
    concept IsVec3 = requires(T vec3){
        { vec3.x } -> std::convertible_to<float>;
        { vec3.y } -> std::convertible_to<float>;
        { vec3.z } -> std::convertible_to<float>;
    };

    template<typename T>
    concept IsVec4 = requires(T vec4){
        { vec4.x } -> std::convertible_to<float>;
        { vec4.y } -> std::convertible_to<float>;
        { vec4.z } -> std::convertible_to<float>;
        { vec4.w } -> std::convertible_to<float>;
    };
    */

    template<typename T>
    struct vector2;

    template<typename T>
    struct vector3 {
        vector3() = default;

        vector3(const T& p_other)
          : m_value(p_other) {}

        vector3(float x, float y, float z)
          : m_value(x, y, z) {}
        vector3(const std::initializer_list<float>& values)
          : m_value(*values.begin(), *values.begin() + 1, *values.begin() + 2) {
        }

        operator glm::vec3() { return m_value; }

        glm::vec3 operator=(const T& p_other) { return p_other; }

        bool operator==(const glm::vec3& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y and
                    m_value.z == p_other.z);
        }

    private:
        glm::vec3 m_value;
    };

    template<typename T>
    struct vector4 {
        vector4() = default;

        vector4(const T& p_other)
          : m_value(p_other) {}

        vector4(float x, float y, float z, float w)
          : m_value(x, y, z, w) {}

        operator glm::vec4() { return m_value; }

        glm::vec4 operator=(const T& p_other) { return p_other; }

        bool operator==(const glm::vec4& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y and
                    m_value.z == p_other.z and m_value.w == p_other.w);
        }

    private:
        glm::vec4 m_value;
    };

    template<>
    struct vector2<glm::highp_vec2> {
        vector2() = default;

        vector2(const glm::highp_vec2& p_other)
          : m_value(p_other) {}

        operator glm::highp_vec2() { return m_value; }

        glm::highp_vec2 operator=(const glm::highp_vec2& p_other) {
            return p_other;
        }

        bool operator==(const glm::vec4& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y);
        }

    private:
        glm::highp_vec2 m_value;
    };

    template<>
    struct vector3<glm::highp_vec3> {
        vector3() = default;

        vector3(const glm::highp_vec3& p_other)
          : m_value(p_other) {}

        operator glm::highp_vec3() { return m_value; }

        glm::highp_vec3 operator=(const glm::highp_vec3& p_other) {
            return p_other;
        }

        bool operator==(const glm::highp_vec3& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y and
                    m_value.z == p_other.z);
        }

    private:
        glm::highp_vec3 m_value;
    };

    template<>
    struct vector4<glm::highp_vec4> {
        vector4() = default;

        vector4(const glm::highp_vec4& p_other)
          : m_value(p_other) {}

        operator glm::highp_vec4() { return m_value; }

        glm::highp_vec4 operator=(const glm::highp_vec4& p_other) {
            return p_other;
        }

        bool operator==(const glm::highp_vec4& p_other) {
            return (m_value.x == p_other.x and m_value.y == p_other.y and
                    m_value.z == p_other.z and m_value.w == p_other.w);
        }

    private:
        glm::highp_vec4 m_value;
    };

    template<typename T>
    struct math_generic;

    template<typename T>
    struct matrix2;

    template<typename T>
    struct matrix3;

    template<typename T>
    struct matrix4;

    template<size_t Size, typename T>
    using vec = math_generic<glm::vec<Size, T>>;
    using vec2 = vector2<glm::vec2>;
    using vec3 = vector3<glm::vec3>;
    using vec4 = vector4<glm::vec4>;

    using highp_vec2 = vector2<glm::highp_vec2>;
    using highp_vec3 = vector3<glm::highp_vec3>;
    using highp_vec4 = vector4<glm::highp_vec4>;

    template<size_t C, size_t R, typename T>
    using mat = math_generic<glm::mat<C, R, T>>;

    using mat2 = matrix2<glm::mat2>;
    using mat3 = matrix3<glm::mat3>;
    using mat4 = matrix4<glm::mat4>;
}; // namespace atlas
```


