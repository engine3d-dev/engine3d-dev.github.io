

# Class atlas::physics::jolt\_collision\_manager



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_collision\_manager**](classatlas_1_1physics_1_1jolt__collision__manager.md)



_This allows users to make thier own version of jolt collition and run them their own way. It allows users to interact with the calls by creating a child class of_ [_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _and run whatever action they want._

* `#include <jolt_collision_manager.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**jolt\_collision\_manager**](#function-jolt_collision_manager) () = default<br> |
|  void | [**run\_collision\_added**](#function-run_collision_added) (uint64\_t p\_id, [**contact\_event**](structatlas_1_1physics_1_1contact__event.md) & p\_event) <br>_Connects an entity to a defualt or user defined_ [_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _. Runs the functions of_[_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _passing the arguments for the user to utilize._ |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  scope&lt; [**jolt\_collision\_manager**](classatlas_1_1physics_1_1jolt__collision__manager.md) &gt; | [**initialize**](#function-initialize) (const std::string & p\_tag) <br>_Creates all the neccessary starting components for collisions to begin working. Is utilized by the physics engine to run user defined collisions in a simple way._  |
|  void | [**subscribe\_action**](#function-subscribe_action) (uint64\_t p\_id, [**jolt\_collision**](classatlas_1_1physics_1_1jolt__collision.md) & p\_collision\_action) <br>_FIXME: These need to be implemented along with all other persisted and removed events._  |


























## Public Functions Documentation




### function jolt\_collision\_manager 

```C++
atlas::physics::jolt_collision_manager::jolt_collision_manager () = default
```




<hr>



### function run\_collision\_added 

_Connects an entity to a defualt or user defined_ [_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _. Runs the functions of_[_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _passing the arguments for the user to utilize._
```C++
void atlas::physics::jolt_collision_manager::run_collision_added (
    uint64_t p_id,
    contact_event & p_event
) 
```





**Parameters:**


* `p_id` Generally a way to connect the id of a flecs::entity\_t to a specified [**jolt\_collision**](classatlas_1_1physics_1_1jolt__collision.md) 
* `p_event` Describes the collision that took place 




        

<hr>
## Public Static Functions Documentation




### function initialize 

_Creates all the neccessary starting components for collisions to begin working. Is utilized by the physics engine to run user defined collisions in a simple way._ 
```C++
static scope< jolt_collision_manager > atlas::physics::jolt_collision_manager::initialize (
    const std::string & p_tag
) 
```





**Parameters:**


* `p_tag` Creates a tag for the collision manager so debugging later will be simplied. Specifically when there are more then one scenes in the game world at once.



**Returns:**

scope&lt;jolt\_collision\_manager&gt; is the way the engine can run the non-statics collision functions. 





        

<hr>



### function subscribe\_action 

_FIXME: These need to be implemented along with all other persisted and removed events._ 
```C++
static void atlas::physics::jolt_collision_manager::subscribe_action (
    uint64_t p_id,
    jolt_collision & p_collision_action
) 
```



Allows the user to subscribe their own collision\_handlers to the map and connecting those handlers to entities that they define.




**Parameters:**


* `p_id` Used to connect an entity to a collision instance. 
* `p_collision_action` The collision handler to create actions based on the collision given.



**Todo**

We need to subscribe action. This might be fixed when we have events to take and subcribes their user actions with. Or this could be done like the other subscribes that exsist. 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_collision_manager.hpp`

