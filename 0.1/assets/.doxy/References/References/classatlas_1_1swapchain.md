

# Class atlas::swapchain



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**swapchain**](classatlas_1_1swapchain.md)










Inherited by the following classes: [atlas::vk::vk\_swapchain](classatlas_1_1vk_1_1vk__swapchain.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**acquire\_next\_image**](#function-acquire_next_image) () <br> |
|  uint32\_t | [**get\_current\_per\_tick**](#function-get_current_per_tick) () <br> |
|  VkExtent2D | [**get\_extent**](#function-get_extent) () <br> |
|  VkFramebuffer | [**get\_framebuffer**](#function-get_framebuffer) (uint32\_t p\_index) <br> |
|  VkImageView | [**get\_image\_view**](#function-get_image_view) (uint32\_t p\_index) <br> |
|  uint32\_t | [**get\_images\_size**](#function-get_images_size) () const<br> |
|  VkRenderPass | [**get\_renderpass**](#function-get_renderpass) () <br> |
|  VkFormat & | [**get\_swapchain\_format**](#function-get_swapchain_format) () <br> |
|  VkSwapchainKHR | [**get\_vk\_swapchain**](#function-get_vk_swapchain) () <br> |
|  bool | [**is\_resized**](#function-is_resized) () <br> |
|  void | [**on\_resize**](#function-on_resize) (uint32\_t p\_width, uint32\_t p\_height) <br> |
|  void | [**set\_resize\_status**](#function-set_resize_status) (bool p\_is\_resized\_signaled) <br> |
|  void | [**submit\_command\_buffer**](#function-submit_command_buffer) (VkCommandBuffer \* p\_command\_buffers) <br> |
| virtual  | [**~swapchain**](#function-swapchain) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**swapchain**](classatlas_1_1swapchain.md) &gt; | [**initialize**](#function-initialize) (VkSurfaceKHR p\_surface) <br> |
|  bool | [**is\_rebuild**](#function-is_rebuild) () <br> |
|  void | [**reset\_build**](#function-reset_build) () <br> |


























## Public Functions Documentation




### function acquire\_next\_image 

```C++
uint32_t atlas::swapchain::acquire_next_image () 
```





**Note:**

Proceeds to getting next frame. 





        

<hr>



### function get\_current\_per\_tick 

```C++
uint32_t atlas::swapchain::get_current_per_tick () 
```





**Returns:**

m\_CurrentFrameIdx 





        

<hr>



### function get\_extent 

```C++
VkExtent2D atlas::swapchain::get_extent () 
```




<hr>



### function get\_framebuffer 

```C++
VkFramebuffer atlas::swapchain::get_framebuffer (
    uint32_t p_index
) 
```




<hr>



### function get\_image\_view 

```C++
VkImageView atlas::swapchain::get_image_view (
    uint32_t p_index
) 
```




<hr>



### function get\_images\_size 

```C++
uint32_t atlas::swapchain::get_images_size () const
```




<hr>



### function get\_renderpass 

```C++
VkRenderPass atlas::swapchain::get_renderpass () 
```




<hr>



### function get\_swapchain\_format 

```C++
VkFormat & atlas::swapchain::get_swapchain_format () 
```




<hr>



### function get\_vk\_swapchain 

```C++
VkSwapchainKHR atlas::swapchain::get_vk_swapchain () 
```




<hr>



### function is\_resized 

```C++
bool atlas::swapchain::is_resized () 
```




<hr>



### function on\_resize 

```C++
void atlas::swapchain::on_resize (
    uint32_t p_width,
    uint32_t p_height
) 
```





**Note:**

Public API's 





        

<hr>



### function set\_resize\_status 

```C++
void atlas::swapchain::set_resize_status (
    bool p_is_resized_signaled
) 
```




<hr>



### function submit\_command\_buffer 

```C++
void atlas::swapchain::submit_command_buffer (
    VkCommandBuffer * p_command_buffers
) 
```




<hr>



### function ~swapchain 

```C++
virtual atlas::swapchain::~swapchain () = default
```




<hr>
## Public Static Functions Documentation




### function initialize 

```C++
static ref< swapchain > atlas::swapchain::initialize (
    VkSurfaceKHR p_surface
) 
```





**Note:**

Initialize our swapchain 





        

<hr>



### function is\_rebuild 

```C++
static bool atlas::swapchain::is_rebuild () 
```




<hr>



### function reset\_build 

```C++
static void atlas::swapchain::reset_build () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/swapchain.hpp`

