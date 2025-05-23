

# Class atlas::vk::vk\_driver



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  VkQueue | [**get\_graphics\_queue**](#function-get_graphics_queue) () const<br> |
|   | [**operator VkDevice**](#function-operator-vkdevice) () <br> |
|  uint32\_t | [**select\_memory\_type**](#function-select_memory_type) (uint32\_t p\_type\_filter, VkMemoryPropertyFlags p\_property\_flag) <br> |
|   | [**vk\_driver**](#function-vk_driver-12) () = default<br> |
|   | [**vk\_driver**](#function-vk_driver-22) (const [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) & p\_physical) <br> |




























## Public Functions Documentation




### function get\_graphics\_queue 

```C++
inline VkQueue atlas::vk::vk_driver::get_graphics_queue () const
```




<hr>



### function operator VkDevice 

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

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_driver.hpp`

