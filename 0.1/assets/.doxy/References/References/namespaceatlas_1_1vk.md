

# Namespace atlas::vk



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**vk**](namespaceatlas_1_1vk.md)




















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**camera\_ubo**](structatlas_1_1vk_1_1camera__ubo.md) <br>_Going to remove this._  |
| struct | [**command\_buffer\_settings**](structatlas_1_1vk_1_1command__buffer__settings.md) <br>_settings for specifying command buffers to construct_  |
| struct | [**descriptor\_binding\_entry**](structatlas_1_1vk_1_1descriptor__binding__entry.md) <br> |
| struct | [**descriptor\_binding\_point**](structatlas_1_1vk_1_1descriptor__binding__point.md) <br> |
| class | [**descriptor\_set**](classatlas_1_1vk_1_1descriptor__set.md) <br> |
| struct | [**descriptor\_set\_layout**](structatlas_1_1vk_1_1descriptor__set__layout.md) <br> |
| struct | [**global\_ubo**](structatlas_1_1vk_1_1global__ubo.md) <br>_Just for testing purposes for sending this struct over to the shader._  |
| struct | [**hud\_data**](structatlas_1_1vk_1_1hud__data.md) <br> |
| struct | [**image\_extent**](structatlas_1_1vk_1_1image__extent.md) <br> |
| class | [**imgui\_context**](classatlas_1_1vk_1_1imgui__context.md) <br> |
| struct | [**material\_uniform**](structatlas_1_1vk_1_1material__uniform.md) <br>_material is going to define properties about how a scene object itself gets rendered_  |
| class | [**mesh**](classatlas_1_1vk_1_1mesh.md) <br>_mesh class specifically defined with vulkan implementations for specific primitives TODO: Whenever we load in a texture that will be laucnhed asyncronously_  |
| struct | [**renderpass\_attachment**](structatlas_1_1vk_1_1renderpass__attachment.md) <br> |
| struct | [**renderpass\_options**](structatlas_1_1vk_1_1renderpass__options.md) <br> |
| struct | [**shader\_info**](structatlas_1_1vk_1_1shader__info.md) <br> |
| struct | [**surface\_properties**](structatlas_1_1vk_1_1surface__properties.md) <br> |
| class | [**texture**](classatlas_1_1vk_1_1texture.md) <br> |
| struct | [**texture\_extent**](structatlas_1_1vk_1_1texture__extent.md) <br> |
| struct | [**texture\_properties**](structatlas_1_1vk_1_1texture__properties.md) <br> |
| struct | [**vertex\_attribute**](structatlas_1_1vk_1_1vertex__attribute.md) <br> |
| struct | [**vertex\_attribute\_entry**](structatlas_1_1vk_1_1vertex__attribute__entry.md) <br> |
| struct | [**vertex\_input**](structatlas_1_1vk_1_1vertex__input.md) <br> |
| struct | [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) <br>_vulkan buffer struct to define the handlers and memory specifications required for buffer handlers in vulkan_  |
| struct | [**vk\_buffer\_info**](structatlas_1_1vk_1_1vk__buffer__info.md) <br>_Specifications of the vulkan buffer handlers and the use and memory bits associated with the buffer handlers._  |
| class | [**vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) <br>_Vulkan Command Buffers._  |
| class | [**vk\_context**](classatlas_1_1vk_1_1vk__context.md) <br> |
| class | [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md) <br>_vulkan implementation of extracting a logical device_  |
| struct | [**vk\_filter\_range**](structatlas_1_1vk_1_1vk__filter__range.md) <br>_Range between min and max for the VkFilter._  |
| class | [**vk\_graphics\_queue**](classatlas_1_1vk_1_1vk__graphics__queue.md) <br>_graphics queue mainly used for submitting to the graphics family specific queue_  |
| struct | [**vk\_image**](structatlas_1_1vk_1_1vk__image.md) <br>_vulkan image handler with resources; used when handling textures_  |
| struct | [**vk\_image\_handle**](structatlas_1_1vk_1_1vk__image__handle.md) <br> |
| class | [**vk\_index\_buffer**](classatlas_1_1vk_1_1vk__index__buffer.md) <br> |
| class | [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md) <br> |
| class | [**vk\_pipeline**](classatlas_1_1vk_1_1vk__pipeline.md) <br> |
| class | [**vk\_present\_queue**](classatlas_1_1vk_1_1vk__present__queue.md) <br>_Handles submissions to the specific queue for presentation._  |
| struct | [**vk\_queue\_options**](structatlas_1_1vk_1_1vk__queue__options.md) <br> |
| class | [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) <br>_Something to consider for mesh loading._  |
| class | [**vk\_renderpass**](classatlas_1_1vk_1_1vk__renderpass.md) <br>_defines a renderpass operation_  |
| struct | [**vk\_renderpass\_options**](structatlas_1_1vk_1_1vk__renderpass__options.md) <br>_Renderpass specifictations for VkRenderpass._  |
| class | [**vk\_shader\_group**](classatlas_1_1vk_1_1vk__shader__group.md) <br> |
| struct | [**vk\_shader\_module**](structatlas_1_1vk_1_1vk__shader__module.md) <br> |
| class | [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md) <br> |
| class | [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md) <br> |
| class | [**vk\_vertex\_buffer**](classatlas_1_1vk_1_1vk__vertex__buffer.md) <br> |
| class | [**vk\_window**](classatlas_1_1vk_1_1vk__window.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum uint8\_t | [**attachment\_load**](#enum-attachment_load)  <br>_Equivalent to VkAttachmentLoadOp._  |
| enum uint8\_t | [**attachment\_store**](#enum-attachment_store)  <br>_Equivalent to VkAttachmentStoreOp._  |
| enum uint8\_t | [**buffer**](#enum-buffer)  <br> |
| enum uint8\_t | [**command\_buffer\_levels**](#enum-command_buffer_levels)  <br> |
| enum uint64\_t | [**format**](#enum-format)  <br> |
| enum uint8\_t | [**image\_layout**](#enum-image_layout)  <br> |
| enum uint8\_t | [**input\_rate**](#enum-input_rate)  <br>_Refers to the input rate._  |
| enum uint8\_t | [**pipeline\_bind\_point**](#enum-pipeline_bind_point)  <br>_Equivalent to VkPipelineBindPoint._  |
| enum uint8\_t | [**renderpass\_type**](#enum-renderpass_type)  <br>_this is the expectation of specifying the renderpass attachments_  |
| enum uint8\_t | [**sample\_bit**](#enum-sample_bit)  <br>_Equivalent to doing VkSampleCountFlagBits but simplified._  |
| enum  | [**shader\_stage**](#enum-shader_stage)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**begin\_command\_buffer**](#function-begin_command_buffer) (const VkCommandBuffer & p\_command\_buffer, VkCommandBufferUsageFlags p\_usage\_flags) <br> |
|  int | [**bytes\_per\_texture\_format**](#function-bytes_per_texture_format) (VkFormat p\_format) <br> |
|  void | [**copy**](#function-copy) ([**vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) & p\_command\_buffer, VkImage & p\_image, VkBuffer & p\_buffer, uint32\_t p\_width, uint32\_t p\_height) <br> |
|  void | [**copy**](#function-copy) (const [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_src, const [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_dst, size\_t p\_size\_of\_bytes) <br>_Copies from one buffer source into another buffer source with a specific size of bytes to be stored the buffer that is being copied to._  |
|  [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) | [**create\_buffer**](#function-create_buffer) (const [**vk\_buffer\_info**](structatlas_1_1vk_1_1vk__buffer__info.md) & p\_info) <br> |
|  [**vk\_image**](structatlas_1_1vk_1_1vk__image.md) | [**create\_image2d**](#function-create_image2d) (uint32\_t p\_width, uint32\_t p\_height, VkFormat p\_format, VkImageUsageFlags p\_usage, VkMemoryPropertyFlagBits p\_property) <br>_Returns_ [_**vk\_image**_](structatlas_1_1vk_1_1vk__image.md) _which contains the VkImage and VkImage handlers with image 2D specifications._ |
|  [**vk\_image\_handle**](structatlas_1_1vk_1_1vk__image__handle.md) | [**create\_image2d**](#function-create_image2d) (const VkDevice & p\_driver, const [**image\_extent**](structatlas_1_1vk_1_1image__extent.md) & p\_extent) <br> |
|  VkImageView | [**create\_image\_view**](#function-create_image_view) (const VkImage & p\_image, VkFormat p\_format, VkImageAspectFlags p\_aspect\_flags) <br> |
|  VkImageView | [**create\_image\_view**](#function-create_image_view) (const VkDevice & p\_driver, VkImage p\_image, VkSurfaceFormatKHR p\_surface\_format, VkImageAspectFlags p\_aspect\_flags, VkImageViewType p\_view\_t, uint32\_t p\_layer\_count, uint32\_t p\_mip\_level=1) <br> |
|  VkSampler | [**create\_sampler**](#function-create_sampler) (const [**vk\_filter\_range**](structatlas_1_1vk_1_1vk__filter__range.md) & p\_range, VkSamplerAddressMode p\_address\_mode) <br> |
|  VkSemaphore | [**create\_semaphore**](#function-create_semaphore) (const VkDevice & p\_driver) <br> |
|  VkCommandBuffer | [**create\_single\_command\_buffer**](#function-create_single_command_buffer) (const VkCommandPool & p\_command\_pool) <br> |
|  VkCommandPool | [**create\_single\_command\_pool**](#function-create_single_command_pool) () <br> |
|  [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) | [**create\_uniform\_buffer**](#function-create_uniform_buffer) (uint32\_t p\_size) <br> |
|  void | [**end\_command\_buffer**](#function-end_command_buffer) (const VkCommandBuffer & p\_command\_buffer) <br> |
|  void | [**free\_buffer**](#function-free_buffer) (const VkDevice & p\_driver, [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_buffer) <br> |
|  void | [**free\_image**](#function-free_image) (const VkDevice & p\_driver, [**vk\_image**](structatlas_1_1vk_1_1vk__image.md) & p\_image) <br> |
|  bool | [**has\_stencil\_attachment**](#function-has_stencil_attachment) (VkFormat p\_format) <br>_Validate if the format specified is a stencil attachment._  |
|  void | [**image\_memory\_barrier**](#function-image_memory_barrier) (VkCommandBuffer & p\_command\_buffer, VkImage & p\_image, VkFormat p\_format, VkImageLayout p\_old, VkImageLayout p\_new) <br> |
|  void | [**queue\_submit**](#function-queue_submit) (const VkQueue & p\_queue\_handle, const std::span&lt; VkCommandBuffer &gt; & p\_commands) <br> |
|  VkPresentModeKHR | [**select\_compatible\_present\_mode**](#function-select_compatible_present_mode) (const VkPresentModeKHR & p\_request, const std::span&lt; VkPresentModeKHR &gt; & p\_modes) <br> |
|  uint32\_t | [**select\_images\_size**](#function-select_images_size) (const VkSurfaceCapabilitiesKHR & p\_surface\_capabilities) <br> |
|  VkAttachmentLoadOp | [**to\_vk\_attachment\_load**](#function-to_vk_attachment_load) (attachment\_load p\_attachment\_type) <br> |
|  VkAttachmentStoreOp | [**to\_vk\_attachment\_store**](#function-to_vk_attachment_store) (const attachment\_store & p\_attachment\_type) <br> |
|  VkCommandBufferLevel | [**to\_vk\_command\_buffer\_level**](#function-to_vk_command_buffer_level) (const command\_buffer\_levels & p\_levels) <br>_Conversion function that returns VkCommandBufferLevel._  |
|  VkDescriptorType | [**to\_vk\_descriptor\_type**](#function-to_vk_descriptor_type) (const buffer & p\_type) <br> |
|  VkFormat | [**to\_vk\_format**](#function-to_vk_format) (const format & p\_format) <br>_converts high-level specifications of format to VkFormat_  |
|  VkImageLayout | [**to\_vk\_image\_layout**](#function-to_vk_image_layout) (const image\_layout & p\_layout) <br> |
|  VkVertexInputRate | [**to\_vk\_input\_rate**](#function-to_vk_input_rate) (const input\_rate & p\_input\_rate) <br> |
|  VkPipelineBindPoint | [**to\_vk\_pipeline\_bind\_point**](#function-to_vk_pipeline_bind_point) (const pipeline\_bind\_point & p\_bind\_point) <br> |
|  VkSampleCountFlagBits | [**to\_vk\_sample\_count\_bits**](#function-to_vk_sample_count_bits) (const sample\_bit & p\_sample\_count\_bit) <br> |
|  VkShaderStageFlags | [**to\_vk\_shader\_stage**](#function-to_vk_shader_stage) (const shader\_stage & p\_stage) <br> |
|  VkShaderStageFlagBits | [**to\_vk\_shader\_stage\_bits**](#function-to_vk_shader_stage_bits) (const shader\_stage & p\_stage) <br> |
|  void | [**transition\_image\_layout**](#function-transition_image_layout) (VkImage & p\_image, VkFormat p\_format, VkImageLayout p\_old, VkImageLayout p\_new) <br> |
|  void | [**transition\_image\_layout**](#function-transition_image_layout) (VkCommandBuffer & p\_command\_buffer, VkImage & p\_image, VkFormat p\_format, VkImageLayout p\_old, VkImageLayout p\_new) <br> |
|  void | [**vk\_check**](#function-vk_check) (const VkResult & p\_result, const std::string & p\_name, const std::source\_location & p\_source=std::source\_location::current()) <br> |
|  void | [**vk\_check\_format**](#function-vk_check_format) (VkFormat p\_format, const char \* p\_filepath, uint32\_t p\_line, const char \* p\_function\_name) <br>_Checks for valid_ `VkFormat` _specified._ |
|  std::string | [**vk\_format\_to\_string**](#function-vk_format_to_string) (VkFormat p\_format) <br> |
|  std::string | [**vk\_present\_mode\_to\_string**](#function-vk_present_mode_to_string) (VkPresentModeKHR p\_present\_mode) <br> |
|  void | [**write**](#function-write) (const [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_buffer, const void \* p\_data, size\_t p\_size\_in\_bytes) <br>_maps the current buffer handler to some block of memory and the byte size for that chunk_  |
|  void | [**write**](#function-write) (const [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_buffer, const std::span&lt; uint32\_t &gt; & p\_in\_buffer) <br>_Maps buffer handler to chunk of data of type, that is std::span&lt;uint32\_t&gt;._  |
|  void | [**write**](#function-write) (const [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) & p\_buffer, const std::span&lt; [**vertex\_input**](structatlas_1_1vk_1_1vertex__input.md) &gt; & p\_in\_buffer) <br>_Maps buffer handler to data chunks that contain vertices._  |




























## Public Types Documentation




### enum attachment\_load 

_Equivalent to VkAttachmentLoadOp._ 
```C++
enum atlas::vk::attachment_load {
    load = 0,
    clear,
    dont_care,
    none_khr,
    none_ext,
    max_enum
};
```




<hr>



### enum attachment\_store 

_Equivalent to VkAttachmentStoreOp._ 
```C++
enum atlas::vk::attachment_store {
    store = 0,
    dont_care,
    none_khr,
    none_qcom,
    none_ext,
    max_enum
};
```




<hr>



### enum buffer 

```C++
enum atlas::vk::buffer {
    uniform = 0,
    storage = 1,
    combined_image_sampler = 2,
    sampled_image = 3
};
```




<hr>



### enum command\_buffer\_levels 

```C++
enum atlas::vk::command_buffer_levels {
    primary = 0,
    secondary = 1,
    max_enum = 2
};
```





**Parameters:**


* `Primary` submission: immediately to vulkan queue for executing on device execution: vkQueueSubmit primarily submits primary command buffers
* `Seconary` submission: Cannot be submitted directly to vulkan queue execution: Indirect execution by being called from primary command buffers using `vkCmdExecuteCommands`

When executed within render-pass instance, they inherit renderpass/subpass state from primary command buffer


Can be allocated and recorded in parallel, which can leverage devices that support multi-core processing


Have independent lifetimes that can be managed independently of primary command buffers, allowing for more flexible resource management 


        

<hr>



### enum format 

```C++
enum atlas::vk::format {
    rgb32_sfloat,
    rg32_sfloat
};
```




<hr>



### enum image\_layout 

```C++
enum atlas::vk::image_layout {
    undefined = 0,
    general = 1,
    color_optimal = 2,
    depth_stencil_optimal =
          3,
    depth_stencil_read_only_optimal =
          4
};
```




<hr>



### enum input\_rate 

_Refers to the input rate._ 
```C++
enum atlas::vk::input_rate {
    vertex,
    instance,
    max_enum
};
```



vertex - refers to most common rate. Indicates GPU to move next data entry (next vertex data) into a buffer for every single vertex that's processed.
* Used for vertex attributes that change per vertex on the mesh
* vertex attribute-only data
* Per-object based specification in the next data entry




instance - refers to data entry per-instance. Specifying to the GPU that the data entry in the buffer is to be after the instance of the object itself.
* Typically used for instanced rendering. Specfying next entry of data to be after instanced drawn, could be shared. Therefore instance is an option to choose from if vertex data is across as a per-instance basis.




instance-based specification next data entry 


        

<hr>



### enum pipeline\_bind\_point 

_Equivalent to VkPipelineBindPoint._ 
```C++
enum atlas::vk::pipeline_bind_point {
    graphics = 0,
    compute = 1,
    ray_tracing_khr,
    subpass_shading_hauwei,
    ray_tracing_nv,
    max_enum
};
```




<hr>



### enum renderpass\_type 

_this is the expectation of specifying the renderpass attachments_ 
```C++
enum atlas::vk::renderpass_type {
    color,
    depth
};
```




<hr>



### enum sample\_bit 

_Equivalent to doing VkSampleCountFlagBits but simplified._ 
```C++
enum atlas::vk::sample_bit {
    count_1,
    count_2,
    count_4,
    count_8,
    count_16,
    count_32,
    count_64,
    max_enum
};
```




<hr>



### enum shader\_stage 

```C++
enum atlas::vk::shader_stage {
    undefined = -1,
    vertex = 0,
    fragment = 1
};
```




<hr>
## Public Functions Documentation




### function begin\_command\_buffer 

```C++
void atlas::vk::begin_command_buffer (
    const VkCommandBuffer & p_command_buffer,
    VkCommandBufferUsageFlags p_usage_flags
) 
```




<hr>



### function bytes\_per\_texture\_format 

```C++
int atlas::vk::bytes_per_texture_format (
    VkFormat p_format
) 
```





**Returns:**

the bytes of the texture format specified by the parameter "VkFormat" 





        

<hr>



### function copy 

```C++
void atlas::vk::copy (
    vk_command_buffer & p_command_buffer,
    VkImage & p_image,
    VkBuffer & p_buffer,
    uint32_t p_width,
    uint32_t p_height
) 
```




<hr>



### function copy 

_Copies from one buffer source into another buffer source with a specific size of bytes to be stored the buffer that is being copied to._ 
```C++
void atlas::vk::copy (
    const vk_buffer & p_src,
    const vk_buffer & p_dst,
    size_t p_size_of_bytes
) 
```




<hr>



### function create\_buffer 

```C++
vk_buffer atlas::vk::create_buffer (
    const vk_buffer_info & p_info
) 
```





**Returns:**

new [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) handler 





        

<hr>



### function create\_image2d 

_Returns_ [_**vk\_image**_](structatlas_1_1vk_1_1vk__image.md) _which contains the VkImage and VkImage handlers with image 2D specifications._
```C++
vk_image atlas::vk::create_image2d (
    uint32_t p_width,
    uint32_t p_height,
    VkFormat p_format,
    VkImageUsageFlags p_usage,
    VkMemoryPropertyFlagBits p_property
) 
```




<hr>



### function create\_image2d 

```C++
vk_image_handle atlas::vk::create_image2d (
    const VkDevice & p_driver,
    const image_extent & p_extent
) 
```





**Parameters:**


* `p_driver` current logical device to associate this image creation to 
* `p_extent` image extent of properties required for creating the image 




        

<hr>



### function create\_image\_view 

```C++
VkImageView atlas::vk::create_image_view (
    const VkImage & p_image,
    VkFormat p_format,
    VkImageAspectFlags p_aspect_flags
) 
```





**Parameters:**


* `p_image` is the image handler to create a view handler from 
* `p_format` specify format to create the VkImageView handler from 
* `p_aspect_flag` to specify the data this VkImageView handler will contain 




        

<hr>



### function create\_image\_view 

```C++
VkImageView atlas::vk::create_image_view (
    const VkDevice & p_driver,
    VkImage p_image,
    VkSurfaceFormatKHR p_surface_format,
    VkImageAspectFlags p_aspect_flags,
    VkImageViewType p_view_t,
    uint32_t p_layer_count,
    uint32_t p_mip_level=1
) 
```





**Returns:**

new VkImageView handler object 




**Parameters:**


* `p_driver` the driver to create the new handler 
* `p_surface_format` specify a surface format to create the VkImageView handler with 
* `p_aspect_flag` to specify what kind of aspect of data this VkImageView will contain 
* `p_mip_level` default to 1; used to set mip levels if required 




        

<hr>



### function create\_sampler 

```C++
VkSampler atlas::vk::create_sampler (
    const vk_filter_range & p_range,
    VkSamplerAddressMode p_address_mode
) 
```




<hr>



### function create\_semaphore 

```C++
VkSemaphore atlas::vk::create_semaphore (
    const VkDevice & p_driver
) 
```





**Returns:**

new semaphore handle 





        

<hr>



### function create\_single\_command\_buffer 

```C++
VkCommandBuffer atlas::vk::create_single_command_buffer (
    const VkCommandPool & p_command_pool
) 
```




<hr>



### function create\_single\_command\_pool 

```C++
VkCommandPool atlas::vk::create_single_command_pool () 
```




<hr>



### function create\_uniform\_buffer 

```C++
vk_buffer atlas::vk::create_uniform_buffer (
    uint32_t p_size
) 
```





**Returns:**

vulkan buffer handler that is initialized as a uniform buffer handler 





        

<hr>



### function end\_command\_buffer 

```C++
void atlas::vk::end_command_buffer (
    const VkCommandBuffer & p_command_buffer
) 
```




<hr>



### function free\_buffer 

```C++
void atlas::vk::free_buffer (
    const VkDevice & p_driver,
    vk_buffer & p_buffer
) 
```




<hr>



### function free\_image 

```C++
void atlas::vk::free_image (
    const VkDevice & p_driver,
    vk_image & p_image
) 
```




<hr>



### function has\_stencil\_attachment 

_Validate if the format specified is a stencil attachment._ 
```C++
bool atlas::vk::has_stencil_attachment (
    VkFormat p_format
) 
```




<hr>



### function image\_memory\_barrier 

```C++
void atlas::vk::image_memory_barrier (
    VkCommandBuffer & p_command_buffer,
    VkImage & p_image,
    VkFormat p_format,
    VkImageLayout p_old,
    VkImageLayout p_new
) 
```




<hr>



### function queue\_submit 

```C++
void atlas::vk::queue_submit (
    const VkQueue & p_queue_handle,
    const std::span< VkCommandBuffer > & p_commands
) 
```




<hr>



### function select\_compatible\_present\_mode 

```C++
VkPresentModeKHR atlas::vk::select_compatible_present_mode (
    const VkPresentModeKHR & p_request,
    const std::span< VkPresentModeKHR > & p_modes
) 
```





**Returns:**

`VkPresentModeKHR` by selecting the current compatiable presentation modes available 





        

<hr>



### function select\_images\_size 

```C++
uint32_t atlas::vk::select_images_size (
    const VkSurfaceCapabilitiesKHR & p_surface_capabilities
) 
```





**Returns:**

the image size based on the capabilities of the vulkan `VkSurfaceKHR` that is supported 





        

<hr>



### function to\_vk\_attachment\_load 

```C++
VkAttachmentLoadOp atlas::vk::to_vk_attachment_load (
    attachment_load p_attachment_type
) 
```




<hr>



### function to\_vk\_attachment\_store 

```C++
VkAttachmentStoreOp atlas::vk::to_vk_attachment_store (
    const attachment_store & p_attachment_type
) 
```




<hr>



### function to\_vk\_command\_buffer\_level 

_Conversion function that returns VkCommandBufferLevel._ 
```C++
VkCommandBufferLevel atlas::vk::to_vk_command_buffer_level (
    const command_buffer_levels & p_levels
) 
```




<hr>



### function to\_vk\_descriptor\_type 

```C++
VkDescriptorType atlas::vk::to_vk_descriptor_type (
    const buffer & p_type
) 
```





**Returns:**

Returns the VkDescriptorType that represents a "handle" the shader resource is acecssing 





        

<hr>



### function to\_vk\_format 

_converts high-level specifications of format to VkFormat_ 
```C++
VkFormat atlas::vk::to_vk_format (
    const format & p_format
) 
```




<hr>



### function to\_vk\_image\_layout 

```C++
VkImageLayout atlas::vk::to_vk_image_layout (
    const image_layout & p_layout
) 
```




<hr>



### function to\_vk\_input\_rate 

```C++
VkVertexInputRate atlas::vk::to_vk_input_rate (
    const input_rate & p_input_rate
) 
```




<hr>



### function to\_vk\_pipeline\_bind\_point 

```C++
VkPipelineBindPoint atlas::vk::to_vk_pipeline_bind_point (
    const pipeline_bind_point & p_bind_point
) 
```




<hr>



### function to\_vk\_sample\_count\_bits 

```C++
VkSampleCountFlagBits atlas::vk::to_vk_sample_count_bits (
    const sample_bit & p_sample_count_bit
) 
```




<hr>



### function to\_vk\_shader\_stage 

```C++
VkShaderStageFlags atlas::vk::to_vk_shader_stage (
    const shader_stage & p_stage
) 
```




<hr>



### function to\_vk\_shader\_stage\_bits 

```C++
VkShaderStageFlagBits atlas::vk::to_vk_shader_stage_bits (
    const shader_stage & p_stage
) 
```




<hr>



### function transition\_image\_layout 

```C++
void atlas::vk::transition_image_layout (
    VkImage & p_image,
    VkFormat p_format,
    VkImageLayout p_old,
    VkImageLayout p_new
) 
```




<hr>



### function transition\_image\_layout 

```C++
void atlas::vk::transition_image_layout (
    VkCommandBuffer & p_command_buffer,
    VkImage & p_image,
    VkFormat p_format,
    VkImageLayout p_old,
    VkImageLayout p_new
) 
```




<hr>



### function vk\_check 

```C++
void atlas::vk::vk_check (
    const VkResult & p_result,
    const std::string & p_name,
    const std::source_location & p_source=std::source_location::current()
) 
```





**Parameters:**


* `p_result` checks if the result of a vulkan handler was created correctly 
* `p_name` used for debugging of which handler failed 
* `p_source` is the location of the call-site that invoked vk\_check 




        

<hr>



### function vk\_check\_format 

_Checks for valid_ `VkFormat` _specified._
```C++
void atlas::vk::vk_check_format (
    VkFormat p_format,
    const char * p_filepath,
    uint32_t p_line,
    const char * p_function_name
) 
```




<hr>



### function vk\_format\_to\_string 

```C++
std::string atlas::vk::vk_format_to_string (
    VkFormat p_format
) 
```





**Returns:**

stringified version of the `VkFormat` 





        

<hr>



### function vk\_present\_mode\_to\_string 

```C++
std::string atlas::vk::vk_present_mode_to_string (
    VkPresentModeKHR p_present_mode
) 
```





**Returns:**

stringified version of the `VkPresentModeKHR` 





        

<hr>



### function write 

_maps the current buffer handler to some block of memory and the byte size for that chunk_ 
```C++
void atlas::vk::write (
    const vk_buffer & p_buffer,
    const void * p_data,
    size_t p_size_in_bytes
) 
```




<hr>



### function write 

_Maps buffer handler to chunk of data of type, that is std::span&lt;uint32\_t&gt;._ 
```C++
void atlas::vk::write (
    const vk_buffer & p_buffer,
    const std::span< uint32_t > & p_in_buffer
) 
```




<hr>



### function write 

_Maps buffer handler to data chunks that contain vertices._ 
```C++
void atlas::vk::write (
    const vk_buffer & p_buffer,
    const std::span< vertex_input > & p_in_buffer
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/drivers/vulkan-cpp/helper_functions.hpp`

