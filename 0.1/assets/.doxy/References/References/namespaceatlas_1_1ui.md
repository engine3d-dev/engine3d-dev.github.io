

# Namespace atlas::ui



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**ui**](namespaceatlas_1_1ui.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**begin\_popup\_context\_window**](#function-begin_popup_context_window) (const char \* str\_id, ImGuiMouseButton mb, bool over\_items) <br> |
|  void | [**button\_open\_file\_dialog**](#function-button_open_file_dialog) (const std::string & p\_tag, std::string & p\_filename, const std::string & p\_filter) <br> |
|  void | [**dockspace\_window**](#function-dockspace_window) (GLFWwindow \* p\_window) <br> |
|  void | [**draw\_float**](#function-draw_float) (const std::string & p\_tag, float & p\_value, float reset\_value) <br> |
|  void | [**draw\_input\_text**](#function-draw_input_text) (std::string & p\_value) <br> |
|  void | [**draw\_text**](#function-draw_text) (const std::string & p\_value) <br> |
|  void | [**draw\_vec3**](#function-draw_vec3) (const std::string & p\_tag, glm::vec3 & p\_position, float p\_reset\_value) <br> |
|  void | [**draw\_vec4**](#function-draw_vec4) (const std::string & p\_tag, glm::vec4 & p\_value, float p\_reset\_value) <br> |




























## Public Functions Documentation




### function begin\_popup\_context\_window 

```C++
bool atlas::ui::begin_popup_context_window (
    const char * str_id,
    ImGuiMouseButton mb,
    bool over_items
) 
```




<hr>



### function button\_open\_file\_dialog 

```C++
void atlas::ui::button_open_file_dialog (
    const std::string & p_tag,
    std::string & p_filename,
    const std::string & p_filter
) 
```




<hr>



### function dockspace\_window 

```C++
void atlas::ui::dockspace_window (
    GLFWwindow * p_window
) 
```




<hr>



### function draw\_float 

```C++
void atlas::ui::draw_float (
    const std::string & p_tag,
    float & p_value,
    float reset_value
) 
```




<hr>



### function draw\_input\_text 

```C++
void atlas::ui::draw_input_text (
    std::string & p_value
) 
```




<hr>



### function draw\_text 

```C++
void atlas::ui::draw_text (
    const std::string & p_value
) 
```




<hr>



### function draw\_vec3 

```C++
void atlas::ui::draw_vec3 (
    const std::string & p_tag,
    glm::vec3 & p_position,
    float p_reset_value
) 
```




<hr>



### function draw\_vec4 

```C++
void atlas::ui::draw_vec4 (
    const std::string & p_tag,
    glm::vec4 & p_value,
    float p_reset_value
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/core/ui/widgets.cpp`

