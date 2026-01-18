

# File utilities.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**drivers**](dir_608dc5b7aaba5a488a1cee762bfade26.md) **>** [**vulkan-cpp**](dir_328caf802809d01e7397181570d57cd0.md) **>** [**utilities.cpp**](drivers_2vulkan-cpp_2utilities_8cpp.md)

[Go to the documentation of this file](drivers_2vulkan-cpp_2utilities_8cpp.md)


```C++
#include <drivers/vulkan-cpp/utilities.hpp>
#include <vulkan/vulkan_core.h>
#include <drivers/vulkan-cpp/vk_context.hpp>
#include <core/engine_logger.hpp>
#include <filesystem>

namespace atlas::vk {

    void vk_check(const VkResult& p_result,
                  const std::string& p_name,
                  const std::source_location& p_source) {
        if (p_result != VK_SUCCESS) {
            console_log_error_tagged(
              "vulkan",
              "File {} on line {} failed VkResult check",
              std::filesystem::relative(p_source.file_name()).string(),
              p_source.line());
            console_log_error_tagged("vulkan",
                                     "Current Function Location = {}",
                                     p_source.function_name());
            console_log_error_tagged(
              "vulkan", "{} VkResult returned: {}", p_name, (int)p_result);
        }
    }
};
```


