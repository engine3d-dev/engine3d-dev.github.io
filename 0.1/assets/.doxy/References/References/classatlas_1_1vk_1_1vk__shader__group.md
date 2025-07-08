

# Class atlas::vk::vk\_shader\_group



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_shader\_group**](classatlas_1_1vk_1_1vk__shader__group.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**compile**](#function-compile) () <br> |
|  std::span&lt; const [**vk\_shader\_module**](structatlas_1_1vk_1_1vk__shader__module.md) &gt; | [**data**](#function-data) () const<br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  void | [**set\_vertex\_attributes**](#function-set_vertex_attributes-12) (const std::initializer\_list&lt; VkVertexInputAttributeDescription &gt; & p\_attributes) <br> |
|  void | [**set\_vertex\_attributes**](#function-set_vertex_attributes-22) (const std::span&lt; VkVertexInputAttributeDescription &gt; & p\_attributes) <br> |
|  void | [**set\_vertex\_bind\_attributes**](#function-set_vertex_bind_attributes-12) (const std::initializer\_list&lt; VkVertexInputBindingDescription &gt; & p\_bind\_attributes) <br> |
|  void | [**set\_vertex\_bind\_attributes**](#function-set_vertex_bind_attributes-22) (const std::span&lt; VkVertexInputBindingDescription &gt; & p\_bind\_attributes) <br> |
|  uint32\_t | [**size**](#function-size) () const<br> |
|  void | [**vertex\_attributes**](#function-vertex_attributes-12) (const std::span&lt; [**vertex\_attribute**](structatlas_1_1vk_1_1vertex__attribute.md) &gt; & p\_vertex\_attributes) <br> |
|  std::span&lt; VkVertexInputAttributeDescription &gt; | [**vertex\_attributes**](#function-vertex_attributes-22) () <br> |
|  std::span&lt; VkVertexInputBindingDescription &gt; | [**vertex\_bind\_attributes**](#function-vertex_bind_attributes) () <br> |
|   | [**vk\_shader\_group**](#function-vk_shader_group-13) () = default<br> |
|   | [**vk\_shader\_group**](#function-vk_shader_group-23) (const std::initializer\_list&lt; [**shader\_info**](structatlas_1_1vk_1_1shader__info.md) &gt; & p\_list) <br>_Constructing new shader group as an initialized list._  |
|   | [**vk\_shader\_group**](#function-vk_shader_group-33) (const std::span&lt; [**shader\_info**](structatlas_1_1vk_1_1shader__info.md) &gt; & p\_shader\_sources) <br>_Constructs a shader group because a pipeline may have multiple shader groups part of the shader pipeline with a specific stage associated with it._  |




























## Public Functions Documentation




### function compile 

```C++
void atlas::vk::vk_shader_group::compile () 
```




<hr>



### function data 

```C++
inline std::span< const vk_shader_module > atlas::vk::vk_shader_group::data () const
```





**Returns:**

span of [**vk\_shader\_module**](structatlas_1_1vk_1_1vk__shader__module.md) that contains the handler and stage this handler was loaded at 





        

<hr>



### function destroy 

```C++
void atlas::vk::vk_shader_group::destroy () 
```




<hr>



### function set\_vertex\_attributes [1/2]

```C++
void atlas::vk::vk_shader_group::set_vertex_attributes (
    const std::initializer_list< VkVertexInputAttributeDescription > & p_attributes
) 
```




<hr>



### function set\_vertex\_attributes [2/2]

```C++
void atlas::vk::vk_shader_group::set_vertex_attributes (
    const std::span< VkVertexInputAttributeDescription > & p_attributes
) 
```




<hr>



### function set\_vertex\_bind\_attributes [1/2]

```C++
void atlas::vk::vk_shader_group::set_vertex_bind_attributes (
    const std::initializer_list< VkVertexInputBindingDescription > & p_bind_attributes
) 
```




<hr>



### function set\_vertex\_bind\_attributes [2/2]

```C++
void atlas::vk::vk_shader_group::set_vertex_bind_attributes (
    const std::span< VkVertexInputBindingDescription > & p_bind_attributes
) 
```




<hr>



### function size 

```C++
inline uint32_t atlas::vk::vk_shader_group::size () const
```





**Returns:**

uint32\_t the size of vulkan shader modules loaded 





        

<hr>



### function vertex\_attributes [1/2]

```C++
void atlas::vk::vk_shader_group::vertex_attributes (
    const std::span< vertex_attribute > & p_vertex_attributes
) 
```




<hr>



### function vertex\_attributes [2/2]

```C++
inline std::span< VkVertexInputAttributeDescription > atlas::vk::vk_shader_group::vertex_attributes () 
```





**Returns:**

vertex attributes set in the vertex shader 





        

<hr>



### function vertex\_bind\_attributes 

```C++
inline std::span< VkVertexInputBindingDescription > atlas::vk::vk_shader_group::vertex_bind_attributes () 
```





**Returns:**

binding vertex attributes also set in the vertex shader 





        

<hr>



### function vk\_shader\_group [1/3]

```C++
atlas::vk::vk_shader_group::vk_shader_group () = default
```




<hr>



### function vk\_shader\_group [2/3]

_Constructing new shader group as an initialized list._ 
```C++
atlas::vk::vk_shader_group::vk_shader_group (
    const std::initializer_list< shader_info > & p_list
) 
```




<hr>



### function vk\_shader\_group [3/3]

_Constructs a shader group because a pipeline may have multiple shader groups part of the shader pipeline with a specific stage associated with it._ 
```C++
atlas::vk::vk_shader_group::vk_shader_group (
    const std::span< shader_info > & p_shader_sources
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_shader_group.hpp`

