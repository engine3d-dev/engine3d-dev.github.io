

# File world.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**scene**](dir_50632568389acd88e20d4049896804e3.md) **>** [**world.hpp**](world_8hpp.md)

[Go to the documentation of this file](world_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <flecs.h>
#include <string>
#include <core/scene/scene.hpp>

namespace atlas {

    // enable_shared_from cppreference link:
    // https://en.cppreference.com/w/cpp/memory/enable_shared_from_this
    class world_scope : public std::enable_shared_from_this<world_scope> {
    public:
        world_scope() = default;
        world_scope(const std::string& p_tag);
        ~world_scope();

        [[nodiscard]] std::string get_tag() const { return m_tag; }

        void add_scene(const ref<scene_scope>& p_scene_context);

        // flecs::world* get_registry() { return &m_scene_registry; }
        ref<scene_scope> get_scene(const std::string& p_tag) {
            if (m_scene_container.contains(p_tag)) {
                return m_scene_container[p_tag];
            }

            return nullptr;
        }

        ref<world_scope> get() { return shared_from_this(); }

        operator flecs::world&() { return m_scene_registry; }

    private:
        flecs::world m_scene_registry;
        std::map<std::string, ref<scene_scope>> m_scene_container;
        // ref<scene_scope> m_current_scene;
        ref<world_scope> m_world_shared_instance = nullptr;
        std::string m_tag = "Undefined Tag";
    };
}; // namespace atlas
```


