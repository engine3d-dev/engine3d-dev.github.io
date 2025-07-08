

# Struct atlas::physics::jolt\_config



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md)



_Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._ 

* `#include <jolt_components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float | [**contact\_bias\_factor**](#variable-contact_bias_factor)   = `0.2f`<br> |
|  bool | [**enable\_collision\_callbacks**](#variable-enable_collision_callbacks)   = `true`<br> |
|  bool | [**enable\_constraints**](#variable-enable_constraints)   = `true`<br> |
|  combine\_friction | [**friction\_type**](#variable-friction_type)   = `combine\_friction::FrictionDefualt`<br> |
|  glm::vec3 | [**gravity**](#variable-gravity)   = `glm::vec3(0.0f, -9.80665f, 0.0f)`<br> |
|  float | [**restitution\_threshold**](#variable-restitution_threshold)   = `1.0f`<br> |
|  combine\_restitution | [**restitution\_type**](#variable-restitution_type)   = `/* multi line expression */`<br> |
|  float | [**time\_before\_sleep**](#variable-time_before_sleep)   = `5.0f`<br>_In seconds._  |
|  float | [**world\_unit\_scale**](#variable-world_unit_scale)   = `1.0f`<br> |












































## Public Attributes Documentation




### variable contact\_bias\_factor 

```C++
float atlas::physics::jolt_config::contact_bias_factor;
```




<hr>



### variable enable\_collision\_callbacks 

```C++
bool atlas::physics::jolt_config::enable_collision_callbacks;
```




<hr>



### variable enable\_constraints 

```C++
bool atlas::physics::jolt_config::enable_constraints;
```




<hr>



### variable friction\_type 

```C++
combine_friction atlas::physics::jolt_config::friction_type;
```




<hr>



### variable gravity 

```C++
glm::vec3 atlas::physics::jolt_config::gravity;
```




<hr>



### variable restitution\_threshold 

```C++
float atlas::physics::jolt_config::restitution_threshold;
```




<hr>



### variable restitution\_type 

```C++
combine_restitution atlas::physics::jolt_config::restitution_type;
```




<hr>



### variable time\_before\_sleep 

_In seconds._ 
```C++
float atlas::physics::jolt_config::time_before_sleep;
```




<hr>



### variable world\_unit\_scale 

```C++
float atlas::physics::jolt_config::world_unit_scale;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_components.hpp`

