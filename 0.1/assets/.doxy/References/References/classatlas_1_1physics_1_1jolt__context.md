

# Class atlas::physics::jolt\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_context**](classatlas_1_1physics_1_1jolt__context.md)



_This class is made to be 1 of three api wrappers for jolt. Jolt context is specifically for engine only use of the api. It wraps the inititialization, the physics step and the clean up. Allow use not to have to write batching algorithms for each time we want to change the settings of jolt physics._ [More...](#detailed-description)

* `#include <jolt_context.hpp>`



Inherits the following classes: [atlas::physics::physics\_context](classatlas_1_1physics_1_1physics__context.md)






















## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; JPH::PhysicsSystem &gt; | [**m\_physics\_system**](#variable-m_physics_system)  <br>_Gives access to the physics system. Is given to_ [_**jolt\_api**_](classatlas_1_1physics_1_1jolt__api.md) _as well. This is to allow us to give seperation of concerns. However, may change now do to Jolt conflict and unhandled dangling pointers within_[_**jolt\_api**_](classatlas_1_1physics_1_1jolt__api.md) _._ |
































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**jolt\_context**](#function-jolt_context) (const [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) & p\_settings) <br> |
|   | [**~jolt\_context**](#function-jolt_context) () override<br> |


## Public Functions inherited from atlas::physics::physics_context

See [atlas::physics::physics\_context](classatlas_1_1physics_1_1physics__context.md)

| Type | Name |
| ---: | :--- |
|  void | [**clean\_bodies**](classatlas_1_1physics_1_1physics__context.md#function-clean_bodies) () <br> |
|  void | [**contact\_added\_event**](classatlas_1_1physics_1_1physics__context.md#function-contact_added_event) () <br> |
|  void | [**create\_bodies**](classatlas_1_1physics_1_1physics__context.md#function-create_bodies) () <br> |
|  void | [**run\_physics\_step**](classatlas_1_1physics_1_1physics__context.md#function-run_physics_step) () <br> |
| virtual  | [**~physics\_context**](classatlas_1_1physics_1_1physics__context.md#function-physics_context) () = default<br> |






















































## Detailed Description




**Remark:**

This is different that [**jolt\_api**](classatlas_1_1physics_1_1jolt__api.md), which is the user wrapper. It is meant to contain all the effects that can happen during runtime. Where most of the data can be called by the user. m\_physics\_system is the only link between the two classes. Both of which use it for different purposes. Jolt context to control the functionality of the entire systems and the Jolt Api for user based control of the system and bodies.




**Remark:**

The third api is collisions which has its own context for jolt. 





    
## Public Attributes Documentation




### variable m\_physics\_system 

_Gives access to the physics system. Is given to_ [_**jolt\_api**_](classatlas_1_1physics_1_1jolt__api.md) _as well. This is to allow us to give seperation of concerns. However, may change now do to Jolt conflict and unhandled dangling pointers within_[_**jolt\_api**_](classatlas_1_1physics_1_1jolt__api.md) _._
```C++
ref<JPH::PhysicsSystem> atlas::physics::jolt_context::m_physics_system;
```




<hr>
## Public Functions Documentation




### function jolt\_context 

```C++
atlas::physics::jolt_context::jolt_context (
    const jolt_settings & p_settings
) 
```




<hr>



### function ~jolt\_context 

```C++
atlas::physics::jolt_context::~jolt_context () override
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/jolt_context.hpp`

