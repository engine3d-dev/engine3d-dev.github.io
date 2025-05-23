

# Class atlas::physics::physics\_engine



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**physics**](namespaceatlas_1_1physics.md) **>** [**physics\_engine**](classatlas_1_1physics_1_1physics__engine.md)



[More...](#detailed-description)

* `#include <physics_engine.hpp>`

































































## Detailed Description




**Note:**

Used for indicating whether objects in a given scene are static or dynamic (meaning can collide with other objects) 




**Note:**

Used as a representation for both ObjectLayer(uint16\_t) and BroadPhaseLayer(class) 




**Note:**

ObjectLayer just seems to be defined as a body type within joltphysics 




**Note:**

BroadPhaseLayer is just joltphysic's representation of a collider pretty much. It is mainly used by the jolt physics collision detection system that uses it. Typically in JoltPhysics you'd have less of these then ObjectLayer's it seems




**Note:**

BroadPhaseLayer can be ways to map multiple object layers (BodyType's)




**Note:**

Physics settings per physic scene  ! 




**Note:**

These are notes for myself on triggers. Just so I dont forget. Lets not think about this for the time being.


Here is an idea for handling triggering events


Utilize Event Dispatcher System


Example API's


Alternative #1


Idea behind this is we get our event dispatcher. Then we go ahead and submit a trigerred event when sphere activates that specific event IDEA: We need to figure out a way to target specific objects and how they are able to submit triggering events so the event system is aware it is happening auto dispatcher = event::get\_event(); dispatcher.dispatch&lt;SphereTriggered&gt;(sphere\_object); 


    

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/physics/physics_3d/physics_engine.hpp`

