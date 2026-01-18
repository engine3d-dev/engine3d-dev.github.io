

# Namespace atlas::event



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**event**](namespaceatlas_1_1event.md)






















## Public Types

| Type | Name |
| ---: | :--- |
| typedef int | [**button\_id**](#typedef-button_id)  <br> |
| typedef int | [**controller\_id**](#typedef-controller_id)  <br> |






## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; uint32\_t, joystick\_info &gt; | [**s\_controllers**](#variable-s_controllers)  <br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  glm::vec2 | [**cursor\_position**](#function-cursor_position) () <br> |
|  float | [**get\_joystic\_axis**](#function-get_joystic_axis) (int p\_controller\_id, int p\_button) <br> |
|  bool | [**is\_joystic\_present**](#function-is_joystic_present) (int p\_controller\_id) <br> |
|  bool | [**is\_joystick\_button\_pressed**](#function-is_joystick_button_pressed) (int p\_button) <br> |
|  bool | [**is\_joystick\_button\_released**](#function-is_joystick_button_released) (int p\_button) <br> |
|  const char \* | [**is\_joystick\_guid**](#function-is_joystick_guid) (int p\_controller\_id) <br> |
|  bool | [**is\_key\_pressed**](#function-is_key_pressed) (int p\_key) <br> |
|  bool | [**is\_key\_released**](#function-is_key_released) (int p\_key) <br> |
|  bool | [**is\_mouse\_pressed**](#function-is_mouse_pressed) (int p\_mouse\_code) <br> |
|  bool | [**is\_mouse\_released**](#function-is_mouse_released) (int p\_mouse\_code) <br> |
|  void | [**update\_events**](#function-update_events) () <br> |
|  void | [**wait\_for\_events**](#function-wait_for_events) () <br> |




























## Public Types Documentation




### typedef button\_id 

```C++
using atlas::event::button_id = typedef int;
```




<hr>



### typedef controller\_id 

```C++
using atlas::event::controller_id = typedef int;
```




<hr>
## Public Static Attributes Documentation




### variable s\_controllers 

```C++
std::map<uint32_t, joystick_info> atlas::event::s_controllers;
```




<hr>
## Public Functions Documentation




### function cursor\_position 

```C++
glm::vec2 atlas::event::cursor_position () 
```




<hr>



### function get\_joystic\_axis 

```C++
float atlas::event::get_joystic_axis (
    int p_controller_id,
    int p_button
) 
```




<hr>



### function is\_joystic\_present 

```C++
bool atlas::event::is_joystic_present (
    int p_controller_id
) 
```




<hr>



### function is\_joystick\_button\_pressed 

```C++
bool atlas::event::is_joystick_button_pressed (
    int p_button
) 
```




<hr>



### function is\_joystick\_button\_released 

```C++
bool atlas::event::is_joystick_button_released (
    int p_button
) 
```




<hr>



### function is\_joystick\_guid 

```C++
const char * atlas::event::is_joystick_guid (
    int p_controller_id
) 
```




<hr>



### function is\_key\_pressed 

```C++
bool atlas::event::is_key_pressed (
    int p_key
) 
```




<hr>



### function is\_key\_released 

```C++
bool atlas::event::is_key_released (
    int p_key
) 
```




<hr>



### function is\_mouse\_pressed 

```C++
bool atlas::event::is_mouse_pressed (
    int p_mouse_code
) 
```




<hr>



### function is\_mouse\_released 

```C++
bool atlas::event::is_mouse_released (
    int p_mouse_code
) 
```




<hr>



### function update\_events 

```C++
void atlas::event::update_events () 
```




<hr>



### function wait\_for\_events 

```C++
void atlas::event::wait_for_events () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/core/event/event.cpp`

