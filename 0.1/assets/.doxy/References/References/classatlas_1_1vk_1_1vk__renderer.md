

# Class atlas::vk::vk\_renderer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md)



_Something to consider for mesh loading._ [More...](#detailed-description)

* `#include <vk_renderer.hpp>`



Inherits the following classes: [atlas::render\_context](classatlas_1_1render__context.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_renderer**](#function-vk_renderer) (const [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_swapchain, const std::string & p\_tag) <br> |
|   | [**~vk\_renderer**](#function-vk_renderer) () override<br> |


## Public Functions inherited from atlas::render_context

See [atlas::render\_context](classatlas_1_1render__context.md)

| Type | Name |
| ---: | :--- |
|  void | [**begin\_frame**](classatlas_1_1render__context.md#function-begin_frame) (const [**vk::vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) & p\_current, const [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_swapchain\_handler) <br> |
|  void | [**end\_frame**](classatlas_1_1render__context.md#function-end_frame) () <br> |
|  void | [**set\_background\_color**](classatlas_1_1render__context.md#function-set_background_color) (const std::array&lt; float, 4 &gt; & p\_color) <br> |
| virtual  | [**~render\_context**](classatlas_1_1render__context.md#function-render_context) () = default<br> |






















































## Detailed Description


How will meshes get loaded?


There are a few ways for considering for the base approach, which are: TODO: These are things to think about how this may happen because I want to make this lightweight in the sense the data isnt continuously being modified. Taking a looking at minimizing the loading state of vulkan implementation-specific meshes
* While also making the way how mesh components are being added the same as before




Something to avoid is the entities containing the geometry data itself but being able to reference to their respective geometry data that are getting submitted to the GPU



* Batching ID's into hash table that contains the actual geometry data
  * Using ID to search up the mesh loaded and cached into the map, then reuse that geometry whenever the uniforms are changed
  * This way we aren't reloading in the same mesh multiple times, treating the hash table as a slot of the mesh contained within that scene
  * Potentially std::map&lt;std::string, std::map&lt;std::string, vk::mesh\_metadata&gt;&gt; m\_geometries
    * Idea is the std::string is the geometries within this scene, the data format is: &lt;scene\_str, &lt;mesh\_str, mesh\_metadata&gt;&gt; 








    
## Public Functions Documentation




### function vk\_renderer 

```C++
atlas::vk::vk_renderer::vk_renderer (
    const vk_swapchain & p_swapchain,
    const std::string & p_tag
) 
```




<hr>



### function ~vk\_renderer 

```C++
atlas::vk::vk_renderer::~vk_renderer () override
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_renderer.hpp`

