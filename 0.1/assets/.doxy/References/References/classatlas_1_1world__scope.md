

# Class atlas::world\_scope



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**world\_scope**](classatlas_1_1world__scope.md)



_Lets rethink how_ [_**world\_scope**_](classatlas_1_1world__scope.md) _gets created._[More...](#detailed-description)

* `#include <world.hpp>`



Inherits the following classes: std::enable_shared_from_this< world_scope >


































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add\_scene**](#function-add_scene) (const [**ref**](namespaceatlas.md#typedef-ref)&lt; [**scene\_scope**](classatlas_1_1scene__scope.md) &gt; & p\_scene\_context) <br> |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; [**world\_scope**](classatlas_1_1world__scope.md) &gt; | [**get**](#function-get) () <br> |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; [**scene\_scope**](classatlas_1_1scene__scope.md) &gt; | [**get\_scene**](#function-get_scene) (const std::string & p\_tag) <br> |
|  std::string | [**get\_tag**](#function-get_tag) () const<br> |
|   | [**world &**](#function-world-&) () <br> |
|   | [**world\_scope**](#function-world_scope-12) () = default<br> |
|   | [**world\_scope**](#function-world_scope-22) (const std::string & p\_tag) <br> |
|   | [**~world\_scope**](#function-world_scope) () <br> |




























## Detailed Description


The way this works is [**system\_registry**](classatlas_1_1system__registry.md) is going to essentially be how we register worlds


Only difference is we aren't constructing it like: register\_to(this)


What WE are going to do is world\_handler = system\_registry::create(p\_tag);


What this does is essentially creates a world scope inside your world that you want to create and the system registry will create, manage, and keep track of lifetimes of world\_scopes 


    
## Public Functions Documentation




### function add\_scene 

```C++
void atlas::world_scope::add_scene (
    const ref < scene_scope > & p_scene_context
) 
```




<hr>



### function get 

```C++
inline ref < world_scope > atlas::world_scope::get () 
```




<hr>



### function get\_scene 

```C++
inline ref < scene_scope > atlas::world_scope::get_scene (
    const std::string & p_tag
) 
```




<hr>



### function get\_tag 

```C++
inline std::string atlas::world_scope::get_tag () const
```




<hr>



### function world & 

```C++
inline atlas::world_scope::world & () 
```




<hr>



### function world\_scope [1/2]

```C++
atlas::world_scope::world_scope () = default
```




<hr>



### function world\_scope [2/2]

```C++
atlas::world_scope::world_scope (
    const std::string & p_tag
) 
```




<hr>



### function ~world\_scope 

```C++
atlas::world_scope::~world_scope () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/world.hpp`

