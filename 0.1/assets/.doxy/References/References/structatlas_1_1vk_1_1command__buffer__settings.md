

# Struct atlas::vk::command\_buffer\_settings



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**command\_buffer\_settings**](structatlas_1_1vk_1_1command__buffer__settings.md)



_settings for specifying command buffers to construct_ [More...](#detailed-description)

* `#include <vk_types.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  command\_buffer\_levels | [**levels**](#variable-levels)  <br> |
|  VkCommandPoolCreateFlagBits | [**pool\_flag**](#variable-pool_flag)  <br> |
|  uint32\_t | [**queue\_index**](#variable-queue_index)   = `-1`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**command\_buffer\_settings**](#function-command_buffer_settings) (uint32\_t p\_queue\_family, const command\_buffer\_levels & p\_levels, const VkCommandPoolCreateFlagBits & p\_pool\_flags) <br> |




























## Detailed Description




**Parameters:**


* `Levels` are for specifying the kind of command buffer being constructed

queue\_index specifies the queue family associated with this command buffer


pool\_flag in the context of the command buffers are used to control memory allocation behavior within the command buffer pool to allocate




**Parameters:**


* `VK_COMMAND_POOL_CREATE_TRANSIENT_BIT` Indicates command buffers allocated from pool will be short-lived, meaning they'll reset or freed quickly 
* `VK_COMMAND_POOL_CREATE_RESET_COMMAND_BUFFER_BIT` Allows individual command buffers allocated from the pool to be reset to their initial state using `vkResetCommandBuffer` 
* `VK_COMMAND_POOL_CREATE_PROTECTED_BIT` Designates command buffers allocated from the pool as protective command buffers, implying they are stored in protected memory and access to them is restricted to authorized operations 




    
## Public Attributes Documentation




### variable levels 

```C++
command_buffer_levels atlas::vk::command_buffer_settings::levels;
```




<hr>



### variable pool\_flag 

```C++
VkCommandPoolCreateFlagBits atlas::vk::command_buffer_settings::pool_flag;
```




<hr>



### variable queue\_index 

```C++
uint32_t atlas::vk::command_buffer_settings::queue_index;
```




<hr>
## Public Functions Documentation




### function command\_buffer\_settings 

```C++
inline atlas::vk::command_buffer_settings::command_buffer_settings (
    uint32_t p_queue_family,
    const command_buffer_levels & p_levels,
    const VkCommandPoolCreateFlagBits & p_pool_flags
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_types.hpp`

