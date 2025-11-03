# 📝 Core Designs in TheAtlasEngine
-----

# **No Virtual Runtime Polymorphism for game state**

We do not use virtual runtime polymorphism to represent our game state. Reasons for this is because we believe that we did not want to use a heirarchy system to ensure the state of the user-defined game object are executed.

If we used virtual polymorphism, what this would bring is the final object will carry the information of the base classes it inherits into the final object. Making the vtable larger because of the virtual API's that it needs to be aware of. I believe this can turn to be quite a complex approach to modeling game objects around.

Here were reasons I chose not to leverage runtime polymorphism:
* Large vtables carried to the final object at the bottom of the heirarchy system
* Dependencies required to model around every known state a game object could potentially be in
* Code bloat due to coupling the game object tied to a heirarchy system for also managing its state.

!!! preface

    This DOES NOT mean we fully only use data-driven in our codebase, as we do use virtual polymorphism.

## **Game objects are Data-Driven**

Game objects themselves are data-driven, which do not store any state related to the game logic behavior that is written by the user.

Theses are both reasons I chose to move away from virtual runtime polymorphism for game objects:
* Minimize and reduce dependencies needed for game object creation
* Slim down dependencies which gets passed into the final object's vtable
* Reduce code boilerplate by reducing decoupling from those dependencies
* Use only what you need with creating game objects.
* Game objects are data-driven that get processed

## Callbacks for **Representing Game State**

Rather then modeling around using runtime polymorphism. Which relies in having a heirarchy system for every potential state a game object can be in.

TheAtlasEngine makes use of callbacks to provide users the flexibility and minimal requirements in writing their game logic. While giving the choice to decide when their logic should be executed at different framerates.

**Registration Callbacks** do not couple how you name your function, require you to specify any parameters for when your logic gets executed, or any other coupled requirements. Goal behind the callback was so as the user, you did not have to specify a requirements to get your logic to be executed.

In the demonstration below, is how the callback system works. Removing

<details>
    <summary> Register Callbacks Code Example </summary>

```C++
class main_scene : public atlas::scene {
public:
    main_scene(std::string_view p_name) : atlas::scene(p_name) {
        // execution at scene pre-load stage
        atlas::register_start(this, &main_scene::preload);

        // execute main_scene::game_inputs at general update framerate
        atlas::register_update(this, &main_scene::game_inputs);

        // execute main_scene::physics_logic at fixed physics framerates
        atlas::register_physics(this, &main_scene::physics_logic);

        // execute main_scene::ui_update at deferred frame update time
        atlas::register_ui(this, &main_scene::ui_update);
    }

    void preload() {
        // execute during level's pre-load early on in the event execution process
    }

    void game_inputs() {
        // code is ran during the runtime general framerate
    }


    void physics_logic() {
        // code is ran during the physics fixed framerate
    }

    void ui_update() {
        // code for UI such as HUD's or overlays can go here
    }
};

```