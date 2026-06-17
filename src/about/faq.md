# Frequently Asked Questions

TheAtlasEngine is an open-source 3D game engine that are being developed by SF State computer science students. The project is open-source under the Apache 2.0 license.

Some of the goals that we have in mind when designing TheAtlasEngine is to making game applications smaller without paying for any performance losses. Even if you do, the losses should not be that noticeable.

## What platforms does TheAtlasEngine support?

We only support Windows. Though do have plans to have support for Mac and Linux in the future.


## How are game objects represented in TheAtlasEngine?

We believe that using data-oriented design for your game objects allows for flexibility in specifying simple game objects to much more complexed game objects. This does not range from simply game objects, but their state is also handled quite differently


Code design behind TheAtlasEngine strives to make use of callbacks for tracking game object state. As we believe that rather then having a heirarchy system to model your game object state around, this should fully be an option for the user to supply their game logic to TheAtlasEngine to be executed at different framerates.


We provide a data-driven design for game objects and how their state get represented. This decision was to provide developers maximum flexibility, allowing you to easily build objects.

Ranging from simple game objects to more complex game objects. Rather then forcing you into a heirarchy system for managing state, we use a registration callback system that represent your state.

By using callbacks. This removes the need to have developers follow a heirarchy system rules to get their game logic to be executed. We allow you to simply call our registration API's that execute your game logic based on specific registration API you call.

Providing this approach in handling game object state through callbacks, make it simpler for developers who want to have their game be executed at different framerates to still get that experience without needing to inherit from a base-class or go through a heirarchial system to get that to work.


## How much of the C++ STL does TheAtlasEngine use?

TheAtlasEngine uses the standard C++ STL by default. We avoid "reinventing the wheel" to keep our codebase simpler and reduce complexity. The only time we should feel to replace parts of the STL we fully make use is if benchmarks clearly show details of bottlenecks in our codebase.

This choice reduces the overhead of maintaining a separate, full-featured STL implementation that would require resources to continue maintaining.