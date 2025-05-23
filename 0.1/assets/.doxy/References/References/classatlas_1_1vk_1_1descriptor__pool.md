

# Class atlas::vk::descriptor\_pool



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md)




















## Classes

| Type | Name |
| ---: | :--- |
| class | [**builder**](classatlas_1_1vk_1_1descriptor__pool_1_1builder.md) <br> |






















## Public Functions

| Type | Name |
| ---: | :--- |
|  bool | [**allocateDescriptor**](#function-allocatedescriptor) (const VkDescriptorSetLayout descriptor\_set\_layout, VkDescriptorSet & descriptor) const<br> |
|   | [**descriptor\_pool**](#function-descriptor_pool-12) (uint32\_t maxSets, VkDescriptorPoolCreateFlags poolFlags, const std::vector&lt; VkDescriptorPoolSize &gt; & poolSizes) <br> |
|   | [**descriptor\_pool**](#function-descriptor_pool-22) (const [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) &) = delete<br> |
|  void | [**freeDescriptors**](#function-freedescriptors) (std::vector&lt; VkDescriptorSet &gt; & descriptors) const<br> |
|  [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) & | [**operator=**](#function-operator) (const [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) &) = delete<br> |
|  void | [**resetPool**](#function-resetpool) () <br> |
|   | [**~descriptor\_pool**](#function-descriptor_pool) () <br> |




























## Public Functions Documentation




### function allocateDescriptor 

```C++
bool atlas::vk::descriptor_pool::allocateDescriptor (
    const VkDescriptorSetLayout descriptor_set_layout,
    VkDescriptorSet & descriptor
) const
```




<hr>



### function descriptor\_pool [1/2]

```C++
atlas::vk::descriptor_pool::descriptor_pool (
    uint32_t maxSets,
    VkDescriptorPoolCreateFlags poolFlags,
    const std::vector< VkDescriptorPoolSize > & poolSizes
) 
```




<hr>



### function descriptor\_pool [2/2]

```C++
atlas::vk::descriptor_pool::descriptor_pool (
    const descriptor_pool &
) = delete
```




<hr>



### function freeDescriptors 

```C++
void atlas::vk::descriptor_pool::freeDescriptors (
    std::vector< VkDescriptorSet > & descriptors
) const
```




<hr>



### function operator= 

```C++
descriptor_pool & atlas::vk::descriptor_pool::operator= (
    const descriptor_pool &
) = delete
```




<hr>



### function resetPool 

```C++
void atlas::vk::descriptor_pool::resetPool () 
```




<hr>



### function ~descriptor\_pool 

```C++
atlas::vk::descriptor_pool::~descriptor_pool () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/descriptor_tutorial.hpp`

