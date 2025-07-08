

# Struct atlas::rigidbody3d



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**rigidbody3d**](structatlas_1_1rigidbody3d.md)



[More...](#detailed-description)

* `#include <components.hpp>`

















## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**body\_type**](#enum-body_type)  <br> |




## Public Attributes

| Type | Name |
| ---: | :--- |
|  void \* | [**body\_at\_runtime**](#variable-body_at_runtime)   = `/* multi line expression */`<br> |
|  bool | [**hax\_fixation**](#variable-hax_fixation)   = `false`<br> |
|  body\_type | [**type**](#variable-type)   = `body\_type::e\_static`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**rigidbody3d**](#function-rigidbody3d) () = default<br> |




























## Detailed Description




**Note:**

Our interpretation of the RigidBody3D 





    
## Public Types Documentation




### enum body\_type 

```C++
enum atlas::rigidbody3d::body_type {
    e_static = 0,
    e_dynamic = 1,
    e_kinematic = 2
};
```




<hr>
## Public Attributes Documentation




### variable body\_at\_runtime 

```C++
void* atlas::rigidbody3d::body_at_runtime;
```




<hr>



### variable hax\_fixation 

```C++
bool atlas::rigidbody3d::hax_fixation;
```




<hr>



### variable type 

```C++
body_type atlas::rigidbody3d::type;
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

