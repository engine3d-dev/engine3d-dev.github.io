

# Namespace atlas::sync\_update



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**sync\_update**](namespaceatlas_1_1sync__update.md)


























## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::deque&lt; std::function&lt; void()&gt; &gt; | [**s\_late\_update**](#variable-s_late_update)  <br> |
|  std::deque&lt; std::function&lt; void()&gt; &gt; | [**s\_physica\_update**](#variable-s_physica_update)  <br> |
|  std::deque&lt; std::function&lt; void()&gt; &gt; | [**s\_ui\_update**](#variable-s_ui_update)  <br> |
|  std::deque&lt; std::function&lt; void()&gt; &gt; | [**s\_update**](#variable-s_update)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**attach**](#function-attach) (UObject \* p\_instance, const UCallable & p\_callable) <br> |
|  float | [**delta\_time**](#function-delta_time) () <br> |
|  void | [**initialize**](#function-initialize) () <br> |
|  void | [**on\_late\_update**](#function-on_late_update) () <br> |
|  void | [**on\_physics\_update**](#function-on_physics_update) () <br> |
|  void | [**on\_ui\_update**](#function-on_ui_update) () <br> |
|  void | [**on\_update**](#function-on_update) () <br> |
|  void | [**post**](#function-post) (UObject \* p\_instance, const UCallable & p\_callable) <br> |
|  void | [**sync**](#function-sync) (UObject \* p\_instance, const UFunction & p\_callable) <br> |
|  void | [**sync\_physics**](#function-sync_physics) (UObject \* p\_instance, const UFunction & p\_callable) <br> |




























## Public Attributes Documentation




### variable s\_late\_update 

```C++
std::deque<std::function<void()> > atlas::sync_update::s_late_update;
```




<hr>



### variable s\_physica\_update 

```C++
std::deque<std::function<void()> > atlas::sync_update::s_physica_update;
```




<hr>



### variable s\_ui\_update 

```C++
std::deque<std::function<void()> > atlas::sync_update::s_ui_update;
```




<hr>



### variable s\_update 

```C++
std::deque<std::function<void()> > atlas::sync_update::s_update;
```




<hr>
## Public Functions Documentation




### function attach 

```C++
template<typename UObject, typename UCallable>
void atlas::sync_update::attach (
    UObject * p_instance,
    const UCallable & p_callable
) 
```





**Note:**

Attach our UI Updates 





        

<hr>



### function delta\_time 

```C++
float atlas::sync_update::delta_time () 
```





**Note:**

Retrieves the local delta time 





        

<hr>



### function initialize 

```C++
void atlas::sync_update::initialize () 
```





**Note:**

Initializes sync update manager to make sure our manager is able to dispatch our update functions. 





        

<hr>



### function on\_late\_update 

```C++
void atlas::sync_update::on_late_update () 
```




<hr>



### function on\_physics\_update 

```C++
void atlas::sync_update::on_physics_update () 
```




<hr>



### function on\_ui\_update 

```C++
void atlas::sync_update::on_ui_update () 
```




<hr>



### function on\_update 

```C++
void atlas::sync_update::on_update () 
```




<hr>



### function post 

```C++
template<typename UObject, typename UCallable>
inline void atlas::sync_update::post (
    UObject * p_instance,
    const UCallable & p_callable
) 
```





**Note:**

Post update - newly defined late update 





        

<hr>



### function sync 

```C++
template<typename UObject, typename UFunction>
void atlas::sync_update::sync (
    UObject * p_instance,
    const UFunction & p_callable
) 
```





**Note:**

Synchronize our update per frame 





        

<hr>



### function sync\_physics 

```C++
template<typename UObject, typename UFunction>
void atlas::sync_update::sync_physics (
    UObject * p_instance,
    const UFunction & p_callable
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/update_handlers/sync_update.hpp`

