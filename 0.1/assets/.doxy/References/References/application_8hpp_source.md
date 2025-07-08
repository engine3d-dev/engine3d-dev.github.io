

# File application.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**application.hpp**](application_8hpp.md)

[Go to the documentation of this file](application_8hpp.md)


```C++
#pragma once
#include <core/api.hpp>
#include <core/window.hpp>
#include <string>
#include <renderer/renderer.hpp>
#include <drivers/vulkan-cpp/vk_imgui.hpp>

namespace atlas {

    struct application_settings {
        std::string Name = "Undefined";
        uint32_t Width = 0;
        uint32_t Height = 0;
    };

    class application {
    public:
        application(const application_settings& p_settings);
        ~application();

        static float delta_time();

        static float physics_step();

        /* executes the application's mainloop */
        void execute();

        void post_destroy();

        /* Returns the current window selected in the application */
        static window& get_window() { return *s_instance->m_window; }

        /* Retrieves the current selected graphics API */
        static api current_api();

        /* Returns the currently selected swapchain */
        VkSwapchainKHR get_current_swapchain();

        /* Destroys the application */
        static void destroy();

        static float aspect_ratio();

        static uint32_t current_frame();

        static uint32_t image_size();

    private:
        void set_current_api(api api);

    private:
        ref<window> m_window;
        scope<renderer> m_renderer = nullptr;
        uint32_t m_current_frame_index = -1;
        vk::imgui_context m_ui_context;
        static application* s_instance;
    };

    ref<application> initialize_application();
};
```


