

# Class atlas::vk::vk\_uniform\_buffer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**destroy**](#function-destroy) () <br> |
|   | [**operator VkBuffer**](#function-operator-vkbuffer-12) () const<br> |
|   | [**operator VkBuffer**](#function-operator-vkbuffer-22) () <br> |
|  uint32\_t | [**size\_bytes**](#function-size_bytes) () const<br> |
|  void | [**update**](#function-update) (const void \* p\_data) <br> |
|   | [**vk\_uniform\_buffer**](#function-vk_uniform_buffer-12) () = default<br> |
|   | [**vk\_uniform\_buffer**](#function-vk_uniform_buffer-22) (uint32\_t p\_size\_in\_bytes) <br> |




























## Public Functions Documentation




### function destroy 

```C++
void atlas::vk::vk_uniform_buffer::destroy () 
```




<hr>



### function operator VkBuffer [1/2]

```C++
inline atlas::vk::vk_uniform_buffer::operator VkBuffer () const
```




<hr>



### function operator VkBuffer [2/2]

```C++
inline atlas::vk::vk_uniform_buffer::operator VkBuffer () 
```




<hr>



### function size\_bytes 

```C++
inline uint32_t atlas::vk::vk_uniform_buffer::size_bytes () const
```





**Returns:**

bytes of the uniform data stored with this uniform buffer handler 





        

<hr>



### function update 

```C++
void atlas::vk::vk_uniform_buffer::update (
    const void * p_data
) 
```




<hr>



### function vk\_uniform\_buffer [1/2]

```C++
atlas::vk::vk_uniform_buffer::vk_uniform_buffer () = default
```




<hr>



### function vk\_uniform\_buffer [2/2]

```C++
atlas::vk::vk_uniform_buffer::vk_uniform_buffer (
    uint32_t p_size_in_bytes
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_uniform_buffer.hpp`

