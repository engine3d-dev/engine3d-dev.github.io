

# Class atlas::physics::physics\_context



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**physics\_context**](classatlas_1_1physics_1_1physics__context.md)



_The context is the way to interact with only the engine. It is the api for all the background funcitons and information that the user shouldn not see. It is a virtual based type erasure class so thatmany engines can implement the same functions. Specifically realted to backend engine creation like batching, starting runtime, etc..._ 

* `#include <physics_context.hpp>`





Inherited by the following classes: [atlas::physics::jolt\_context](classatlas_1_1physics_1_1jolt__context.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**clean\_bodies**](#function-clean_bodies) () <br> |
|  void | [**contact\_added\_event**](#function-contact_added_event) () <br> |
|  void | [**create\_bodies**](#function-create_bodies) () <br> |
|  void | [**run\_physics\_step**](#function-run_physics_step) () <br> |
| virtual  | [**~physics\_context**](#function-physics_context) () = default<br> |




























## Public Functions Documentation




### function clean\_bodies 

```C++
void atlas::physics::physics_context::clean_bodies () 
```




<hr>



### function contact\_added\_event 

```C++
void atlas::physics::physics_context::contact_added_event () 
```




<hr>



### function create\_bodies 

```C++
void atlas::physics::physics_context::create_bodies () 
```




<hr>



### function run\_physics\_step 

```C++
void atlas::physics::physics_context::run_physics_step () 
```




<hr>



### function ~physics\_context 

```C++
virtual atlas::physics::physics_context::~physics_context () = default
```





**Remark:**

This has to be public to get shared pointer working 




**Note:**

With one exception being some friend class but not the way 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/physics_context.hpp`

