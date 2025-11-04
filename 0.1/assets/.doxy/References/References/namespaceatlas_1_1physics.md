

# Namespace atlas::physics



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; physics\_context &gt; | [**initialize\_physics\_context**](#function-initialize_physics_context) (const jolt\_settings & p\_settings, event::event\_bus & p\_bus) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  bool | [**assert\_failed\_impl**](#function-assert_failed_impl) (const char \* p\_in\_expression, const char \* p\_in\_message, const char \* p\_in\_file, unsigned int p\_in\_line) <br> |
|  void | [**trace\_impl**](#function-trace_impl) (const char \* p\_in\_fmt, ...) <br> |


























## Public Functions Documentation




### function initialize\_physics\_context 

```C++
ref< physics_context > atlas::physics::initialize_physics_context (
    const jolt_settings & p_settings,
    event::event_bus & p_bus
) 
```




<hr>
## Public Static Functions Documentation




### function assert\_failed\_impl 

```C++
static bool atlas::physics::assert_failed_impl (
    const char * p_in_expression,
    const char * p_in_message,
    const char * p_in_file,
    unsigned int p_in_line
) 
```




<hr>



### function trace\_impl 

```C++
static void atlas::physics::trace_impl (
    const char * p_in_fmt,
    ...
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/drivers/jolt-cpp/jolt_contact_listener.cpp`

