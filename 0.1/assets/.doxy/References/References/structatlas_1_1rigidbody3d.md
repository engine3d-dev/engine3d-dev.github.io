

# Struct atlas::rigidbody3d



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**rigidbody3d**](structatlas_1_1rigidbody3d.md)



[More...](#detailed-description)

* `#include <components.hpp>`

















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**BodyType**](#enum-bodytype)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  void \* | [**BodyAtRuntime**](#variable-bodyatruntime)   = `/* multi line expression */`<br> |
|  bool | [**HasFixation**](#variable-hasfixation)   = `false`<br> |
|  BodyType | [**Type**](#variable-type)   = `BodyType::STATIC`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**rigidbody3d**](#function-rigidbody3d) () = default<br> |




























## Detailed Description




**Note:**

Our interpretation of the RigidBody3D 





    
## Public Types Documentation




### enum BodyType 

```C++
enum atlas::rigidbody3d::BodyType {
    STATIC = 0,
    DYNAMIC = 1,
    KINEMATIC = 2
};
```




<hr>
## Public Attributes Documentation




### variable BodyAtRuntime 

```C++
void* atlas::rigidbody3d::BodyAtRuntime;
```




<hr>



### variable HasFixation 

```C++
bool atlas::rigidbody3d::HasFixation;
```




<hr>



### variable Type 

```C++
BodyType atlas::rigidbody3d::Type;
```




<hr>
## Public Functions Documentation




### function rigidbody3d 

```C++
atlas::rigidbody3d::rigidbody3d () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/components.hpp`

