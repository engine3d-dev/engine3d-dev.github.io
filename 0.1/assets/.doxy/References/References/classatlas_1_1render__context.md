

# Class atlas::render\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**render\_context**](classatlas_1_1render__context.md)










Inherited by the following classes: [atlas::vk::vk\_renderer](classatlas_1_1vk_1_1vk__renderer.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin**](#function-begin) () <br> |
|  void | [**end**](#function-end) () <br> |
| virtual  | [**~render\_context**](#function-render_context) () = default<br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**get\_current\_frame**](#function-get_current_frame) () <br> |
|  scope&lt; [**render\_context**](classatlas_1_1render__context.md) &gt; | [**initialize**](#function-initialize) (const std::string & p\_tag) <br> |


























## Public Functions Documentation




### function begin 

```C++
void atlas::render_context::begin () 
```




<hr>



### function end 

```C++
void atlas::render_context::end () 
```




<hr>



### function ~render\_context 

```C++
virtual atlas::render_context::~render_context () = default
```




<hr>
## Public Static Functions Documentation




### function get\_current\_frame 

```C++
static uint32_t atlas::render_context::get_current_frame () 
```




<hr>



### function initialize 

```C++
static scope< render_context > atlas::render_context::initialize (
    const std::string & p_tag
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/renderer_backend.hpp`

