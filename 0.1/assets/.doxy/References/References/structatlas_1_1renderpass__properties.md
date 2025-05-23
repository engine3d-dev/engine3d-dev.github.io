

# Struct atlas::renderpass\_properties



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**renderpass\_properties**](structatlas_1_1renderpass__properties.md)



[More...](#detailed-description)

* `#include <render_pass.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::span&lt; ImageFormat &gt; | [**attachments**](#variable-attachments)  <br> |
|  uint32\_t | [**height**](#variable-height)  <br> |
|  std::span&lt; ShaderAccessOperation &gt; | [**operations**](#variable-operations)  <br> |
|  uint32\_t | [**width**](#variable-width)  <br> |












































## Detailed Description




**Note:**

To specify our what attachments our render passes will take 





    
## Public Attributes Documentation




### variable attachments 

```C++
std::span<ImageFormat> atlas::renderpass_properties::attachments;
```




<hr>



### variable height 

```C++
uint32_t atlas::renderpass_properties::height;
```




<hr>



### variable operations 

```C++
std::span<ShaderAccessOperation> atlas::renderpass_properties::operations;
```




<hr>



### variable width 

```C++
uint32_t atlas::renderpass_properties::width;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/render_pass.hpp`

