

# File serializer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**serialize**](dir_58a1ea337b9d91821031c085f16f9af8.md) **>** [**serializer.hpp**](serializer_8hpp.md)

[Go to the documentation of this file](serializer_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <core/scene/scene.hpp>
#include <string>

namespace atlas {
    class serializer {
    public:
        serializer(const scene_scope* p_scene_ctx);

        void save_as(const std::string& p_filepath);

    private:
        ref<scene_scope> m_current_scene_ctx;
    };

}; // namespace atlas
```


