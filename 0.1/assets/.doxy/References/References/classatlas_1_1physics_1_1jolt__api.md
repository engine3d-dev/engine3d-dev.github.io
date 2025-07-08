

# Class atlas::physics::jolt\_api



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**jolt\_api**](classatlas_1_1physics_1_1jolt__api.md)








Inherits the following classes: [atlas::physics::physics\_api](classatlas_1_1physics_1_1physics__api.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**jolt\_api**](#function-jolt_api) (const [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md) & p\_config, const [**ref**](namespaceatlas.md#typedef-ref)&lt; JPH::PhysicsSystem &gt; & p\_physics\_system, const flecs::world & p\_registery) <br>_Construct a new jolt api object._  |


## Public Functions inherited from atlas::physics::physics_api

See [atlas::physics::physics\_api](classatlas_1_1physics_1_1physics__api.md)

| Type | Name |
| ---: | :--- |
|  void | [**add\_angular\_velocity\_by\_body**](classatlas_1_1physics_1_1physics__api.md#function-add_angular_velocity_by_body) (const glm::vec3 & p\_angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**add\_force\_by\_body**](classatlas_1_1physics_1_1physics__api.md#function-add_force_by_body) (const glm::vec3 & p\_force, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br>_Calls the corresponding virtuals._  |
|  void | [**add\_linear\_velocity\_by\_body**](classatlas_1_1physics_1_1physics__api.md#function-add_linear_velocity_by_body) (const glm::vec3 & p\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br>_FIXME: This one is really complicated because it needs to try over multiple frames. And locks are requried. So will be implemented later._  |
|  void | [**set\_angular\_velocity\_by\_body**](classatlas_1_1physics_1_1physics__api.md#function-set_angular_velocity_by_body) (const glm::vec3 & p\_angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**set\_linear\_velocity\_by\_body**](classatlas_1_1physics_1_1physics__api.md#function-set_linear_velocity_by_body) (const glm::vec3 & p\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**update\_atlas\_values**](classatlas_1_1physics_1_1physics__api.md#function-update_atlas_values) () <br>_Allows for jolt values to sync with flecs._  |
|  void | [**update\_jolt\_values**](classatlas_1_1physics_1_1physics__api.md#function-update_jolt_values) () <br>_Allows for flecs values to sync with jolt without running into collisions._  |
| virtual  | [**~physics\_api**](classatlas_1_1physics_1_1physics__api.md#function-physics_api) () = default<br> |






















































## Public Functions Documentation




### function jolt\_api 

_Construct a new jolt api object._ 
```C++
atlas::physics::jolt_api::jolt_api (
    const jolt_config & p_config,
    const ref < JPH::PhysicsSystem > & p_physics_system,
    const flecs::world & p_registery
) 
```





**Parameters:**


* `p_config` All system wide runtime configurations 
* `p_physics_system` Passed by the engine to allow interaction between the engine and users 
* `p_registery` The world this api is associated with. FIXME: This is a temperary solve until have a funciton like get\_active\_scenes(), added const 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/jolt_api.hpp`

