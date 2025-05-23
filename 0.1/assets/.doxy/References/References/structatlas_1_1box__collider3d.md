

# Struct atlas::box\_collider3d



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**box\_collider3d**](structatlas_1_1box__collider3d.md)



[More...](#detailed-description)

* `#include <components.hpp>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  float | [**density**](#variable-density)   = `1.0f`<br> |
|  float | [**friction**](#variable-friction)   = `0.5f`<br> |
|  glm::vec3 | [**offset**](#variable-offset)   = `{ 0.f, 0.f, 0.f }`<br> |
|  float | [**restitution**](#variable-restitution)   = `0.0f`<br> |
|  float | [**restitutionThreshold**](#variable-restitutionthreshold)   = `0.5f`<br> |
|  glm::vec3 | [**size**](#variable-size)   = `{ 0.5f, 0.5f, 0.5f }`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**box\_collider3d**](#function-box_collider3d-12) () = default<br> |
|   | [**box\_collider3d**](#function-box_collider3d-22) (const [**box\_collider3d**](structatlas_1_1box__collider3d.md) &) = default<br> |




























## Detailed Description




**Note:**

Our interpretation of the BoxCollider that will get interpreted based on physics API's enabled 





    
## Public Attributes Documentation




### variable density 

```C++
float atlas::box_collider3d::density;
```




<hr>



### variable friction 

```C++
float atlas::box_collider3d::friction;
```




<hr>



### variable offset 

```C++
glm::vec3 atlas::box_collider3d::offset;
```




<hr>



### variable restitution 

```C++
float atlas::box_collider3d::restitution;
```




<hr>



### variable restitutionThreshold 

```C++
float atlas::box_collider3d::restitutionThreshold;
```




<hr>



### variable size 

```C++
glm::vec3 atlas::box_collider3d::size;
```




<hr>
## Public Functions Documentation




### function box\_collider3d [1/2]

```C++
atlas::box_collider3d::box_collider3d () = default
```




<hr>



### function box\_collider3d [2/2]

```C++
atlas::box_collider3d::box_collider3d (
    const box_collider3d &
) = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/components.hpp`

