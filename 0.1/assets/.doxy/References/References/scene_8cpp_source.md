

# File scene.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**scene**](dir_909c0b2c0140e856eaa37e8f470b8792.md) **>** [**scene.cpp**](scene_8cpp.md)

[Go to the documentation of this file](scene_8cpp.md)


```C++
#include <core/scene/scene.hpp>

namespace atlas {
    scene::scene(const std::string& p_name, event::event_bus& p_bus)
      : m_name(p_name)
      , m_bus(&p_bus) {}

    game_object scene::entity(std::string_view p_name) {
        return game_object(m_registry.entity(p_name.data()));
    }

    game_object scene::entity(uint64_t p_id) {
        return game_object(m_registry.entity(p_id));
    }

    uint32_t scene::children_count(const game_object& p_parent) {
        return query_builder().with(flecs::ChildOf, p_parent).build().count();
    }

};
```


