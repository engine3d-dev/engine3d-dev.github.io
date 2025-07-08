

# Class atlas::physics::object\_vs\_broadphase\_layer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**object\_vs\_broadphase\_layer**](classatlas_1_1physics_1_1object__vs__broadphase__layer.md)



_This is used to tell Jolt what can or cannot collide. As of right now the list is static therfore the layers do not need a dynamic set up. This will change when the object layers become user definable._ [More...](#detailed-description)

* `#include <jolt_broad_phase.hpp>`



Inherits the following classes: JPH::ObjectVsBroadPhaseLayerFilter


































## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**ShouldCollide**](#function-shouldcollide) (JPH::ObjectLayer p\_in\_layer1, JPH::BroadPhaseLayer p\_in\_layer2) override const<br> |




























## Detailed Description




**Remark:**

To give an example, there might exist something like this in the config of the editor:  Dynamic ✅ ✅ ✅ Kenmatic ✅ ✅ Static ✅


Where the interactions can partially be defined and controlled by the developer of the game. 


    
## Public Functions Documentation




### function ShouldCollide 

```C++
inline bool atlas::physics::object_vs_broadphase_layer::ShouldCollide (
    JPH::ObjectLayer p_in_layer1,
    JPH::BroadPhaseLayer p_in_layer2
) override const
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/interface/jolt_broad_phase.hpp`

