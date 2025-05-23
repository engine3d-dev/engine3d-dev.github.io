

# Namespace atlas::vk



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md)




















## Classes

| Type | Name |
| ---: | :--- |
| class | [**BufferTutorial**](classatlas_1_1vk_1_1BufferTutorial.md) <br> |
| class | [**VulkanDescriptorSets**](classatlas_1_1vk_1_1VulkanDescriptorSets.md) <br> |
| class | [**VulkanPipeline**](classatlas_1_1vk_1_1VulkanPipeline.md) <br> |
| class | [**VulkanRenderPass**](classatlas_1_1vk_1_1VulkanRenderPass.md) <br> |
| class | [**VulkanUniformBuffer**](classatlas_1_1vk_1_1VulkanUniformBuffer.md) <br> |
| class | [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) <br> |
| class | [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) <br> |
| class | [**descriptor\_writer**](classatlas_1_1vk_1_1descriptor__writer.md) <br> |
| struct | [**shader\_pipeline\_config**](structatlas_1_1vk_1_1shader__pipeline__config.md) <br> |
| class | [**vk\_context**](classatlas_1_1vk_1_1vk__context.md) <br> |
| class | [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md) <br> |
| class | [**vk\_index\_buffer**](classatlas_1_1vk_1_1vk__index__buffer.md) <br> |
| class | [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) <br> |
| class | [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) <br> |
| class | [**vk\_shader**](classatlas_1_1vk_1_1vk__shader.md) <br> |
| class | [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) <br> |
| class | [**vk\_vertex\_buffer**](classatlas_1_1vk_1_1vk__vertex__buffer.md) <br> |
| class | [**vk\_window**](classatlas_1_1vk_1_1vk__window.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**ImageLayout**](#enum-imagelayout)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**BeginCommandBuffer**](#function-begincommandbuffer) (VkCommandBuffer \* p\_CommandBuffer) <br> |
|  void | [**EndCommandBuffer**](#function-endcommandbuffer) (VkCommandBuffer \* p\_CommandBuffer) <br> |
|  void | [**Submit**](#function-submit) (const std::function&lt; void()&gt; & Function) <br> |
|  void | [**SubmitResourceFree**](#function-submitresourcefree) (const std::function&lt; void()&gt; & Function) <br> |
|  void | [**begin\_command\_buffer**](#function-begin_command_buffer) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  VkCommandBuffer | [**begin\_single\_time\_command\_buffer**](#function-begin_single_time_command_buffer) (const VkCommandPool & p\_command\_pool) <br> |
|  VkCommandBuffer | [**create\_command\_buffer\_and\_record**](#function-create_command_buffer_and_record) (const VkDevice & p\_driver, const VkCommandPool & p\_command\_buffer) <br> |
|  VkCommandPool | [**create\_command\_pool**](#function-create_command_pool) () <br> |
|  VkImage | [**create\_image**](#function-create_image) (VkFormat p\_format, uint32\_t p\_width, uint32\_t p\_height) <br> |
|  VkImageView | [**create\_image\_view**](#function-create_image_view) (VkImage p\_image, VkFormat p\_format) <br> |
|  void | [**end\_command\_buffer**](#function-end_command_buffer) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**end\_single\_time\_command\_buffer**](#function-end_single_time_command_buffer) (const VkCommandBuffer & p\_command\_buffer, const VkCommandPool & p\_command\_pool) <br> |
|  void | [**pipeline\_image\_barrier**](#function-pipeline_image_barrier) (VkCommandBuffer p\_command\_buffer, VkImage Image, VkAccessFlags srcAccessmask, VkAccessFlags dstAccessMask, VkImageLayout OldImageLayout, VkImageLayout NewImageLayout, VkPipelineStageFlags srcStageFlags, VkPipelineStageFlags dstStageFlags, VkImageSubresourceRange subresourceRange) <br> |
|  void | [**submit**](#function-submit) (VkQueue p\_queue\_to\_use, const std::span&lt; VkCommandBuffer &gt; & p\_command\_buffers) <br> |
|  void | [**vk\_check**](#function-vk_check) (VkResult p\_result, const char \* p\_tag, const char \* p\_filepath, uint32\_t p\_line, const char \* p\_function\_name) <br> |
|  void | [**vk\_check\_format**](#function-vk_check_format) (VkFormat p\_format, const char \* p\_filepath, uint32\_t p\_line, const char \* p\_function\_name) <br> |
|  std::string | [**vk\_queue\_flags\_to\_string**](#function-vk_queue_flags_to_string) (VkQueueFlagBits p\_flags) <br> |




























## Public Types Documentation




### enum ImageLayout 

```C++
enum atlas::vk::ImageLayout;
```




<hr>
## Public Functions Documentation




### function BeginCommandBuffer 

```C++
void atlas::vk::BeginCommandBuffer (
    VkCommandBuffer * p_CommandBuffer
) 
```




<hr>



### function EndCommandBuffer 

```C++
void atlas::vk::EndCommandBuffer (
    VkCommandBuffer * p_CommandBuffer
) 
```




<hr>



### function Submit 

```C++
void atlas::vk::Submit (
    const std::function< void()> & Function
) 
```



 This directly sends our information task directly to the GPU });


 This directly gets submitted to a queue for handling cleanup for the specific operation Use case is if we wanted to cleanup imgui when at deconstruction for when the application ends, they get called here, and then added to queue for cleanup }); 


        

<hr>



### function SubmitResourceFree 

```C++
void atlas::vk::SubmitResourceFree (
    const std::function< void()> & Function
) 
```




<hr>



### function begin\_command\_buffer 

```C++
void atlas::vk::begin_command_buffer (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function begin\_single\_time\_command\_buffer 

```C++
VkCommandBuffer atlas::vk::begin_single_time_command_buffer (
    const VkCommandPool & p_command_pool
) 
```




<hr>



### function create\_command\_buffer\_and\_record 

```C++
VkCommandBuffer atlas::vk::create_command_buffer_and_record (
    const VkDevice & p_driver,
    const VkCommandPool & p_command_buffer
) 
```




<hr>



### function create\_command\_pool 

```C++
VkCommandPool atlas::vk::create_command_pool () 
```




<hr>



### function create\_image 

```C++
VkImage atlas::vk::create_image (
    VkFormat p_format,
    uint32_t p_width,
    uint32_t p_height
) 
```




<hr>



### function create\_image\_view 

```C++
VkImageView atlas::vk::create_image_view (
    VkImage p_image,
    VkFormat p_format
) 
```




<hr>



### function end\_command\_buffer 

```C++
void atlas::vk::end_command_buffer (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function end\_single\_time\_command\_buffer 

```C++
void atlas::vk::end_single_time_command_buffer (
    const VkCommandBuffer & p_command_buffer,
    const VkCommandPool & p_command_pool
) 
```




<hr>



### function pipeline\_image\_barrier 

```C++
void atlas::vk::pipeline_image_barrier (
    VkCommandBuffer p_command_buffer,
    VkImage Image,
    VkAccessFlags srcAccessmask,
    VkAccessFlags dstAccessMask,
    VkImageLayout OldImageLayout,
    VkImageLayout NewImageLayout,
    VkPipelineStageFlags srcStageFlags,
    VkPipelineStageFlags dstStageFlags,
    VkImageSubresourceRange subresourceRange
) 
```




<hr>



### function submit 

```C++
void atlas::vk::submit (
    VkQueue p_queue_to_use,
    const std::span< VkCommandBuffer > & p_command_buffers
) 
```




<hr>



### function vk\_check 

```C++
void atlas::vk::vk_check (
    VkResult p_result,
    const char * p_tag,
    const char * p_filepath,
    uint32_t p_line,
    const char * p_function_name
) 
```





**Note:**

Terminates if the result was unsuccessful! 




**Note:**

TODO  We shouldn't std::terminate, look into alternatives. 





        

<hr>



### function vk\_check\_format 

```C++
void atlas::vk::vk_check_format (
    VkFormat p_format,
    const char * p_filepath,
    uint32_t p_line,
    const char * p_function_name
) 
```




<hr>



### function vk\_queue\_flags\_to\_string 

```C++
std::string atlas::vk::vk_queue_flags_to_string (
    VkQueueFlagBits p_flags
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/buffer_tutorial.hpp`

