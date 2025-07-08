

# File jolt\_error\_handler.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_error\_handler.hpp**](jolt__error__handler_8hpp.md)

[Go to the documentation of this file](jolt__error__handler_8hpp.md)


```C++
#pragma once
#include <physics/jolt-cpp/jolt-imports.hpp>

namespace atlas::physics {

    void trace_impl(const char* p_in_fmt, ...);

    bool assert_failed_impl(const char* p_in_expression,
                            const char* p_in_message,
                            const char* p_in_file,
                            unsigned int p_in_line);
}
```


