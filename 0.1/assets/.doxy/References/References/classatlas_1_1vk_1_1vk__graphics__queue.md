

# Class atlas::vk::vk\_graphics\_queue



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_graphics\_queue**](classatlas_1_1vk_1_1vk__graphics__queue.md)



_graphics queue mainly used for submitting to the graphics family specific queue_ [More...](#detailed-description)

* `#include <vk_graphics_queue.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**destroy**](#function-destroy) () <br> |
|  void | [**immediate\_submit\_async**](#function-immediate_submit_async) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**immediate\_submit\_sync**](#function-immediate_submit_sync) (const VkCommandBuffer & p\_command\_buffer) <br> |
|   | [**operator VkQueue**](#function-operator-vkqueue-12) () <br> |
|   | [**operator VkQueue**](#function-operator-vkqueue-22) () const<br> |
|   | [**vk\_graphics\_queue**](#function-vk_graphics_queue-12) () = default<br> |
|   | [**vk\_graphics\_queue**](#function-vk_graphics_queue-22) (const [**vk\_queue\_options**](structatlas_1_1vk_1_1vk__queue__options.md) & p\_queue\_options) <br> |
|  void | [**wait\_idle**](#function-wait_idle) () <br> |




























## Detailed Description


Graphic Queues are used for submitting commands via rendering commands directly or indirectly to the GPU


Single graphics queue can only perform compute and transfer operations as well


Primarily used for rendeirng logic commands processing 


    
## Public Functions Documentation




### function destroy 

```C++
void atlas::vk::vk_graphics_queue::destroy () 
```




<hr>



### function immediate\_submit\_async 

```C++
void atlas::vk::vk_graphics_queue::immediate_submit_async (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function immediate\_submit\_sync 

```C++
void atlas::vk::vk_graphics_queue::immediate_submit_sync (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function operator VkQueue [1/2]

```C++
inline atlas::vk::vk_graphics_queue::operator VkQueue () 
```




<hr>



### function operator VkQueue [2/2]

```C++
inline atlas::vk::vk_graphics_queue::operator VkQueue () const
```




<hr>



### function vk\_graphics\_queue [1/2]

```C++
atlas::vk::vk_graphics_queue::vk_graphics_queue () = default
```




<hr>



### function vk\_graphics\_queue [2/2]

```C++
atlas::vk::vk_graphics_queue::vk_graphics_queue (
    const vk_queue_options & p_queue_options
) 
```




<hr>



### function wait\_idle 

```C++
void atlas::vk::vk_graphics_queue::wait_idle () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_graphics_queue.hpp`

