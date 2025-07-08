

# Class atlas::physics::contact\_listener



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**contact\_listener**](classatlas_1_1physics_1_1contact__listener.md)



_This is the glue between contact events and jolts contact listener. It takes the calls from jolt through virtual functions and allows users to create children for jolt collision._ 

* `#include <jolt_contact_listener.hpp>`



Inherits the following classes: JPH::ContactListener


































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**clear\_events**](#function-clear_events) () <br>_Deletes all events. Helps reset the collisions on load, etc..._  |
|   | [**contact\_listener**](#function-contact_listener) () <br>_Construct a new contact listener object._  |
|  void | [**run\_events\_added**](#function-run_events_added) () <br>_Calls all events that came into contact this frame._  |
|  void | [**run\_events\_persisted**](#function-run_events_persisted) () <br>_Runs all events that came into contact every frame but first and last._  |
|  void | [**run\_events\_removed**](#function-run_events_removed) () <br>_Runs all events who stopped contact this frame._  |




























## Public Functions Documentation




### function clear\_events 

_Deletes all events. Helps reset the collisions on load, etc..._ 
```C++
void atlas::physics::contact_listener::clear_events () 
```




<hr>



### function contact\_listener 

_Construct a new contact listener object._ 
```C++
atlas::physics::contact_listener::contact_listener () 
```




<hr>



### function run\_events\_added 

_Calls all events that came into contact this frame._ 
```C++
void atlas::physics::contact_listener::run_events_added () 
```




<hr>



### function run\_events\_persisted 

_Runs all events that came into contact every frame but first and last._ 
```C++
void atlas::physics::contact_listener::run_events_persisted () 
```




<hr>



### function run\_events\_removed 

_Runs all events who stopped contact this frame._ 
```C++
void atlas::physics::contact_listener::run_events_removed () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/jolt-cpp/jolt_contact_listener.hpp`

