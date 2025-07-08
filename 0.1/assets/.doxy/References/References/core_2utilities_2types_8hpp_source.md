

# File types.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**utilities**](dir_5ecaaba7e34420a87db9680718b1325e.md) **>** [**types.hpp**](core_2utilities_2types_8hpp.md)

[Go to the documentation of this file](core_2utilities_2types_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <string>

namespace atlas {
    struct window_settings {
        uint32_t width = -1;
        uint32_t height = -1;
        std::string name = "";
        uint32_t frames_in_flight = 2;
    };
};
```


