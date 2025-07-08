

# Class atlas::scene\_scope



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**scene\_scope**](classatlas_1_1scene__scope.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; [**scene\_object**](classatlas_1_1scene__object.md) &gt; | [**create\_new\_object**](#function-create_new_object) (const std::string & p\_tag) <br> |
|  std::string | [**get\_tag**](#function-get_tag) () <br> |
|   | [**world**](#function-world-12) () const<br> |
|   | [**world**](#function-world-22) () <br> |
|  flecs::query\_builder&lt; Comps... &gt; | [**query\_builder**](#function-query_builder) (Args &&... args) const<br> |
|   | [**scene\_scope**](#function-scene_scope-12) () <br> |
|   | [**scene\_scope**](#function-scene_scope-22) (const std::string & p\_tag) <br> |
| virtual  | [**~scene\_scope**](#function-scene_scope) () = default<br> |




























## Public Functions Documentation




### function create\_new\_object 

```C++
inline ref < scene_object > atlas::scene_scope::create_new_object (
    const std::string & p_tag
) 
```




<hr>



### function get\_tag 

```C++
inline std::string atlas::scene_scope::get_tag () 
```




<hr>



### function world [1/2]

```C++
inline atlas::scene_scope::world () const
```




<hr>



### function world [2/2]

```C++
inline atlas::scene_scope::world () 
```




<hr>



### function query\_builder 

```C++
template<typename... Comps, typename... Args>
inline flecs::query_builder< Comps... > atlas::scene_scope::query_builder (
    Args &&... args
) const
```




<hr>



### function scene\_scope [1/2]

```C++
inline atlas::scene_scope::scene_scope () 
```




<hr>



### function scene\_scope [2/2]

```C++
inline atlas::scene_scope::scene_scope (
    const std::string & p_tag
) 
```




<hr>



### function ~scene\_scope 

```C++
virtual atlas::scene_scope::~scene_scope () = default
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/scene.hpp`

