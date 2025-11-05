

# Namespace atlas



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md)


















## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**detail**](namespaceatlas_1_1detail.md) <br> |
| namespace | [**event**](namespaceatlas_1_1event.md) <br> |
| namespace | [**filesystem**](namespaceatlas_1_1filesystem.md) <br> |
| namespace | [**jolt**](namespaceatlas_1_1jolt.md) <br> |
| namespace | [**math**](namespaceatlas_1_1math.md) <br> |
| namespace | [**physics**](namespaceatlas_1_1physics.md) <br> |
| namespace | [**ui**](namespaceatlas_1_1ui.md) <br> |
| namespace | [**vk**](namespaceatlas_1_1vk.md) <br> |








## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**g\_current\_pattern\_for\_logs**](#variable-g_current_pattern_for_logs)   = `"Undefined Pattern Specified"`<br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  api | [**g\_graphics\_backend\_api**](#variable-g_graphics_backend_api)   = `api::vulkan`<br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|  ref&lt; window &gt; | [**create\_window**](#function-create_window) (const window\_settings & p\_settings) <br> |
|  glm::highp\_vec4 | [**from\_quat**](#function-from_quat) (const glm::vec3 & p\_values) <br> |
|  ref&lt; graphics\_context &gt; | [**initialize\_context**](#function-initialize_context) (const std::string & p\_tag) <br> |
|  ref&lt; render\_context &gt; | [**initialize\_renderer**](#function-initialize_renderer) (const window\_settings & p\_window\_extent, uint32\_t p\_image\_size, const std::string & p\_tag) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator) (YAML::Emitter & p\_out, const glm::highp\_vec2 & p\_values) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_1) (YAML::Emitter & p\_out, const glm::highp\_vec3 & p\_values) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_2) (YAML::Emitter & p\_out, const glm::highp\_vec4 & p\_values) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_3) (YAML::Emitter & p\_output, const transform \* p\_transform) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_4) (YAML::Emitter & p\_output, const perspective\_camera \* p\_camera) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_5) (YAML::Emitter & p\_output, const mesh\_source \* p\_material) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_6) (YAML::Emitter & p\_output, const physics\_body \* p\_body) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_7) (YAML::Emitter & p\_output, const box\_collider \* p\_body) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_8) (YAML::Emitter & p\_output, const sphere\_collider \* p\_body) <br> |
|  YAML::Emitter & | [**operator&lt;&lt;**](#function-operator_9) (YAML::Emitter & p\_output, const capsule\_collider \* p\_body) <br> |
|  glm::quat | [**to\_quat**](#function-to_quat) (const glm::vec4 & p\_values) <br> |
|  glm::quat | [**to\_quat**](#function-to_quat) (const glm::vec3 & p\_values) <br> |
|  glm::quat | [**to\_quat**](#function-to_quat) (const JPH::Quat & p\_value) <br> |
|  glm::quat | [**to\_quathp**](#function-to_quathp) (const glm::highp\_vec4 & p\_values) <br> |
|  glm::vec3 | [**to\_vec3**](#function-to_vec3) (const JPH::Vec3 & p\_value) <br> |
|  glm::vec4 | [**to\_vec4**](#function-to_vec4) (const JPH::Quat & p\_value) <br> |


## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**deserialize\_entity**](#function-deserialize_entity) (YAML::iterator::value\_type p\_entity\_value, flecs::entity & p\_deserialize\_to\_object) <br> |
|  void | [**serialize\_entity**](#function-serialize_entity) (YAML::Emitter & output, const flecs::entity & p\_entity) <br> |


























## Public Attributes Documentation




### variable g\_current\_pattern\_for\_logs 

```C++
std::string atlas::g_current_pattern_for_logs;
```




<hr>
## Public Static Attributes Documentation




### variable g\_graphics\_backend\_api 

```C++
api atlas::g_graphics_backend_api;
```




<hr>
## Public Functions Documentation




### function create\_window 

```C++
ref< window > atlas::create_window (
    const window_settings & p_settings
) 
```




<hr>



### function from\_quat 

```C++
glm::highp_vec4 atlas::from_quat (
    const glm::vec3 & p_values
) 
```




<hr>



### function initialize\_context 

```C++
ref< graphics_context > atlas::initialize_context (
    const std::string & p_tag
) 
```




<hr>



### function initialize\_renderer 

```C++
ref< render_context > atlas::initialize_renderer (
    const window_settings & p_window_extent,
    uint32_t p_image_size,
    const std::string & p_tag
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_out,
    const glm::highp_vec2 & p_values
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_out,
    const glm::highp_vec3 & p_values
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_out,
    const glm::highp_vec4 & p_values
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const transform * p_transform
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const perspective_camera * p_camera
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const mesh_source * p_material
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const physics_body * p_body
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const box_collider * p_body
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const sphere_collider * p_body
) 
```




<hr>



### function operator&lt;&lt; 

```C++
YAML::Emitter & atlas::operator<< (
    YAML::Emitter & p_output,
    const capsule_collider * p_body
) 
```




<hr>



### function to\_quat 

```C++
glm::quat atlas::to_quat (
    const glm::vec4 & p_values
) 
```




<hr>



### function to\_quat 

```C++
glm::quat atlas::to_quat (
    const glm::vec3 & p_values
) 
```




<hr>



### function to\_quat 

```C++
glm::quat atlas::to_quat (
    const JPH::Quat & p_value
) 
```




<hr>



### function to\_quathp 

```C++
glm::quat atlas::to_quathp (
    const glm::highp_vec4 & p_values
) 
```




<hr>



### function to\_vec3 

```C++
glm::vec3 atlas::to_vec3 (
    const JPH::Vec3 & p_value
) 
```




<hr>



### function to\_vec4 

```C++
glm::vec4 atlas::to_vec4 (
    const JPH::Quat & p_value
) 
```




<hr>
## Public Static Functions Documentation




### function deserialize\_entity 

```C++
static void atlas::deserialize_entity (
    YAML::iterator::value_type p_entity_value,
    flecs::entity & p_deserialize_to_object
) 
```




<hr>



### function serialize\_entity 

```C++
static void atlas::serialize_entity (
    YAML::Emitter & output,
    const flecs::entity & p_entity
) 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/src/atlas/core/application.cpp`

