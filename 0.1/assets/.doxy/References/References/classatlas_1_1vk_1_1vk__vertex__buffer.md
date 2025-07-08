

# Class atlas::vk::vk\_vertex\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_vertex\_buffer**](classatlas_1_1vk_1_1vk__vertex__buffer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_current) <br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  void | [**draw**](#function-draw) (const VkCommandBuffer & p\_current) <br> |
|   | [**operator VkBuffer**](#function-operator-vkbuffer-12) () <br> |
|   | [**operator VkBuffer**](#function-operator-vkbuffer-22) () const<br> |
|  size\_t | [**size**](#function-size) () const<br> |
|  size\_t | [**size\_bytes**](#function-size_bytes) () const<br> |
|   | [**vk\_vertex\_buffer**](#function-vk_vertex_buffer-12) () = default<br> |
|   | [**vk\_vertex\_buffer**](#function-vk_vertex_buffer-22) (const std::span&lt; [**vertex\_input**](structatlas_1_1vk_1_1vertex__input.md) &gt; & p\_vertices) <br> |
|   | [**~vk\_vertex\_buffer**](#function-vk_vertex_buffer) () = default<br> |




























## Public Functions Documentation




### function bind 

```C++
void atlas::vk::vk_vertex_buffer::bind (
    const VkCommandBuffer & p_current
) 
```




<hr>



### function destroy 

```C++
void atlas::vk::vk_vertex_buffer::destroy () 
```




<hr>



### function draw 

```C++
void atlas::vk::vk_vertex_buffer::draw (
    const VkCommandBuffer & p_current
) 
```




<hr>



### function operator VkBuffer [1/2]

```C++
inline atlas::vk::vk_vertex_buffer::operator VkBuffer () 
```




<hr>



### function operator VkBuffer [2/2]

```C++
inline atlas::vk::vk_vertex_buffer::operator VkBuffer () const
```




<hr>



### function size 

```C++
inline size_t atlas::vk::vk_vertex_buffer::size () const
```




<hr>



### function size\_bytes 

```C++
inline size_t atlas::vk::vk_vertex_buffer::size_bytes () const
```




<hr>



### function vk\_vertex\_buffer [1/2]

```C++
atlas::vk::vk_vertex_buffer::vk_vertex_buffer () = default
```




<hr>



### function vk\_vertex\_buffer [2/2]

```C++
atlas::vk::vk_vertex_buffer::vk_vertex_buffer (
    const std::span< vertex_input > & p_vertices
) 
```




<hr>



### function ~vk\_vertex\_buffer 

```C++
atlas::vk::vk_vertex_buffer::~vk_vertex_buffer () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_vertex_buffer.hpp`

