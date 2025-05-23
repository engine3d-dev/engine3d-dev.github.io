

# File renderer\_backend.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**renderer\_backend.hpp**](renderer__backend_8hpp.md)

[Go to the documentation of this file](renderer__backend_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <core/scene/components.hpp>
#include <core/scene/scene.hpp>
#include <string>

namespace atlas {
    class scene_object;
    class render_context {
    public:
        static scope<render_context> initialize(const std::string& p_tag);
        virtual ~render_context() = default;

        void begin();
        void end();

        static uint32_t get_current_frame();

    private:
        virtual void begin_frame() = 0;
        virtual void end_frame() = 0;
    };
}; // namespace atlas
```


