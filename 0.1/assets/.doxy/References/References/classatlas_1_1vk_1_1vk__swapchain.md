

# Class atlas::vk::vk\_swapchain



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  [**vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) | [**active\_command\_buffer**](#function-active_command_buffer) (uint32\_t p\_frame) const<br> |
|  VkFramebuffer | [**active\_framebuffer**](#function-active_framebuffer) (uint32\_t p\_frame) const<br> |
|  void | [**configure**](#function-configure) (const [**window\_settings**](structatlas_1_1window__settings.md) & p\_settings) <br>_Constructs new swapchain with specified window-integration configuration settings._  |
|  [**surface\_properties**](structatlas_1_1vk_1_1surface__properties.md) | [**data**](#function-data) () const<br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  uint32\_t | [**image\_size**](#function-image_size) () const<br> |
|   | [**operator VkSwapchainKHR**](#function-operator-vkswapchainkhr-12) () const<br> |
|   | [**operator VkSwapchainKHR**](#function-operator-vkswapchainkhr-22) () <br> |
|  void | [**present**](#function-present) (const uint32\_t & p\_current\_frame) <br> |
|  uint32\_t | [**read\_acquired\_image**](#function-read_acquired_image) () <br>_Used for when swapchain is resized then only reconfigured properties to get resizability._  |
|  [**window\_settings**](structatlas_1_1window__settings.md) | [**settings**](#function-settings) () const<br> |
|  void | [**submit**](#function-submit) (const VkCommandBuffer & p\_command) <br> |
|  VkRenderPass | [**swapchain\_renderpass**](#function-swapchain_renderpass) () const<br> |
|   | [**vk\_swapchain**](#function-vk_swapchain-12) () = default<br> |
|   | [**vk\_swapchain**](#function-vk_swapchain-22) (const VkSurfaceKHR & p\_surface, const [**window\_settings**](structatlas_1_1window__settings.md) & p\_settings) <br>_Constructs a new vulkan swapchain with a window settings to apply to this swapchain._  |




























## Public Functions Documentation




### function active\_command\_buffer 

```C++
inline vk_command_buffer atlas::vk::vk_swapchain::active_command_buffer (
    uint32_t p_frame
) const
```





**Returns:**

current active command buffer being processed 





        

<hr>



### function active\_framebuffer 

```C++
inline VkFramebuffer atlas::vk::vk_swapchain::active_framebuffer (
    uint32_t p_frame
) const
```




<hr>



### function configure 

_Constructs new swapchain with specified window-integration configuration settings._ 
```C++
void atlas::vk::vk_swapchain::configure (
    const window_settings & p_settings
) 
```




<hr>



### function data 

```C++
inline surface_properties atlas::vk::vk_swapchain::data () const
```




<hr>



### function destroy 

```C++
void atlas::vk::vk_swapchain::destroy () 
```




<hr>



### function image\_size 

```C++
inline uint32_t atlas::vk::vk_swapchain::image_size () const
```




<hr>



### function operator VkSwapchainKHR [1/2]

```C++
inline atlas::vk::vk_swapchain::operator VkSwapchainKHR () const
```




<hr>



### function operator VkSwapchainKHR [2/2]

```C++
inline atlas::vk::vk_swapchain::operator VkSwapchainKHR () 
```




<hr>



### function present 

```C++
void atlas::vk::vk_swapchain::present (
    const uint32_t & p_current_frame
) 
```




<hr>



### function read\_acquired\_image 

_Used for when swapchain is resized then only reconfigured properties to get resizability._ 
```C++
uint32_t atlas::vk::vk_swapchain::read_acquired_image () 
```





**Returns:**

uint32\_t the next available image to present acquired 





        

<hr>



### function settings 

```C++
inline window_settings atlas::vk::vk_swapchain::settings () const
```




<hr>



### function submit 

```C++
void atlas::vk::vk_swapchain::submit (
    const VkCommandBuffer & p_command
) 
```




<hr>



### function swapchain\_renderpass 

```C++
inline VkRenderPass atlas::vk::vk_swapchain::swapchain_renderpass () const
```




<hr>



### function vk\_swapchain [1/2]

```C++
atlas::vk::vk_swapchain::vk_swapchain () = default
```




<hr>



### function vk\_swapchain [2/2]

_Constructs a new vulkan swapchain with a window settings to apply to this swapchain._ 
```C++
atlas::vk::vk_swapchain::vk_swapchain (
    const VkSurfaceKHR & p_surface,
    const window_settings & p_settings
) 
```





**Parameters:**


* `p_surface` passing in the surface handler for swapchain uses 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_swapchain.hpp`

