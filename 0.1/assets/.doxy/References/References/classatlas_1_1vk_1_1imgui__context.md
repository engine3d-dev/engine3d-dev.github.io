

# Class atlas::vk::imgui\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**imgui\_context**](classatlas_1_1vk_1_1imgui__context.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin**](#function-begin) (const VkCommandBuffer & p\_current, const uint32\_t & p\_current\_frame\_idx) <br> |
|  void | [**draw\_hud**](#function-draw_hud) (const [**hud\_data**](structatlas_1_1vk_1_1hud__data.md) & p\_test, const [**window\_settings**](structatlas_1_1window__settings.md) & p\_settings) <br> |
|  void | [**end**](#function-end) () <br> |
|   | [**imgui\_context**](#function-imgui_context-12) () = default<br> |
|   | [**imgui\_context**](#function-imgui_context-22) (GLFWwindow \* p\_window\_handler, const [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) & p\_current\_swapchain\_handler, const VkRenderPass & p\_current\_renderpass) <br> |
|  void | [**recreate**](#function-recreate) (GLFWwindow \* p\_window\_handler, const uint32\_t & p\_image\_size, const VkRenderPass & p\_current\_renderpass) <br> |




























## Public Functions Documentation




### function begin 

```C++
void atlas::vk::imgui_context::begin (
    const VkCommandBuffer & p_current,
    const uint32_t & p_current_frame_idx
) 
```




<hr>



### function draw\_hud 

```C++
void atlas::vk::imgui_context::draw_hud (
    const hud_data & p_test,
    const window_settings & p_settings
) 
```




<hr>



### function end 

```C++
void atlas::vk::imgui_context::end () 
```




<hr>



### function imgui\_context [1/2]

```C++
atlas::vk::imgui_context::imgui_context () = default
```




<hr>



### function imgui\_context [2/2]

```C++
atlas::vk::imgui_context::imgui_context (
    GLFWwindow * p_window_handler,
    const vk_swapchain & p_current_swapchain_handler,
    const VkRenderPass & p_current_renderpass
) 
```




<hr>



### function recreate 

```C++
void atlas::vk::imgui_context::recreate (
    GLFWwindow * p_window_handler,
    const uint32_t & p_image_size,
    const VkRenderPass & p_current_renderpass
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_imgui.hpp`

