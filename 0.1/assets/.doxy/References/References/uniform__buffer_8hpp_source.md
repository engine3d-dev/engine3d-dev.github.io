

# File uniform\_buffer.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**uniform\_buffer.hpp**](uniform__buffer_8hpp.md)

[Go to the documentation of this file](uniform__buffer_8hpp.md)


```C++
#pragma once
#include <cstdint>
#include <vulkan/vulkan_core.h>

namespace atlas {

    struct DescriptorSet {
        VkDescriptorSetLayoutBinding Binding;
        VkDescriptorSet Set;
    };

    /*
        camera_ubo global_ubo = camera_ubo(...);

        // Structure that you see with the uniform buffer's constructor takes
       the following struct
        // Descriptor set configuration to set groups for you shader bindnig by
       update frequency struct UniformConfiguration{ uint32_t Binding = -1; //
       specify where in the binding that we want to assign our descriptor set to
            ShaderStage Stage = ShaderStage::NOT_DEFINED;       // specify which
       shader stage to use this uniform buffers descriptor set bool
       HasSamples=false;                              // Checks if we want to
       use immutable samples
        };



        UniformBuffer ubo = UniformBuffer({
            {.binding = 0, .shaderStage = STAGE_TYPE_GRAPHICS, .hasSamples =
       true}
        });


        - These do the following for VkDescriptorSetlayoutCreateInfo
            - Sets binding count to the binding structure we specify
            - Set the data of that binding (setting up
       VkDescriptorSetLayoutBinding)
            -


    */
    class UniformBuffer {
    public:
        UniformBuffer(uint32_t p_BindingIndex);
    };
};
```


