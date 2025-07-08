

# Class atlas::scene\_object



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**scene\_object**](classatlas_1_1scene__object.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add**](#function-add-12) () <br> |
|  void | [**add**](#function-add-22) (UComponent & p\_component\_value) <br> |
|  void | [**add\_query**](#function-add_query) () <br>_Specify groups of entity signatures to add to the entity._  |
|  const UComponent \* | [**get**](#function-get) () const<br> |
|  UComponent \* | [**get\_mut**](#function-get_mut) () <br> |
|  bool | [**has**](#function-has) () <br> |
|   | [**entity**](#function-entity-12) () const<br> |
|   | [**entity**](#function-entity-22) () <br> |
|  void | [**remove**](#function-remove) () <br> |
|   | [**scene\_object**](#function-scene_object) (flecs::world \* p\_registry, const std::string & p\_name) <br> |
|  void | [**set**](#function-set-12) (const UComponent & p\_component) <br> |
|  void | [**set**](#function-set-22) (const UComponent & p\_component, const UComponent2 & p\_component2) <br> |
|   | [**~scene\_object**](#function-scene_object) () <br> |




























## Public Functions Documentation




### function add [1/2]

```C++
template<typename UComponent>
inline void atlas::scene_object::add () 
```




<hr>



### function add [2/2]

```C++
template<typename UComponent>
inline void atlas::scene_object::add (
    UComponent & p_component_value
) 
```




<hr>



### function add\_query 

_Specify groups of entity signatures to add to the entity._ 
```C++
template<typename... Args>
inline void atlas::scene_object::add_query () 
```



signatures being the components EXPERIEMENTAL: Function to add multiple components but still in its experiemental stages. 


        

<hr>



### function get 

```C++
template<typename UComponent>
inline const UComponent * atlas::scene_object::get () const
```




<hr>



### function get\_mut 

```C++
template<typename UComponent>
inline UComponent * atlas::scene_object::get_mut () 
```




<hr>



### function has 

```C++
template<typename UComponent>
inline bool atlas::scene_object::has () 
```




<hr>



### function entity [1/2]

```C++
inline atlas::scene_object::entity () const
```




<hr>



### function entity [2/2]

```C++
inline atlas::scene_object::entity () 
```




<hr>



### function remove 

```C++
template<typename UComponent>
inline void atlas::scene_object::remove () 
```




<hr>



### function scene\_object 

```C++
atlas::scene_object::scene_object (
    flecs::world * p_registry,
    const std::string & p_name
) 
```




<hr>



### function set [1/2]

```C++
template<typename UComponent>
inline void atlas::scene_object::set (
    const UComponent & p_component
) 
```




<hr>



### function set [2/2]

```C++
template<typename UComponent, typename UComponent2>
inline void atlas::scene_object::set (
    const UComponent & p_component,
    const UComponent2 & p_component2
) 
```




<hr>



### function ~scene\_object 

```C++
inline atlas::scene_object::~scene_object () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/scene_object.hpp`

