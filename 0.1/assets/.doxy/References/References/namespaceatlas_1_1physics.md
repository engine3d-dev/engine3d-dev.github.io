

# Namespace atlas::physics



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md)



_Handles error handling with in jolt._ [More...](#detailed-description)
















## Classes

| Type | Name |
| ---: | :--- |
| class | [**broad\_phase\_layer\_interface**](classatlas_1_1physics_1_1broad__phase__layer__interface.md) <br>_This class is made to control the broadphase layer. Filters can be added to it to create a better and more organized broadphase. Ass well as giving some control to the user on how the broadphase should be organized. This requires dynamic masking however, which is not currently running._  |
| struct | [**collider\_body**](structatlas_1_1physics_1_1collider__body.md) <br> |
| struct | [**collider\_event**](structatlas_1_1physics_1_1collider__event.md) <br>_This is a replacement for an event system to handle collider. It will be replaced by an event system once we have functional one up and running._  |
| struct | [**contact\_event**](structatlas_1_1physics_1_1contact__event.md) <br> |
| class | [**contact\_listener**](classatlas_1_1physics_1_1contact__listener.md) <br>_This is the glue between contact events and jolts contact listener. It takes the calls from jolt through virtual functions and allows users to create children for jolt collision._  |
| class | [**jolt\_api**](classatlas_1_1physics_1_1jolt__api.md) <br> |
| class | [**jolt\_collision**](classatlas_1_1physics_1_1jolt__collision.md) <br>_This is the collision api. It allows users to create children of this collision handler and write their own functions over the virtual ones. Then they can assign it to the engine._  |
| class | [**jolt\_collision\_manager**](classatlas_1_1physics_1_1jolt__collision__manager.md) <br>_This allows users to make thier own version of jolt collition and run them their own way. It allows users to interact with the calls by creating a child class of_ [_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _and run whatever action they want._ |
| struct | [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md) <br>_Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._  |
| class | [**jolt\_context**](classatlas_1_1physics_1_1jolt__context.md) <br>_This class is made to be 1 of three api wrappers for jolt. Jolt context is specifically for engine only use of the api. It wraps the inititialization, the physics step and the clean up. Allow use not to have to write batching algorithms for each time we want to change the settings of jolt physics._  |
| struct | [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) <br>_This includes global configs for each scene and how the physics engine will behave in a paticular scene._  |
| struct | [**matrix4**](structatlas_1_1physics_1_1matrix4.md) &lt;typename T&gt;<br> |
| struct | [**matrix4&lt; JPH::Mat44 &gt;**](structatlas_1_1physics_1_1matrix4_3_01JPH_1_1Mat44_01_4.md) &lt;&gt;<br> |
| class | [**object\_layer\_pair\_filter**](classatlas_1_1physics_1_1object__layer__pair__filter.md) <br>_This goes into more detailed ways of filtering, where the object collisions may be defined be what the other object is. In this case a static setup allows static object to trigger collision only when it is touched by a dynamic target._  |
| class | [**object\_vs\_broadphase\_layer**](classatlas_1_1physics_1_1object__vs__broadphase__layer.md) <br>_This is used to tell Jolt what can or cannot collide. As of right now the list is static therfore the layers do not need a dynamic set up. This will change when the object layers become user definable._  |
| class | [**physics\_api**](classatlas_1_1physics_1_1physics__api.md) <br> |
| struct | [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) <br> |
| class | [**physics\_context**](classatlas_1_1physics_1_1physics__context.md) <br>_The context is the way to interact with only the engine. It is the api for all the background funcitons and information that the user shouldn not see. It is a virtual based type erasure class so thatmany engines can implement the same functions. Specifically realted to backend engine creation like batching, starting runtime, etc..._  |
| class | [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md) <br>_The manager class for all physics engines. Manages the physics contexts and the collision engines._  |
| struct | [**quaternion**](structatlas_1_1physics_1_1quaternion.md) &lt;typename T&gt;<br> |
| struct | [**vector3**](structatlas_1_1physics_1_1vector3.md) &lt;typename T&gt;<br> |
| struct | [**vector3&lt; JPH::DVec3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1DVec3_01_4.md) &lt;&gt;<br> |
| struct | [**vector3&lt; JPH::Double3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Double3_01_4.md) &lt;&gt;<br> |
| struct | [**vector3&lt; JPH::Float3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Float3_01_4.md) &lt;&gt;<br> |
| struct | [**vector3&lt; JPH::Vec3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Vec3_01_4.md) &lt;&gt;<br> |
| struct | [**vector4**](structatlas_1_1physics_1_1vector4.md) &lt;typename T&gt;<br> |
| struct | [**vector4&lt; JPH::Float4 &gt;**](structatlas_1_1physics_1_1vector4_3_01JPH_1_1Float4_01_4.md) &lt;&gt;<br> |
| struct | [**vector4&lt; JPH::Vec4 &gt;**](structatlas_1_1physics_1_1vector4_3_01JPH_1_1Vec4_01_4.md) &lt;&gt;<br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum std::uint8\_t | [**BroadPhaseLayers**](#enum-broadphaselayers)  <br> |
| enum std::uint8\_t | [**ObjectLayer**](#enum-objectlayer)  <br>_This contains a few important comparisons having to do with setting up the oct-trees correctly as well as the filtering and collision interaction._  |
| enum uint8\_t | [**body\_layer**](#enum-body_layer)  <br> |
| enum uint8\_t | [**body\_type**](#enum-body_type)  <br> |
| enum uint8\_t | [**collider\_shape**](#enum-collider_shape)  <br> |
| enum uint8\_t | [**physics\_backend**](#enum-physics_backend)  <br>_This is the manager of all three api for physics. It contians the scope for all physics engine related functions. It passes the jolt\_vlaues to engine and gives them to the user api._  |
| enum uint8\_t | [**thread\_system**](#enum-thread_system)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add\_angular\_velocity**](#function-add_angular_velocity) (const glm::vec3 & angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & body) <br> |
|  void | [**add\_force**](#function-add_force) (const glm::vec3 & force, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & body) <br>_These functions are the generic functions implmented in jolt but should be able to switch to any engine._  |
|  void | [**add\_velocity**](#function-add_velocity) (const glm::vec3 & velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & body) <br>_FIXME: This is a difficult funciton that requires locks and waiting multiple frames before running. So it is later._  |
|  bool | [**assert\_failed\_impl**](#function-assert_failed_impl) (const char \* p\_in\_expression, const char \* p\_in\_message, const char \* p\_in\_file, unsigned int p\_in\_line) <br>_Allows for custom desciptions and messages when Asserts fail._  |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md) &gt; | [**initialize\_engine**](#function-initialize_engine) (const [**ref**](namespaceatlas.md#typedef-ref)&lt; [**scene\_object**](classatlas_1_1scene__object.md) &gt; & p\_physics\_object, flecs::world & p\_registery) <br>_Creates the engine and all three api - collision, user, and engine api._  |
|  void | [**set\_angular\_velocity**](#function-set_angular_velocity) (const glm::vec3 & angular\_velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & body) <br> |
|  void | [**set\_velocity**](#function-set_velocity) (const glm::vec3 & velocity, const [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) & body) <br> |
|  void | [**trace\_impl**](#function-trace_impl) (const char \* p\_in\_fmt, ...) <br>_Enforced by JPH to handle assert and give users and ourselves a way to track where those asserts are coming from in Jolt._  |




























## Detailed Description


Types are still be filled out. When this is completed to\_jph() can be removed.


This is the how the user is able to call functions relating to jolt. It is the api calls for the user. Most of them running in runtime. With a couple effecting config which is a system wide change. This api is deticated to user interaction, however a few functions will be used by both the engine and the user.




**Note:**

FIXME: Should have a custom definition for how we want to handle and print JPH\_ASSERTS(). 





    
## Public Types Documentation




### enum BroadPhaseLayers 

```C++
enum atlas::physics::BroadPhaseLayers {
    NonMoving = 0,
    Moving = 1,
    NumLayers
};
```




<hr>



### enum ObjectLayer 

_This contains a few important comparisons having to do with setting up the oct-trees correctly as well as the filtering and collision interaction._ 
```C++
enum atlas::physics::ObjectLayer {
    NonMoving = 0,
    Moving = 1,
    NumLayers
};
```





**Warning:**

Most of these contain implicit conversions which might lead to unexpected behavior. This should probably be fixed or atleast checked eventually. 





        

<hr>



### enum body\_layer 

```C++
enum atlas::physics::body_layer {
    NonMoving = 0,
    Moving = 1,
    LayerNum
};
```




<hr>



### enum body\_type 

```C++
enum atlas::physics::body_type {
    Static = 0,
    Kenmatic = 1,
    Dynamic = 2,
    BodyNum
};
```




<hr>



### enum collider\_shape 

```C++
enum atlas::physics::collider_shape {
    Box,
    Sphere,
    Capsule
};
```




<hr>



### enum physics\_backend 

_This is the manager of all three api for physics. It contians the scope for all physics engine related functions. It passes the jolt\_vlaues to engine and gives them to the user api._ 
```C++
enum atlas::physics::physics_backend {
    JoltBackend
};
```




<hr>



### enum thread\_system 

```C++
enum atlas::physics::thread_system {
    Default = 0,
    JobSystem = 1
};
```




<hr>
## Public Functions Documentation




### function add\_angular\_velocity 

```C++
void atlas::physics::add_angular_velocity (
    const glm::vec3 & angular_velocity,
    const physics_body & body
) 
```




<hr>



### function add\_force 

_These functions are the generic functions implmented in jolt but should be able to switch to any engine._ 
```C++
void atlas::physics::add_force (
    const glm::vec3 & force,
    const physics_body & body
) 
```




<hr>



### function add\_velocity 

_FIXME: This is a difficult funciton that requires locks and waiting multiple frames before running. So it is later._ 
```C++
void atlas::physics::add_velocity (
    const glm::vec3 & velocity,
    const physics_body & body
) 
```




<hr>



### function assert\_failed\_impl 

_Allows for custom desciptions and messages when Asserts fail._ 
```C++
bool atlas::physics::assert_failed_impl (
    const char * p_in_expression,
    const char * p_in_message,
    const char * p_in_file,
    unsigned int p_in_line
) 
```





**Parameters:**


* `p_in_expression` The failing arguement 
* `p_in_message` The message provided 
* `p_in_file` The file the assert is in 
* `p_in_line` The line the assert is on 



**Returns:**

true 




**Returns:**

false 





        

<hr>



### function initialize\_engine 

_Creates the engine and all three api - collision, user, and engine api._ 
```C++
ref < physics_engine > atlas::physics::initialize_engine (
    const ref < scene_object > & p_physics_object,
    flecs::world & p_registery
) 
```





**Parameters:**


* `p_physics_object` 
* `p_registery` 



**Returns:**

ref&lt;physics\_engine&gt; 





        

<hr>



### function set\_angular\_velocity 

```C++
void atlas::physics::set_angular_velocity (
    const glm::vec3 & angular_velocity,
    const physics_body & body
) 
```




<hr>



### function set\_velocity 

```C++
void atlas::physics::set_velocity (
    const glm::vec3 & velocity,
    const physics_body & body
) 
```




<hr>



### function trace\_impl 

_Enforced by JPH to handle assert and give users and ourselves a way to track where those asserts are coming from in Jolt._ 
```C++
void atlas::physics::trace_impl (
    const char * p_in_fmt,
    ...
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_collision.hpp`

