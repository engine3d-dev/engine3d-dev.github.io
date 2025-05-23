

# File file\_dialog.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**filesystem**](dir_27ba7cf633e68cf06fb2d9a5a7eda525.md) **>** [**file\_dialog.hpp**](file__dialog_8hpp.md)

[Go to the documentation of this file](file__dialog_8hpp.md)


```C++
#pragma once
#include <string>

namespace atlas::filesystem {
    std::string load_from_file_dialog(const std::string& p_filter);

    std::string save_to_file(const std::string& p_filter);
}; // namespace atlas::filesystem
```


