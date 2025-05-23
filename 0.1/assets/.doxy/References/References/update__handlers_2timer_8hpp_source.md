

# File timer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**update\_handlers**](dir_e4a875ec04a9822d1a20b5830cf2827b.md) **>** [**timer.hpp**](update__handlers_2timer_8hpp.md)

[Go to the documentation of this file](update__handlers_2timer_8hpp.md)


```C++
#pragma once
#include <chrono>

namespace atlas {
    class timer {

    public:
        timer();

        void reset();

        float elapsed();

        float seconds();

        std::chrono::time_point<std::chrono::high_resolution_clock>
        current_time();

    private:
        std::chrono::time_point<std::chrono::high_resolution_clock>
          m_stop_watch;
    };
};
```


