

# Class atlas::vk::vk\_command\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md)



_Vulkan Command Buffers._ [More...](#detailed-description)

* `#include <vk_command_buffer.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin**](#function-begin) (const VkCommandBufferUsageFlags & p\_usage\_flags) <br>_Indication when for this command buffer to start recording (writing) commands to this command buffer._  |
|  void | [**destroy**](#function-destroy) () <br>_API for explicitly invoking cleanup on the command buffer._  |
|  void | [**end**](#function-end) () <br>_Indication when the command buffer to stop recording (write) commands to this buffer._  |
|  bool | [**is\_valid**](#function-is_valid) () const<br>_Enable to check for command buffers if they are valid._  |
|   | [**operator VkCommandBuffer**](#function-operator-vkcommandbuffer-12) () const<br> |
|   | [**operator VkCommandBuffer**](#function-operator-vkcommandbuffer-22) () <br> |
|   | [**vk\_command\_buffer**](#function-vk_command_buffer-12) () = default<br> |
|   | [**vk\_command\_buffer**](#function-vk_command_buffer-22) (const [**command\_buffer\_settings**](structatlas_1_1vk_1_1command__buffer__settings.md) & p\_settings) <br>_Constructs new command buffer._  |




























## Detailed Description


Use this to create a command buffer according to vulkan specifications


vulkan command buffer is how vulkan submits commands specifically directly or indirectly to the GPU via `vkQueueSubmit`


Command buffers in vulkan only know about the queue family they are associated with, their primary flag, and allocation operation associated with. 


    
## Public Functions Documentation




### function begin 

_Indication when for this command buffer to start recording (writing) commands to this command buffer._ 
```C++
void atlas::vk::vk_command_buffer::begin (
    const VkCommandBufferUsageFlags & p_usage_flags
) 
```




<hr>



### function destroy 

_API for explicitly invoking cleanup on the command buffer._ 
```C++
void atlas::vk::vk_command_buffer::destroy () 
```




<hr>



### function end 

_Indication when the command buffer to stop recording (write) commands to this buffer._ 
```C++
void atlas::vk::vk_command_buffer::end () 
```




<hr>



### function is\_valid 

_Enable to check for command buffers if they are valid._ 
```C++
inline bool atlas::vk::vk_command_buffer::is_valid () const
```




<hr>



### function operator VkCommandBuffer [1/2]

```C++
inline atlas::vk::vk_command_buffer::operator VkCommandBuffer () const
```




<hr>



### function operator VkCommandBuffer [2/2]

```C++
inline atlas::vk::vk_command_buffer::operator VkCommandBuffer () 
```




<hr>



### function vk\_command\_buffer [1/2]

```C++
atlas::vk::vk_command_buffer::vk_command_buffer () = default
```




<hr>



### function vk\_command\_buffer [2/2]

_Constructs new command buffer._ 
```C++
atlas::vk::vk_command_buffer::vk_command_buffer (
    const command_buffer_settings & p_settings
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_command_buffer.hpp`

