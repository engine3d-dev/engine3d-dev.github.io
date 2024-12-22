# Code Design

The following guidelines desribe what should be kept in mind when creating interfaces, library code, or core engine3d code.

# Smallest Possible VTable

When designing either game application or core engine3d API's, or engine3d library code. Minimize least number of virtual functions, if possible.

## Why?

Each virtual function in the interface will require a v-table entry (pointer) in the v-table of each implementation of that interface. Each entry takes up space in the `.text` or `.rodata` sections of the binary. The more you you have the more space is taken up.

## Consider:

Combining API's if possible. For example lets consider `engine3d::world`.

`engine3d::world` could have different `OnUpdate*` functions that may be needed to update at different points in the game. Such as phyiscs may not be updated every frame while rendering may be done every frame.

`Engine3D` uses a method calls subscription. Where we have update managers that know how to handle when scenes should update their scene objects.


Example:
```C++

#include <engine3d/world.hpp>

class game_world : public engine3d::world{
public:
    game_world(){
        subscribe(this, &game_world::on_update);
        subscribe(this, &game_world::on_update_physics);
    }

    void on_update() { /* .. */ }

    void on_update_physics() { /* ... */ }
};
```

# Make virtual functions pure virtual

Interfaces API implementations are responsible to the user of the implementation

## Why?

In almost all cases, default behavior does not make sense.

# Eliminate Viral Behavior

Another way of phrasing this is, "Consider the overhead by the developer". This can be space and time overhead in the game application or simply overhead required by the developer to using our API's correctly.


## Private Virtual Functions

Making virtual functions private. Make them callable via public interfaces like:

```C++
class VertexBuffer{
public:
    void SetDaa(std::vector<Vertex>& p_Vertices){
        return WriteData(p_Vertices);
    }

protected:
    virtual void WriteData(const std::string& p_Filename) = 0;
};
```

## Why?

If in the event we need to modify calling conventions of virtual API's, we can do so by altering the public API that calls our virtual API.


# Consider Stack, RAM, and ROM requirements of an API.

Some API designs have unwanted side effects of causing the user to provide or allocate a large buffer in order to operate. For example:

```C++


class SomeDataStructure{
public:
    struct Properties{
        std::vector<T> SomeBuffer
    };

    void OnInitialize(SomeDataStructure) = 0;

protected:
    virtual void Initialize() = 0;
};
```

## Why?

If we have some interface that has some struct would make interfaces and API's difficult to use because now every other user who calls our API now has to use up a lot of resources when making a call to this interface.

## Consider:

If the struct or inputs have to be so large? What pieces in which those structures should be separated? Are there ways around implementing it differently?

## Should contain NO members.

Interfaces should only have public member functions and private member functions. Nothing more.

## Why?

Primary purpose of interfaces is to define an abstract layer to communicate between parts of a program. Interfaces should ideally be agnostic of how their contracts are fullfilled. Including member fields implied by certain level of implementation detail that detracts from abstraction.

By adding fields to an interfacfes lead to tighter coupling between interface and its implementation. This can complicate design and increase difficulty in the future. Implementations are forced to manage these state in a specific way, which can reduce flexibility in how they are manage their internal states and behaviors.

Consider:

YOU DO NOT need to add data members to interfaces.

## Must not be a template

A templated interface is a class that is an interface like the following example:

```C++
template<typename Type>
class AgnosticInterface{
private:
    virtual void OnCreate(Type p_Type) = 0;
};
```

## Why?

The above code seems like a great way to broaden an interface to unlimited scale, but that is the problem.

Template interfaces widen the scope and number of interfaces available in `engine3d` in an unbounded way. Which can lead to result in additional v-tables for each implementation.

Interface instances with different template types are not compatible with each other. Meaning an adaptor of sources would be needed to convert one to another.

## Consider:

That's not necessary. Consider there exists a generic and specific implementation of an interface. Considering making two interfaces if a single interface would not suffice.

# Prefer Wide API contracts.

