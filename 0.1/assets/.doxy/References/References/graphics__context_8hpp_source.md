

# File graphics\_context.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**graphics\_context.hpp**](graphics__context_8hpp.md)

[Go to the documentation of this file](graphics__context_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>

namespace atlas {
    class graphics_context {
    public:
        virtual ~graphics_context() = default;

        void destroy() { return destroy_context(); }

    private:
        virtual void destroy_context() = 0;
    };

    ref<graphics_context> initialize_context(const std::string& p_tag);

};
```


