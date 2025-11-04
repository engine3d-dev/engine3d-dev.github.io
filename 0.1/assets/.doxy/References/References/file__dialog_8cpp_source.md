

# File file\_dialog.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**filesystem**](dir_f130aa4281de8b0a0ce4fe6bb2f3ff76.md) **>** [**file\_dialog.cpp**](file__dialog_8cpp.md)

[Go to the documentation of this file](file__dialog_8cpp.md)


```C++
#include <core/engine_logger.hpp>
#include <core/filesystem/file_dialog.hpp>
#include <nfd/nfd.h>

namespace atlas::filesystem {
    std::string load_from_file_dialog(
      const std::string& p_filter,
      const std::filesystem::path& p_default_path) {
        char* output_path = nullptr;

        nfdresult_t result = NFD_OpenDialog(
          p_filter.c_str(), p_default_path.string().c_str(), &output_path);

        // if (result == NFD_OKAY) {
        //     return std::string(output_path);
        // }

        // console_log_fatal("Error Loading File!");
        // return "";
        return (result == NFD_OKAY) ? std::string(output_path) : "";
    }

    std::string save_to_file(const std::string& p_filter,
                             const std::filesystem::path& p_default_path) {
        char* output_path = nullptr;

        nfdresult_t result = NFD_SaveDialog(
          p_filter.c_str(), p_default_path.string().c_str(), &output_path);

        // if (result == NFD_OKAY) {
        //     return std::string(output_path);
        // }

        // console_log_trace("Error Loading == {}", output_path);
        // return "";
        return (result == NFD_OKAY) ? std::string(output_path) : "";
    }
};
```


