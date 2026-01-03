

# File physics\_context.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**physics**](dir_9a62c5ba85569e7099ed16d4b534a85a.md) **>** [**physics\_context.cpp**](physics__context_8cpp.md)

[Go to the documentation of this file](physics__context_8cpp.md)


```C++
#include <type_traits>
#include <Jolt/Jolt.h>
#include <physics/physics_context.hpp>
#include <drivers/jolt-cpp/jolt_context.hpp>
#include <core/event/event_bus.hpp>

namespace atlas::physics {

    ref<physics_context> initialize_physics_context(
      const jolt_settings& p_settings,
      event::event_bus& p_bus) {
        return create_ref<jolt_context>(p_settings, p_bus);
    }

}
```


