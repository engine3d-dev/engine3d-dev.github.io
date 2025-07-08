

# Class atlas::window



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**window**](classatlas_1_1window.md)










Inherited by the following classes: [atlas::vk::vk\_window](classatlas_1_1vk_1_1vk__window.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**acquired\_next\_frame**](#function-acquired_next_frame) () <br>_Returns the available presentable image to use, retrieve index that image is called._  |
|  [**vk::vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) | [**active\_command\_buffer**](#function-active_command_buffer) (uint32\_t p\_frame\_idx) <br> |
|  float | [**aspect\_ratio**](#function-aspect_ratio) () const<br>_Returns the aspect ratio of the current window._  |
|  bool | [**available**](#function-available) () const<br>_Checks if window is available to close._  |
|  void | [**close**](#function-close) () <br>_Closing the window operation._  |
|  [**vk::vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) | [**current\_swapchain**](#function-current_swapchain) () const<br>_Returns the window's currently selected swapchain._  |
|  uint32\_t | [**height**](#function-height) () const<br>_Returns the height dimension of the window._  |
|   | [**operator GLFWwindow \***](#function-operator-glfwwindow-*-12) () const<br> |
|   | [**operator GLFWwindow \***](#function-operator-glfwwindow-*-22) () <br> |
|  void | [**present**](#function-present) (const uint32\_t & p\_current\_frame\_idx) <br> |
|  uint32\_t | [**width**](#function-width) () const<br>_Returns the width dimension of the window._  |
| virtual  | [**~window**](#function-window) () = default<br> |




























## Public Functions Documentation




### function acquired\_next\_frame 

_Returns the available presentable image to use, retrieve index that image is called._ 
```C++
inline uint32_t atlas::window::acquired_next_frame () 
```




<hr>



### function active\_command\_buffer 

```C++
inline vk::vk_command_buffer atlas::window::active_command_buffer (
    uint32_t p_frame_idx
) 
```




<hr>



### function aspect\_ratio 

_Returns the aspect ratio of the current window._ 
```C++
float atlas::window::aspect_ratio () const
```




<hr>



### function available 

_Checks if window is available to close._ 
```C++
bool atlas::window::available () const
```




<hr>



### function close 

_Closing the window operation._ 
```C++
void atlas::window::close () 
```




<hr>



### function current\_swapchain 

_Returns the window's currently selected swapchain._ 
```C++
inline vk::vk_swapchain atlas::window::current_swapchain () const
```




<hr>



### function height 

_Returns the height dimension of the window._ 
```C++
uint32_t atlas::window::height () const
```




<hr>



### function operator GLFWwindow \* [1/2]

```C++
inline atlas::window::operator GLFWwindow * () const
```




<hr>



### function operator GLFWwindow \* [2/2]

```C++
inline atlas::window::operator GLFWwindow * () 
```




<hr>



### function present 

```C++
void atlas::window::present (
    const uint32_t & p_current_frame_idx
) 
```





**Parameters:**


* `p_current_frame_idx` is the current frame index for the next available image 




        

<hr>



### function width 

_Returns the width dimension of the window._ 
```C++
uint32_t atlas::window::width () const
```




<hr>



### function ~window 

```C++
virtual atlas::window::~window () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/window.hpp`

