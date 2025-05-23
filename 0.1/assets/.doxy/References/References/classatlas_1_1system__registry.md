

# Class atlas::system\_registry



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**system\_registry**](classatlas_1_1system__registry.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**system\_registry**](#function-system_registry) (const std::string & p\_tag) <br> |
|   | [**~system\_registry**](#function-system_registry) () <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**world\_scope**](classatlas_1_1world__scope.md) &gt; | [**create\_world**](#function-create_world) (const std::string & p\_tag) <br>_Instantiates new_ [_**world\_scope**_](classatlas_1_1world__scope.md) _._ |
|  ref&lt; [**world\_scope**](classatlas_1_1world__scope.md) &gt; | [**get\_world**](#function-get_world) (const std::string & p\_tag) <br>_Searches and returns_ [_**world\_scope**_](classatlas_1_1world__scope.md) _if found._ |


























## Public Functions Documentation




### function system\_registry 

```C++
atlas::system_registry::system_registry (
    const std::string & p_tag
) 
```




<hr>



### function ~system\_registry 

```C++
atlas::system_registry::~system_registry () 
```




<hr>
## Public Static Functions Documentation




### function create\_world 

_Instantiates new_ [_**world\_scope**_](classatlas_1_1world__scope.md) _._
```C++
static ref< world_scope > atlas::system_registry::create_world (
    const std::string & p_tag
) 
```





**Note:**

[**system\_registry**](classatlas_1_1system__registry.md) does the following:
* Creates world scopes
* Manages Lifetimes of world objects
* Keeps tracks of the refcounting of references to these world objects
* Provide globalized access to other worlds 







        

<hr>



### function get\_world 

_Searches and returns_ [_**world\_scope**_](classatlas_1_1world__scope.md) _if found._
```C++
static ref< world_scope > atlas::system_registry::get_world (
    const std::string & p_tag
) 
```



Returns nullptr if [**world\_scope**](classatlas_1_1world__scope.md) not found 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/system_framework/system_registry.hpp`

