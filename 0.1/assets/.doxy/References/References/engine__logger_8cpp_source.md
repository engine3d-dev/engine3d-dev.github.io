

# File engine\_logger.cpp

[**File List**](files.md) **>** [**atlas**](dir_846b40a516a2a471658ccbe09e530d2e.md) **>** [**core**](dir_72c8e49e70df5a84858ab1265443dbf9.md) **>** [**engine\_logger.cpp**](engine__logger_8cpp.md)

[Go to the documentation of this file](engine__logger_8cpp.md)


```C++
#include <core/engine_logger.hpp>
#include <spdlog/common.h>
#include <spdlog/sinks/stdout_color_sinks.h>

namespace atlas {

    std::string g_current_pattern_for_logs = "Undefined Pattern Specified";
    std::unordered_map<std::string, ref<spdlog::logger>>
      console_log_manager::s_loggers;

    void console_log_manager::initialize_logger_manager(
      const std::string& pattern) {
        g_current_pattern_for_logs = pattern;

        s_loggers.insert({ "engine3d", spdlog::stdout_color_mt("engine3d") });
        s_loggers.insert({ "physics", spdlog::stdout_color_mt("physics") });
        s_loggers.insert({ "vulkan", spdlog::stdout_color_mt("vulkan") });
        s_loggers.insert(
          { "assert", spdlog::stdout_color_mt("core assertion") });

        s_loggers["engine3d"]->set_pattern(pattern);
        s_loggers["engine3d"]->set_level(spdlog::level::trace);

        s_loggers["physics"]->set_level(spdlog::level::trace);
        s_loggers["physics"]->set_pattern(pattern);

        s_loggers["vulkan"]->set_level(spdlog::level::trace);
        s_loggers["vulkan"]->set_pattern(pattern);

        s_loggers["assert"]->set_level(spdlog::level::trace);
        s_loggers["assert"]->set_pattern(pattern);
    }

    void console_log_manager::create_new_logger(
      [[maybe_unused]] const std::string& p_tag) {
#ifndef ENABLE_TESTS_ONLY
        s_loggers[p_tag] = spdlog::stdout_color_mt(p_tag);
        s_loggers[p_tag]->set_level(spdlog::level::trace);
        s_loggers[p_tag]->set_pattern(g_current_pattern_for_logs);
#endif
    }

    void console_log_manager::set_current_logger(
      [[maybe_unused]] const std::string& p_tag) {
#ifndef ENABLE_TESTS_ONLY
        s_loggers[p_tag] = spdlog::stdout_color_mt(p_tag);
        s_loggers[p_tag]->set_level(spdlog::level::trace);
        s_loggers[p_tag]->set_pattern(g_current_pattern_for_logs);
#endif
    }

    ref<spdlog::logger> console_log_manager::get(const std::string& p_tag) {
        return s_loggers[p_tag];
    }
};
```


