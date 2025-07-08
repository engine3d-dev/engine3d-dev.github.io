

# File entity.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**scene**](dir_50632568389acd88e20d4049896804e3.md) **>** [**entity.hpp**](entity_8hpp.md)

[Go to the documentation of this file](entity_8hpp.md)


```C++
#pragma once
#include <string>
#include <flecs.h>

namespace atlas {
    class entity_t {
    public:
        entity_t() = default;
        entity_t(flecs::world* p_registry, const std::string& p_tag);
        entity_t(const flecs::entity& p_entity)
          : m_entity_id(p_entity) {}

        ~entity_t();

        [[nodiscard]] bool is_alive() const { return m_entity_id.is_alive(); }

        void on_destruction() { m_entity_id.destruct(); }

        template<typename UComponent>
        void add() {
            m_entity_id.add<UComponent>();
        }

        template<typename UComponent>
        const UComponent* get() const {
            return m_entity_id.get<UComponent>();
        }

        template<typename UComponent>
        UComponent* get_mut() const {
            return m_entity_id.get_mut<UComponent>();
        }

        template<typename UComponent>
        [[nodiscard]] bool has() const {
            return m_entity_id.has<UComponent>();
        }


        template<typename UComponent>
        void set(const UComponent& p_component) {
            m_entity_id.set<UComponent>(p_component);
        }

        template<typename UComponent1, typename UComponent2>
        void set(const UComponent1& p_component1,
                 const UComponent2& p_component2) {
            m_entity_id.set<UComponent1, UComponent2>(p_component1)
              .set(p_component2);
        }

        template<typename UComponent>
        void remove() {
            m_entity_id.remove<UComponent>();
        }

        operator flecs::entity() const { return m_entity_id; }

        operator flecs::entity() { return m_entity_id; }

    private:
        // Keep in mind that an entity just represent a 64-bit number
        flecs::entity m_entity_id;
    };
}; // namespace atlas
```


