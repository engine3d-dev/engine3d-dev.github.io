

# Class atlas::application



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**application**](classatlas_1_1application.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**application**](#function-application) (const [**application\_settings**](structatlas_1_1application__settings.md) & p\_settings) <br> |
|  void | [**execute**](#function-execute) () <br> |
|  ref&lt; [**swapchain**](classatlas_1_1swapchain.md) &gt; | [**get\_current\_swapchain**](#function-get_current_swapchain) () <br> |
|   | [**~application**](#function-application) () <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  API | [**current\_api**](#function-current_api) () <br> |
|  float | [**delta\_time**](#function-delta_time) () <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  uint32\_t | [**get\_aspect\_ratio**](#function-get_aspect_ratio) () <br> |
|  [**window**](classatlas_1_1window.md) & | [**get\_window**](#function-get_window) () <br> |
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
ref< swapchain > atlas::application::get_current_swapchain () 
```




<hr>



### function ~application 

```C++
atlas::application::~application () 
```




<hr>
## Public Static Functions Documentation




### function current\_api 

```C++
static API atlas::application::current_api () 
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



### function get\_aspect\_ratio 

```C++
static uint32_t atlas::application::get_aspect_ratio () 
```




<hr>



### function get\_window 

```C++
static inline window & atlas::application::get_window () 
```




<hr>



### function physics\_step 

```C++
static float atlas::application::physics_step () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/application.hpp`

