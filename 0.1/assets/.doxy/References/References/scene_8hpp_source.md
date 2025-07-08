

# File scene.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**scene**](dir_50632568389acd88e20d4049896804e3.md) **>** [**scene.hpp**](scene_8hpp.md)

[Go to the documentation of this file](scene_8hpp.md)


```C++
#pragma once
#include <core/engine_logger.hpp>
#include <core/scene/scene_object.hpp>
#include <string>

namespace atlas {
    class scene_scope {
    public:
        scene_scope()
          : m_tag("Undefined") {}
        scene_scope(const std::string& p_tag)
          : m_tag(p_tag) {}

        ref<scene_object> create_new_object(const std::string& p_tag) {
            return create_ref<scene_object>(&m_registry, p_tag);
        }

        template<typename... Comps, typename... Args>
        flecs::query_builder<Comps...> query_builder(Args&&... args) const {
            return flecs::query_builder<Comps...>(m_registry,
                                                  std::forward(args)...);
        }

        virtual ~scene_scope() = default;

        std::string get_tag() { return m_tag; }

        operator flecs::world() const { return m_registry; }
        operator flecs::world() { return m_registry; }

    private:
        flecs::world m_registry;
        std::string m_tag = "Undefined Tag";
    };
}; // namespace atlas
```


