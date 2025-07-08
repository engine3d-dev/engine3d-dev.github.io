

# File vk\_context.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan-cpp**](dir_47b67bd74134333dd9ae7c9592fa3f49.md) **>** [**vk\_context.hpp**](vk__context_8hpp.md)

[Go to the documentation of this file](vk__context_8hpp.md)


```C++
#pragma once
#include <drivers/graphics_context.hpp>
#include <vulkan/vulkan.h>
#include <deque>
#include <drivers/vulkan-cpp/vk_driver.hpp>

namespace atlas::vk {
    class vk_context : public graphics_context {
    public:
        vk_context(const std::string& p_tag);

        static void submit_resource_free(std::function<void()>&& p_resource);

        static VkInstance handler();

        static vk_physical_driver physical_driver() {
            return s_instance->m_physical;
        }

        static vk_driver driver_context() { return s_instance->m_driver; }

    private:
        void resource_free(std::function<void()>&& p_resource);

    private:
        void destroy_context() override;

    private:
        static vk_context* s_instance;
        VkInstance m_instance_handler = nullptr;
        vk_physical_driver m_physical{};
        vk_driver m_driver{};
        std::deque<std::function<void()>> m_resources_free{};
    };
};
```


