

# Class atlas::renderer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**renderer**](classatlas_1_1renderer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin**](#function-begin) (const [**vk::vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) & p\_current, const [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_current\_rp) <br>_Indicates to the renderer is at the start of the next frame to prepare workloads before next frame is processeed._  |
|  void | [**end**](#function-end) () <br>_Indications when the renderer has reached the end of the frame._  |
|   | [**renderer**](#function-renderer-12) () = default<br> |
|   | [**renderer**](#function-renderer-22) (const [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_swapchain, const std::string & p\_tag="Renderer") <br> |
|  void | [**set\_background\_color**](#function-set_background_color) (const std::array&lt; float, 4 &gt; & p\_color) <br> |




























## Public Functions Documentation




### function begin 

_Indicates to the renderer is at the start of the next frame to prepare workloads before next frame is processeed._ 
```C++
void atlas::renderer::begin (
    const vk::vk_command_buffer & p_current,
    const vk::vk_swapchain & p_current_rp
) 
```




<hr>



### function end 

_Indications when the renderer has reached the end of the frame._ 
```C++
void atlas::renderer::end () 
```




<hr>



### function renderer [1/2]

```C++
atlas::renderer::renderer () = default
```




<hr>



### function renderer [2/2]

```C++
atlas::renderer::renderer (
    const vk::vk_swapchain & p_swapchain,
    const std::string & p_tag="Renderer"
) 
```




<hr>



### function set\_background\_color 

```C++
void atlas::renderer::set_background_color (
    const std::array< float, 4 > & p_color
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/renderer/renderer.hpp`

