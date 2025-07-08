

# Class atlas::physics::broad\_phase\_layer\_interface



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**broad\_phase\_layer\_interface**](classatlas_1_1physics_1_1broad__phase__layer__interface.md)



_This class is made to control the broadphase layer. Filters can be added to it to create a better and more organized broadphase. Ass well as giving some control to the user on how the broadphase should be organized. This requires dynamic masking however, which is not currently running._ 

* `#include <jolt_broad_phase.hpp>`



Inherits the following classes: JPH::BroadPhaseLayerInterface


































## Public Functions

| Type | Name |
| ---: | :--- |
|  JPH::BroadPhaseLayer | [**GetBroadPhaseLayer**](#function-getbroadphaselayer) (JPH::ObjectLayer p\_in\_layer) override const<br>_Gives the caller access to the broadphase object. Allowing for some manipulation on how those interactions may go. Including but not limited to changing the filtering of the broadphase or reorganizing the oct-tree._  |
|  uint32\_t | [**GetNumBroadPhaseLayers**](#function-getnumbroadphaselayers) () override const<br>_Get the Number of layers that exsist in the current context. Static for now._  |
|   | [**broad\_phase\_layer\_interface**](#function-broad_phase_layer_interface) () = default<br> |




























## Public Functions Documentation




### function GetBroadPhaseLayer 

_Gives the caller access to the broadphase object. Allowing for some manipulation on how those interactions may go. Including but not limited to changing the filtering of the broadphase or reorganizing the oct-tree._ 
```C++
inline JPH::BroadPhaseLayer atlas::physics::broad_phase_layer_interface::GetBroadPhaseLayer (
    JPH::ObjectLayer p_in_layer
) override const
```





**Parameters:**


* `p_in_layer` The layer that the player wants. 



**Returns:**

JPH::BroadPhaseLayer Object to organize and manipulate the oct-tree for that layer. 





        

<hr>



### function GetNumBroadPhaseLayers 

_Get the Number of layers that exsist in the current context. Static for now._ 
```C++
inline uint32_t atlas::physics::broad_phase_layer_interface::GetNumBroadPhaseLayers () override const
```





**Returns:**

uint32\_t 





        

<hr>



### function broad\_phase\_layer\_interface 

```C++
atlas::physics::broad_phase_layer_interface::broad_phase_layer_interface () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/jolt/interface/jolt_broad_phase.hpp`

