

# Namespace atlas::detail



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**detail**](namespaceatlas_1_1detail.md)


























## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; void \*, std::function&lt; void()&gt; &gt; | [**s\_defer\_update**](#variable-s_defer_update)   = `{}`<br> |
|  std::unordered\_map&lt; void \*, std::function&lt; void()&gt; &gt; | [**s\_physica\_update**](#variable-s_physica_update)   = `{}`<br> |
|  std::unordered\_map&lt; void \*, std::function&lt; void()&gt; &gt; | [**s\_start**](#variable-s_start)   = `{}`<br> |
|  std::unordered\_map&lt; void \*, std::function&lt; void()&gt; &gt; | [**s\_ui\_update**](#variable-s_ui_update)   = `{}`<br> |
|  std::unordered\_map&lt; void \*, std::function&lt; void()&gt; &gt; | [**s\_update**](#variable-s_update)   = `{}`<br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**invoke\_defer\_update**](#function-invoke_defer_update) () <br> |
|  void | [**invoke\_on\_update**](#function-invoke_on_update) () <br> |
|  void | [**invoke\_physics\_update**](#function-invoke_physics_update) () <br> |
|  void | [**invoke\_start**](#function-invoke_start) () <br> |
|  void | [**invoke\_ui\_update**](#function-invoke_ui_update) () <br> |
|  void | [**poll\_defer\_update**](#function-poll_defer_update) (void \* p\_address, const std::function&lt; void()&gt; & p\_callback) <br> |
|  void | [**poll\_physics\_update**](#function-poll_physics_update) (void \* p\_address, const std::function&lt; void()&gt; & p\_callback) <br> |
|  void | [**poll\_start**](#function-poll_start) (void \* p\_address, const std::function&lt; void()&gt; & p\_callback) <br> |
|  void | [**poll\_ui\_update**](#function-poll_ui_update) (void \* p\_address, const std::function&lt; void()&gt; & p\_callback) <br> |
|  void | [**poll\_update**](#function-poll_update) (void \* p\_address, const std::function&lt; void()&gt; & p\_callable) <br> |
|  void | [**remove\_defer\_update**](#function-remove_defer_update) (void \* p\_address) <br> |
|  void | [**remove\_physics\_update**](#function-remove_physics_update) (void \* p\_address) <br> |
|  void | [**remove\_start**](#function-remove_start) (void \* p\_address) <br> |
|  void | [**remove\_ui\_update**](#function-remove_ui_update) (void \* p\_address) <br> |
|  void | [**remove\_update**](#function-remove_update) (void \* p\_address) <br> |




























## Public Attributes Documentation




### variable s\_defer\_update 

```C++
std::unordered_map<void*, std::function<void()> > atlas::detail::s_defer_update;
```




<hr>



### variable s\_physica\_update 

```C++
std::unordered_map<void*, std::function<void()> > atlas::detail::s_physica_update;
```




<hr>



### variable s\_start 

```C++
std::unordered_map<void*, std::function<void()> > atlas::detail::s_start;
```




<hr>



### variable s\_ui\_update 

```C++
std::unordered_map<void*, std::function<void()> > atlas::detail::s_ui_update;
```




<hr>



### variable s\_update 

```C++
std::unordered_map<void*, std::function<void()> > atlas::detail::s_update;
```




<hr>
## Public Functions Documentation




### function invoke\_defer\_update 

```C++
void atlas::detail::invoke_defer_update () 
```




<hr>



### function invoke\_on\_update 

```C++
void atlas::detail::invoke_on_update () 
```




<hr>



### function invoke\_physics\_update 

```C++
void atlas::detail::invoke_physics_update () 
```




<hr>



### function invoke\_start 

```C++
void atlas::detail::invoke_start () 
```




<hr>



### function invoke\_ui\_update 

```C++
void atlas::detail::invoke_ui_update () 
```




<hr>



### function poll\_defer\_update 

```C++
void atlas::detail::poll_defer_update (
    void * p_address,
    const std::function< void()> & p_callback
) 
```




<hr>



### function poll\_physics\_update 

```C++
void atlas::detail::poll_physics_update (
    void * p_address,
    const std::function< void()> & p_callback
) 
```




<hr>



### function poll\_start 

```C++
void atlas::detail::poll_start (
    void * p_address,
    const std::function< void()> & p_callback
) 
```




<hr>



### function poll\_ui\_update 

```C++
void atlas::detail::poll_ui_update (
    void * p_address,
    const std::function< void()> & p_callback
) 
```




<hr>



### function poll\_update 

```C++
void atlas::detail::poll_update (
    void * p_address,
    const std::function< void()> & p_callable
) 
```




<hr>



### function remove\_defer\_update 

```C++
void atlas::detail::remove_defer_update (
    void * p_address
) 
```




<hr>



### function remove\_physics\_update 

```C++
void atlas::detail::remove_physics_update (
    void * p_address
) 
```




<hr>



### function remove\_start 

```C++
void atlas::detail::remove_start (
    void * p_address
) 
```




<hr>



### function remove\_ui\_update 

```C++
void atlas::detail::remove_ui_update (
    void * p_address
) 
```




<hr>



### function remove\_update 

```C++
void atlas::detail::remove_update (
    void * p_address
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/core/utilities/state.cpp`

