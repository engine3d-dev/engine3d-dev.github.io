

# File engine\_logger.hpp



[**FileList**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**engine\_logger.hpp**](engine__logger_8hpp.md)

[Go to the source code of this file](engine__logger_8hpp_source.md)



* `#include <core/core.hpp>`
* `#include <fmt/os.h>`
* `#include <fmt/ostream.h>`
* `#include <map>`
* `#include <memory>`
* `#include <spdlog/common.h>`
* `#include <spdlog/spdlog.h>`













## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**atlas**](namespaceatlas.md) <br> |


## Classes

| Type | Name |
| ---: | :--- |
| class | [**console\_log\_manager**](classatlas_1_1console__log__manager.md) <br> |






















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**console\_log\_error**](#function-console_log_error) (spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_error\_tagged**](#function-console_log_error_tagged) (const std::string & p\_tag, spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_fatal**](#function-console_log_fatal) (spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_fatal\_tagged**](#function-console_log_fatal_tagged) (const std::string & p\_tag, spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_info**](#function-console_log_info) (spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_info\_tagged**](#function-console_log_info_tagged) (const std::string & p\_tag, spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_trace**](#function-console_log_trace) (spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_trace\_tagged**](#function-console_log_trace_tagged) (const std::string & p\_tag, spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_warn**](#function-console_log_warn) (spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |
|  void | [**console\_log\_warn\_tagged**](#function-console_log_warn_tagged) (const std::string & p\_tag, spdlog::format\_string\_t&lt; T... &gt; fmt, T &&... args) <br> |




























## Public Functions Documentation




### function console\_log\_error 

```C++
template<typename... T>
inline void console_log_error (
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_error\_tagged 

```C++
template<typename... T>
inline void console_log_error_tagged (
    const std::string & p_tag,
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_fatal 

```C++
template<typename... T>
inline void console_log_fatal (
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_fatal\_tagged 

```C++
template<typename... T>
inline void console_log_fatal_tagged (
    const std::string & p_tag,
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_info 

```C++
template<typename... T>
inline void console_log_info (
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_info\_tagged 

```C++
template<typename... T>
inline void console_log_info_tagged (
    const std::string & p_tag,
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_trace 

```C++
template<typename... T>
inline void console_log_trace (
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```





**Note:**

Console Loggers (These are loggers that write specifically to the console, terminal console) 




**Note:**

TODO  Specify that engine3d will have it's own console terminal that these will be written to. 





        

<hr>



### function console\_log\_trace\_tagged 

```C++
template<typename... T>
inline void console_log_trace_tagged (
    const std::string & p_tag,
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_warn 

```C++
template<typename... T>
inline void console_log_warn (
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>



### function console\_log\_warn\_tagged 

```C++
template<typename... T>
inline void console_log_warn_tagged (
    const std::string & p_tag,
    spdlog::format_string_t< T... > fmt,
    T &&... args
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/engine_logger.hpp`

