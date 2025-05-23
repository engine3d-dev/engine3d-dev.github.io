

# Class atlas::vk::descriptor\_set\_layout::builder



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) **>** [**builder**](classatlas_1_1vk_1_1descriptor__set__layout_1_1builder.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  [**builder**](classatlas_1_1vk_1_1descriptor__set__layout_1_1builder.md) & | [**addBinding**](#function-addbinding) (uint32\_t binding, VkDescriptorType descriptorType, VkShaderStageFlags stageFlags, uint32\_t count=1) <br> |
|  std::unique\_ptr&lt; [**descriptor\_set\_layout**](classatlas_1_1vk_1_1descriptor__set__layout.md) &gt; | [**build**](#function-build) () const<br> |
|   | [**builder**](#function-builder) () = default<br> |




























## Public Functions Documentation




### function addBinding 

```C++
builder & atlas::vk::descriptor_set_layout::builder::addBinding (
    uint32_t binding,
    VkDescriptorType descriptorType,
    VkShaderStageFlags stageFlags,
    uint32_t count=1
) 
```




<hr>



### function build 

```C++
std::unique_ptr< descriptor_set_layout > atlas::vk::descriptor_set_layout::builder::build () const
```




<hr>



### function builder 

```C++
atlas::vk::descriptor_set_layout::builder::builder () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/descriptor_tutorial.hpp`

