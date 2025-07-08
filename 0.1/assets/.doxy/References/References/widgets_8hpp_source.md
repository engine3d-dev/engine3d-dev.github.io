

# File widgets.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**ui**](dir_ec4014881addefdc5691f44c9e98b9f4.md) **>** [**widgets.hpp**](widgets_8hpp.md)

[Go to the documentation of this file](widgets_8hpp.md)


```C++
#pragma once
#include <imgui.h>
#include <string>
#include <glm/glm.hpp>
#include <GLFW/glfw3.h>
#include <filesystem>
#include <core/filesystem/file_dialog.hpp>
#include <filesystem>

static const std::filesystem::path g_asset_path = "3d_models";

// namespace ImGui {
//     //! @note We need to see if this works
//     //! @note Because imgui implements this but the header file for some
//     reason
//     //! does not contain this implementation...
//     void PushMultiItemsWidths(int components, float w_full);
// };

namespace atlas::ui {

    bool begin_popup_context_window(const char* p_str_id,
                                    ImGuiMouseButton p_mb,
                                    bool p_over_items);

    /* Rendering glm::vec3's as a UI widget */
    void draw_vec3(const std::string& p_tag,
                   glm::vec3& p_value,
                   float p_reset_value = 0.f);

    void draw_vec4(const std::string& p_tag,
                   glm::vec4& p_value,
                   float p_reset_value = 0.f);

    /* Rendering float as a UI widget with default reset values */
    void draw_float(const std::string& p_tag,
                    float& p_value,
                    float p_reset_value = 0.f);

    /*
        draw panel component

        - is used to group widgets into specific panels

        Parameters
        T = is the type the component we want to draw to the UI
        UFunction = callback that defines what data in the component to be
       displayed in this panel that handles the UI layout of that component

        USAGE:

        draw_panel_component<UComponent>("Transform", [](){
            DrawVec3("Position", position_value);
            // etc....
        });
    */
    template<typename T, typename UFunction>
    static void draw_panel_component(const std::string& p_tag,
                                     const UFunction& p_callable) {
        const ImGuiTreeNodeFlags tree_node_flags =
          ImGuiTreeNodeFlags_DefaultOpen | ImGuiTreeNodeFlags_Framed |
          ImGuiTreeNodeFlags_SpanAvailWidth |
          ImGuiTreeNodeFlags_AllowItemOverlap | ImGuiTreeNodeFlags_FramePadding;

        ImVec2 content_region = ImGui::GetContentRegionAvail();
        ImGui::PushStyleVar(ImGuiStyleVar_FramePadding, ImVec2{ 4, 4 });

        float line_height =
          ImGui::GetFontSize() + ImGui::GetStyle().FramePadding.y * 2.0f;
        ImGui::Separator();

        bool opened = ImGui::TreeNodeEx(
          (void*)typeid(T).hash_code(), tree_node_flags, "%s", p_tag.c_str());
        ImGui::PopStyleVar();

        ImGui::SameLine(content_region.x - line_height * 0.05f);

        if (ImGui::Button("+", ImVec2(line_height, line_height))) {
            ImGui::OpenPopup("ComponentSettings");
        }

        // bool isRemovedComponent = false; // @note for deferring when to
        // delete component.
        if (ImGui::BeginPopup("ComponentSettings")) {
            if (ImGui::MenuItem("Remove Component")) {
            }
            //     isRemovedComponent = true;

            ImGui::EndPopup();
        }

        if (opened) {
            p_callable();
            ImGui::TreePop();
        }
    }

    void dockspace_window(GLFWwindow* p_window);

    void button_open_file_dialog(const std::string& p_tag,
                                 std::string& p_filepath,
                                 const std::string& p_filter = "obj;glftf;fbx");
};
```


