

# Class atlas::physics::physics\_api



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**physics\_api**](classatlas_1_1physics_1_1physics__api.md)










Inherited by the following classes: [atlas::physics::jolt\_api](classatlas_1_1physics_1_1jolt__api.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add\_angular\_velocity\_by\_body**](#function-add_angular_velocity_by_body) (const glm::vec3 & p\_angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**add\_force\_by\_body**](#function-add_force_by_body) (const glm::vec3 & p\_force, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br>_Calls the corresponding virtuals._  |
|  void | [**add\_linear\_velocity\_by\_body**](#function-add_linear_velocity_by_body) (const glm::vec3 & p\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br>_FIXME: This one is really complicated because it needs to try over multiple frames. And locks are requried. So will be implemented later._  |
|  void | [**set\_angular\_velocity\_by\_body**](#function-set_angular_velocity_by_body) (const glm::vec3 & p\_angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**set\_linear\_velocity\_by\_body**](#function-set_linear_velocity_by_body) (const glm::vec3 & p\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & p\_body) <br> |
|  void | [**update\_atlas\_values**](#function-update_atlas_values) () <br>_Allows for jolt values to sync with flecs._  |
|  void | [**update\_jolt\_values**](#function-update_jolt_values) () <br>_Allows for flecs values to sync with jolt without running into collisions._  |
| virtual  | [**~physics\_api**](#function-physics_api) () = default<br> |




























## Public Functions Documentation




### function add\_angular\_velocity\_by\_body 

```C++
void atlas::physics::physics_api::add_angular_velocity_by_body (
    const glm::vec3 & p_angular_velocity,
    const physics_body & p_body
) 
```




<hr>



### function add\_force\_by\_body 

_Calls the corresponding virtuals._ 
```C++
void atlas::physics::physics_api::add_force_by_body (
    const glm::vec3 & p_force,
    const physics_body & p_body
) 
```




<hr>



### function add\_linear\_velocity\_by\_body 

_FIXME: This one is really complicated because it needs to try over multiple frames. And locks are requried. So will be implemented later._ 
```C++
void atlas::physics::physics_api::add_linear_velocity_by_body (
    const glm::vec3 & p_velocity,
    const physics_body & p_body
) 
```




<hr>



### function set\_angular\_velocity\_by\_body 

```C++
void atlas::physics::physics_api::set_angular_velocity_by_body (
    const glm::vec3 & p_angular_velocity,
    const physics_body & p_body
) 
```




<hr>



### function set\_linear\_velocity\_by\_body 

```C++
void atlas::physics::physics_api::set_linear_velocity_by_body (
    const glm::vec3 & p_velocity,
    const physics_body & p_body
) 
```




<hr>



### function update\_atlas\_values 

_Allows for jolt values to sync with flecs._ 
```C++
void atlas::physics::physics_api::update_atlas_values () 
```





**Note:**

should be called either by user to sync events or just after physics\_update() 





        

<hr>



### function update\_jolt\_values 

_Allows for flecs values to sync with jolt without running into collisions._ 
```C++
void atlas::physics::physics_api::update_jolt_values () 
```





**Note:**

Takes all transforms, rigidbodies, and collider bodies that changed and updates jolt.




**Note:**

should be called either by the user to sync events or just before physics\_update() 





        

<hr>



### function ~physics\_api 

```C++
virtual atlas::physics::physics_api::~physics_api () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/physics_api.hpp`

