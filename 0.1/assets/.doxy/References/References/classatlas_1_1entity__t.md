

# Class atlas::entity\_t



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**entity\_t**](classatlas_1_1entity__t.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**add**](#function-add) () <br> |
|   | [**entity\_t**](#function-entity_t-13) () = default<br> |
|   | [**entity\_t**](#function-entity_t-23) (flecs::world \* p\_registry, const std::string & p\_tag) <br> |
|   | [**entity\_t**](#function-entity_t-33) (const flecs::entity & p\_entity) <br> |
|  const UComponent \* | [**get**](#function-get) () const<br> |
|  UComponent \* | [**get\_mut**](#function-get_mut) () const<br> |
|  bool | [**has**](#function-has) () const<br> |
|  bool | [**is\_alive**](#function-is_alive) () const<br> |
|  void | [**on\_destruction**](#function-on_destruction) () <br> |
|   | [**entity**](#function-entity-12) () const<br> |
|   | [**entity**](#function-entity-22) () <br> |
|  void | [**remove**](#function-remove) () <br> |
|  void | [**set**](#function-set-12) (const UComponent & p\_component) <br> |
|  void | [**set**](#function-set-22) (const UComponent1 & p\_component1, const UComponent2 & p\_component2) <br> |
|   | [**~entity\_t**](#function-entity_t) () <br> |




























## Public Functions Documentation




### function add 

```C++
template<typename UComponent>
inline void atlas::entity_t::add () 
```





**Note:**

Creates component in the ECS storage but does not assign it with a value. 





        

<hr>



### function entity\_t [1/3]

```C++
atlas::entity_t::entity_t () = default
```




<hr>



### function entity\_t [2/3]

```C++
atlas::entity_t::entity_t (
    flecs::world * p_registry,
    const std::string & p_tag
) 
```




<hr>



### function entity\_t [3/3]

```C++
inline atlas::entity_t::entity_t (
    const flecs::entity & p_entity
) 
```




<hr>



### function get 

```C++
template<typename UComponent>
inline const UComponent * atlas::entity_t::get () const
```





**Note:**

Returns the component from the entity 




**Note:**

Flecs has you return a pointer for checking if the component is found 




**Note:**

If not found will return nullptr 





        

<hr>



### function get\_mut 

```C++
template<typename UComponent>
inline UComponent * atlas::entity_t::get_mut () const
```




<hr>



### function has 

```C++
template<typename UComponent>
inline bool atlas::entity_t::has () const
```





**Note:**

Checks if specific component of type UComponent is provided to this entity 





        

<hr>



### function is\_alive 

```C++
inline bool atlas::entity_t::is_alive () const
```





**Note:**

Flecs allows to check when an entity has been created 




**Note:**

Knowing when this entity lifecyle's ended 





        

<hr>



### function on\_destruction 

```C++
inline void atlas::entity_t::on_destruction () 
```




<hr>



### function entity [1/2]

```C++
inline atlas::entity_t::entity () const
```




<hr>



### function entity [2/2]

```C++
inline atlas::entity_t::entity () 
```




<hr>



### function remove 

```C++
template<typename UComponent>
inline void atlas::entity_t::remove () 
```




<hr>



### function set [1/2]

```C++
template<typename UComponent>
inline void atlas::entity_t::set (
    const UComponent & p_component
) 
```





**Note:**

Setting a component TODO: Try to allow the set component to be set to its initial value Initial value should be set when the component that is set is empty 





        

<hr>



### function set [2/2]

```C++
template<typename UComponent1, typename UComponent2>
inline void atlas::entity_t::set (
    const UComponent1 & p_component1,
    const UComponent2 & p_component2
) 
```





**Note:**

Set value for position and velocity component 




**Note:**

Flecs set component will be added if entity doesn't the component 




**Note:**

This is for setting multiple different components to be stored into the entity 





        

<hr>



### function ~entity\_t 

```C++
atlas::entity_t::~entity_t () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/scene/entity.hpp`

