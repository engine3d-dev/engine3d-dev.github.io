

# Class atlas::vk::BufferTutorial



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**BufferTutorial**](classatlas_1_1vk_1_1BufferTutorial.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BufferTutorial**](#function-buffertutorial-12) () = default<br> |
|   | [**BufferTutorial**](#function-buffertutorial-22) (uint64\_t p\_size, uint32\_t p\_count, VkBufferUsageFlags p\_usage, VkMemoryPropertyFlags p\_memory\_property\_flags, uint64\_t p\_min\_offset\_alignment=1) <br> |
|  VkDescriptorBufferInfo | [**descriptor\_info**](#function-descriptor_info) (uint64\_t p\_Size=VK\_WHOLE\_SIZE, uint64\_t p\_Offset=0) <br> |
|  VkDescriptorBufferInfo | [**descriptor\_info\_at\_index**](#function-descriptor_info_at_index) (int index) <br> |
|  void | [**flush**](#function-flush) (uint64\_t p\_Size=VK\_WHOLE\_SIZE, uint64\_t offset=0) <br> |
|  void | [**flush\_index**](#function-flush_index) (int index) <br> |
|  uint64\_t | [**get\_alignment\_size**](#function-get_alignment_size) () const<br> |
|  VkBuffer | [**get\_buffer\_instance**](#function-get_buffer_instance) () <br> |
|  uint32\_t | [**get\_instance\_count**](#function-get_instance_count) () const<br> |
|  uint64\_t | [**get\_instance\_size**](#function-get_instance_size) () const<br> |
|  VkBufferUsageFlags | [**get\_usage\_flags**](#function-get_usage_flags) () const<br> |
|  void | [**invalidate**](#function-invalidate) (uint64\_t p\_Size=VK\_WHOLE\_SIZE, uint64\_t p\_Offset=0) <br> |
|  void | [**invalidate\_index**](#function-invalidate_index) (int index) <br> |
|  void | [**map**](#function-map) (VkDeviceSize p\_Size=VK\_WHOLE\_SIZE, uint64\_t p\_Offset=0) <br> |
|  void \* | [**read\_mapped\_data**](#function-read_mapped_data) () const<br> |
|  void | [**unmap**](#function-unmap) () <br> |
|  void | [**write\_to\_buffer**](#function-write_to_buffer) (void \* data, uint64\_t p\_Size=VK\_WHOLE\_SIZE, uint64\_t p\_Offset=0) <br> |
|  void | [**write\_to\_index**](#function-write_to_index) (void \* data, int idx) <br> |




























## Public Functions Documentation




### function BufferTutorial [1/2]

```C++
atlas::vk::BufferTutorial::BufferTutorial () = default
```




<hr>



### function BufferTutorial [2/2]

```C++
atlas::vk::BufferTutorial::BufferTutorial (
    uint64_t p_size,
    uint32_t p_count,
    VkBufferUsageFlags p_usage,
    VkMemoryPropertyFlags p_memory_property_flags,
    uint64_t p_min_offset_alignment=1
) 
```





**Parameters:**


* `p_size` is the instance size in bytes 
* `p_count` amount of instances 
* `p_usage` VkBufferUsageFlags 




        

<hr>



### function descriptor\_info 

```C++
VkDescriptorBufferInfo atlas::vk::BufferTutorial::descriptor_info (
    uint64_t p_Size=VK_WHOLE_SIZE,
    uint64_t p_Offset=0
) 
```




<hr>



### function descriptor\_info\_at\_index 

```C++
VkDescriptorBufferInfo atlas::vk::BufferTutorial::descriptor_info_at_index (
    int index
) 
```




<hr>



### function flush 

```C++
void atlas::vk::BufferTutorial::flush (
    uint64_t p_Size=VK_WHOLE_SIZE,
    uint64_t offset=0
) 
```




<hr>



### function flush\_index 

```C++
void atlas::vk::BufferTutorial::flush_index (
    int index
) 
```




<hr>



### function get\_alignment\_size 

```C++
inline uint64_t atlas::vk::BufferTutorial::get_alignment_size () const
```




<hr>



### function get\_buffer\_instance 

```C++
inline VkBuffer atlas::vk::BufferTutorial::get_buffer_instance () 
```




<hr>



### function get\_instance\_count 

```C++
inline uint32_t atlas::vk::BufferTutorial::get_instance_count () const
```




<hr>



### function get\_instance\_size 

```C++
inline uint64_t atlas::vk::BufferTutorial::get_instance_size () const
```




<hr>



### function get\_usage\_flags 

```C++
inline VkBufferUsageFlags atlas::vk::BufferTutorial::get_usage_flags () const
```




<hr>



### function invalidate 

```C++
void atlas::vk::BufferTutorial::invalidate (
    uint64_t p_Size=VK_WHOLE_SIZE,
    uint64_t p_Offset=0
) 
```




<hr>



### function invalidate\_index 

```C++
void atlas::vk::BufferTutorial::invalidate_index (
    int index
) 
```




<hr>



### function map 

```C++
void atlas::vk::BufferTutorial::map (
    VkDeviceSize p_Size=VK_WHOLE_SIZE,
    uint64_t p_Offset=0
) 
```




<hr>



### function read\_mapped\_data 

```C++
inline void * atlas::vk::BufferTutorial::read_mapped_data () const
```




<hr>



### function unmap 

```C++
void atlas::vk::BufferTutorial::unmap () 
```




<hr>



### function write\_to\_buffer 

```C++
void atlas::vk::BufferTutorial::write_to_buffer (
    void * data,
    uint64_t p_Size=VK_WHOLE_SIZE,
    uint64_t p_Offset=0
) 
```




<hr>



### function write\_to\_index 

```C++
void atlas::vk::BufferTutorial::write_to_index (
    void * data,
    int idx
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/buffer_tutorial.hpp`

