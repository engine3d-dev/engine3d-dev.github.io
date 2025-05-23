

# Class atlas::vk::vk\_renderer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md)








Inherits the following classes: [atlas::render\_context](classatlas_1_1render__context.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_renderer**](#function-vk_renderer) (const std::string & tag) <br> |
|   | [**~vk\_renderer**](#function-vk_renderer) () override<br> |


## Public Functions inherited from atlas::render_context

See [atlas::render\_context](classatlas_1_1render__context.md)

| Type | Name |
| ---: | :--- |
|  void | [**begin**](classatlas_1_1render__context.md#function-begin) () <br> |
|  void | [**end**](classatlas_1_1render__context.md#function-end) () <br> |
| virtual  | [**~render\_context**](classatlas_1_1render__context.md#function-render_context) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  VkFramebuffer | [**current\_frame\_buffer**](#function-current_frame_buffer) () <br> |
|  VkCommandBuffer | [**get\_current\_command\_buffer**](#function-get_current_command_buffer) () <br> |
|  uint32\_t | [**get\_current\_command\_buffer\_index**](#function-get_current_command_buffer_index) () <br> |


## Public Static Functions inherited from atlas::render_context

See [atlas::render\_context](classatlas_1_1render__context.md)

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**get\_current\_frame**](classatlas_1_1render__context.md#function-get_current_frame) () <br> |
|  scope&lt; [**render\_context**](classatlas_1_1render__context.md) &gt; | [**initialize**](classatlas_1_1render__context.md#function-initialize) (const std::string & p\_tag) <br> |


















































## Public Functions Documentation




### function vk\_renderer 

```C++
atlas::vk::vk_renderer::vk_renderer (
    const std::string & tag
) 
```




<hr>



### function ~vk\_renderer 

```C++
atlas::vk::vk_renderer::~vk_renderer () override
```




<hr>
## Public Static Functions Documentation




### function current\_frame\_buffer 

```C++
static VkFramebuffer atlas::vk::vk_renderer::current_frame_buffer () 
```




<hr>



### function get\_current\_command\_buffer 

```C++
static VkCommandBuffer atlas::vk::vk_renderer::get_current_command_buffer () 
```





**Note:**

Implementation-details for sending draw calls. 





        

<hr>



### function get\_current\_command\_buffer\_index 

```C++
static uint32_t atlas::vk::vk_renderer::get_current_command_buffer_index () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_renderer.hpp`

