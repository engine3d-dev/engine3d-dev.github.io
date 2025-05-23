

# Class atlas::vk::descriptor\_pool::builder



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) **>** [**builder**](classatlas_1_1vk_1_1descriptor__pool_1_1builder.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  [**builder**](classatlas_1_1vk_1_1descriptor__pool_1_1builder.md) & | [**addPoolSize**](#function-addpoolsize) (VkDescriptorType descriptorType, uint32\_t count) <br> |
|  std::unique\_ptr&lt; [**descriptor\_pool**](classatlas_1_1vk_1_1descriptor__pool.md) &gt; | [**build**](#function-build) () const<br> |
|   | [**builder**](#function-builder) () = default<br> |
|  [**builder**](classatlas_1_1vk_1_1descriptor__pool_1_1builder.md) & | [**setMaxSets**](#function-setmaxsets) (uint32\_t count) <br> |
|  [**builder**](classatlas_1_1vk_1_1descriptor__pool_1_1builder.md) & | [**setPoolFlags**](#function-setpoolflags) (VkDescriptorPoolCreateFlags flags) <br> |




























## Public Functions Documentation




### function addPoolSize 

```C++
builder & atlas::vk::descriptor_pool::builder::addPoolSize (
    VkDescriptorType descriptorType,
    uint32_t count
) 
```




<hr>



### function build 

```C++
std::unique_ptr< descriptor_pool > atlas::vk::descriptor_pool::builder::build () const
```




<hr>



### function builder 

```C++
atlas::vk::descriptor_pool::builder::builder () = default
```




<hr>



### function setMaxSets 

```C++
builder & atlas::vk::descriptor_pool::builder::setMaxSets (
    uint32_t count
) 
```




<hr>



### function setPoolFlags 

```C++
builder & atlas::vk::descriptor_pool::builder::setPoolFlags (
    VkDescriptorPoolCreateFlags flags
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/descriptor_tutorial.hpp`

