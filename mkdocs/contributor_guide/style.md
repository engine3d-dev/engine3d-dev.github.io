# 🎨 Style Guide

## S.0 Code Guidelines

All guides follow the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines).

## S.1. Code Guidelines

- Code in the atlas organization will follow the `.clang-format` file, which uses the Mozilla's

- Code will follow the atlas organization's `.naming.style` file, which are similar to the standard library's naming convention.

- CAP_CASE for MACROs (avoid MACROs in general).

- CamelCase used for template parameters
- lowercase snake_case for everything else
- prefix `p_` for function parameters
- prefix `m_` for private/protected class members

- Refrain from abbreviated variable name. Don't do `m_cnt` and just write out `m_count`.
- Every file must end with a newline character.
- Every line in a file must stay within 80 character limit.
- Include C++ header versions of C headers such as `<cstdint>` vs `<stdint.h>`


## S.2. Refrain from using MACROS

Usually macros are replaced with `constexpr` or const variables or function calls.

Only use preprocessors `#if` and the like if it is impossible to use `if constexpr` to achieve the same behavior.

## S.3. Interfaces should follow the public private API scheme.

See [private virtual methods](http://www.gotw.ca/publications/mill18.htm) for more details. Rationale can be found with that link as well.


## S.4. Avoid using `bool` as

NOTE: This is still in-progress

<!-- ### S.4.1 a parameter

See the article ["Clean code: The cursoe of a boolean parameter"](https://medium.com/@amlcurran/clean-code-the-curse-of-a-boolean-parameter-c237a830b7a3) for why bool parameters are awful.

 -->

## S.5. Include guards

For ease of usage, use `#pragma once` as your include guard. Usage of classic include guards like:

```C++
#ifndef FOO
#define FOO

#endif // FOO
```

Are annoying and error prone. Do not use these!


S.6. Include Ordering

Headers should be included in your header and source files in the following order:

- C standard library headers. Include using chevrons: `<>`

- C++ 3rd party library packages. Include using chevrons: `<>`

- C++ Standard library headers. Include using chevrons: `<>`

- Local Header/Project Headers. Include using quotes `""`

For standard C headers use C++ `<cstdio>` style over the C `<stdio.h>` style.

Example of how this should look:

```C++

#pragma once

// C header first
#include <cstdio>
#include <cstdint>

// C++ headers
#include <string_view>
#include <span>

// C++ library header s
#include <atlas/application.hpp>
#include <atlas/core/event/event.hpp>

// Local project
#include "game-template/content/custom_scene.hpp"
#include "game-template/content/custom_actor.hpp"

// actual code goes here
```

Exception: `boost.ut` must ALWAYS be the last include in your code in order to allow `ostream operator<<` overloading to work.

## S.6. Classes

### S.6.1. Declaration Order

Class's visibility specifiers and member sections should appear in the following order.

1. Public.

2. Protected.

3. Private.

Omit any sections that would be empty.

Within each section, group similar declarations together this order and follow this order:

1. Types and type aliases

    - Using directives (`using`)

    - Enum Classes

    - Nested structs and classes

    - Friend classes and structs

2. Static constants
3. Factory functions (if applicable)
4. Constructors and assignment operators
5. Destructor
6. All other member functions (static and non static member functions, as well as friend functions)
7. All other data members (static and non-static)

Do not put large method definitions inline within the class definition. Typically only trivial or performance critical methods \
that are very short may be defined inline. If the class as a template, then all functions must be defined inline in the\
header file.

!!! note
    if a friend is a class or class function, then the friend should appear under the same visibility \
    specifier as a friend. For example, if you are friending a private class function, then the friend \
    function delcaration should also appear in the private section of the friending class.

### S.6.2. Storing References

Class within the project should not have reference member variables like so:

```C++

class my_scene {
public:
    my_scene(flecs::registry& p_registry) : m_registry(p_registry) {}

private:
    flecs::registry& m_registry;
};
```



Reference members implicitly delete copy constructors of a class they are
within because they are themselves are not copyable. You cannot reassign a
reference after it's made.

Instead take the parameter as a reference but save its address as a pointer.

```C++
class my_scene {
public:
    my_scene(flecs::registry& p_registry) : m_registry(&p_registry) {}

private:
    flecs::registry* m_registry;
};
```