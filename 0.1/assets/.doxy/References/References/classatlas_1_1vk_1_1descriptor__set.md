

# Class atlas::vk::descriptor\_set



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**descriptor\_set**](classatlas_1_1vk_1_1descriptor__set.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_current, uint32\_t p\_frame\_index, const VkPipelineLayout &) <br> |
|   | [**descriptor\_set**](#function-descriptor_set-12) () = default<br> |
|   | [**descriptor\_set**](#function-descriptor_set-22) (const uint32\_t & p\_set\_slot, const [**descriptor\_set\_layout**](structatlas_1_1vk_1_1descriptor__set__layout.md) & p\_entry) <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  VkDescriptorSetLayout | [**get\_layout**](#function-get_layout) () const<br> |
|  void | [**update**](#function-update-12) (const std::span&lt; [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md) &gt; & p\_uniforms, const std::span&lt; [**texture**](classatlas_1_1vk_1_1texture.md) &gt; & p\_textures) <br>_Updating descriptors with uniforms/textures specified._  |
|  void | [**update**](#function-update-22) (const std::span&lt; [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md) &gt; & p\_uniforms) <br> |
|   | [**~descriptor\_set**](#function-descriptor_set) () = default<br> |




























## Public Functions Documentation




### function bind 

```C++
void atlas::vk::descriptor_set::bind (
    const VkCommandBuffer & p_current,
    uint32_t p_frame_index,
    const VkPipelineLayout &
) 
```




<hr>



### function descriptor\_set [1/2]

```C++
atlas::vk::descriptor_set::descriptor_set () = default
```




<hr>



### function descriptor\_set [2/2]

```C++
atlas::vk::descriptor_set::descriptor_set (
    const uint32_t & p_set_slot,
    const descriptor_set_layout & p_entry
) 
```





**Parameters:**


* `p_set_slot` is the slot index to bind this descriptor set Tells vulkan when binding this descriptor set where the resources location for shader to know where to access the resources binded 




        

<hr>



### function destroy 

```C++
void atlas::vk::descriptor_set::destroy () 
```




<hr>



### function get\_layout 

```C++
inline VkDescriptorSetLayout atlas::vk::descriptor_set::get_layout () const
```



Something to note for myself The [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) will actually store in and cache [**vk::mesh**](classatlas_1_1vk_1_1mesh.md) into a map&lt;string, vk::mesh&gt; Each mesh will actually store the actual geometry data and apply a per-pipeline-info on them This update\_mesh would be invoked like(m\_uniformss, m\_cached\_meshes[p\_entity.name()]); Where we invoke the mesh we want to update with the following invokation call here [**vk::mesh**](classatlas_1_1vk_1_1mesh.md) will also contain the matrices such as glm::mat4 that is the model matrix 


        

<hr>



### function update [1/2]

_Updating descriptors with uniforms/textures specified._ 
```C++
void atlas::vk::descriptor_set::update (
    const std::span< vk_uniform_buffer > & p_uniforms,
    const std::span< texture > & p_textures
) 
```




<hr>



### function update [2/2]

```C++
void atlas::vk::descriptor_set::update (
    const std::span< vk_uniform_buffer > & p_uniforms
) 
```




<hr>



### function ~descriptor\_set 

```C++
atlas::vk::descriptor_set::~descriptor_set () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_descriptor_set.hpp`

