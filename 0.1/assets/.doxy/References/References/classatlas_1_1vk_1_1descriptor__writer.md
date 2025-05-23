

# Class atlas::vk::descriptor\_writer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_writer**](classatlas_1_1vk_1_1descriptor__writer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**build**](#function-build) (VkDescriptorSet & set) <br> |
|   | [**descriptor\_writer**](#function-descriptor_writer) ([**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) & setLayout, [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) & pool) <br> |
|  void | [**overwrite**](#function-overwrite) (VkDescriptorSet & set) <br> |
|  [**descriptor\_writer**](classatlas_1_1vk_1_1descriptor__writer.md) & | [**writeBuffer**](#function-writebuffer) (uint32\_t binding, VkDescriptorBufferInfo \* bufferInfo) <br> |
|  [**descriptor\_writer**](classatlas_1_1vk_1_1descriptor__writer.md) & | [**writeImage**](#function-writeimage) (uint32\_t binding, VkDescriptorImageInfo \* imageInfo) <br> |




























## Public Functions Documentation




### function build 

```C++
bool atlas::vk::descriptor_writer::build (
    VkDescriptorSet & set
) 
```




<hr>



### function descriptor\_writer 

```C++
atlas::vk::descriptor_writer::descriptor_writer (
    descriptor_set_layout & setLayout,
    descriptor_pool & pool
) 
```




<hr>



### function overwrite 

```C++
void atlas::vk::descriptor_writer::overwrite (
    VkDescriptorSet & set
) 
```




<hr>



### function writeBuffer 

```C++
descriptor_writer & atlas::vk::descriptor_writer::writeBuffer (
    uint32_t binding,
    VkDescriptorBufferInfo * bufferInfo
) 
```




<hr>



### function writeImage 

```C++
descriptor_writer & atlas::vk::descriptor_writer::writeImage (
    uint32_t binding,
    VkDescriptorImageInfo * imageInfo
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/descriptor_tutorial.hpp`

