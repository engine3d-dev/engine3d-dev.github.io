

# File index\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**index\_buffer.hpp**](index__buffer_8hpp.md)

[Go to the documentation of this file](index__buffer_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <vector>
#include <vulkan/vulkan.hpp>

namespace atlas {
    class index_buffer {
    public:
        virtual ~index_buffer() = default;
        static ref<index_buffer> create(const std::vector<uint32_t>& p_indices);

        void bind(const VkCommandBuffer& p_command_buffer);
        void draw(const VkCommandBuffer& p_command_buffer);

        bool has_indices() const;

    protected:
        virtual void bind_to_index_buffer(
          const VkCommandBuffer& p_command_buffer) = 0;
        virtual void render_index_buffer(
          const VkCommandBuffer& p_command_buffer) = 0;
        virtual bool contains_indices() const = 0;
    };
};
```


