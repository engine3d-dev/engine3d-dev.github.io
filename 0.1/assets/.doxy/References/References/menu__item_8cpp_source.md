

# File menu\_item.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**editor**](dir_8370a929e1c81109a1f99ac5eede01cd.md) **>** [**menu\_item.cpp**](menu__item_8cpp.md)

[Go to the documentation of this file](menu__item_8cpp.md)


```C++
#include <core/editor/menu_item.hpp>
#include <imgui.h>

namespace atlas::ui {

    void menu_item::begin() {
        if (!ImGui::BeginMenuBar()) {
            throw menu_bar_exception("ImGui::BeginMenuBar failed!");
        }
    }

    void menu_item::end() {
        ImGui::EndMenuBar();
    }

    void menu_item::add_child(const std::string& p_name,
                              const std::function<void()>& p_callback) {
        if (ImGui::MenuItem(p_name.c_str())) {
            p_callback();
        }
        ImGui::Separator();
    }
};
```


