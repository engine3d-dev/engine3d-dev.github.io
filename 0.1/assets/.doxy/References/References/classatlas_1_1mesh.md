

# Class atlas::mesh



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**mesh**](classatlas_1_1mesh.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; [**index\_buffer**](classatlas_1_1index__buffer.md) &gt; & | [**get\_index\_buffer**](#function-get_index_buffer) () <br> |
|  ref&lt; [**vertex\_buffer**](classatlas_1_1vertex__buffer.md) &gt; & | [**get\_vertex\_buffer**](#function-get_vertex_buffer) () <br> |
|  bool | [**is\_loaded**](#function-is_loaded) () const<br> |
|   | [**mesh**](#function-mesh-13) () = default<br> |
|   | [**mesh**](#function-mesh-23) (const std::string & p\_filepath) <br> |
|   | [**mesh**](#function-mesh-33) (const ref&lt; [**vertex\_buffer**](classatlas_1_1vertex__buffer.md) &gt; & p\_vertex\_buffer, const ref&lt; [**index\_buffer**](classatlas_1_1index__buffer.md) &gt; & p\_index\_buffer) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  [**mesh**](classatlas_1_1mesh.md) | [**load**](#function-load) (const std::string & p\_filepath) <br> |


























## Public Functions Documentation




### function get\_index\_buffer 

```C++
inline ref< index_buffer > & atlas::mesh::get_index_buffer () 
```




<hr>



### function get\_vertex\_buffer 

```C++
inline ref< vertex_buffer > & atlas::mesh::get_vertex_buffer () 
```




<hr>



### function is\_loaded 

```C++
bool atlas::mesh::is_loaded () const
```




<hr>



### function mesh [1/3]

```C++
atlas::mesh::mesh () = default
```




<hr>



### function mesh [2/3]

```C++
atlas::mesh::mesh (
    const std::string & p_filepath
) 
```




<hr>



### function mesh [3/3]

```C++
atlas::mesh::mesh (
    const ref< vertex_buffer > & p_vertex_buffer,
    const ref< index_buffer > & p_index_buffer
) 
```




<hr>
## Public Static Functions Documentation




### function load 

```C++
static mesh atlas::mesh::load (
    const std::string & p_filepath
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/geometry/mesh.hpp`

