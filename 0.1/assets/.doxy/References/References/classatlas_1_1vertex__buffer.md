

# Class atlas::vertex\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vertex\_buffer**](classatlas_1_1vertex__buffer.md)










Inherited by the following classes: [atlas::vk::vk\_vertex\_buffer](classatlas_1_1vk_1_1vk__vertex__buffer.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**draw**](#function-draw) (const VkCommandBuffer & p\_command\_buffer) <br> |
| virtual  | [**~vertex\_buffer**](#function-vertex_buffer) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**vertex\_buffer**](classatlas_1_1vertex__buffer.md) &gt; | [**create**](#function-create) (const std::vector&lt; [**vertex**](structatlas_1_1vertex.md) &gt; & p\_vertices) <br> |






















## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**bind\_vertex\_buffer**](#function-bind_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |
| virtual void | [**render\_vertex\_buffer**](#function-render_vertex_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |




## Public Functions Documentation




### function bind 

```C++
void atlas::vertex_buffer::bind (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function draw 

```C++
void atlas::vertex_buffer::draw (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function ~vertex\_buffer 

```C++
virtual atlas::vertex_buffer::~vertex_buffer () = default
```




<hr>
## Public Static Functions Documentation




### function create 

```C++
static ref< vertex_buffer > atlas::vertex_buffer::create (
    const std::vector< vertex > & p_vertices
) 
```




<hr>
## Protected Functions Documentation




### function bind\_vertex\_buffer 

```C++
virtual void atlas::vertex_buffer::bind_vertex_buffer (
    const VkCommandBuffer & p_command_buffer
) = 0
```




<hr>



### function render\_vertex\_buffer 

```C++
virtual void atlas::vertex_buffer::render_vertex_buffer (
    const VkCommandBuffer & p_command_buffer
) = 0
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vertex_buffer.hpp`

