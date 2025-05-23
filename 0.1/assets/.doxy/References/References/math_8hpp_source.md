

# File math.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**math**](dir_cd513ce3e965767955df67d416f47de6.md) **>** [**math.hpp**](math_8hpp.md)

[Go to the documentation of this file](math_8hpp.md)


```C++
#include <functional>
#include <glm/detail/qualifier.hpp>
#include <glm/fwd.hpp>

namespace atlas {

    class interpolation {
    public:
        template<typename T>
        static T linear_interpolate(T start,
                                    T end,
                                    const std::function<float(float)>& function,
                                    float t) {
            float l_adjusted_time = 0.0f;
            if (!function) {
                l_adjusted_time = t;
            }
            else {
                const float f = function(t);
                l_adjusted_time = f;
            }
            if (l_adjusted_time < 0) {
                l_adjusted_time = 0.0f;
            }
            if (l_adjusted_time > 1.0f) {
                l_adjusted_time = 1.0f;
            }

            float time_dif = 1.0f - l_adjusted_time;

            return start * time_dif + end * l_adjusted_time;
        }

    private:
        interpolation() = default;
    };
}; // namespace atlas
```


