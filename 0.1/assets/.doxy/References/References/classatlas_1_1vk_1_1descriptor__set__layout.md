

# Class atlas::vk::descriptor\_set\_layout



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md)




















## Classes

| Type | Name |
| ---: | :--- |
| class | [**builder**](classatlas_1_1vk_1_1descriptor__set__layout_1_1builder.md) <br> |






















## Public Functions

| Type | Name |
| ---: | :--- |
|  VkDescriptorSetLayoutBinding & | [**Get**](#function-get) (uint32\_t bind) <br> |
|   | [**descriptor\_set\_layout**](#function-descriptor_set_layout-12) (std::unordered\_map&lt; uint32\_t, VkDescriptorSetLayoutBinding &gt; bindings) <br> |
|   | [**descriptor\_set\_layout**](#function-descriptor_set_layout-22) (const [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) &) = delete<br> |
|  VkDescriptorSetLayout | [**get\_descriptor\_set\_layout**](#function-get_descriptor_set_layout) () const<br> |
|  [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) & | [**operator=**](#function-operator) (const [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) &) = delete<br> |
|   | [**~descriptor\_set\_layout**](#function-descriptor_set_layout) () <br> |




























## Public Functions Documentation




### function Get 

```C++
inline VkDescriptorSetLayoutBinding & atlas::vk::descriptor_set_layout::Get (
    uint32_t bind
) 
```




<hr>



### function descriptor\_set\_layout [1/2]

```C++
atlas::vk::descriptor_set_layout::descriptor_set_layout (
    std::unordered_map< uint32_t, VkDescriptorSetLayoutBinding > bindings
) 
```




<hr>



### function descriptor\_set\_layout [2/2]

```C++
atlas::vk::descriptor_set_layout::descriptor_set_layout (
    const descriptor_set_layout &
) = delete
```




<hr>



### function get\_descriptor\_set\_layout 

```C++
inline VkDescriptorSetLayout atlas::vk::descriptor_set_layout::get_descriptor_set_layout () const
```




<hr>



### function operator= 

```C++
descriptor_set_layout & atlas::vk::descriptor_set_layout::operator= (
    const descriptor_set_layout &
) = delete
```




<hr>



### function ~descriptor\_set\_layout 

```C++
atlas::vk::descriptor_set_layout::~descriptor_set_layout () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/descriptor_tutorial.hpp`

