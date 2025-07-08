

# Class atlas::vk::vk\_present\_queue



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_present\_queue**](classatlas_1_1vk_1_1vk__present__queue.md)



_Handles submissions to the specific queue for presentation._ [More...](#detailed-description)

* `#include <vk_present_queue.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**acquired\_frame**](#function-acquired_frame) () <br> |
|  void | [**destroy**](#function-destroy) () <br>_Explicitly invoking cleanup for the presentation queue._  |
|  bool | [**is\_alive**](#function-is_alive) () const<br> |
|   | [**operator VkQueue**](#function-operator-vkqueue-12) () <br> |
|   | [**operator VkQueue**](#function-operator-vkqueue-22) () const<br> |
|  void | [**present\_frame**](#function-present_frame) (const uint32\_t & p\_current\_frame) <br>_Then again, this probably won't be needed._  |
|  bool | [**resize\_requested**](#function-resize_requested) () const<br> |
|  void | [**set\_resize\_status**](#function-set_resize_status) (bool p\_status) <br> |
|  void | [**submit\_immediate\_async**](#function-submit_immediate_async) (const VkCommandBuffer & p\_command) <br>_Submitting current command buffer with async enabled._  |
|  void | [**submit\_immediate\_sync**](#function-submit_immediate_sync) (const VkCommandBuffer & p\_command) <br>_Submitting current command buffer with async disabled._  |
|   | [**vk\_present\_queue**](#function-vk_present_queue-12) () = default<br> |
|   | [**vk\_present\_queue**](#function-vk_present_queue-22) (const VkSwapchainKHR & p\_swapchain, const [**vk\_queue\_options**](structatlas_1_1vk_1_1vk__queue__options.md) & p\_queue\_options) <br>_Constructs new presentation queue._  |
|  void | [**wait\_idle**](#function-wait_idle) () <br>_Ensures that operations finished within this queue before processing new frames._  |




























## Detailed Description


This queue is for submitting presentation images through this queue that gets displayed onto the swapchain


Used by the [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) to present currently processed command buffers to the swapchain 


    
## Public Functions Documentation




### function acquired\_frame 

```C++
uint32_t atlas::vk::vk_present_queue::acquired_frame () 
```





**Returns:**

uint32\_t next index to the presentable image for the current frame 





        

<hr>



### function destroy 

_Explicitly invoking cleanup for the presentation queue._ 
```C++
void atlas::vk::vk_present_queue::destroy () 
```




<hr>



### function is\_alive 

```C++
inline bool atlas::vk::vk_present_queue::is_alive () const
```





**Returns:**

bool if the presentation queue handler is valid or not 





        

<hr>



### function operator VkQueue [1/2]

```C++
inline atlas::vk::vk_present_queue::operator VkQueue () 
```




<hr>



### function operator VkQueue [2/2]

```C++
inline atlas::vk::vk_present_queue::operator VkQueue () const
```




<hr>



### function present\_frame 

_Then again, this probably won't be needed._ 
```C++
void atlas::vk::vk_present_queue::present_frame (
    const uint32_t & p_current_frame
) 
```





**Parameters:**


* `p_current_frame` current frame of image presentable to the swapchain 




        

<hr>



### function resize\_requested 

```C++
inline bool atlas::vk::vk_present_queue::resize_requested () const
```




<hr>



### function set\_resize\_status 

```C++
inline void atlas::vk::vk_present_queue::set_resize_status (
    bool p_status
) 
```




<hr>



### function submit\_immediate\_async 

_Submitting current command buffer with async enabled._ 
```C++
void atlas::vk::vk_present_queue::submit_immediate_async (
    const VkCommandBuffer & p_command
) 
```




<hr>



### function submit\_immediate\_sync 

_Submitting current command buffer with async disabled._ 
```C++
void atlas::vk::vk_present_queue::submit_immediate_sync (
    const VkCommandBuffer & p_command
) 
```




<hr>



### function vk\_present\_queue [1/2]

```C++
atlas::vk::vk_present_queue::vk_present_queue () = default
```




<hr>



### function vk\_present\_queue [2/2]

_Constructs new presentation queue._ 
```C++
atlas::vk::vk_present_queue::vk_present_queue (
    const VkSwapchainKHR & p_swapchain,
    const vk_queue_options & p_queue_options
) 
```





**Parameters:**


* `p_swapchain` presentation queue needs a swapchain of where the images are being rendered to 
* `p_queue_options` specifies options on the types of queue family index, and queue associated index to which queue family handler for submitting work to 




        

<hr>



### function wait\_idle 

_Ensures that operations finished within this queue before processing new frames._ 
```C++
void atlas::vk::vk_present_queue::wait_idle () 
```



Synchronization handling 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_present_queue.hpp`

