

# Class atlas::shader



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**shader**](classatlas_1_1shader.md)










Inherited by the following classes: [atlas::vk::vk\_shader](classatlas_1_1vk_1_1vk__shader.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  VkPipeline | [**get\_graphics\_pipeline**](#function-get_graphics_pipeline) () <br> |
| virtual  | [**~shader**](#function-shader) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**shader**](classatlas_1_1shader.md) &gt; | [**create**](#function-create) (const std::string & p\_vert\_shader, const std::string & p\_frag\_shader, const [**vk::shader\_pipeline\_config**](structatlas_1_1vk_1_1shader__pipeline__config.md) & p\_config) <br> |


























## Public Functions Documentation




### function get\_graphics\_pipeline 

```C++
VkPipeline atlas::shader::get_graphics_pipeline () 
```




<hr>



### function ~shader 

```C++
virtual atlas::shader::~shader () = default
```




<hr>
## Public Static Functions Documentation




### function create 

```C++
static ref< shader > atlas::shader::create (
    const std::string & p_vert_shader,
    const std::string & p_frag_shader,
    const vk::shader_pipeline_config & p_config
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/shader.hpp`

