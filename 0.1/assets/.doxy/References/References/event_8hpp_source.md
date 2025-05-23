

# File event.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**event**](dir_b27da4b5790a8b0d69c02bcd8b78255a.md) **>** [**event.hpp**](event_8hpp.md)

[Go to the documentation of this file](event_8hpp.md)


```C++
#pragma once
#include <core/event/key_codes.hpp>
#include <core/event/mouse_codes.hpp>
#include <glm/glm.hpp>
#include <map>
#include <string>

namespace atlas::event {
    enum input_state { None, Idle, Pressed, Released };

    struct joystick_button {
        int ID = -1;
        std::string Name = "";
        input_state ButtonState = input_state::None;
        input_state PreviousButtonState = input_state::None;
    };

    struct joystick_info {
        int ID = -1;
        std::string JoystickName = "Default";
        std::map<int, joystick_button> Buttons;
        std::map<int, bool> ButtonsDown;
        std::map<int, const float*> AxesOfController;
    };

    bool is_key_pressed(int p_key);

    bool is_key_released(int p_key);

    bool is_mouse_pressed(int p_mouse_code);
    bool is_mouse_released(int p_mouse_code);

    glm::vec2 cursor_position();

    // joystic-specific functions

    bool is_joystic_present(int p_controller_id);

    const char* is_joystick_guid(int p_controller_id);

    float get_joystic_axis(int p_controller_id, int p_button);

    // bool is_button_pressed(int p_button_id, int p_controller_id);

    // bool is_button_released(int p_button_id, int p_controller_id);

    bool is_joystick_button_pressed(int p_button);

    bool is_joystick_button_released(int p_button);

    // specific for listening events
    void update_events();

    void wait_for_events();
}; // namespace atlas::event
```


