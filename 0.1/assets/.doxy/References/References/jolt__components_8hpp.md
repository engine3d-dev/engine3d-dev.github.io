

# File jolt\_components.hpp



[**FileList**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**jolt-cpp**](dir_4275702edcca8362402a3c9bf0161df7.md) **>** [**jolt\_components.hpp**](jolt__components_8hpp.md)

[Go to the source code of this file](jolt__components_8hpp_source.md)



* `#include <glm/glm.hpp>`
* `#include <cstdint>`
* `#include <thread>`
* `#include <Jolt/Jolt.h>`
* `#include <Jolt/Physics/PhysicsSystem.h>`
* `#include <Jolt/Physics/Collision/ContactListener.h>`













## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**atlas**](namespaceatlas.md) <br> |
| namespace | [**physics**](namespaceatlas_1_1physics.md) <br>_Handles error handling with in jolt._  |


## Classes

| Type | Name |
| ---: | :--- |
| struct | [**collider\_body**](structatlas_1_1physics_1_1collider__body.md) <br> |
| struct | [**collider\_event**](structatlas_1_1physics_1_1collider__event.md) <br>_This is a replacement for an event system to handle collider. It will be replaced by an event system once we have functional one up and running._  |
| struct | [**contact\_event**](structatlas_1_1physics_1_1contact__event.md) <br> |
| struct | [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md) <br>_Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._  |
| struct | [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) <br>_This includes global configs for each scene and how the physics engine will behave in a paticular scene._  |
| struct | [**physics\_body**](structatlas_1_1physics_1_1physics__body.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum uint8\_t | [**combine\_friction**](#enum-combine_friction)  <br>_created for future use of dynamic physics material_  |
| enum uint8\_t | [**combine\_restitution**](#enum-combine_restitution)  <br>_Created for future use of dynamic physics material._  |
















































## Public Types Documentation




### enum combine\_friction 

_created for future use of dynamic physics material_ 
```C++
enum combine_friction {
    FrictionDefualt = 0,
    FrictionMax = 1,
    FrictionMin = 2,
    FrictionNumTypes = 3
};
```





**Remark:**

FIXME: This needs to be associated with our own interpretations of how friction should work. Or have a way for users to override these functions. Do not delete for it will be needed in the near furture. 





        

<hr>



### enum combine\_restitution 

_Created for future use of dynamic physics material._ 
```C++
enum combine_restitution {
    RestitutionDefualt = 0,
    RestitutionMax = 1,
    RestitutionMin = 2,
    RestitutionNumTypes = 3
};
```





**Remark:**

FIXME: Same thing here, this will be used in the near future. As it is required by the basic jolt system. However, disccussion need to be made about how we allow users to overwrite resititution. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_components.hpp`

