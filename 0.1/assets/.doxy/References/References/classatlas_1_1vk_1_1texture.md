

# Class atlas::vk::texture



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**texture**](classatlas_1_1vk_1_1texture.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**create**](#function-create) (const std::filesystem::path & p\_path) <br> |
|  [**vk\_image**](structatlas_1_1vk_1_1vk__image.md) | [**data**](#function-data) () const<br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  uint32\_t | [**height**](#function-height) () const<br> |
|  VkImage | [**image**](#function-image) () const<br> |
|  VkImageView | [**image\_view**](#function-image_view) () const<br> |
|  bool | [**loaded**](#function-loaded) () const<br> |
|  VkSampler | [**sampler**](#function-sampler) () const<br> |
|   | [**texture**](#function-texture-13) () = default<br> |
|   | [**texture**](#function-texture-23) (const [**texture\_extent**](structatlas_1_1vk_1_1texture__extent.md) & p\_extent) <br> |
|   | [**texture**](#function-texture-33) (const std::filesystem::path & p\_filepath) <br> |
|  uint32\_t | [**width**](#function-width) () const<br> |




























## Public Functions Documentation




### function create 

```C++
void atlas::vk::texture::create (
    const std::filesystem::path & p_path
) 
```




<hr>



### function data 

```C++
inline vk_image atlas::vk::texture::data () const
```




<hr>



### function destroy 

```C++
void atlas::vk::texture::destroy () 
```




<hr>



### function height 

```C++
uint32_t atlas::vk::texture::height () const
```




<hr>



### function image 

```C++
inline VkImage atlas::vk::texture::image () const
```




<hr>



### function image\_view 

```C++
inline VkImageView atlas::vk::texture::image_view () const
```




<hr>



### function loaded 

```C++
inline bool atlas::vk::texture::loaded () const
```




<hr>



### function sampler 

```C++
inline VkSampler atlas::vk::texture::sampler () const
```




<hr>



### function texture [1/3]

```C++
atlas::vk::texture::texture () = default
```




<hr>



### function texture [2/3]

```C++
atlas::vk::texture::texture (
    const texture_extent & p_extent
) 
```




<hr>



### function texture [3/3]

```C++
atlas::vk::texture::texture (
    const std::filesystem::path & p_filepath
) 
```




<hr>



### function width 

```C++
uint32_t atlas::vk::texture::width () const
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_texture.hpp`

