# 📝 Core Engine Design
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



## **Inheritance Not Used for Game Objects**

Why are we not using inheritance to express game object state?

As game objects grow more complex, especially in modern game engines. Inheritance in game engines have been used to determine a variety of states game objects could be in. Including using virtual functions and inheritance to express relationships between the variety of complex states game objects can go into.

What are the issues that comes from this design?

To further learn why I went with a data-oriented design approach in atlas. It is because





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



## **Different Perspective Creating Game Objects**

As game object state grows more complex. TheAtlasEngine strives to allow game object to contain the data associated with. Rather the game objects themselves contain state. It is because game object state can be widely complex and making an attempt to try expressing these state for the objects in the form of inheritance and virtual functions can lead to caveauts that I want to research into.

These caveauts involve code bloat, complex and high increase of vtables, complex contracts users are by default signed into when trying to make their own game objects.

Approaching with a data-oriented design in mind. This way it could simplify what users need has to do for setting up a game object. Simplifying means of how these objects get created, lifetime managements of these objects, when these objects get updated. As time update frequency matters and giving users that control when their objects state get update is direct.

**Concerns Removed When Creating Objects**
```C++
// Creating custom scene to contain user-defined game objects in this given scene
class level_scene : public scene_scope{
public:
    level_scene(const std::string& p_tag) : scene_scope(p_tag) {
        // Creating entity "Camera Entity" to this scene while setting the lifetime of this object to be managed by scene_scope
        m_camera = this->create_new_entity("Camera Entity");

        // Creating entity "Sphere Entity" to this scene while setting the lifetime of this object to be managed by scene_scope
        m_sphere = this->create_new_entity("Sphere Entity");


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
    atlas::ref<atlas::scene_object> m_camera;
    atlas::ref<atlas::scene_object> m_sphere;
};

```