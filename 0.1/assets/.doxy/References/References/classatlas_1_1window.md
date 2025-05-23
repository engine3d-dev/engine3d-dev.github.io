

# Class atlas::window



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**window**](classatlas_1_1window.md)










Inherited by the following classes: [atlas::vk::vk\_window](classatlas_1_1vk_1_1vk__window.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**close**](#function-close) () <br> |
|  float | [**get\_aspect\_ratio**](#function-get_aspect_ratio) () const<br> |
|  ref&lt; [**swapchain**](classatlas_1_1swapchain.md) &gt; | [**get\_current\_swapchain**](#function-get_current_swapchain) () <br> |
|  uint32\_t | [**get\_height**](#function-get_height) () const<br> |
|  GLFWwindow \* | [**get\_native\_window**](#function-get_native_window) () const<br> |
|  uint32\_t | [**get\_width**](#function-get_width) () const<br> |
|  bool | [**is\_active**](#function-is_active) () const<br> |
|   | [**operator GLFWwindow \***](#function-operator-glfwwindow-*) () <br> |
| virtual  | [**~window**](#function-window) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**window**](classatlas_1_1window.md) &gt; | [**create**](#function-create) (uint32\_t p\_width, uint32\_t p\_height, const std::string & p\_tag="Undefined Window Title") <br> |


























## Public Functions Documentation




### function close 

```C++
void atlas::window::close () 
```




<hr>



### function get\_aspect\_ratio 

```C++
float atlas::window::get_aspect_ratio () const
```




<hr>



### function get\_current\_swapchain 

```C++
ref< swapchain > atlas::window::get_current_swapchain () 
```




<hr>



### function get\_height 

```C++
uint32_t atlas::window::get_height () const
```




<hr>



### function get\_native\_window 

```C++
GLFWwindow * atlas::window::get_native_window () const
```




<hr>



### function get\_width 

```C++
uint32_t atlas::window::get_width () const
```




<hr>



### function is\_active 

```C++
bool atlas::window::is_active () const
```




<hr>



### function operator GLFWwindow \* 

```C++
inline atlas::window::operator GLFWwindow * () 
```





**Note:**

This treats our window class to be able to get called like a "GLFWwindow\*" 





        

<hr>



### function ~window 

```C++
virtual atlas::window::~window () = default
```




<hr>
## Public Static Functions Documentation




### function create 

```C++
static ref< window > atlas::window::create (
    uint32_t p_width,
    uint32_t p_height,
    const std::string & p_tag="Undefined Window Title"
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/window.hpp`

