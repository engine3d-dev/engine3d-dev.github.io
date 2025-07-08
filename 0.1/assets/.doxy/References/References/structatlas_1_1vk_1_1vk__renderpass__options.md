

# Struct atlas::vk::vk\_renderpass\_options



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_renderpass\_options**](structatlas_1_1vk_1_1vk__renderpass__options.md)



_Renderpass specifictations for VkRenderpass._ [More...](#detailed-description)

* `#include <vk_types.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::span&lt; VkAttachmentDescription &gt; | [**attachments**](#variable-attachments)   = `{}`<br> |
|  bool | [**cache**](#variable-cache)   = `false`<br> |
|  std::span&lt; VkClearColorValue &gt; | [**clear\_values**](#variable-clear_values)   = `{}`<br> |
|  std::span&lt; VkSubpassDependency &gt; | [**dependencies**](#variable-dependencies)   = `{}`<br> |
|  std::span&lt; VkSubpassDescription &gt; | [**subpass\_descriptions**](#variable-subpass_descriptions)   = `{}`<br> |












































## Detailed Description


Specifying requirements needed for specifying the vulkan renderpass handlers 


    
## Public Attributes Documentation




### variable attachments 

```C++
std::span<VkAttachmentDescription> atlas::vk::vk_renderpass_options::attachments;
```




<hr>



### variable cache 

```C++
bool atlas::vk::vk_renderpass_options::cache;
```




<hr>



### variable clear\_values 

```C++
std::span<VkClearColorValue> atlas::vk::vk_renderpass_options::clear_values;
```




<hr>



### variable dependencies 

```C++
std::span<VkSubpassDependency> atlas::vk::vk_renderpass_options::dependencies;
```




<hr>



### variable subpass\_descriptions 

```C++
std::span<VkSubpassDescription> atlas::vk::vk_renderpass_options::subpass_descriptions;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_types.hpp`

