

# File buffer\_tutorial.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**drivers**](dir_1605561db8076fbb4262fa758aa3edc0.md) **>** [**vulkan**](dir_d1501d70e56e021a40f9d93dd0e2ca19.md) **>** [**buffer\_tutorial.hpp**](buffer__tutorial_8hpp.md)

[Go to the documentation of this file](buffer__tutorial_8hpp.md)


```C++
#pragma once
#include <vulkan/vulkan_core.h>
namespace atlas::vk {
    class BufferTutorial {
    public:
        BufferTutorial() = default;
        BufferTutorial(uint64_t p_size,
                       uint32_t p_count,
                       VkBufferUsageFlags p_usage,
                       VkMemoryPropertyFlags p_memory_property_flags,
                       uint64_t p_min_offset_alignment = 1);

        void map(VkDeviceSize p_Size = VK_WHOLE_SIZE, uint64_t p_Offset = 0);
        void unmap();

        void write_to_buffer(void* data,
                             uint64_t p_Size = VK_WHOLE_SIZE,
                             uint64_t p_Offset = 0);
        void flush(uint64_t p_Size = VK_WHOLE_SIZE, uint64_t offset = 0);
        VkDescriptorBufferInfo descriptor_info(uint64_t p_Size = VK_WHOLE_SIZE,
                                               uint64_t p_Offset = 0);
        void invalidate(uint64_t p_Size = VK_WHOLE_SIZE, uint64_t p_Offset = 0);

        void write_to_index(void* data, int idx);

        void flush_index(int index);
        VkDescriptorBufferInfo descriptor_info_at_index(int index);
        void invalidate_index(int index);

        VkBuffer get_buffer_instance() { return m_buffer_handler; }

        void* read_mapped_data() const { return m_mapped; }
        uint32_t get_instance_count() const { return m_count; }

        uint64_t get_instance_size() const { return m_instances_size; }
        uint64_t get_alignment_size() const { return m_alignment_size; }

        VkBufferUsageFlags get_usage_flags() const { return m_usage; }

    private:
        VkBuffer m_buffer_handler = nullptr;
        VkDeviceMemory m_buffer_device_memory = nullptr;
        void* m_mapped = nullptr;
        uint64_t m_size;
        uint32_t m_count;
        uint64_t m_instances_size;
        uint64_t m_alignment_size;
        VkBufferUsageFlags m_usage;
        VkMemoryPropertyFlags m_memory_property_flags;
    };
};
```


