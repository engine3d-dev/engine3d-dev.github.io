

# Class atlas::physics::jolt\_collision



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_collision**](classatlas_1_1physics_1_1jolt__collision.md)



_This is the collision api. It allows users to create children of this collision handler and write their own functions over the virtual ones. Then they can assign it to the engine._ 

* `#include <jolt_collision.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**collision\_added**](#function-collision_added) ([**contact\_event**](structatlas_1_1physics_1_1contact__event.md) & p\_event) <br> |
|   | [**jolt\_collision**](#function-jolt_collision-12) () <br> |
|   | [**jolt\_collision**](#function-jolt_collision-22) (flecs::entity\_t p\_entity\_id) <br> |








## Protected Attributes

| Type | Name |
| ---: | :--- |
|  uint64\_t | [**m\_id**](#variable-m_id)  <br>_Allows to keep track of the collision events and what that are assigned to._  |




















## Public Functions Documentation




### function collision\_added 

```C++
void atlas::physics::jolt_collision::collision_added (
    contact_event & p_event
) 
```




<hr>



### function jolt\_collision [1/2]

```C++
atlas::physics::jolt_collision::jolt_collision () 
```




<hr>



### function jolt\_collision [2/2]

```C++
atlas::physics::jolt_collision::jolt_collision (
    flecs::entity_t p_entity_id
) 
```




<hr>
## Protected Attributes Documentation




### variable m\_id 

_Allows to keep track of the collision events and what that are assigned to._ 
```C++
uint64_t atlas::physics::jolt_collision::m_id;
```





**Note:**

FIXME: Add these function to handle removal and continous collision detection:  





        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_collision.hpp`

