

# File thread.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**threads**](dir_3d5429f92b5f302f4e9406c3e899f86b.md) **>** [**thread.hpp**](core_2threads_2thread_8hpp.md)

[Go to the documentation of this file](core_2threads_2thread_8hpp.md)


```C++
#pragma once
#include <string>

namespace atlas {
    class thread {
    public:
        thread(const std::string& p_tag);

        template<typename T>
        void dispatch([[maybe_unused]] const T& p_function) {}
    };
};
```


