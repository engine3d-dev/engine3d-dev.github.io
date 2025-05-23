

# Class atlas::vk::vk\_physical\_driver



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md)




















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**queue\_family\_indices**](structatlas_1_1vk_1_1vk__physical__driver_1_1queue__family__indices.md) <br> |






















## Public Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**get\_presentation\_index**](#function-get_presentation_index) (VkSurfaceKHR p\_surface) const<br> |
|  VkPhysicalDeviceProperties | [**get\_properties**](#function-get_properties) () const<br> |
|  [**queue\_family\_indices**](structatlas_1_1vk_1_1vk__physical__driver_1_1queue__family__indices.md) | [**get\_queue\_indices**](#function-get_queue_indices) () const<br> |
|   | [**operator VkPhysicalDevice**](#function-operator-vkphysicaldevice-12) () <br> |
|   | [**operator VkPhysicalDevice**](#function-operator-vkphysicaldevice-22) () const<br> |
|  uint32\_t | [**search\_memory\_type**](#function-search_memory_type) (uint32\_t p\_type\_filter, VkMemoryPropertyFlags p\_properties) <br> |
|   | [**vk\_physical\_driver**](#function-vk_physical_driver-12) () = default<br> |
|   | [**vk\_physical\_driver**](#function-vk_physical_driver-22) (const VkInstance & p\_instance) <br> |




























## Public Functions Documentation




### function get\_presentation\_index 

```C++
uint32_t atlas::vk::vk_physical_driver::get_presentation_index (
    VkSurfaceKHR p_surface
) const
```




<hr>



### function get\_properties 

```C++
inline VkPhysicalDeviceProperties atlas::vk::vk_physical_driver::get_properties () const
```




<hr>



### function get\_queue\_indices 

```C++
inline queue_family_indices atlas::vk::vk_physical_driver::get_queue_indices () const
```




<hr>



### function operator VkPhysicalDevice [1/2]

```C++
inline atlas::vk::vk_physical_driver::operator VkPhysicalDevice () 
```




<hr>



### function operator VkPhysicalDevice [2/2]

```C++
inline atlas::vk::vk_physical_driver::operator VkPhysicalDevice () const
```




<hr>



### function search\_memory\_type 

```C++
uint32_t atlas::vk::vk_physical_driver::search_memory_type (
    uint32_t p_type_filter,
    VkMemoryPropertyFlags p_properties
) 
```




<hr>



### function vk\_physical\_driver [1/2]

```C++
atlas::vk::vk_physical_driver::vk_physical_driver () = default
```




<hr>



### function vk\_physical\_driver [2/2]

```C++
atlas::vk::vk_physical_driver::vk_physical_driver (
    const VkInstance & p_instance
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan/vulkan_physical_driver.hpp`

