

# Class atlas::renderpass



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**renderpass**](classatlas_1_1renderpass.md)










Inherited by the following classes: [atlas::vk::VulkanRenderPass](classatlas_1_1vk_1_1VulkanRenderPass.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**Begin**](#function-begin) () <br> |
|  void | [**End**](#function-end) () <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**renderpass**](classatlas_1_1renderpass.md) &gt; | [**create**](#function-create) (const [**renderpass\_properties**](structatlas_1_1renderpass__properties.md) & properties) <br> |


























## Public Functions Documentation




### function Begin 

```C++
inline void atlas::renderpass::Begin () 
```





**Note:**

When a render pass should start per frame 





        

<hr>



### function End 

```C++
inline void atlas::renderpass::End () 
```





**Note:**

When a render pass should end at the end per frame 





        

<hr>
## Public Static Functions Documentation




### function create 

```C++
static ref< renderpass > atlas::renderpass::create (
    const renderpass_properties & properties
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/render_pass.hpp`

