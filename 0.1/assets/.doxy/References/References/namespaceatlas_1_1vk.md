

# Namespace atlas::vk



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md)










































## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; const char \* &gt; | [**initialize\_instance\_extensions**](#function-initialize_instance_extensions) () <br> |
|  std::span&lt; uint8\_t &gt; | [**to\_bytes**](#function-to_bytes) (T p\_data) <br> |
|  void | [**vk\_check**](#function-vk_check) (const VkResult & p\_result, const std::string & p\_name, const std::source\_location & p\_source) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; char &gt; | [**compile\_binary\_shader\_source**](#function-compile_binary_shader_source) (const ::vk::shader\_source & p\_shader\_source) <br>_Ensure file reads are valid before reading raw .spv binaries._  |
|  std::vector&lt; uint32\_t &gt; | [**compile\_source\_from\_file**](#function-compile_source_from_file) (const ::vk::shader\_source & p\_shader\_source) <br> |
|  void | [**im\_gui\_layout\_color\_modification**](#function-im_gui_layout_color_modification) () <br> |
|  std::vector&lt; char &gt; | [**read\_raw\_spirv**](#function-read_raw_spirv) (const std::string & p\_file) <br> |
|  std::string | [**read\_shader\_source\_code**](#function-read_shader_source_code) (const std::string & p\_filename) <br> |
|  VkFormat | [**search\_depth\_format**](#function-search_depth_format) (const VkPhysicalDevice & p\_physical) <br> |
|  VkFormat | [**search\_supported\_depth\_format**](#function-search_supported_depth_format) (const VkPhysicalDevice & p\_physical, std::span&lt; VkFormat &gt; p\_formats, VkImageTiling p\_tiling, VkFormatFeatureFlags p\_feature\_flag) <br> |


























## Public Functions Documentation




### function initialize\_instance\_extensions 

```C++
std::vector< const char * > atlas::vk::initialize_instance_extensions () 
```




<hr>



### function to\_bytes 

```C++
template<typename T>
std::span< uint8_t > atlas::vk::to_bytes (
    T p_data
) 
```




<hr>



### function vk\_check 

```C++
void atlas::vk::vk_check (
    const VkResult & p_result,
    const std::string & p_name,
    const std::source_location & p_source
) 
```




<hr>
## Public Static Functions Documentation




### function compile\_binary\_shader\_source 

_Ensure file reads are valid before reading raw .spv binaries._ 
```C++
static std::vector< char > atlas::vk::compile_binary_shader_source (
    const ::vk::shader_source & p_shader_source
) 
```




<hr>



### function compile\_source\_from\_file 

```C++
static std::vector< uint32_t > atlas::vk::compile_source_from_file (
    const ::vk::shader_source & p_shader_source
) 
```



compiles source code from the shader directly without needing manual recompilation


shaderc requires these parameters to compile text\_source\_code: the std::string version of the entire source code to compile type: shader stage this shader corresponds to filename: input filename text entry\_point: the entry point to this shader options: compiler-specific options to enable when compiling the shader sources 


        

<hr>



### function im\_gui\_layout\_color\_modification 

```C++
static void atlas::vk::im_gui_layout_color_modification () 
```




<hr>



### function read\_raw\_spirv 

```C++
static std::vector< char > atlas::vk::read_raw_spirv (
    const std::string & p_file
) 
```




<hr>



### function read\_shader\_source\_code 

```C++
static std::string atlas::vk::read_shader_source_code (
    const std::string & p_filename
) 
```




<hr>



### function search\_depth\_format 

```C++
static VkFormat atlas::vk::search_depth_format (
    const VkPhysicalDevice & p_physical
) 
```




<hr>



### function search\_supported\_depth\_format 

```C++
static VkFormat atlas::vk::search_supported_depth_format (
    const VkPhysicalDevice & p_physical,
    std::span< VkFormat > p_formats,
    VkImageTiling p_tiling,
    VkFormatFeatureFlags p_feature_flag
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/drivers/vulkan-cpp/mesh.cpp`

