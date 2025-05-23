

# Class atlas::vk::vk\_window



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_window**](classatlas_1_1vk_1_1vk__window.md)








Inherits the following classes: [atlas::window](classatlas_1_1window.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_window**](#function-vk_window) (uint32\_t p\_width, uint32\_t p\_height, const std::string & p\_tag) <br> |
|   | [**~vk\_window**](#function-vk_window) () override<br> |


## Public Functions inherited from atlas::window

See [atlas::window](classatlas_1_1window.md)

| Type | Name |
| ---: | :--- |
|  void | [**close**](classatlas_1_1window.md#function-close) () <br> |
|  float | [**get\_aspect\_ratio**](classatlas_1_1window.md#function-get_aspect_ratio) () const<br> |
|  ref&lt; [**swapchain**](classatlas_1_1swapchain.md) &gt; | [**get\_current\_swapchain**](classatlas_1_1window.md#function-get_current_swapchain) () <br> |
|  uint32\_t | [**get\_height**](classatlas_1_1window.md#function-get_height) () const<br> |
|  GLFWwindow \* | [**get\_native\_window**](classatlas_1_1window.md#function-get_native_window) () const<br> |
|  uint32\_t | [**get\_width**](classatlas_1_1window.md#function-get_width) () const<br> |
|  bool | [**is\_active**](classatlas_1_1window.md#function-is_active) () const<br> |
|   | [**operator GLFWwindow \***](classatlas_1_1window.md#function-operator-glfwwindow-*) () <br> |
| virtual  | [**~window**](classatlas_1_1window.md#function-window) () = default<br> |




## Public Static Functions inherited from atlas::window

See [atlas::window](classatlas_1_1window.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**window**](classatlas_1_1window.md) &gt; | [**create**](classatlas_1_1window.md#function-create) (uint32\_t p\_width, uint32\_t p\_height, const std::string & p\_tag="Undefined Window Title") <br> |


















































## Public Functions Documentation




### function vk\_window 

```C++
atlas::vk::vk_window::vk_window (
    uint32_t p_width,
    uint32_t p_height,
    const std::string & p_tag
) 
```




<hr>



### function ~vk\_window 

```C++
atlas::vk::vk_window::~vk_window () override
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_window.hpp`

