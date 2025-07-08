

# File sync\_update.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**update\_handlers**](dir_e4a875ec04a9822d1a20b5830cf2827b.md) **>** [**sync\_update.hpp**](sync__update_8hpp.md)

[Go to the documentation of this file](sync__update_8hpp.md)


```C++
#pragma once
#include <core/engine_logger.hpp>
#include <deque>
#include <functional>

namespace atlas {
    namespace sync_update {

        void initialize();

        float delta_time();

        // Called by thread_manager
        // void run_update(float deltaTime);

        inline std::deque<std::function<void()>> s_update;
        inline std::deque<std::function<void()>> s_late_update;
        inline std::deque<std::function<void()>> s_ui_update;
        inline std::deque<std::function<void()>> s_physica_update;

        template<typename UObject, typename UFunction>
        void sync(UObject* p_instance, const UFunction& p_callable) {
            static_assert(std::is_member_pointer_v<UFunction>,
                          "Invalid sync function");

            s_update.push_back(
              [p_instance, p_callable]() { (p_instance->*p_callable)(); });
        }

        template<typename UObject, typename UFunction>
        void sync_physics(UObject* p_instance, const UFunction& p_callable) {
            static_assert(std::is_member_pointer_v<UFunction>,
                          "Invalid sync function");

            s_physica_update.push_back(
              [p_instance, p_callable]() { (p_instance->*p_callable)(); });
        }

        template<typename UObject, typename UCallable>
        inline void post(UObject* p_instance, const UCallable& p_callable) {
            static_assert(std::is_member_pointer_v<UCallable>,
                          "Invalid post function");

            s_late_update.push_back(
              [p_instance, p_callable]() { (p_instance->*p_callable)(); });
        }

        template<typename UObject, typename UCallable>
        void attach(UObject* p_instance, const UCallable& p_callable) {
            // UI returns a boolean because this can be used to indicate whether
            // specific callable functions are activated
            static_assert(std::is_member_pointer_v<UCallable>,
                          "Invalid attach function");

            s_ui_update.push_back(
              [p_instance, p_callable]() { (p_instance->*p_callable)(); });
        }

        void on_update();

        void on_physics_update();

        void on_ui_update();

        void on_late_update();

    };

    template<typename UObject, typename UCallable>
    void sync(UObject* p_instance, const UCallable& p_callable) {
        sync_update::sync(p_instance, p_callable);
    }

    template<typename UObject, typename UCallable>
    void sync_physics(UObject* p_instance, const UCallable& p_callable) {
        sync_update::sync_physics(p_instance, p_callable);
    }

    template<typename UObject, typename UCallable>
    void post(UObject* p_instance, const UCallable& p_callable) {
        sync_update::post(p_instance, p_callable);
    }

    template<typename UObject, typename UCallable>
    void attach(UObject* p_instance, const UCallable& p_callable) {
        sync_update::attach(p_instance, p_callable);
    }

};
```


