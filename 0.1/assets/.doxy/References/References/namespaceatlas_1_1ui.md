

# Namespace atlas::ui



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**ui**](namespaceatlas_1_1ui.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**begin\_popup\_context\_window**](#function-begin_popup_context_window) (const char \* p\_str\_id, ImGuiMouseButton p\_mb, bool p\_over\_items) <br> |
|  void | [**button\_open\_file\_dialog**](#function-button_open_file_dialog) (const std::string & p\_tag, std::string & p\_filepath, const std::string & p\_filter="obj;glftf;fbx") <br> |
|  void | [**dockspace\_window**](#function-dockspace_window) (GLFWwindow \* p\_window) <br> |
|  void | [**draw\_float**](#function-draw_float) (const std::string & p\_tag, float & p\_value, float p\_reset\_value=0.f) <br> |
|  void | [**draw\_vec3**](#function-draw_vec3) (const std::string & p\_tag, glm::vec3 & p\_value, float p\_reset\_value=0.f) <br> |
|  void | [**draw\_vec4**](#function-draw_vec4) (const std::string & p\_tag, glm::vec4 & p\_value, float p\_reset\_value=0.f) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**draw\_panel\_component**](#function-draw_panel_component) (const std::string & p\_tag, const UFunction & p\_callable) <br> |


























## Public Functions Documentation




### function begin\_popup\_context\_window 

```C++
bool atlas::ui::begin_popup_context_window (
    const char * p_str_id,
    ImGuiMouseButton p_mb,
    bool p_over_items
) 
```




<hr>



### function button\_open\_file\_dialog 

```C++
void atlas::ui::button_open_file_dialog (
    const std::string & p_tag,
    std::string & p_filepath,
    const std::string & p_filter="obj;glftf;fbx"
) 
```





**Note:**

Sets up UI button for loading files 





        

<hr>



### function dockspace\_window 

```C++
void atlas::ui::dockspace_window (
    GLFWwindow * p_window
) 
```





**Note:**

Sets up dockspaces 





        

<hr>



### function draw\_float 

```C++
void atlas::ui::draw_float (
    const std::string & p_tag,
    float & p_value,
    float p_reset_value=0.f
) 
```




<hr>



### function draw\_vec3 

```C++
void atlas::ui::draw_vec3 (
    const std::string & p_tag,
    glm::vec3 & p_value,
    float p_reset_value=0.f
) 
```




<hr>



### function draw\_vec4 

```C++
void atlas::ui::draw_vec4 (
    const std::string & p_tag,
    glm::vec4 & p_value,
    float p_reset_value=0.f
) 
```




<hr>
## Public Static Functions Documentation




### function draw\_panel\_component 

```C++
template<typename T, typename UFunction>
static void atlas::ui::draw_panel_component (
    const std::string & p_tag,
    const UFunction & p_callable
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/ui/widgets.hpp`

