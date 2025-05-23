

# Class atlas::vk::vk\_vertex\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_vertex\_buffer**](classatlas_1_1vk_1_1vk__vertex__buffer.md)








Inherits the following classes: [atlas::vertex\_buffer](classatlas_1_1vertex__buffer.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_vertex\_buffer**](#function-vk_vertex_buffer) (const std::vector&lt; [**vertex**](structatlas_1_1vertex.md) &gt; & p\_vertices) <br> |
| virtual  | [**~vk\_vertex\_buffer**](#function-vk_vertex_buffer) () <br> |


## Public Functions inherited from atlas::vertex_buffer

See [atlas::vertex\_buffer](classatlas_1_1vertex__buffer.md)

| Type | Name |
| ---: | :--- |
|  void | [**bind**](classatlas_1_1vertex__buffer.md#function-bind) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**draw**](classatlas_1_1vertex__buffer.md#function-draw) (const VkCommandBuffer & p\_command\_buffer) <br> |
| virtual  | [**~vertex\_buffer**](classatlas_1_1vertex__buffer.md#function-vertex_buffer) () = default<br> |




## Public Static Functions inherited from atlas::vertex_buffer

See [atlas::vertex\_buffer](classatlas_1_1vertex__buffer.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**vertex\_buffer**](classatlas_1_1vertex__buffer.md) &gt; | [**create**](classatlas_1_1vertex__buffer.md#function-create) (const std::vector&lt; [**vertex**](structatlas_1_1vertex.md) &gt; & p\_vertices) <br> |










































## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**bind\_vertex\_buffer**](#function-bind_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) override<br> |
| virtual void | [**render\_vertex\_buffer**](#function-render_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) override<br> |


## Protected Functions inherited from atlas::vertex_buffer

See [atlas::vertex\_buffer](classatlas_1_1vertex__buffer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**bind\_vertex\_buffer**](classatlas_1_1vertex__buffer.md#function-bind_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |
| virtual void | [**render\_vertex\_buffer**](classatlas_1_1vertex__buffer.md#function-render_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |






## Public Functions Documentation




### function vk\_vertex\_buffer 

```C++
atlas::vk::vk_vertex_buffer::vk_vertex_buffer (
    const std::vector< vertex > & p_vertices
) 
```




<hr>



### function ~vk\_vertex\_buffer 

```C++
inline virtual atlas::vk::vk_vertex_buffer::~vk_vertex_buffer () 
```




<hr>
## Protected Functions Documentation




### function bind\_vertex\_buffer 

```C++
virtual void atlas::vk::vk_vertex_buffer::bind_vertex_buffer (
    const VkCommandBuffer & p_command_buffer
) override
```



Implements [*atlas::vertex\_buffer::bind\_vertex\_buffer*](classatlas_1_1vertex__buffer.md#function-bind_vertex_buffer)


<hr>



### function render\_vertex\_buffer 

```C++
virtual void atlas::vk::vk_vertex_buffer::render_vertex_buffer (
    const VkCommandBuffer & p_command_buffer
) override
```



Implements [*atlas::vertex\_buffer::render\_vertex\_buffer*](classatlas_1_1vertex__buffer.md#function-render_vertex_buffer)


<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_vertex_buffer.hpp`

