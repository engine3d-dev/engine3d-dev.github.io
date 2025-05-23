

# Class atlas::renderer



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**renderer**](classatlas_1_1renderer.md)












































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin**](#function-begin) () <br> |
|  void | [**end**](#function-end) () <br> |
|  uint32\_t | [**get\_current\_frame**](#function-get_current_frame) () <br> |
|  void | [**initialize**](#function-initialize) () <br> |


























## Public Static Functions Documentation




### function begin 

```C++
static void atlas::renderer::begin () 
```





**Note:**

Begin()
* Indicates to the renderer the preparation before the next frame's called






**Note:**

End()
* At the end of frame the renderer will offload the tasks onto the GPU




TODO: Implement Batch Rendering (Minimal Optimizaiton)
* Batch Rendering is a technique on rendering in batches
* Meaning when we call `Render*` functions, we are not calling draw commands per function call of `Render*`
* Batch Rendering is how we render in batches. Meaning when we call Render\*, we submit to via those Render\* functions. Then when we reached the end of the frame via End() function.
* Then End() is reached before we indicate the scene is rendered, we render all our modified objects 




        

<hr>



### function end 

```C++
static void atlas::renderer::end () 
```




<hr>



### function get\_current\_frame 

```C++
static uint32_t atlas::renderer::get_current_frame () 
```




<hr>



### function initialize 

```C++
static void atlas::renderer::initialize () 
```





**Note:**

Used to initialize 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/renderer/renderer.hpp`

