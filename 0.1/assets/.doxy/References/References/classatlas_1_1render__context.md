

# Class atlas::render\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**render\_context**](classatlas_1_1render__context.md)










Inherited by the following classes: [atlas::vk::vk\_renderer](classatlas_1_1vk_1_1vk__renderer.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin\_frame**](#function-begin_frame) (const [**vk::vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) & p\_current, const [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_swapchain\_handler) <br> |
|  void | [**end\_frame**](#function-end_frame) () <br> |
|  void | [**set\_background\_color**](#function-set_background_color) (const std::array&lt; float, 4 &gt; & p\_color) <br> |
| virtual  | [**~render\_context**](#function-render_context) () = default<br> |




























## Public Functions Documentation




### function begin\_frame 

```C++
inline void atlas::render_context::begin_frame (
    const vk::vk_command_buffer & p_current,
    const vk::vk_swapchain & p_swapchain_handler
) 
```




<hr>



### function end\_frame 

```C++
inline void atlas::render_context::end_frame () 
```




<hr>



### function set\_background\_color 

```C++
inline void atlas::render_context::set_background_color (
    const std::array< float, 4 > & p_color
) 
```




<hr>



### function ~render\_context 

```C++
virtual atlas::render_context::~render_context () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/renderer_context.hpp`

