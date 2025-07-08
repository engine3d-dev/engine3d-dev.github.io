

# Class atlas::vk::vk\_window



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_window**](classatlas_1_1vk_1_1vk__window.md)








Inherits the following classes: [atlas::window](classatlas_1_1window.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_window**](#function-vk_window) (const [**window\_settings**](structatlas_1_1window__settings.md) & p\_settings) <br> |
|   | [**~vk\_window**](#function-vk_window) () override<br> |


## Public Functions inherited from atlas::window

See [atlas::window](classatlas_1_1window.md)

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**acquired\_next\_frame**](classatlas_1_1window.md#function-acquired_next_frame) () <br>_Returns the available presentable image to use, retrieve index that image is called._  |
|  [**vk::vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) | [**active\_command\_buffer**](classatlas_1_1window.md#function-active_command_buffer) (uint32\_t p\_frame\_idx) <br> |
|  float | [**aspect\_ratio**](classatlas_1_1window.md#function-aspect_ratio) () const<br>_Returns the aspect ratio of the current window._  |
|  bool | [**available**](classatlas_1_1window.md#function-available) () const<br>_Checks if window is available to close._  |
|  void | [**close**](classatlas_1_1window.md#function-close) () <br>_Closing the window operation._  |
|  [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) | [**current\_swapchain**](classatlas_1_1window.md#function-current_swapchain) () const<br>_Returns the window's currently selected swapchain._  |
|  uint32\_t | [**height**](classatlas_1_1window.md#function-height) () const<br>_Returns the height dimension of the window._  |
|   | [**operator GLFWwindow \***](classatlas_1_1window.md#function-operator-glfwwindow-*-12) () const<br> |
|   | [**operator GLFWwindow \***](classatlas_1_1window.md#function-operator-glfwwindow-*-22) () <br> |
|  void | [**present**](classatlas_1_1window.md#function-present) (const uint32\_t & p\_current\_frame\_idx) <br> |
|  uint32\_t | [**width**](classatlas_1_1window.md#function-width) () const<br>_Returns the width dimension of the window._  |
| virtual  | [**~window**](classatlas_1_1window.md#function-window) () = default<br> |






















































## Public Functions Documentation




### function vk\_window 

```C++
atlas::vk::vk_window::vk_window (
    const window_settings & p_settings
) 
```




<hr>



### function ~vk\_window 

```C++
atlas::vk::vk_window::~vk_window () override
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_window.hpp`

