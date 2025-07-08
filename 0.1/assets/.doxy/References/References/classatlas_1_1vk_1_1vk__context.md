

# Class atlas::vk::vk\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_context**](classatlas_1_1vk_1_1vk__context.md)








Inherits the following classes: [atlas::graphics\_context](classatlas_1_1graphics__context.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_context**](#function-vk_context) (const std::string & p\_tag) <br> |


## Public Functions inherited from atlas::graphics_context

See [atlas::graphics\_context](classatlas_1_1graphics__context.md)

| Type | Name |
| ---: | :--- |
|  void | [**destroy**](classatlas_1_1graphics__context.md#function-destroy) () <br> |
| virtual  | [**~graphics\_context**](classatlas_1_1graphics__context.md#function-graphics_context) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md) | [**driver\_context**](#function-driver_context) () <br> |
|  VkInstance | [**handler**](#function-handler) () <br> |
|  [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) | [**physical\_driver**](#function-physical_driver) () <br> |
|  void | [**submit\_resource\_free**](#function-submit_resource_free) (std::function&lt; void()&gt; && p\_resource) <br> |




















































## Public Functions Documentation




### function vk\_context 

```C++
atlas::vk::vk_context::vk_context (
    const std::string & p_tag
) 
```




<hr>
## Public Static Functions Documentation




### function driver\_context 

```C++
static inline vk_driver atlas::vk::vk_context::driver_context () 
```




<hr>



### function handler 

```C++
static VkInstance atlas::vk::vk_context::handler () 
```




<hr>



### function physical\_driver 

```C++
static inline vk_physical_driver atlas::vk::vk_context::physical_driver () 
```




<hr>



### function submit\_resource\_free 

```C++
static void atlas::vk::vk_context::submit_resource_free (
    std::function< void()> && p_resource
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_context.hpp`

