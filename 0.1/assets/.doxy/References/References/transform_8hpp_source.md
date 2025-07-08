

# File transform.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**components**](dir_7f5341bb8b9b7f96a10597da121f5884.md) **>** [**transform.hpp**](transform_8hpp.md)

[Go to the documentation of this file](transform_8hpp.md)


```C++
#pragma once

#include <glm/glm.hpp>

namespace atlas {

    // While integrating with the graphics make this transform instead of
    // transform physics

    // This can be put in components.hpp as tranform after merging and fixing
    // renderer to have its own component for color and material.
    struct transform_physics {
        glm::highp_vec3 position{ 0.f };
        glm::highp_vec4 quaterion_rotation{ 0.0f, 0.0f, 0.0f, 1.0f };
        glm::highp_vec3 rotation{ 0.f };
        glm::highp_vec3 scale{ 1.f };
    };
};
```


