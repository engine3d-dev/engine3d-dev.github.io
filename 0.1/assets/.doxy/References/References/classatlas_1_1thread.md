

# Class atlas::thread



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**thread**](classatlas_1_1thread.md)



[More...](#detailed-description)

* `#include <thread.hpp>`





































## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**Join**](#function-join) () <br> |
|  bool | [**Joinable**](#function-joinable) () <br> |
|  void | [**dispatch**](#function-dispatch-12) (const T & p\_function) <br> |
|  void | [**dispatch**](#function-dispatch-22) (T && func, Args &&... args) <br> |
|   | [**thread**](#function-thread-13) (const std::string & p\_tag) <br> |
|   | [**thread**](#function-thread-23) () = delete<br> |
|   | [**thread**](#function-thread-33) (const std::string & p\_tag="Undefined") <br> |
|   | [**~thread**](#function-thread) () <br> |




























## Detailed Description




**Note:**

Current work to get back to it.




**Note:**

The thought we are doing are the following




**Note:**

First implement thread.hpp 




**Note:**

Implementing the thread class to wrap around the &lt;thread&gt; for handling and doing thread stuff like thread statuses, policies, etc




**Note:**

Second improve &lt;thread\_pool&gt; to first be able to spawn those threads 




**Note:**

Then once we can spawn those specific threads successfully then we apply what global update does and use a similar logic into the &lt;thread\_pool&gt; itself




**Note:**

Third, fix up the FPS and timer for udpate frequency 





    
## Public Functions Documentation




### function Join 

```C++
inline void atlas::thread::Join () 
```




<hr>



### function Joinable 

```C++
inline bool atlas::thread::Joinable () 
```




<hr>



### function dispatch [1/2]

```C++
template<typename T>
inline void atlas::thread::dispatch (
    const T & p_function
) 
```




<hr>



### function dispatch [2/2]

```C++
template<typename T, typename... Args>
inline void atlas::thread::dispatch (
    T && func,
    Args &&... args
) 
```




<hr>



### function thread [1/3]

```C++
atlas::thread::thread (
    const std::string & p_tag
) 
```




<hr>



### function thread [2/3]

```C++
atlas::thread::thread () = delete
```




<hr>



### function thread [3/3]

```C++
inline atlas::thread::thread (
    const std::string & p_tag="Undefined"
) 
```




<hr>



### function ~thread 

```C++
inline atlas::thread::~thread () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/threads/thread.hpp`

