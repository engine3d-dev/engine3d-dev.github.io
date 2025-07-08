

# Class atlas::vk::vk\_pipeline



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_pipeline**](classatlas_1_1vk_1_1vk__pipeline.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_current) <br> |
|  void | [**create**](#function-create) (const VkRenderPass & p\_renderpass) <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  VkPipelineLayout | [**get\_layout**](#function-get_layout) () const<br> |
|  VkPipelineLayout | [**layout**](#function-layout) () const<br> |
|   | [**operator VkPipeline**](#function-operator-vkpipeline-12) () <br> |
|   | [**operator VkPipeline**](#function-operator-vkpipeline-22) () const<br> |
|   | [**vk\_pipeline**](#function-vk_pipeline-13) () = default<br> |
|   | [**vk\_pipeline**](#function-vk_pipeline-23) (const VkRenderPass & p\_renderpass, [**vk\_shader\_group**](classatlas_1_1vk_1_1vk__shader__group.md) & p\_shader\_group) <br> |
|   | [**vk\_pipeline**](#function-vk_pipeline-33) (const VkRenderPass & p\_renderpass, const [**vk\_shader\_group**](classatlas_1_1vk_1_1vk__shader__group.md) & p\_shader\_group, const std::span&lt; VkDescriptorSetLayout &gt; & p\_descriptor\_layout) <br> |




























## Public Functions Documentation




### function bind 

```C++
void atlas::vk::vk_pipeline::bind (
    const VkCommandBuffer & p_current
) 
```




<hr>



### function create 

```C++
void atlas::vk::vk_pipeline::create (
    const VkRenderPass & p_renderpass
) 
```




<hr>



### function destroy 

```C++
void atlas::vk::vk_pipeline::destroy () 
```




<hr>



### function get\_layout 

```C++
inline VkPipelineLayout atlas::vk::vk_pipeline::get_layout () const
```




<hr>



### function layout 

```C++
inline VkPipelineLayout atlas::vk::vk_pipeline::layout () const
```




<hr>



### function operator VkPipeline [1/2]

```C++
inline atlas::vk::vk_pipeline::operator VkPipeline () 
```




<hr>



### function operator VkPipeline [2/2]

```C++
inline atlas::vk::vk_pipeline::operator VkPipeline () const
```




<hr>



### function vk\_pipeline [1/3]

```C++
atlas::vk::vk_pipeline::vk_pipeline () = default
```




<hr>



### function vk\_pipeline [2/3]

```C++
atlas::vk::vk_pipeline::vk_pipeline (
    const VkRenderPass & p_renderpass,
    vk_shader_group & p_shader_group
) 
```




<hr>



### function vk\_pipeline [3/3]

```C++
atlas::vk::vk_pipeline::vk_pipeline (
    const VkRenderPass & p_renderpass,
    const vk_shader_group & p_shader_group,
    const std::span< VkDescriptorSetLayout > & p_descriptor_layout
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_pipeline.hpp`

