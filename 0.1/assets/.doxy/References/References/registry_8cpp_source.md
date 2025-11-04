

# File registry.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**system**](dir_53c06e91a2ea408e8b37a84b8b632614.md) **>** [**registry.cpp**](registry_8cpp.md)

[Go to the documentation of this file](registry_8cpp.md)


```C++
#include <core/engine_logger.hpp>
#include <core/scene/world.hpp>
#include <core/system/registry.hpp>

namespace atlas {
    system_registry* system_registry::s_instance = nullptr;

    system_registry::system_registry(const std::string& p_tag)
      : m_tag(p_tag) {
        s_instance = this;
    }

    system_registry::~system_registry() = default;

    ref<world_scope> system_registry::create_world(const std::string& p_tag) {
        return s_instance->append_world_scope(create_ref<world_scope>(p_tag));
    }

    ref<world_scope> system_registry::get_world(const std::string& p_tag) {
        return s_instance->search_world(p_tag);
    }

    ref<world_scope> system_registry::search_world(const std::string& p_tag) {
        return m_world_registered[p_tag];
    }

    void system_registry::append_world(const ref<world_scope>& p_world) {
        m_world_registered.emplace(p_world->name(), p_world);
    }

    ref<world_scope> system_registry::append_world_scope(
      const ref<world_scope>& p_world) {
        m_world_registered.emplace(p_world->name(), p_world);
        return m_world_registered[p_world->name()];
    }
};
```


