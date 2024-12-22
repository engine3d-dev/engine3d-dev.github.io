# Style Guide

Style 0 - Code Guidelines

All guides followm the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

Style 1 - Formatting

- Code shall follow engine3d's `.clang-format` file, which uses the Mozilla C++ style format as a base with some adjustments.

- Code shall use PacalCase for classes to indicate unique class names and template arguments.

- CAP_CASE for MACROs (avoid using macros entirely)

- prefix `p_` for function parameters

- prefix `m_` for private/protected class member variables.

- Refrain from abbreviated variable name. Dont do `m_cnt` and just write out `m_count`.

- Use `#pragma once` as the include guard in headers.

- Every file should end with new character.

- Every line in a file must stay within 80-character limit.

- Every public API need to be documented with doxygen style comments.

- Include C++ header versions of C headers such as `<cstdint>` vs `<stdint.h>`