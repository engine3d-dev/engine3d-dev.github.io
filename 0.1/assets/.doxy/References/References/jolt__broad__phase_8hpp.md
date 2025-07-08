

# File jolt\_broad\_phase.hpp



[**FileList**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**jolt**](dir_3d876be8cd66de39c1e103aa97223d9b.md) **>** [**interface**](dir_6170caab3d86040ff713c96f30038a01.md) **>** [**jolt\_broad\_phase.hpp**](jolt__broad__phase_8hpp.md)

[Go to the source code of this file](jolt__broad__phase_8hpp_source.md)



* `#include <physics/jolt-cpp/jolt-imports.hpp>`













## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**atlas**](namespaceatlas.md) <br> |
| namespace | [**physics**](namespaceatlas_1_1physics.md) <br>_Handles error handling with in jolt._  |


## Classes

| Type | Name |
| ---: | :--- |
| class | [**broad\_phase\_layer\_interface**](classatlas_1_1physics_1_1broad__phase__layer__interface.md) <br>_This class is made to control the broadphase layer. Filters can be added to it to create a better and more organized broadphase. Ass well as giving some control to the user on how the broadphase should be organized. This requires dynamic masking however, which is not currently running._  |
| class | [**object\_layer\_pair\_filter**](classatlas_1_1physics_1_1object__layer__pair__filter.md) <br>_This goes into more detailed ways of filtering, where the object collisions may be defined be what the other object is. In this case a static setup allows static object to trigger collision only when it is touched by a dynamic target._  |
| class | [**object\_vs\_broadphase\_layer**](classatlas_1_1physics_1_1object__vs__broadphase__layer.md) <br>_This is used to tell Jolt what can or cannot collide. As of right now the list is static therfore the layers do not need a dynamic set up. This will change when the object layers become user definable._  |



















































------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/interface/jolt_broad_phase.hpp`

