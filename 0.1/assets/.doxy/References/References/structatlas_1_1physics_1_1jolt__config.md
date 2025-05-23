

# Struct atlas::physics::jolt\_config



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md)



_Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._ 

* `#include <jolt_config.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float | [**contact\_bias\_factor**](#variable-contact_bias_factor)   = `0.2f`<br> |
|  bool | [**enable\_collision\_callbacks**](#variable-enable_collision_callbacks)   = `true`<br> |
|  bool | [**enable\_constraints**](#variable-enable_constraints)   = `true`<br> |
|  bool | [**enable\_contacts**](#variable-enable_contacts)   = `true`<br> |
|  float | [**fixed\_time\_step**](#variable-fixed_time_step)   = `1.0f / 60.0f`<br> |
|  glm::vec3 | [**gravity**](#variable-gravity)   = `glm::vec3(0.0f, -9.80665f, 0.0f)`<br> |
|  uint32\_t | [**position\_iterations**](#variable-position_iterations)   = `6`<br> |
|  float | [**restitution\_threshold**](#variable-restitution_threshold)   = `1.0f`<br> |
|  float | [**sleep\_angular\_velocity\_threshold**](#variable-sleep_angular_velocity_threshold)   = `0.05f`<br> |
|  float | [**sleep\_velocity\_threshold**](#variable-sleep_velocity_threshold)   = `0.05f`<br> |
|  float | [**time\_before\_sleep**](#variable-time_before_sleep)   = `5.0f`<br> |
|  bool | [**use\_fixed\_timestep**](#variable-use_fixed_timestep)   = `false`<br> |
|  uint32\_t | [**velocity\_iterations**](#variable-velocity_iterations)   = `6`<br> |
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



### variable enable\_contacts 

```C++
bool atlas::physics::jolt_config::enable_contacts;
```




<hr>



### variable fixed\_time\_step 

```C++
float atlas::physics::jolt_config::fixed_time_step;
```




<hr>



### variable gravity 

```C++
glm::vec3 atlas::physics::jolt_config::gravity;
```




<hr>



### variable position\_iterations 

```C++
uint32_t atlas::physics::jolt_config::position_iterations;
```




<hr>



### variable restitution\_threshold 

```C++
float atlas::physics::jolt_config::restitution_threshold;
```




<hr>



### variable sleep\_angular\_velocity\_threshold 

```C++
float atlas::physics::jolt_config::sleep_angular_velocity_threshold;
```




<hr>



### variable sleep\_velocity\_threshold 

```C++
float atlas::physics::jolt_config::sleep_velocity_threshold;
```




<hr>



### variable time\_before\_sleep 

```C++
float atlas::physics::jolt_config::time_before_sleep;
```





**Note:**

In seconds 





        

<hr>



### variable use\_fixed\_timestep 

```C++
bool atlas::physics::jolt_config::use_fixed_timestep;
```




<hr>



### variable velocity\_iterations 

```C++
uint32_t atlas::physics::jolt_config::velocity_iterations;
```




<hr>



### variable world\_unit\_scale 

```C++
float atlas::physics::jolt_config::world_unit_scale;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/data/jolt_config.hpp`

