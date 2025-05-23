

# Class atlas::index\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**index\_buffer**](classatlas_1_1index__buffer.md)










Inherited by the following classes: [atlas::vk::vk\_index\_buffer](classatlas_1_1vk_1_1vk__index__buffer.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**bind**](#function-bind) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**draw**](#function-draw) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  bool | [**has\_indices**](#function-has_indices) () const<br> |
| virtual  | [**~index\_buffer**](#function-index_buffer) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**index\_buffer**](classatlas_1_1index__buffer.md) &gt; | [**create**](#function-create) (const std::vector&lt; uint32\_t &gt; & p\_indices) <br> |






















## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**bind\_to\_index\_buffer**](#function-bind_to_index_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |
| virtual bool | [**contains\_indices**](#function-contains_indices) () const = 0<br> |
| virtual void | [**render\_index\_buffer**](#function-render_index_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |




## Public Functions Documentation




### function bind 

```C++
void atlas::index_buffer::bind (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function draw 

```C++
void atlas::index_buffer::draw (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function has\_indices 

```C++
bool atlas::index_buffer::has_indices () const
```




<hr>



### function ~index\_buffer 

```C++
virtual atlas::index_buffer::~index_buffer () = default
```




<hr>
## Public Static Functions Documentation




### function create 

```C++
static ref< index_buffer > atlas::index_buffer::create (
    const std::vector< uint32_t > & p_indices
) 
```




<hr>
## Protected Functions Documentation




### function bind\_to\_index\_buffer 

```C++
virtual void atlas::index_buffer::bind_to_index_buffer (
    const VkCommandBuffer & p_command_buffer
) = 0
```




<hr>



### function contains\_indices 

```C++
virtual bool atlas::index_buffer::contains_indices () const = 0
```




<hr>



### function render\_index\_buffer 

```C++
virtual void atlas::index_buffer::render_index_buffer (
    const VkCommandBuffer & p_command_buffer
) = 0
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/index_buffer.hpp`

