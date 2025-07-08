

# Class atlas::vk::vk\_physical\_driver



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md) **>** [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  [**surface\_properties**](structatlas_1_1vk_1_1surface__properties.md) | [**get\_surface\_properties**](#function-get_surface_properties) (const VkSurfaceKHR & p\_surface) <br> |
|   | [**operator VkPhysicalDevice**](#function-operator-vkphysicaldevice-12) () <br> |
|   | [**operator VkPhysicalDevice**](#function-operator-vkphysicaldevice-22) () const<br> |
|  uint32\_t | [**read\_presentation\_index**](#function-read_presentation_index) (const VkSurfaceKHR & p\_surface) <br> |
|  queue\_family\_indices | [**read\_queue\_family\_indices**](#function-read_queue_family_indices) () const<br> |
|   | [**vk\_physical\_driver**](#function-vk_physical_driver-12) () = default<br> |
|   | [**vk\_physical\_driver**](#function-vk_physical_driver-22) (const VkInstance & p\_instance) <br> |
|   | [**~vk\_physical\_driver**](#function-vk_physical_driver) () <br> |




























## Public Functions Documentation




### function get\_surface\_properties 

```C++
surface_properties atlas::vk::vk_physical_driver::get_surface_properties (
    const VkSurfaceKHR & p_surface
) 
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



### function read\_presentation\_index 

```C++
uint32_t atlas::vk::vk_physical_driver::read_presentation_index (
    const VkSurfaceKHR & p_surface
) 
```




<hr>



### function read\_queue\_family\_indices 

```C++
inline queue_family_indices atlas::vk::vk_physical_driver::read_queue_family_indices () const
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



### function ~vk\_physical\_driver 

```C++
atlas::vk::vk_physical_driver::~vk_physical_driver () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/vk_physical_driver.hpp`

