

# Class atlas::physics::object\_layer\_pair\_filter



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**object\_layer\_pair\_filter**](classatlas_1_1physics_1_1object__layer__pair__filter.md)



_This goes into more detailed ways of filtering, where the object collisions may be defined be what the other object is. In this case a static setup allows static object to trigger collision only when it is touched by a dynamic target._ 

* `#include <jolt_broad_phase.hpp>`



Inherits the following classes: JPH::ObjectLayerPairFilter


































## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**ShouldCollide**](#function-shouldcollide) (JPH::ObjectLayer p\_in\_object1, JPH::ObjectLayer p\_in\_object2) override const<br> |




























## Public Functions Documentation




### function ShouldCollide 

```C++
inline bool atlas::physics::object_layer_pair_filter::ShouldCollide (
    JPH::ObjectLayer p_in_object1,
    JPH::ObjectLayer p_in_object2
) override const
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/interface/jolt_broad_phase.hpp`

