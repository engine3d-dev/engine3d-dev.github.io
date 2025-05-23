

# Class atlas::camera



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**camera**](classatlas_1_1camera.md)



[More...](#detailed-description)

* `#include <components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float | [**AspectRatio**](#variable-aspectratio)   = `0.f`<br> |
|  glm::vec3 | [**Down**](#variable-down)  <br> |
|  glm::vec3 | [**EulerRotation**](#variable-eulerrotation)  <br> |
|  bool | [**IsMainCamera**](#variable-ismaincamera)   = `false`<br> |
|  glm::vec3 | [**Left**](#variable-left)  <br> |
|  float | [**MouseSensitivity**](#variable-mousesensitivity)   = `{}`<br> |
|  float | [**MovementSpeed**](#variable-movementspeed)   = `{}`<br> |
|  glm::vec3 | [**Position**](#variable-position)  <br> |
|  glm::mat4 | [**Projection**](#variable-projection)  <br> |
|  glm::vec3 | [**Right**](#variable-right)  <br> |
|  glm::vec3 | [**Up**](#variable-up)  <br> |
|  glm::mat4 | [**View**](#variable-view)  <br> |
|  glm::vec3 | [**WorldUp**](#variable-worldup)  <br> |
|  float | [**Zoom**](#variable-zoom)   = `{}`<br> |
|  float | [**camera\_mouse\_sensitivity**](#variable-camera_mouse_sensitivity)   = `2.5f`<br> |
|  float | [**camera\_movement\_sensitivity**](#variable-camera_movement_sensitivity)   = `2.5f`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**camera**](#function-camera) (glm::vec3 position=glm::vec3(0.0f, 1.50f, 0.0f), glm::vec3 up=glm::vec3(0.0f, -1.0f, 0.0f), float yaw=-90.0f, float pitch=0.0f) <br> |
|  float | [**camera\_sensitivity**](#function-camera_sensitivity) () const<br> |
|  glm::vec3 | [**get\_front**](#function-get_front) () const<br> |
|  glm::mat4 | [**get\_projection**](#function-get_projection) () const<br> |
|  glm::mat4 | [**get\_view**](#function-get_view) () const<br> |
|  void | [**process\_keyboard**](#function-process_keyboard) (CameraMovement p\_direction, float p\_delta\_time) <br> |
|  void | [**process\_mouse\_movement**](#function-process_mouse_movement) (float p\_x, float p\_y, bool p\_constraint\_pitch=true) <br> |
|  void | [**process\_mouse\_scroll**](#function-process_mouse_scroll) (float yoffset) <br> |
|  void | [**set\_mouse\_speed**](#function-set_mouse_speed) (float p\_sensitivity) <br> |
|  void | [**set\_movement\_speed**](#function-set_movement_speed) (float p\_sensitivity) <br>_TODO: REMOVE THESE_  _these should be user-defined._ |
|  void | [**update\_proj\_view**](#function-update_proj_view) () <br> |




























## Detailed Description


TODO: Camera class needs to strip out the following properties



* Zoom




TODO: Camera should contain



* Position 




    
## Public Attributes Documentation




### variable AspectRatio 

```C++
float atlas::camera::AspectRatio;
```




<hr>



### variable Down 

```C++
glm::vec3 atlas::camera::Down;
```




<hr>



### variable EulerRotation 

```C++
glm::vec3 atlas::camera::EulerRotation;
```




<hr>



### variable IsMainCamera 

```C++
bool atlas::camera::IsMainCamera;
```




<hr>



### variable Left 

```C++
glm::vec3 atlas::camera::Left;
```




<hr>



### variable MouseSensitivity 

```C++
float atlas::camera::MouseSensitivity;
```




<hr>



### variable MovementSpeed 

```C++
float atlas::camera::MovementSpeed;
```




<hr>



### variable Position 

```C++
glm::vec3 atlas::camera::Position;
```




<hr>



### variable Projection 

```C++
glm::mat4 atlas::camera::Projection;
```




<hr>



### variable Right 

```C++
glm::vec3 atlas::camera::Right;
```




<hr>



### variable Up 

```C++
glm::vec3 atlas::camera::Up;
```




<hr>



### variable View 

```C++
glm::mat4 atlas::camera::View;
```




<hr>



### variable WorldUp 

```C++
glm::vec3 atlas::camera::WorldUp;
```




<hr>



### variable Zoom 

```C++
float atlas::camera::Zoom;
```




<hr>



### variable camera\_mouse\_sensitivity 

```C++
float atlas::camera::camera_mouse_sensitivity;
```




<hr>



### variable camera\_movement\_sensitivity 

```C++
float atlas::camera::camera_movement_sensitivity;
```




<hr>
## Public Functions Documentation




### function camera 

```C++
inline atlas::camera::camera (
    glm::vec3 position=glm::vec3(0.0f, 1.50f, 0.0f),
    glm::vec3 up=glm::vec3(0.0f, -1.0f, 0.0f),
    float yaw=-90.0f,
    float pitch=0.0f
) 
```




<hr>



### function camera\_sensitivity 

```C++
inline float atlas::camera::camera_sensitivity () const
```




<hr>



### function get\_front 

```C++
inline glm::vec3 atlas::camera::get_front () const
```




<hr>



### function get\_projection 

```C++
inline glm::mat4 atlas::camera::get_projection () const
```




<hr>



### function get\_view 

```C++
inline glm::mat4 atlas::camera::get_view () const
```




<hr>



### function process\_keyboard 

```C++
inline void atlas::camera::process_keyboard (
    CameraMovement p_direction,
    float p_delta_time
) 
```




<hr>



### function process\_mouse\_movement 

```C++
inline void atlas::camera::process_mouse_movement (
    float p_x,
    float p_y,
    bool p_constraint_pitch=true
) 
```




<hr>



### function process\_mouse\_scroll 

```C++
inline void atlas::camera::process_mouse_scroll (
    float yoffset
) 
```




<hr>



### function set\_mouse\_speed 

```C++
inline void atlas::camera::set_mouse_speed (
    float p_sensitivity
) 
```




<hr>



### function set\_movement\_speed 

_TODO: REMOVE THESE_  _these should be user-defined._
```C++
inline void atlas::camera::set_movement_speed (
    float p_sensitivity
) 
```




<hr>



### function update\_proj\_view 

```C++
inline void atlas::camera::update_proj_view () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/components.hpp`

