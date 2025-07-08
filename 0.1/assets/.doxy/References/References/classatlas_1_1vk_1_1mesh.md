

# Class atlas::vk::mesh



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**mesh**](classatlas_1_1vk_1_1mesh.md)



_mesh class specifically defined with vulkan implementations for specific primitives TODO: Whenever we load in a texture that will be laucnhed asyncronously_ [More...](#detailed-description)

* `#include <mesh.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add\_texture**](#function-add_texture) (const std::filesystem::path & p\_path) <br>_Loading single texture with specified std::filesystem::path._  |
|  void | [**destroy**](#function-destroy) () <br> |
|  void | [**draw**](#function-draw) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**initialize\_uniforms**](#function-initialize_uniforms) (uint32\_t p\_size\_bytes\_ubo) <br> |
|  bool | [**loaded**](#function-loaded) () const<br> |
|  [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md) | [**material\_ubo**](#function-material_ubo) () const<br> |
|   | [**mesh**](#function-mesh-13) () = default<br> |
|   | [**mesh**](#function-mesh-23) (const std::span&lt; [**vertex\_input**](structatlas_1_1vk_1_1vertex__input.md) &gt; & p\_vertices, const std::span&lt; uint32\_t &gt; & p\_indices) <br> |
|   | [**mesh**](#function-mesh-33) (const std::filesystem::path & p\_filename) <br> |
|  std::span&lt; [**texture**](classatlas_1_1vk_1_1texture.md) &gt; | [**read\_textures**](#function-read_textures) () <br> |
|  void | [**reload\_mesh**](#function-reload_mesh) (const std::filesystem::path & p\_path) <br>_Reload mesh vertices and indices when requested._  |
|  void | [**update\_uniform**](#function-update_uniform) (const [**material\_uniform**](structatlas_1_1vk_1_1material__uniform.md) & p\_material\_ubo) <br> |




























## Detailed Description


mesh class will contain metadata needed by vulkan specifications Ways to communicate through vulkan by only supplying information needed to update this mesh


Represents a renderable object  supporting various material types, etc TODO - For now we have a map&lt;name: string, material\_source&gt;, this should be expanded to a proper material system for blending various materials 


    
## Public Functions Documentation




### function add\_texture 

_Loading single texture with specified std::filesystem::path._ 
```C++
void atlas::vk::mesh::add_texture (
    const std::filesystem::path & p_path
) 
```




<hr>



### function destroy 

```C++
void atlas::vk::mesh::destroy () 
```




<hr>



### function draw 

```C++
void atlas::vk::mesh::draw (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function initialize\_uniforms 

```C++
void atlas::vk::mesh::initialize_uniforms (
    uint32_t p_size_bytes_ubo
) 
```




<hr>



### function loaded 

```C++
inline bool atlas::vk::mesh::loaded () const
```





**Returns:**

true if mesh geometry model loaded succesfully 





        

<hr>



### function material\_ubo 

```C++
inline vk_uniform_buffer atlas::vk::mesh::material_ubo () const
```




<hr>



### function mesh [1/3]

```C++
atlas::vk::mesh::mesh () = default
```




<hr>



### function mesh [2/3]

```C++
atlas::vk::mesh::mesh (
    const std::span< vertex_input > & p_vertices,
    const std::span< uint32_t > & p_indices
) 
```




<hr>



### function mesh [3/3]

```C++
atlas::vk::mesh::mesh (
    const std::filesystem::path & p_filename
) 
```




<hr>



### function read\_textures 

```C++
inline std::span< texture > atlas::vk::mesh::read_textures () 
```




<hr>



### function reload\_mesh 

_Reload mesh vertices and indices when requested._ 
```C++
void atlas::vk::mesh::reload_mesh (
    const std::filesystem::path & p_path
) 
```




<hr>



### function update\_uniform 

```C++
void atlas::vk::mesh::update_uniform (
    const material_uniform & p_material_ubo
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/mesh.hpp`

