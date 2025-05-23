

# Class atlas::vk::vk\_index\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_index\_buffer**](classatlas_1_1vk_1_1vk__index__buffer.md)








Inherits the following classes: [atlas::index\_buffer](classatlas_1_1index__buffer.md)






















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**vk\_index\_buffer**](#function-vk_index_buffer) (const std::vector&lt; uint32\_t &gt; & p\_indices) <br> |
|   | [**~vk\_index\_buffer**](#function-vk_index_buffer) () override<br> |


## Public Functions inherited from atlas::index_buffer

See [atlas::index\_buffer](classatlas_1_1index__buffer.md)

| Type | Name |
| ---: | :--- |
|  void | [**bind**](classatlas_1_1index__buffer.md#function-bind) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**draw**](classatlas_1_1index__buffer.md#function-draw) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  bool | [**has\_indices**](classatlas_1_1index__buffer.md#function-has_indices) () const<br> |
| virtual  | [**~index\_buffer**](classatlas_1_1index__buffer.md#function-index_buffer) () = default<br> |




## Public Static Functions inherited from atlas::index_buffer

See [atlas::index\_buffer](classatlas_1_1index__buffer.md)

| Type | Name |
| ---: | :--- |
|  ref&lt; [**index\_buffer**](classatlas_1_1index__buffer.md) &gt; | [**create**](classatlas_1_1index__buffer.md#function-create) (const std::vector&lt; uint32\_t &gt; & p\_indices) <br> |












































## Protected Functions inherited from atlas::index_buffer

See [atlas::index\_buffer](classatlas_1_1index__buffer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**bind\_to\_index\_buffer**](classatlas_1_1index__buffer.md#function-bind_to_index_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |
| virtual bool | [**contains\_indices**](classatlas_1_1index__buffer.md#function-contains_indices) () const = 0<br> |
| virtual void | [**render\_index\_buffer**](classatlas_1_1index__buffer.md#function-render_index_buffer) (const VkCommandBuffer & p\_command\_buffer) = 0<br> |






## Public Functions Documentation




### function vk\_index\_buffer 

```C++
atlas::vk::vk_index_buffer::vk_index_buffer (
    const std::vector< uint32_t > & p_indices
) 
```




<hr>



### function ~vk\_index\_buffer 

```C++
atlas::vk::vk_index_buffer::~vk_index_buffer () override
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_index_buffer.hpp`

