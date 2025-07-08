

# File system\_registry.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**system\_framework**](dir_95144a79d2a75258fa60dac31330b761.md) **>** [**system\_registry.hpp**](system__registry_8hpp.md)

[Go to the documentation of this file](system__registry_8hpp.md)


```C++
#pragma once
#include <map>
#include <core/scene/world.hpp>

namespace atlas {
    class system_registry {
    public:
        system_registry(const std::string& p_tag);

        ~system_registry();

        static ref<world_scope> create_world(const std::string& p_tag);

        static ref<world_scope> get_world(const std::string& p_tag);

    private:
        ref<world_scope> search_world(const std::string& p_tag);

        void append_world(const ref<world_scope>& p_world);

        ref<world_scope> append_world_scope(const ref<world_scope>& p_world);

    private:
        static system_registry* s_instance;
        std::string m_tag = "Undefined";
        std::map<std::string, ref<world_scope>> m_world_registered;
    };
};
```


