

# Class atlas::vk::vk\_driver



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md)



_vulkan implementation of extracting a logical device_ [More...](#detailed-description)

* `#include <vk_driver.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  VkFormat | [**depth\_format**](#function-depth_format) () const<br> |
|  void | [**destroy**](#function-destroy) () <br> |
|  VkQueue | [**get\_queue**](#function-get_queue) (const [**vk\_queue\_options**](structatlas_1_1vk_1_1vk__queue__options.md) & p\_present\_queue) <br> |
|  VkQueue | [**graphics\_queue**](#function-graphics_queue) () const<br> |
|   | [**operator VkDevice**](#function-operator-vkdevice-12) () const<br> |
|   | [**operator VkDevice**](#function-operator-vkdevice-22) () <br> |
|  uint32\_t | [**select\_memory\_type**](#function-select_memory_type) (uint32\_t p\_type\_filter, VkMemoryPropertyFlags p\_property\_flag) <br> |
|   | [**vk\_driver**](#function-vk_driver-12) () = default<br> |
|   | [**vk\_driver**](#function-vk_driver-22) (const [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) & p\_physical) <br> |
|   | [**~vk\_driver**](#function-vk_driver) () = default<br> |




























## Detailed Description


TODO  Implement a device manager for managing multiple available logical devices for potential of multi-viewport support 


    
## Public Functions Documentation




### function depth\_format 

```C++
VkFormat atlas::vk::vk_driver::depth_format () const
```




<hr>



### function destroy 

```C++
void atlas::vk::vk_driver::destroy () 
```




<hr>



### function get\_queue 

```C++
VkQueue atlas::vk::vk_driver::get_queue (
    const vk_queue_options & p_present_queue
) 
```




<hr>



### function graphics\_queue 

```C++
inline VkQueue atlas::vk::vk_driver::graphics_queue () const
```




<hr>



### function operator VkDevice [1/2]

```C++
inline atlas::vk::vk_driver::operator VkDevice () const
```




<hr>



### function operator VkDevice [2/2]

```C++
inline atlas::vk::vk_driver::operator VkDevice () 
```




<hr>



### function select\_memory\_type 

```C++
uint32_t atlas::vk::vk_driver::select_memory_type (
    uint32_t p_type_filter,
    VkMemoryPropertyFlags p_property_flag
) 
```





**Note:**

Returns -1 if there are no flags available/compatible/valid 





        

<hr>



### function vk\_driver [1/2]

```C++
atlas::vk::vk_driver::vk_driver () = default
```




<hr>



### function vk\_driver [2/2]

```C++
atlas::vk::vk_driver::vk_driver (
    const vk_physical_driver & p_physical
) 
```




<hr>



### function ~vk\_driver 

```C++
atlas::vk::vk_driver::~vk_driver () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_driver.hpp`

