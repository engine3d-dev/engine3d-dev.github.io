# Code Design Philosophy

These are core designs that Engine3D and other Engine3D libraries should seek to achieve with every design decision, line written, and architectural design changes made.

Design.1 Multi Targeted

`Engine3D` and other Engine3D libraries should work on all platforms Windows, Linux, and Mac. As long the appropriate compiler or cross-compiler is used.

Design 2 - Light Weight

`Engine3D` drivers, core, and utility code should be kept lightweight. Meaning ensuring that if things need to be allocated that they are only decided if no other option is proposed. Ensure that when doing allocations that YOU DO NOT use raw pointers. If you have to use pointers ask yourself the reason to use pointers.  If you need to use pointers, specifically use smart pointers (shared_ptr, unique_ptr).

Design 3 - Minimalist

`Engine3D` strives to be as simple and no simpler. Core, utility, and libraries should be straight forward to the programmers to understand with added complexity when no other option exists.

Design 4 - Safe and Reliability

`Engine3D` and it's style guide aim to use patterns, techniques, documentation to help reduce safety issues and improve reliability.