

# File win32.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**platforms**](dir_8d4914c5e7dfa41cebb35065bb0be3d0.md) **>** [**win32.cpp**](win32_8cpp.md)

[Go to the documentation of this file](win32_8cpp.md)


```C++
#include <core/application.hpp>
#include <core/system/registry.hpp>
#include <drivers/graphics_context.hpp>
#include <core/engine_logger.hpp>
extern atlas::ref<atlas::application> atlas::initialize_application();

int
win_main() {
    // atlas::system_registry::initialize();
    atlas::ref<atlas::graphics_context> graphic_context =
      atlas::initialize_context("vulkan_context");

    atlas::ref<atlas::system_registry> system =
      atlas::create_ref<atlas::system_registry>("system");
    atlas::ref<atlas::application> app = atlas::initialize_application();
    app->execute();
    graphic_context->destroy();
    app->post_destroy();
    return 0;
}
```


