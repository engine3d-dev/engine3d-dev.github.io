

# Class atlas::console\_log\_manager



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**console\_log\_manager**](classatlas_1_1console__log__manager.md)












































## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**create\_new\_logger**](#function-create_new_logger) (const std::string & p\_tag="Undefined Tag") <br> |
|  [**ref**](namespaceatlas.md#typedef-ref)&lt; spdlog::logger &gt; | [**get**](#function-get) (const std::string & p\_tag) <br> |
|  void | [**initialize\_logger\_manager**](#function-initialize_logger_manager) (const std::string & pattern="%^[%T] %n: %v%$") <br> |
|  void | [**set\_current\_logger**](#function-set_current_logger) (const std::string & p\_tag="Undefined g\_Tag in console\_logger") <br> |


























## Public Static Functions Documentation




### function create\_new\_logger 

```C++
static void atlas::console_log_manager::create_new_logger (
    const std::string & p_tag="Undefined Tag"
) 
```




<hr>



### function get 

```C++
static ref < spdlog::logger > atlas::console_log_manager::get (
    const std::string & p_tag
) 
```




<hr>



### function initialize\_logger\_manager 

```C++
static void atlas::console_log_manager::initialize_logger_manager (
    const std::string & pattern="%^[%T] %n: %v%$"
) 
```





**Note:**

Used for initiating this console logger across engine3d supplying the pattern and application to dedicate log messages to 





        

<hr>



### function set\_current\_logger 

```C++
static void atlas::console_log_manager::set_current_logger (
    const std::string & p_tag="Undefined g_Tag in console_logger"
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/engine_logger.hpp`

