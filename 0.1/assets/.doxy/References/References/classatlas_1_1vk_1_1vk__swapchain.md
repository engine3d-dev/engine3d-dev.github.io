

# Class atlas::vk::vk\_swapchain



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md)








Inherits the following classes: [atlas::swapchain](classatlas_1_1swapchain.md)


























## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  constexpr uint32\_t | [**max\_frames\_in\_flight**](#variable-max_frames_in_flight)   = `2`<br> |




























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_swapchain**](#function-vk_swapchain-12) () = default<br> |
|   | [**vk\_swapchain**](#function-vk_swapchain-22) (const [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) & p\_physical, const [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md) & p\_driver, const VkSurfaceKHR & p\_surface) <br> |
|   | [**~vk\_swapchain**](#function-vk_swapchain) () override<br> |


## Public Functions inherited from atlas::swapchain

See [atlas::swapchain](classatlas_1_1swapchain.md)

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**acquire\_next\_image**](classatlas_1_1swapchain.md#function-acquire_next_image) () <br> |
|  uint32\_t | [**get\_current\_per\_tick**](classatlas_1_1swapchain.md#function-get_current_per_tick) () <br> |
|  VkExtent2D | [**get\_extent**](classatlas_1_1swapchain.md#function-get_extent) () <br> |
|  VkFramebuffer | [**get\_framebuffer**](classatlas_1_1swapchain.md#function-get_framebuffer) (uint32\_t p\_index) <br> |
|  VkImageView | [**get\_image\_view**](classatlas_1_1swapchain.md#function-get_image_view) (uint32\_t p\_index) <br> |
|  uint32\_t | [**get\_images\_size**](classatlas_1_1swapchain.md#function-get_images_size) () const<br> |
|  VkRenderPass | [**get\_renderpass**](classatlas_1_1swapchain.md#function-get_renderpass) () <br> |
|  VkFormat & | [**get\_swapchain\_format**](classatlas_1_1swapchain.md#function-get_swapchain_format) () <br> |
|  VkSwapchainKHR | [**get\_vk\_swapchain**](classatlas_1_1swapchain.md#function-get_vk_swapchain) () <br> |
|  bool | [**is\_resized**](classatlas_1_1swapchain.md#function-is_resized) () <br> |
|  void | [**on\_resize**](classatlas_1_1swapchain.md#function-on_resize) (uint32\_t p\_width, uint32\_t p\_height) <br> |
|  void | [**set\_resize\_status**](classatlas_1_1swapchain.md#function-set_resize_status) (bool p\_is\_resized\_signaled) <br> |
|  void | [**submit\_command\_buffer**](classatlas_1_1swapchain.md#function-submit_command_buffer) (VkCommandBuffer \* p\_command\_buffers) <br> |
| virtual  | [**~swapchain**](classatlas_1_1swapchain.md#function-swapchain) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  bool | [**is\_resized**](#function-is_resized) () <br> |
|  void | [**resize\_reset**](#function-resize_reset) () <br> |


## Public Static Functions inherited from atlas::swapchain

See [atlas::swapchain](classatlas_1_1swapchain.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**swapchain**](classatlas_1_1swapchain.md) &gt; | [**initialize**](classatlas_1_1swapchain.md#function-initialize) (VkSurfaceKHR p\_surface) <br> |
|  bool | [**is\_rebuild**](classatlas_1_1swapchain.md#function-is_rebuild) () <br> |
|  void | [**reset\_build**](classatlas_1_1swapchain.md#function-reset_build) () <br> |


















































## Public Static Attributes Documentation




### variable max\_frames\_in\_flight 

```C++
constexpr uint32_t atlas::vk::vk_swapchain::max_frames_in_flight;
```





**Note:**

TODO: Change this into RendererConfig 





        

<hr>
## Public Functions Documentation




### function vk\_swapchain [1/2]

```C++
atlas::vk::vk_swapchain::vk_swapchain () = default
```




<hr>



### function vk\_swapchain [2/2]

```C++
atlas::vk::vk_swapchain::vk_swapchain (
    const vk_physical_driver & p_physical,
    const vk_driver & p_driver,
    const VkSurfaceKHR & p_surface
) 
```




<hr>



### function ~vk\_swapchain 

```C++
atlas::vk::vk_swapchain::~vk_swapchain () override
```




<hr>
## Public Static Functions Documentation




### function is\_resized 

```C++
static bool atlas::vk::vk_swapchain::is_resized () 
```




<hr>



### function resize\_reset 

```C++
static void atlas::vk::vk_swapchain::resize_reset () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_swapchain.hpp`

