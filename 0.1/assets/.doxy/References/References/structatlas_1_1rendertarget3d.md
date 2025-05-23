

# Struct atlas::rendertarget3d



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**rendertarget3d**](structatlas_1_1rendertarget3d.md)



[More...](#detailed-description)

* `#include <components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**Filepath**](#variable-filepath)  <br> |
|  [**mesh**](classatlas_1_1mesh.md) | [**MeshMetaData**](#variable-meshmetadata)   = `{}`<br> |
|  glm::mat4 | [**Model**](#variable-model)   = `{ 1.f }`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**rendertarget3d**](#function-rendertarget3d-12) () = default<br> |
|   | [**rendertarget3d**](#function-rendertarget3d-22) (const std::string & p\_filepath) <br> |




























## Detailed Description




**Note:**

Contains our render target as the mesh TODO: IMPORTANT: NEED TO CHANGE HOW THIS WORKSS!! IMPORTANT: flecs gives you a lifetime issue if it doesnt have a default constructor implictly added to a struct/class 





    
## Public Attributes Documentation




### variable Filepath 

```C++
std::string atlas::rendertarget3d::Filepath;
```




<hr>



### variable MeshMetaData 

```C++
mesh atlas::rendertarget3d::MeshMetaData;
```




<hr>



### variable Model 

```C++
glm::mat4 atlas::rendertarget3d::Model;
```




<hr>
## Public Functions Documentation




### function rendertarget3d [1/2]

```C++
atlas::rendertarget3d::rendertarget3d () = default
```




<hr>



### function rendertarget3d [2/2]

```C++
inline atlas::rendertarget3d::rendertarget3d (
    const std::string & p_filepath
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/components.hpp`

