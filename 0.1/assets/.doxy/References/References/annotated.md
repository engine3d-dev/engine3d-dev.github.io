
# Class List


Here are the classes, structs, unions and interfaces with brief descriptions:

* **namespace** [**JPH**](namespaceJPH.md) 
* **namespace** [**atlas**](namespaceatlas.md)     
    * **class** [**application**](classatlas_1_1application.md)     
    * **struct** [**application\_settings**](structatlas_1_1application__settings.md)     
    * **struct** [**box\_collider3d**](structatlas_1_1box__collider3d.md)     
    * **class** [**camera**](classatlas_1_1camera.md)     
    * **class** [**console\_log\_manager**](classatlas_1_1console__log__manager.md)     
    * **class** [**entity\_t**](classatlas_1_1entity__t.md)     
    * **namespace** [**event**](namespaceatlas_1_1event.md)     
        * **struct** [**joystick\_button**](structatlas_1_1event_1_1joystick__button.md)     
        * **struct** [**joystick\_info**](structatlas_1_1event_1_1joystick__info.md)     
    * **namespace** [**filesystem**](namespaceatlas_1_1filesystem.md)     
    * **class** [**graphics\_context**](classatlas_1_1graphics__context.md)     
    * **class** [**interpolation**](classatlas_1_1interpolation.md)     
    * **struct** [**light**](structatlas_1_1light.md) _TODO: Make this better (when we do lighting)_     
    * **struct** [**material**](structatlas_1_1material.md)     
    * **struct** [**math\_generic**](structatlas_1_1math__generic.md) 
    * **struct** [**matrix2**](structatlas_1_1matrix2.md) 
    * **struct** [**matrix3**](structatlas_1_1matrix3.md) 
    * **struct** [**matrix4**](structatlas_1_1matrix4.md) 
    * **class** [**mesh**](classatlas_1_1mesh.md)     
    * **namespace** [**physics**](namespaceatlas_1_1physics.md) _Handles error handling with in jolt._     
        * **class** [**broad\_phase\_layer\_interface**](classatlas_1_1physics_1_1broad__phase__layer__interface.md) _This class is made to control the broadphase layer. Filters can be added to it to create a better and more organized broadphase. Ass well as giving some control to the user on how the broadphase should be organized. This requires dynamic masking however, which is not currently running._     
        * **struct** [**collider\_body**](structatlas_1_1physics_1_1collider__body.md)     
        * **struct** [**collider\_event**](structatlas_1_1physics_1_1collider__event.md) _This is a replacement for an event system to handle collider. It will be replaced by an event system once we have functional one up and running._     
        * **struct** [**contact\_event**](structatlas_1_1physics_1_1contact__event.md)     
        * **class** [**contact\_listener**](classatlas_1_1physics_1_1contact__listener.md) _This is the glue between contact events and jolts contact listener. It takes the calls from jolt through virtual functions and allows users to create children for jolt collision._     
        * **class** [**jolt\_api**](classatlas_1_1physics_1_1jolt__api.md)     
        * **class** [**jolt\_collision**](classatlas_1_1physics_1_1jolt__collision.md) _This is the collision api. It allows users to create children of this collision handler and write their own functions over the virtual ones. Then they can assign it to the engine._     
        * **class** [**jolt\_collision\_manager**](classatlas_1_1physics_1_1jolt__collision__manager.md) _This allows users to make thier own version of jolt collition and run them their own way. It allows users to interact with the calls by creating a child class of_ [_**jolt\_collision**_](classatlas_1_1physics_1_1jolt__collision.md) _and run whatever action they want._    
        * **struct** [**jolt\_config**](structatlas_1_1physics_1_1jolt__config.md) _Used to keep global data for player access and use. Tells how physics bodies should act within a given scene by default._     
        * **class** [**jolt\_context**](classatlas_1_1physics_1_1jolt__context.md) _This class is made to be 1 of three api wrappers for jolt. Jolt context is specifically for engine only use of the api. It wraps the inititialization, the physics step and the clean up. Allow use not to have to write batching algorithms for each time we want to change the settings of jolt physics._     
        * **struct** [**jolt\_settings**](structatlas_1_1physics_1_1jolt__settings.md) _This includes global configs for each scene and how the physics engine will behave in a paticular scene._     
        * **struct** [**matrix4**](structatlas_1_1physics_1_1matrix4.md) 
        * **struct** [**matrix4&lt; JPH::Mat44 &gt;**](structatlas_1_1physics_1_1matrix4_3_01JPH_1_1Mat44_01_4.md)     
        * **class** [**object\_layer\_pair\_filter**](classatlas_1_1physics_1_1object__layer__pair__filter.md) _This goes into more detailed ways of filtering, where the object collisions may be defined be what the other object is. In this case a static setup allows static object to trigger collision only when it is touched by a dynamic target._     
        * **class** [**object\_vs\_broadphase\_layer**](classatlas_1_1physics_1_1object__vs__broadphase__layer.md) _This is used to tell Jolt what can or cannot collide. As of right now the list is static therfore the layers do not need a dynamic set up. This will change when the object layers become user definable._     
        * **class** [**physics\_api**](classatlas_1_1physics_1_1physics__api.md)     
        * **struct** [**physics\_body**](structatlas_1_1physics_1_1physics__body.md)     
        * **class** [**physics\_context**](classatlas_1_1physics_1_1physics__context.md) _The context is the way to interact with only the engine. It is the api for all the background funcitons and information that the user shouldn not see. It is a virtual based type erasure class so thatmany engines can implement the same functions. Specifically realted to backend engine creation like batching, starting runtime, etc..._     
        * **class** [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md) _The manager class for all physics engines. Manages the physics contexts and the collision engines._     
        * **struct** [**quaternion**](structatlas_1_1physics_1_1quaternion.md) 
        * **struct** [**vector3**](structatlas_1_1physics_1_1vector3.md) 
        * **struct** [**vector3&lt; JPH::DVec3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1DVec3_01_4.md)     
        * **struct** [**vector3&lt; JPH::Double3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Double3_01_4.md)     
        * **struct** [**vector3&lt; JPH::Float3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Float3_01_4.md)     
        * **struct** [**vector3&lt; JPH::Vec3 &gt;**](structatlas_1_1physics_1_1vector3_3_01JPH_1_1Vec3_01_4.md)     
        * **struct** [**vector4**](structatlas_1_1physics_1_1vector4.md) 
        * **struct** [**vector4&lt; JPH::Float4 &gt;**](structatlas_1_1physics_1_1vector4_3_01JPH_1_1Float4_01_4.md)     
        * **struct** [**vector4&lt; JPH::Vec4 &gt;**](structatlas_1_1physics_1_1vector4_3_01JPH_1_1Vec4_01_4.md)     
    * **struct** [**reload**](structatlas_1_1reload.md) _Actually might do a query for this along with rendertarget3d._     
    * **class** [**render\_context**](classatlas_1_1render__context.md)     
    * **class** [**renderer**](classatlas_1_1renderer.md)     
    * **struct** [**rigidbody3d**](structatlas_1_1rigidbody3d.md)     
    * **class** [**scene\_object**](classatlas_1_1scene__object.md)     
    * **class** [**scene\_scope**](classatlas_1_1scene__scope.md)     
    * **class** [**serializer**](classatlas_1_1serializer.md)     
    * **namespace** [**sync\_update**](namespaceatlas_1_1sync__update.md)     
    * **class** [**system\_registry**](classatlas_1_1system__registry.md)     
    * **struct** [**tag**](structatlas_1_1tag.md)     
    * **class** [**thread**](classatlas_1_1thread.md)     
    * **class** [**timer**](classatlas_1_1timer.md)     
    * **struct** [**transform**](structatlas_1_1transform.md)     
    * **struct** [**transform\_physics**](structatlas_1_1transform__physics.md)     
    * **namespace** [**ui**](namespaceatlas_1_1ui.md)     
    * **struct** [**vector2**](structatlas_1_1vector2.md) 
    * **struct** [**vector2&lt; glm::highp\_vec2 &gt;**](structatlas_1_1vector2_3_01glm_1_1highp__vec2_01_4.md)     
    * **struct** [**vector3**](structatlas_1_1vector3.md)     
    * **struct** [**vector3&lt; JPH::Vec3 &gt;**](structatlas_1_1vector3_3_01JPH_1_1Vec3_01_4.md)     
    * **struct** [**vector3&lt; glm::highp\_vec3 &gt;**](structatlas_1_1vector3_3_01glm_1_1highp__vec3_01_4.md)     
    * **struct** [**vector4**](structatlas_1_1vector4.md)     
    * **struct** [**vector4&lt; glm::highp\_vec4 &gt;**](structatlas_1_1vector4_3_01glm_1_1highp__vec4_01_4.md)     
    * **namespace** [**vk**](namespaceatlas_1_1vk.md)     
        * **struct** [**camera\_ubo**](structatlas_1_1vk_1_1camera__ubo.md) _Going to remove this._     
        * **struct** [**command\_buffer\_settings**](structatlas_1_1vk_1_1command__buffer__settings.md) _settings for specifying command buffers to construct_     
        * **struct** [**descriptor\_binding\_entry**](structatlas_1_1vk_1_1descriptor__binding__entry.md)     
        * **struct** [**descriptor\_binding\_point**](structatlas_1_1vk_1_1descriptor__binding__point.md)     
        * **class** [**descriptor\_set**](classatlas_1_1vk_1_1descriptor__set.md)     
        * **struct** [**descriptor\_set\_layout**](structatlas_1_1vk_1_1descriptor__set__layout.md)     
        * **struct** [**global\_ubo**](structatlas_1_1vk_1_1global__ubo.md) _Just for testing purposes for sending this struct over to the shader._     
        * **struct** [**hud\_data**](structatlas_1_1vk_1_1hud__data.md)     
        * **struct** [**image\_extent**](structatlas_1_1vk_1_1image__extent.md)     
        * **class** [**imgui\_context**](classatlas_1_1vk_1_1imgui__context.md)     
        * **struct** [**material\_uniform**](structatlas_1_1vk_1_1material__uniform.md) _material is going to define properties about how a scene object itself gets rendered_     
        * **class** [**mesh**](classatlas_1_1vk_1_1mesh.md) _mesh class specifically defined with vulkan implementations for specific primitives TODO: Whenever we load in a texture that will be laucnhed asyncronously_     
        * **struct** [**renderpass\_attachment**](structatlas_1_1vk_1_1renderpass__attachment.md)     
        * **struct** [**renderpass\_options**](structatlas_1_1vk_1_1renderpass__options.md)     
        * **struct** [**shader\_info**](structatlas_1_1vk_1_1shader__info.md)     
        * **struct** [**surface\_properties**](structatlas_1_1vk_1_1surface__properties.md)     
        * **class** [**texture**](classatlas_1_1vk_1_1texture.md)     
        * **struct** [**texture\_extent**](structatlas_1_1vk_1_1texture__extent.md)     
        * **struct** [**texture\_properties**](structatlas_1_1vk_1_1texture__properties.md)     
        * **struct** [**vertex\_attribute**](structatlas_1_1vk_1_1vertex__attribute.md)     
        * **struct** [**vertex\_attribute\_entry**](structatlas_1_1vk_1_1vertex__attribute__entry.md)     
        * **struct** [**vertex\_input**](structatlas_1_1vk_1_1vertex__input.md)     
        * **struct** [**vk\_buffer**](structatlas_1_1vk_1_1vk__buffer.md) _vulkan buffer struct to define the handlers and memory specifications required for buffer handlers in vulkan_     
        * **struct** [**vk\_buffer\_info**](structatlas_1_1vk_1_1vk__buffer__info.md) _Specifications of the vulkan buffer handlers and the use and memory bits associated with the buffer handlers._     
        * **class** [**vk\_command\_buffer**](classatlas_1_1vk_1_1vk__command__buffer.md) _Vulkan Command Buffers._     
        * **class** [**vk\_context**](classatlas_1_1vk_1_1vk__context.md)     
        * **class** [**vk\_driver**](classatlas_1_1vk_1_1vk__driver.md) _vulkan implementation of extracting a logical device_     
        * **struct** [**vk\_filter\_range**](structatlas_1_1vk_1_1vk__filter__range.md) _Range between min and max for the VkFilter._     
        * **class** [**vk\_graphics\_queue**](classatlas_1_1vk_1_1vk__graphics__queue.md) _graphics queue mainly used for submitting to the graphics family specific queue_     
        * **struct** [**vk\_image**](structatlas_1_1vk_1_1vk__image.md) _vulkan image handler with resources; used when handling textures_     
        * **struct** [**vk\_image\_handle**](structatlas_1_1vk_1_1vk__image__handle.md)     
        * **class** [**vk\_index\_buffer**](classatlas_1_1vk_1_1vk__index__buffer.md)     
        * **class** [**vk\_physical\_driver**](classatlas_1_1vk_1_1vk__physical__driver.md)     
        * **class** [**vk\_pipeline**](classatlas_1_1vk_1_1vk__pipeline.md)     
        * **class** [**vk\_present\_queue**](classatlas_1_1vk_1_1vk__present__queue.md) _Handles submissions to the specific queue for presentation._     
        * **struct** [**vk\_queue\_options**](structatlas_1_1vk_1_1vk__queue__options.md)     
        * **class** [**vk\_renderer**](classatlas_1_1vk_1_1vk__renderer.md) _Something to consider for mesh loading._     
        * **class** [**vk\_renderpass**](classatlas_1_1vk_1_1vk__renderpass.md) _defines a renderpass operation_     
        * **struct** [**vk\_renderpass\_options**](structatlas_1_1vk_1_1vk__renderpass__options.md) _Renderpass specifictations for VkRenderpass._     
        * **class** [**vk\_shader\_group**](classatlas_1_1vk_1_1vk__shader__group.md)     
        * **struct** [**vk\_shader\_module**](structatlas_1_1vk_1_1vk__shader__module.md)     
        * **class** [**vk\_swapchain**](classatlas_1_1vk_1_1vk__swapchain.md)     
        * **class** [**vk\_uniform\_buffer**](classatlas_1_1vk_1_1vk__uniform__buffer.md)     
        * **class** [**vk\_vertex\_buffer**](classatlas_1_1vk_1_1vk__vertex__buffer.md)     
        * **class** [**vk\_window**](classatlas_1_1vk_1_1vk__window.md)     
    * **class** [**window**](classatlas_1_1window.md)     
    * **struct** [**window\_settings**](structatlas_1_1window__settings.md) _Specific settings to the window configuration._     
    * **class** [**world\_scope**](classatlas_1_1world__scope.md) _Lets rethink how_ [_**world\_scope**_](classatlas_1_1world__scope.md) _gets created._    
* **struct** [**device\_queue\_family**](structatlas_1_1vk_1_1vk__driver_1_1device__queue__family.md)     
* **struct** [**queue\_family\_indices**](structatlas_1_1vk_1_1vk__physical__driver_1_1queue__family__indices.md)     
* **namespace** [**std**](namespacestd.md)     
    * **struct** [**hash&lt; atlas::vk::vertex\_input &gt;**](structstd_1_1hash_3_01atlas_1_1vk_1_1vertex__input_01_4.md)     

