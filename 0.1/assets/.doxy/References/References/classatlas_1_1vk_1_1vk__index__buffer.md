

# Class atlas::vk::vk\_index\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_index\_buffer**](classatlas_1_1vk_1_1vk__index__buffer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_current) <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  void | [**draw**](#function-draw) (const VkCommandBuffer & p\_current) <br> |
|  size\_t | [**size**](#function-size) () const<br> |
|   | [**vk\_index\_buffer**](#function-vk_index_buffer-12) () = default<br> |
|   | [**vk\_index\_buffer**](#function-vk_index_buffer-22) (const std::span&lt; uint32\_t &gt; & p\_indices) <br> |




























## Public Functions Documentation




### function bind 

```C++
void atlas::vk::vk_index_buffer::bind (
    const VkCommandBuffer & p_current
) 
```




<hr>



### function destroy 

```C++
void atlas::vk::vk_index_buffer::destroy () 
```




<hr>



### function draw 

```C++
void atlas::vk::vk_index_buffer::draw (
    const VkCommandBuffer & p_current
) 
```




<hr>



### function size 

```C++
inline size_t atlas::vk::vk_index_buffer::size () const
```




<hr>



### function vk\_index\_buffer [1/2]

```C++
atlas::vk::vk_index_buffer::vk_index_buffer () = default
```




<hr>



### function vk\_index\_buffer [2/2]

```C++
atlas::vk::vk_index_buffer::vk_index_buffer (
    const std::span< uint32_t > & p_indices
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_index_buffer.hpp`

