

# Class atlas::physics::physics\_engine



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md)



_The manager class for all physics engines. Manages the physics contexts and the collision engines._ 

* `#include <physics_engine.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**physics\_engine**](#function-physics_engine-12) () = default<br> |
|   | [**physics\_engine**](#function-physics_engine-22) (const [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) & p\_settings, const [**ref**](namespaceatlas.md#typedef-ref)&lt; [**physics\_context**](classatlas_1_1physics_1_1physics__context.md) &gt; & p\_engine, const [**ref**](namespaceatlas.md#typedef-ref)&lt; [**physics\_api**](classatlas_1_1physics_1_1physics__api.md) &gt; & p\_user\_api) <br> |
|  void | [**physics\_step**](#function-physics_step) () <br>_Runs a single frame of the simulation. Should at minimum be called 60 fps. If below, it must be called twice._  |
|  void | [**run\_contact\_add**](#function-run_contact_add) () <br>_Allows for contacts to be handled by the user right after physics\_step has fully run._  |
|  void | [**start\_runtime**](#function-start_runtime) () <br>_The runtime is specifically the way to start the physics, utilizing defined data from level\_scene and eventually any scene to create a physics scene and manage physics step._  |
|  void | [**stop\_runtime**](#function-stop_runtime) () <br>_Deletes all physics bodies and shapes. Preps itself for runtime to be called again._  |




























## Public Functions Documentation




### function physics\_engine [1/2]

```C++
atlas::physics::physics_engine::physics_engine () = default
```




<hr>



### function physics\_engine [2/2]

```C++
atlas::physics::physics_engine::physics_engine (
    const jolt_settings & p_settings,
    const ref < physics_context > & p_engine,
    const ref < physics_api > & p_user_api
) 
```




<hr>



### function physics\_step 

_Runs a single frame of the simulation. Should at minimum be called 60 fps. If below, it must be called twice._ 
```C++
void atlas::physics::physics_engine::physics_step () 
```




<hr>



### function run\_contact\_add 

_Allows for contacts to be handled by the user right after physics\_step has fully run._ 
```C++
void atlas::physics::physics_engine::run_contact_add () 
```





**Warning:**

It is important that these stay distict until we have a job manager to maintain them. 





        

<hr>



### function start\_runtime 

_The runtime is specifically the way to start the physics, utilizing defined data from level\_scene and eventually any scene to create a physics scene and manage physics step._ 
```C++
void atlas::physics::physics_engine::start_runtime () 
```




<hr>



### function stop\_runtime 

_Deletes all physics bodies and shapes. Preps itself for runtime to be called again._ 
```C++
void atlas::physics::physics_engine::stop_runtime () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/physics_engine.hpp`

