

# File thread.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**thread\_utils**](dir_2d188042b35c07e13e36a6d5b630b30a.md) **>** [**thread.hpp**](thread__utils_2thread_8hpp.md)

[Go to the documentation of this file](thread__utils_2thread_8hpp.md)


```C++
#pragma once
#include <core/engine_logger.hpp>
#include <thread>

namespace atlas {
    class thread {
    public:
        thread() = delete;
        thread(const std::string& p_tag = "Undefined")
          : m_tag(p_tag) {}

        ~thread() {
            console_log_info("Are you destructed!");
            if (this->Joinable()) {
                this->Join();
            }
        }

        template<typename T, typename... Args>
        void dispatch(T&& func, Args&&... args) {
            m_thread = std::thread(func, std::forward<Args>(args)...);
        }

        bool Joinable() { return m_thread.joinable(); }

        void Join() { m_thread.join(); }

    private:
        std::string m_tag;
        std::thread m_thread;
    };
};
```


