

# File scene\_object.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**scene**](dir_50632568389acd88e20d4049896804e3.md) **>** [**scene\_object.hpp**](scene__object_8hpp.md)

[Go to the documentation of this file](scene__object_8hpp.md)


```C++
#pragma once
#include <core/engine_logger.hpp>
#include <core/scene/components.hpp>
#include <core/scene/entity.hpp>
#include <variant>

namespace atlas {
    class scene_object {
    public:
        scene_object() = default;
        scene_object(flecs::world* p_registry, const std::string& p_tag)
          : m_entity(p_registry, p_tag) {
            m_model = glm::mat4(1.0f);
        }

        scene_object(const flecs::entity& p_entity)
          : m_entity(p_entity) {}

        ~scene_object() {
            console_log_fatal("Scene Object Tag = {} HAS DESTRUCTED!!!",
                              m_entity.get<tag>()->TagMetadata);
            if (m_entity.is_alive()) {
                m_entity.on_destruction();
            }
        }

        template<typename UComponent>
        void add() {
            m_entity.add<UComponent>();
        }

        template<typename UComponent>
        void add(UComponent& p_component_value) {
            m_entity.add<UComponent>(p_component_value);
        }

        template<typename... Args>
        void add_query() {
            using tuple_variadic = std::tuple<Args...>;
            std::variant<tuple_variadic> conditions;
            std::visit(
              [&]([[maybe_unused]] const auto& p_component) {
                  std::apply(
                    [&](auto&... p_placeholder) {
                        (m_entity.add<std::decay_t<decltype(p_placeholder)>>(),
                         ...);
                    },
                    p_component);
              },
              conditions);
        }

        template<typename UComponent>
        [[nodiscard]] const UComponent* get() const {
            return m_entity.get<UComponent>();
        }

        template<typename UComponent>
        [[nodiscard]] UComponent* get_mut() {
            return m_entity.get_mut<UComponent>();
        }

        template<typename UComponent>
        bool has() {
            return m_entity.has<UComponent>();
        }

        template<typename UComponent>
        void set(const UComponent& p_component) {
            m_entity.set<UComponent>(p_component);
        }

        template<typename UComponent, typename UComponent2>
        void set(const UComponent& p_component,
                 const UComponent2& p_component2) {
            m_entity.set<UComponent>(p_component, p_component2);
        }

        template<typename UComponent>
        void remove() {
            return m_entity.remove<UComponent>();
        }

        [[nodiscard]] glm::mat4 get_model() {
            const transform* transform_component = get<transform>();
            m_model = glm::mat4(1.f);

            m_model = glm::translate(m_model, transform_component->Position);
            m_model = glm::scale(m_model, transform_component->Scale);

            auto rotation_mat4 =
              glm::mat4(glm::quat(transform_component->Rotation));
            m_model *= rotation_mat4;

            return m_model;
        }

        operator flecs::entity() const { return m_entity; }

        operator flecs::entity() { return m_entity; }

    private:
        entity_t m_entity;
        glm::mat4 m_model;
        float m_angle = glm::radians(90.0f);
    };
}; // namespace atlas
```


