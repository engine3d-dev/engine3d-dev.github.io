

# Namespace atlas::physics



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md)




















## Classes

| Type | Name |
| ---: | :--- |
| class | [**JoltPhysicBody**](classatlas_1_1physics_1_1JoltPhysicBody.md) <br> |
| struct | [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md) <br>_Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._  |
| struct | [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) <br>_A data structure to give to flecs and get the physics._  |
| class | [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md) <br> |






















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**create**](#function-create) (ref&lt; [**atlas::scene\_object**](classatlas_1_1scene__object.md) &gt; physics\_object) <br>_Initializes physics global data for a particular scene._  |
|  void | [**create\_engine**](#function-create_engine) (const [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) & settings) <br>_Initializes physics global data for a particular scene._  |




























## Public Functions Documentation




### function create 

_Initializes physics global data for a particular scene._ 
```C++
void atlas::physics::create (
    ref< atlas::scene_object > physics_object
) 
```





**Parameters:**


* `physics_object` An entity to allow the user to control the data from the hierarchy. (within the editor) 




        

<hr>



### function create\_engine 

_Initializes physics global data for a particular scene._ 
```C++
void atlas::physics::create_engine (
    const jolt_settings & settings
) 
```





**Parameters:**


* `physics_object` An entity to allow the user to control the data from the hierarchy. (within the editor) 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/helper_functions.hpp`

