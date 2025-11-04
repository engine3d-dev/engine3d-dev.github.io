

# File scene\_object.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**scene**](dir_909c0b2c0140e856eaa37e8f470b8792.md) **>** [**scene\_object.cpp**](scene__object_8cpp.md)

[Go to the documentation of this file](scene__object_8cpp.md)


```C++
#include <core/scene/scene_object.hpp>
#include <core/scene/components.hpp>

namespace atlas {
    scene_object::scene_object(flecs::world* p_registry,
                               const std::string& p_name) {
        m_entity = p_registry->entity(p_name.c_str());
        add<transform>();
    }

    scene_object::scene_object(flecs::world* p_registry,
                               const std::string& p_name,
                               [[maybe_unused]] bool p_lookup) {
        m_entity = p_registry->lookup(p_name.c_str());
    }

    scene_object::scene_object(strong_ref<flecs::world>& p_registry,
                               const std::string& p_name) {
        m_entity = p_registry->entity(p_name.c_str());
        add<transform>();
    }

    scene_object::~scene_object() {
        if (m_entity.is_alive()) {
            m_entity.destruct();
        }
    }
};
```


