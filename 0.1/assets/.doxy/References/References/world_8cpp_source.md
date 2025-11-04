

# File world.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**scene**](dir_909c0b2c0140e856eaa37e8f470b8792.md) **>** [**world.cpp**](world_8cpp.md)

[Go to the documentation of this file](world_8cpp.md)


```C++
#include <core/scene/scene.hpp>
#include <core/scene/world.hpp>
#include <core/system/registry.hpp>

namespace atlas {

    world_scope::world_scope(const std::string& p_name)
      : m_name(p_name) {}

    world_scope::~world_scope() {
        console_log_trace("~world_scope called!!!");
    }

    void world_scope::add_scene(const ref<scene_scope>& p_scene_context) {
        m_scene_container.emplace(p_scene_context->name(), p_scene_context);
    }
};
```


