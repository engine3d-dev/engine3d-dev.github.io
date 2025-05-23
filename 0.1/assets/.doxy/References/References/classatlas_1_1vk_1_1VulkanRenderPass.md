

# Class atlas::vk::VulkanRenderPass



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**VulkanRenderPass**](classatlas_1_1vk_1_1VulkanRenderPass.md)








Inherits the following classes: [atlas::renderpass](classatlas_1_1renderpass.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**VulkanRenderPass**](#function-vulkanrenderpass) (const [**renderpass\_properties**](structatlas_1_1renderpass__properties.md) & p\_Properties) <br> |


## Public Functions inherited from atlas::renderpass

See [atlas::renderpass](classatlas_1_1renderpass.md)

| Type | Name |
| ---: | :--- |
|  void | [**Begin**](classatlas_1_1renderpass.md#function-begin) () <br> |
|  void | [**End**](classatlas_1_1renderpass.md#function-end) () <br> |




## Public Static Functions inherited from atlas::renderpass

See [atlas::renderpass](classatlas_1_1renderpass.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**renderpass**](classatlas_1_1renderpass.md) &gt; | [**create**](classatlas_1_1renderpass.md#function-create) (const [**renderpass\_properties**](structatlas_1_1renderpass__properties.md) & properties) <br> |










































## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**BeginRenderPass**](#function-beginrenderpass) () override<br> |
| virtual void | [**EndRenderPass**](#function-endrenderpass) () override<br> |








## Public Functions Documentation




### function VulkanRenderPass 

```C++
atlas::vk::VulkanRenderPass::VulkanRenderPass (
    const renderpass_properties & p_Properties
) 
```




<hr>
## Protected Functions Documentation




### function BeginRenderPass 

```C++
virtual void atlas::vk::VulkanRenderPass::BeginRenderPass () override
```





**Note:**

Implementation-detail on when renderpasses begin/end that is graphic-api agnostic 





        
Implements [*atlas::renderpass::BeginRenderPass*](classatlas_1_1renderpass.md#function-beginrenderpass)


<hr>



### function EndRenderPass 

```C++
virtual void atlas::vk::VulkanRenderPass::EndRenderPass () override
```



Implements [*atlas::renderpass::EndRenderPass*](classatlas_1_1renderpass.md#function-endrenderpass)


<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_renderpass.hpp`

