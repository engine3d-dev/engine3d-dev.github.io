

# Struct atlas::vk::camera\_ubo



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**camera\_ubo**](structatlas_1_1vk_1_1camera__ubo.md)



_Going to remove this._ [More...](#detailed-description)

* `#include <vk_types.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  glm::mat4 | [**projection**](#variable-projection)   = `{ 1.f }`<br> |
|  glm::mat4 | [**view**](#variable-view)   = `{ 1.f }`<br> |












































## Detailed Description


This is being used by descriptor sets and [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) TODO: Modify vk\_descriptor\_set and [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) and add uniforms.hpp inside renderer/ (dir) for used across [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) and the renderer 


    
## Public Attributes Documentation




### variable projection 

```C++
glm::mat4 atlas::vk::camera_ubo::projection;
```




<hr>



### variable view 

```C++
glm::mat4 atlas::vk::camera_ubo::view;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_types.hpp`

