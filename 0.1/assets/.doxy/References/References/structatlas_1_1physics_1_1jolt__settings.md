

# Struct atlas::physics::jolt\_settings



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md)



_This includes global configs for each scene and how the physics engine will behave in a paticular scene._ [More...](#detailed-description)

* `#include <jolt_components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  unsigned int | [**allocation\_amount**](#variable-allocation_amount)   = `10 \* 1024 \* 1024`<br> |
|  float | [**broadphase\_scale**](#variable-broadphase_scale)   = `1.0f`<br> |
|  uint32\_t | [**collision\_filter\_layer\_count**](#variable-collision_filter_layer_count)   = `32`<br> |
|  uint32\_t | [**default\_collision\_group**](#variable-default_collision_group)   = `0`<br> |
|  uint32\_t | [**default\_filter\_mask**](#variable-default_filter_mask)   = `0xFFFFFFFF`<br> |
|  float | [**fixed\_time\_step**](#variable-fixed_time_step)   = `1.0f / 60.0f`<br> |
|  bool | [**is\_multithreaded**](#variable-is_multithreaded)   = `true`<br> |
|  uint32\_t | [**max\_barriers**](#variable-max_barriers)   = `physics\_threads \* 16`<br> |
|  uint32\_t | [**max\_bodies**](#variable-max_bodies)   = `16384`<br> |
|  uint32\_t | [**max\_body\_pairs**](#variable-max_body_pairs)   = `32768`<br> |
|  uint32\_t | [**max\_contact\_constraints**](#variable-max_contact_constraints)   = `8192`<br> |
|  uint32\_t | [**max\_jobs\_power**](#variable-max_jobs_power)   = `10`<br> |
|  glm::vec3 | [**physics\_scene\_position**](#variable-physics_scene_position)   = `glm::vec3(0.0f, 0.0f, 0.0f)`<br> |
|  uint32\_t | [**physics\_threads**](#variable-physics_threads)   = `/* multi line expression */`<br> |
|  uint32\_t | [**position\_iterations**](#variable-position_iterations)   = `1`<br> |
|  float | [**sleep\_angular\_velocity\_threshold**](#variable-sleep_angular_velocity_threshold)   = `0.05f`<br> |
|  float | [**sleep\_velocity\_threshold**](#variable-sleep_velocity_threshold)   = `0.05f`<br> |
|  thread\_system | [**thread\_type**](#variable-thread_type)   = `Default`<br> |
|  bool | [**use\_4\_layer\_broadphase**](#variable-use_4_layer_broadphase)   = `true`<br> |
|  bool | [**use\_fixed\_timestep**](#variable-use_fixed_timestep)   = `false`<br> |
|  uint32\_t | [**velocity\_iterations**](#variable-velocity_iterations)   = `8`<br> |
|  glm::vec3 | [**world\_bounds\_max**](#variable-world_bounds_max)   = `glm::vec3(500.0f, 500.0f, 500.0f)`<br> |
|  glm::vec3 | [**world\_bounds\_min**](#variable-world_bounds_min)   = `glm::vec3(-500.0f, -500.0f, -500.0f)`<br> |












































## Detailed Description




**Remark:**

world\_bounds\_min && world\_bounds\_max: These values are arbitrary until further investigation happens and are more of a reminder that floating point error exsists. True max values should be determined in the near future. 





    
## Public Attributes Documentation




### variable allocation\_amount 

```C++
unsigned int atlas::physics::jolt_settings::allocation_amount;
```




<hr>



### variable broadphase\_scale 

```C++
float atlas::physics::jolt_settings::broadphase_scale;
```




<hr>



### variable collision\_filter\_layer\_count 

```C++
uint32_t atlas::physics::jolt_settings::collision_filter_layer_count;
```




<hr>



### variable default\_collision\_group 

```C++
uint32_t atlas::physics::jolt_settings::default_collision_group;
```




<hr>



### variable default\_filter\_mask 

```C++
uint32_t atlas::physics::jolt_settings::default_filter_mask;
```




<hr>



### variable fixed\_time\_step 

```C++
float atlas::physics::jolt_settings::fixed_time_step;
```




<hr>



### variable is\_multithreaded 

```C++
bool atlas::physics::jolt_settings::is_multithreaded;
```




<hr>



### variable max\_barriers 

```C++
uint32_t atlas::physics::jolt_settings::max_barriers;
```




<hr>



### variable max\_bodies 

```C++
uint32_t atlas::physics::jolt_settings::max_bodies;
```




<hr>



### variable max\_body\_pairs 

```C++
uint32_t atlas::physics::jolt_settings::max_body_pairs;
```




<hr>



### variable max\_contact\_constraints 

```C++
uint32_t atlas::physics::jolt_settings::max_contact_constraints;
```




<hr>



### variable max\_jobs\_power 

```C++
uint32_t atlas::physics::jolt_settings::max_jobs_power;
```




<hr>



### variable physics\_scene\_position 

```C++
glm::vec3 atlas::physics::jolt_settings::physics_scene_position;
```




<hr>



### variable physics\_threads 

```C++
uint32_t atlas::physics::jolt_settings::physics_threads;
```




<hr>



### variable position\_iterations 

```C++
uint32_t atlas::physics::jolt_settings::position_iterations;
```




<hr>



### variable sleep\_angular\_velocity\_threshold 

```C++
float atlas::physics::jolt_settings::sleep_angular_velocity_threshold;
```




<hr>



### variable sleep\_velocity\_threshold 

```C++
float atlas::physics::jolt_settings::sleep_velocity_threshold;
```




<hr>



### variable thread\_type 

```C++
thread_system atlas::physics::jolt_settings::thread_type;
```




<hr>



### variable use\_4\_layer\_broadphase 

```C++
bool atlas::physics::jolt_settings::use_4_layer_broadphase;
```




<hr>



### variable use\_fixed\_timestep 

```C++
bool atlas::physics::jolt_settings::use_fixed_timestep;
```




<hr>



### variable velocity\_iterations 

```C++
uint32_t atlas::physics::jolt_settings::velocity_iterations;
```




<hr>



### variable world\_bounds\_max 

```C++
glm::vec3 atlas::physics::jolt_settings::world_bounds_max;
```




<hr>



### variable world\_bounds\_min 

```C++
glm::vec3 atlas::physics::jolt_settings::world_bounds_min;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_components.hpp`

