

# File hash.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**utilities**](dir_5ecaaba7e34420a87db9680718b1325e.md) **>** [**hash.hpp**](hash_8hpp.md)

[Go to the documentation of this file](hash_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <unordered_map>

namespace atlas {
    template<typename T, typename... Rest>
    void hash_combine(size_t& seed, const T& v, const Rest&... rest) {
        seed ^= std::hash<T>()(v) + 0x9e3779b9 + (seed << 6) + (seed << 2);
        (hash_combine(seed, rest), ...);
    }

};
```


