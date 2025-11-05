

# File jolt\_contact\_listener.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**drivers**](dir_608dc5b7aaba5a488a1cee762bfade26.md) **>** [**jolt-cpp**](dir_91f3b6bbd0150e83e6271f2b896a7a0e.md) **>** [**jolt\_contact\_listener.cpp**](jolt__contact__listener_8cpp.md)

[Go to the documentation of this file](jolt__contact__listener_8cpp.md)


```C++
#include <drivers/jolt-cpp/jolt-imports.hpp>
#include <drivers/jolt-cpp/jolt_contact_listener.hpp>
#include <core/engine_logger.hpp>
#include <drivers/jolt-cpp/jolt_components.hpp>
#include <core/event/types.hpp>

namespace atlas::physics {

    contact_listener::contact_listener(event::event_bus& p_bus)
      : m_bus(&p_bus) {}

    JPH::ValidateResult contact_listener::OnContactValidate(
      const JPH::Body&,
      const JPH::Body&,
      JPH::RVec3Arg,
      const JPH::CollideShapeResult&) {
        return JPH::ValidateResult::AcceptAllContactsForThisBodyPair;
    }

    void contact_listener::OnContactAdded(const JPH::Body& p_body1,
                                          const JPH::Body& p_body2,
                                          const JPH::ContactManifold&,
                                          JPH::ContactSettings&) {
        event::collision_enter begin_event = {
            .entity1 = static_cast<uint64_t>(p_body1.GetUserData()),
            .entity2 = static_cast<uint64_t>(p_body2.GetUserData())
        };

        // Publishes to all subscribers that this collision_enter event has
        // occurred
        m_bus->publish(begin_event);
    }

    void contact_listener::OnContactPersisted(const JPH::Body& p_body1,
                                              const JPH::Body& p_body2,
                                              const JPH::ContactManifold&,
                                              JPH::ContactSettings&) {
        event::collision_persisted persisted_event = {
            .entity1 = static_cast<uint64_t>(p_body1.GetUserData()),
            .entity2 = static_cast<uint64_t>(p_body2.GetUserData())
        };

        m_bus->publish(persisted_event);
    }

    void contact_listener::OnContactRemoved(const JPH::SubShapeIDPair&) {
        console_log_info("Collisions Removed!");
        // For Event system to handle when collision ends
    }

}
```


