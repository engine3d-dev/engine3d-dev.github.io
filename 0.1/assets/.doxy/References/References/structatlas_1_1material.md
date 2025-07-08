

# Struct atlas::material



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**material**](structatlas_1_1material.md)



[More...](#detailed-description)

* `#include <components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  glm::vec4 | [**color**](#variable-color)   = `{ 1.f }`<br> |
|  std::string | [**model\_path**](#variable-model_path)   = `""`<br> |
|  bool | [**model\_reload**](#variable-model_reload)   = `false`<br> |
|  std::vector&lt; std::string &gt; | [**texture\_filepaths**](#variable-texture_filepaths)  <br> |
|  std::string | [**texture\_path**](#variable-texture_path)   = `/* multi line expression */`<br> |
|  bool | [**texture\_reload**](#variable-texture_reload)   = `false`<br> |












































## Detailed Description




**Note:**

Contains our render target as the mesh TODO: IMPORTANT: NEED TO CHANGE HOW THIS WORKSS!! IMPORTANT: flecs gives you a lifetime issue if it doesnt have a default constructor implictly added to a struct/class 





    
## Public Attributes Documentation




### variable color 

```C++
glm::vec4 atlas::material::color;
```




<hr>



### variable model\_path 

```C++
std::string atlas::material::model_path;
```




<hr>



### variable model\_reload 

```C++
bool atlas::material::model_reload;
```




<hr>



### variable texture\_filepaths 

```C++
std::vector<std::string> atlas::material::texture_filepaths;
```




<hr>



### variable texture\_path 

```C++
std::string atlas::material::texture_path;
```




<hr>



### variable texture\_reload 

```C++
bool atlas::material::texture_reload;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/components.hpp`

