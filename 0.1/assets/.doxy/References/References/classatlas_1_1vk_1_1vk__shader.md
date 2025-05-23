

# Class atlas::vk::vk\_shader



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_shader**](classatlas_1_1vk_1_1vk__shader.md)








Inherits the following classes: [atlas::shader](classatlas_1_1shader.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|  VkPipeline | [**get\_graphics\_pipeline**](#function-get_graphics_pipeline) () <br> |
|   | [**vk\_shader**](#function-vk_shader-12) () = default<br> |
|   | [**vk\_shader**](#function-vk_shader-22) (const std::string & p\_vertex, const std::string & p\_fragment, const [**shader\_pipeline\_config**](structatlas_1_1vk_1_1shader__pipeline__config.md) & p\_config={}) <br> |
| virtual  | [**~vk\_shader**](#function-vk_shader) () <br> |


## Public Functions inherited from atlas::shader

See [atlas::shader](classatlas_1_1shader.md)

| Type | Name |
| ---: | :--- |
|  VkPipeline | [**get\_graphics\_pipeline**](classatlas_1_1shader.md#function-get_graphics_pipeline) () <br> |
| virtual  | [**~shader**](classatlas_1_1shader.md#function-shader) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  [**shader\_pipeline\_config**](structatlas_1_1vk_1_1shader__pipeline__config.md) | [**shader\_configuration**](#function-shader_configuration) (uint32\_t p\_width, uint32\_t p\_height) <br> |


## Public Static Functions inherited from atlas::shader

See [atlas::shader](classatlas_1_1shader.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**shader**](classatlas_1_1shader.md) &gt; | [**create**](classatlas_1_1shader.md#function-create) (const std::string & p\_vert\_shader, const std::string & p\_frag\_shader, const [**vk::shader\_pipeline\_config**](structatlas_1_1vk_1_1shader__pipeline__config.md) & p\_config) <br> |


















































## Public Functions Documentation




### function get\_graphics\_pipeline 

```C++
inline VkPipeline atlas::vk::vk_shader::get_graphics_pipeline () 
```




<hr>



### function vk\_shader [1/2]

```C++
atlas::vk::vk_shader::vk_shader () = default
```




<hr>



### function vk\_shader [2/2]

```C++
atlas::vk::vk_shader::vk_shader (
    const std::string & p_vertex,
    const std::string & p_fragment,
    const shader_pipeline_config & p_config={}
) 
```




<hr>



### function ~vk\_shader 

```C++
inline virtual atlas::vk::vk_shader::~vk_shader () 
```




<hr>
## Public Static Functions Documentation




### function shader\_configuration 

```C++
static shader_pipeline_config atlas::vk::vk_shader::shader_configuration (
    uint32_t p_width,
    uint32_t p_height
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/shaders/vulkan_shader.hpp`