A wide contract for an API means that an API can take any type of input for all input parameters set to the API. Meaning that API is well-defined for all possible inputs that could be pasesed. That does not mean that implementation fo API will accept all possible inputs. The API could throw an erro if input is beyond what it is capable of working with. But simply means that API is well defined for whole range of inputs.

## Why?

It eliminates viral behavior and tends to eliminate undefined behavior.

## Consider:

Cost of an API having a wide contract? Would this result in viral behavior or eliminate it? Woulkd it result in worse performance? Would it result in increased RAM oir increased ROM utilization? Would it potentially save in all of these. If possible try and gurantee wide contracts if possible and only consider a narrow contract as a last resort.


# Do NOT break ABI

ABI means "Application Binary Interface".  A breakaage to an ABI is not easy for C++ or other languages to determine. ABI break can be in many forms, usually comes at a change between version of code compiled previously and a version of code compiled currently. Such a break can result in memory corruption, invalid input to a function and overall undefined behavior.

## Why?

Don't do it! Its bad! Honestly, if all hell breaks loose if we allow ABI breaks. If we MUST break ABI we must update the major version number of Engine3D.

## Consider:

Regarding interfaces, given other rules, there is really only the following possible ABI breakjing changes can occur:

1. Changing return value of a virtual function.

2. Changing function calling conventions.

3. Reordering of virtual API within an interface.

4. Reordering of members within a returned `struct` or `class`.

These are not allowed due to how they effect programs generate assembly for each function call. What we are allowed to do is the following:

1. Add additional non-virtual public functions.

2. Add additional overloads for public functions (we should [[deprecate]] old API's we know to be harmful).

3. Add additional non-pure virtual API's below current set of virtual API's (avoid this)

4. Add additional fields to a setting `struct` that is passed by reference.


# Interface Independence Principle

Interfaces should not be designed to have a relationship with each other outside of an IS-A or inheritance relationship. An allowed relationship is one where an interface inherits from another. Such as `GraphicContext` and `VulkanContext` because it has the same requirements and some additional ones.

An example of a relationship that is not acceptable would be if there existed a `VertexBuffer` interface and a `Buffer` interface. Technically they have a relationship between these two interfaces. One could even consider that the VertexBuffer could be a "producer" or "provider" of vertices that is established by this interface. Such as that if VertexBuffer interface returns a reference to an available Buffer interface. This can complicate implementations of these interfaces, as well coupling them. The memory and lifetime of that Buffer than becomes a concern of `wifi` as well any of its users.

Overall this results in VERY much complex code and more coupling then necessary. Better option is to keep everything independent from each other.

To follow this rule, refrain from:

1. Returning an interface from function in any way.

2. Taking another interface as an input parameter.

Instead there needs to be some sort of relationship between interfaces, then this type of relationship should be managed by concrete classes that can take dependent objects with a relationship and manage that relationship.

# Templates in Utility

In the case that we need to deal with multiple data types from various frameworks. Refrain from adding them into a single class.

Consider the following:

```C++

class Vector3{
public:
    template<JPH::Vector3 Type>
    void SetPosition(Type p_Position){
        m_Position = {p_Position.GetX(), p_Position.GetY(), p_Position.GetZ()};
    }

    template<typename T>
    T GetPosition(){
        if constexpr (std::is_same_v<T, JPH::Vector3>){
            return static_cast<T>(m_Position);
        }
    }

private:    
    glm::vec3 m_Position;
};
```

## Why?

This code may seem like a way to broaden Vec3 to work with different variations of Vector data types. That is the problem.

By having Vector3 take in templates for SetPosition and GetPosition may complicate things because there are different variations of how other frameworks define their vector data type's.

If we a single function gets more complicated because there are variations of the same type, then separate those functions. By making a single generic function that handles converting those functions can overcomplicate things.

## Consider: 

Is there a way we can implement around this? Why not just separate the functions to explicitly handle those functions? If we generically have a single function to do this how can we ensure this works across all data types.