

# File game\_object.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**scene**](dir_909c0b2c0140e856eaa37e8f470b8792.md) **>** [**game\_object.cpp**](game__object_8cpp.md)

[Go to the documentation of this file](game__object_8cpp.md)


```C++
#include <core/common.hpp>
#include <core/scene/game_object.hpp>
#include <core/scene/components.hpp>
#include <core/scene/exceptions.hpp>

namespace atlas {
    game_object::game_object(flecs::world_t* p_registry, flecs::entity_t p_id)
      : flecs::entity(p_registry, p_id) {
        add<transform>();
    }

    game_object::game_object(const flecs::entity& p_base)
      : flecs::entity(p_base) {
        add<transform>();
    }

    game_object::game_object(flecs::entity& p_base)
      : flecs::entity(p_base) {
        add<transform>();
    }

    void game_object::child_of(const std::optional<game_object>& p_parent) {
        add(flecs::ChildOf, p_parent.value());
    }
};
```


