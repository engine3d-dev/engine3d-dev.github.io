# Core Engine Design
-----
## **Interfaces**

Interfaces are the foundation of how the api-agnostic API's may work if they have vary defined backends. They present a generalized ideal of a particular aspect of computing.

For example, a graphics API such as vulkan, directX, and metal. They both contain their own varied version of a command buffer. In Vulkan it is referred to as **VkCommandBuffer**, DirectX referred to as **ID3D12GraphicsCommandList**, and metal it is referred to as **MTLCommandBuffer**.

Which each of this implementation may be operated differently that is widely dependent on their API's.

This following guideline should be kept in mind when creating interfaces.

Here is an example of some interfaces in libhal. It is recommended to look at these to get an idea of how the interfaces could be written.

- [atlas::render_context]()


## **Designing and Making Interfaces**

Using vtables are quite small and only require a single pointer lookup. The initial idea that comes to mind with vtables is minimize least number of lookups that needs to be made to virtual functions if possible.

**why?**

Each virtual function in an interface will require a v-table entry (a pointer) in the v-table of each implementation of an interface. Specific sections of the binary. More you have to store in space.

**Consider**

Having an interface for graphics for supporting multiple graphics API called `render_context`. This render_context could be an interface that may be used for implement the different graphics-api backends such as Vulkan, Metal, and DirectX3D.

These are implementations that will have common API's to do equivalent operations. The interface will have common API's for operations such as writing data to a vertex, index, or uniform buffer.

The fundamental idea is interfaces should be used to allow a generalized API that internal state of the engine could interact without touching or using any api-dependent code within the engine. That should be completely handle and communicated via those abstraction layers around those API's.

## **Interfaces Not Used for Actors/Objects**

Typically it is seen natural to have scene objects inherit from some virtual class to define a `UActor` (like unreal). As other engines will have their own variation of this.

In this engine, I wanted to have a different look at building games, using a completely different approach in making games that does not have users by default be binded to a contract having them inherit a base class.


These are caveuats I should mention below.

- One of the biggest issue isn't just the binded contract devs have to make every time they need to make a new actor. Its also the size each actor now carries. What does this mean?
    - This means that if you look at Unreal's and other engines they have their own variation of how they handle actors. Usually when creating custom actors that inherit, they carry the size of the objects they not only inherit of even if those functions do not get used.
    - Which means bloated in class size in bytes.

- Amount of lookups in the vtable is quite high because lets look at particles for example.
    - If we have particles that may vary in different aspects of geometry, mesh, assets, etc. The amount of difference in data can actually be widely expansive. What initially would happen is we'd have to lookup the vtable entry to get information about the actor every time we need something
    - When we already know its memory location and where this scene object is located, we could minimize these caveuts and initially minimizing code bloatware of binary sizes because we are not creating actors through inheritance.

Given this example.

In game engines today, you will have some variation following this approach.

```C++

class MyActor : public AActor {
public:
    /* do other pre-init state initialization needed in implementation */
protected:
    virtual void BeginPlay() override { /* do stuff when begin play ticked */ }
};
```


## **Different Perspective Creating Actors**

In TheAtlasEngine rather then needing to inherit from some base class to define the actor. That ability should be open to the user in how they define what their actors are implemented.

What the engine would be looking at when users create their own actors. Are the update logic, what time intervals these logic get updated, and how their scene objects get rendered. Currently these are what we are looking for and still defining other areas within developing atlas.

As of the current time of writing this new approach. This approach is still early in it's development and there are a few factors that will be needed to consider as the engine goes through its development.

Reasons currently why I made the decision to separate the two sync_* functions is because rather then having a single function to do the checking for us. I would prefer if that decision is given to the users giving them the option of when they would like their logic to be updated during update or physics time intervals.

The main reason currently (will change indefinitely) is when inheriting a `atlas::scene_scope` this automatically registers to the defualt `atlas::world_scope` that is defined by default.

In the future, I will provide a functionality to enable control over which world to register, as of right now this functionality only assumes their is one world that is created.


**Issues that are alleviated**

- Bloat in the amount of bytes each custom actor contain when inheriting from a custom base class. Making binary sizes larger.
- Vtable Entry Lookups when needing an implementation detail for that actor
- Binded contract whenever a scene object is needed to be customizably created

```C++

class level_scene : public scene_scope{
public:
    level_scene(const std::string& p_tag) : scene_scope(p_tag) {
        // Registrying entity "Empty Entity" to this scene its created in
        m_object = empty_entity("Empty Entity");

        // Registrying entity "Sphere" to this scene its created in
        m_sphere = sphere_entity("Sphere");


        // This registers our update callable and associates the address of our current scene
        // then calling this function
        atlas::sync(this, &level_scene::update);

        // physics() gets called during the interval of physics steps since the timing
        // for physics can be different compared to logic during update
        atlas::sync_physics(this, &level_scene::physics);
    }


    void update() {
        // Running our update logic for being called
    }

    void physics() {
        // Running physics logic at the right time interval physics should run at.
    }

private:
    atlas::scene_object m_object;
    atlas::scene_object m_sphere;
};

```