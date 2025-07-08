

# Class atlas::application



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**application**](classatlas_1_1application.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**application**](#function-application) (const [**application\_settings**](structatlas_1_1application__settings.md) & p\_settings) <br> |
|  void | [**execute**](#function-execute) () <br> |
|  VkSwapchainKHR | [**get\_current\_swapchain**](#function-get_current_swapchain) () <br> |
|  void | [**post\_destroy**](#function-post_destroy) () <br> |
|   | [**~application**](#function-application) () <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  float | [**aspect\_ratio**](#function-aspect_ratio) () <br> |
|  api | [**current\_api**](#function-current_api) () <br> |
|  uint32\_t | [**current\_frame**](#function-current_frame) () <br> |
|  float | [**delta\_time**](#function-delta_time) () <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  [**window**](classatlas_1_1window.md) & | [**get\_window**](#function-get_window) () <br> |
|  uint32\_t | [**image\_size**](#function-image_size) () <br>_Returns uint32\_t the size of images the swapchain accepts._  |
|  float | [**physics\_step**](#function-physics_step) () <br> |


























## Public Functions Documentation




### function application 

```C++
atlas::application::application (
    const application_settings & p_settings
) 
```




<hr>



### function execute 

```C++
void atlas::application::execute () 
```




<hr>



### function get\_current\_swapchain 

```C++
VkSwapchainKHR atlas::application::get_current_swapchain () 
```




<hr>



### function post\_destroy 

```C++
void atlas::application::post_destroy () 
```




<hr>



### function ~application 

```C++
atlas::application::~application () 
```




<hr>
## Public Static Functions Documentation




### function aspect\_ratio 

```C++
static float atlas::application::aspect_ratio () 
```




<hr>



### function current\_api 

```C++
static api atlas::application::current_api () 
```




<hr>



### function current\_frame 

```C++
static uint32_t atlas::application::current_frame () 
```




<hr>



### function delta\_time 

```C++
static float atlas::application::delta_time () 
```




<hr>



### function destroy 

```C++
static void atlas::application::destroy () 
```




<hr>



### function get\_window 

```C++
static inline window & atlas::application::get_window () 
```




<hr>



### function image\_size 

_Returns uint32\_t the size of images the swapchain accepts._ 
```C++
static uint32_t atlas::application::image_size () 
```




<hr>



### function physics\_step 

```C++
static float atlas::application::physics_step () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/application.hpp`

