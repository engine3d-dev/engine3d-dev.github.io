

# Class atlas::vk::VulkanUniformBuffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**VulkanUniformBuffer**](classatlas_1_1vk_1_1VulkanUniformBuffer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**AllocateUniforms**](#function-allocateuniforms) () <br> |
|  void | [**MapWrite**](#function-mapwrite) (uint32\_t p\_size, uint32\_t p\_offset, const void \* p\_src) <br> |
|   | [**VulkanUniformBuffer**](#function-vulkanuniformbuffer-12) () = default<br> |
|   | [**VulkanUniformBuffer**](#function-vulkanuniformbuffer-22) (uint32\_t p\_size, uint32\_t p\_count) <br> |




























## Public Functions Documentation




### function AllocateUniforms 

```C++
void atlas::vk::VulkanUniformBuffer::AllocateUniforms () 
```




<hr>



### function MapWrite 

```C++
void atlas::vk::VulkanUniformBuffer::MapWrite (
    uint32_t p_size,
    uint32_t p_offset,
    const void * p_src
) 
```




<hr>



### function VulkanUniformBuffer [1/2]

```C++
atlas::vk::VulkanUniformBuffer::VulkanUniformBuffer () = default
```




<hr>



### function VulkanUniformBuffer [2/2]

```C++
atlas::vk::VulkanUniformBuffer::VulkanUniformBuffer (
    uint32_t p_size,
    uint32_t p_count
) 
```





**Parameters:**


* `p_size` is the buffer size 
* `p_count` instance count 




        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_uniform_buffer.hpp`

