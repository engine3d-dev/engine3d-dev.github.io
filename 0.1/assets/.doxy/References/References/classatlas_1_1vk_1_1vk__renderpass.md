

# Class atlas::vk::vk\_renderpass



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_renderpass**](classatlas_1_1vk_1_1vk__renderpass.md)



_defines a renderpass operation_ [More...](#detailed-description)

* `#include <vk_renderpass.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**configure**](#function-configure) (const [**vk\_renderpass\_options**](structatlas_1_1vk_1_1vk__renderpass__options.md) & p\_renderpass\_options) <br>_contsructs new renderpass and configures it with the following attachments_  |
|  void | [**destroy**](#function-destroy) () <br>_contsructs new renderpass and configures it with the following attachments_  |
|   | [**operator VkRenderPass**](#function-operator-vkrenderpass-12) () const<br> |
|   | [**operator VkRenderPass**](#function-operator-vkrenderpass-22) () <br> |
|   | [**vk\_renderpass**](#function-vk_renderpass-12) () = default<br> |
|   | [**vk\_renderpass**](#function-vk_renderpass-22) (const [**vk\_renderpass\_options**](structatlas_1_1vk_1_1vk__renderpass__options.md) & p\_renderpass\_options) <br>_Invokes configure when constructing new renderpass._  |




























## Detailed Description


[**vk\_renderpass**](classatlas_1_1vk_1_1vk__renderpass.md) 


Handles 


    
## Public Functions Documentation




### function configure 

_contsructs new renderpass and configures it with the following attachments_ 
```C++
void atlas::vk::vk_renderpass::configure (
    const vk_renderpass_options & p_renderpass_options
) 
```




<hr>



### function destroy 

_contsructs new renderpass and configures it with the following attachments_ 
```C++
void atlas::vk::vk_renderpass::destroy () 
```




<hr>



### function operator VkRenderPass [1/2]

```C++
inline atlas::vk::vk_renderpass::operator VkRenderPass () const
```




<hr>



### function operator VkRenderPass [2/2]

```C++
inline atlas::vk::vk_renderpass::operator VkRenderPass () 
```




<hr>



### function vk\_renderpass [1/2]

```C++
atlas::vk::vk_renderpass::vk_renderpass () = default
```




<hr>



### function vk\_renderpass [2/2]

_Invokes configure when constructing new renderpass._ 
```C++
atlas::vk::vk_renderpass::vk_renderpass (
    const vk_renderpass_options & p_renderpass_options
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_renderpass.hpp`

