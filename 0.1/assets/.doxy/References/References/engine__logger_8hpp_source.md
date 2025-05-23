

# File engine\_logger.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**core**](dir_ab5f97e7ae27ba905c508150b2df25d1.md) **>** [**engine\_logger.hpp**](engine__logger_8hpp.md)

[Go to the documentation of this file](engine__logger_8hpp.md)


```C++
#pragma once
#include <core/core.hpp>
#include <fmt/os.h>
#include <fmt/ostream.h>
#include <map>
#include <memory>
#include <spdlog/common.h>
#include <spdlog/spdlog.h>

namespace atlas {
    class console_log_manager {
    public:
        static void initialize_logger_manager(
          const std::string& pattern = "%^[%T] %n: %v%$");

        static void set_current_logger(
          const std::string& p_tag = "Undefined g_Tag in console_logger");
        static void create_new_logger(
          const std::string& p_tag = "Undefined Tag");
        static ref<spdlog::logger> get(const std::string& p_tag);

    private:
        static std::unordered_map<std::string, ref<spdlog::logger>> s_loggers;
    };
};

template<typename... T>
inline void
console_log_trace(spdlog::format_string_t<T...> fmt, T&&... args) {
    atlas::console_log_manager::get("engine3d")
      ->trace(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_warn(spdlog::format_string_t<T...> fmt, T&&... args) {
    atlas::console_log_manager::get("engine3d")
      ->warn(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_info(spdlog::format_string_t<T...> fmt, T&&... args) {
    atlas::console_log_manager::get("engine3d")
      ->info(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_error(spdlog::format_string_t<T...> fmt, T&&... args) {
    atlas::console_log_manager::get("engine3d")
      ->error(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_fatal(spdlog::format_string_t<T...> fmt, T&&... args) {
    atlas::console_log_manager::get("engine3d")
      ->critical(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_trace_tagged(const std::string& p_tag,
                         spdlog::format_string_t<T...> fmt,
                         T&&... args) {
    atlas::console_log_manager::get(p_tag)->trace(fmt,
                                                  std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_info_tagged(const std::string& p_tag,
                        spdlog::format_string_t<T...> fmt,
                        T&&... args) {
    atlas::console_log_manager::get(p_tag)->info(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_warn_tagged(const std::string& p_tag,
                        spdlog::format_string_t<T...> fmt,
                        T&&... args) {
    atlas::console_log_manager::get(p_tag)->warn(fmt, std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_error_tagged(const std::string& p_tag,
                         spdlog::format_string_t<T...> fmt,
                         T&&... args) {
    atlas::console_log_manager::get(p_tag)->error(fmt,
                                                  std::forward<T>(args)...);
}

template<typename... T>
inline void
console_log_fatal_tagged(const std::string& p_tag,
                         spdlog::format_string_t<T...> fmt,
                         T&&... args) {
    atlas::console_log_manager::get(p_tag)->critical(fmt,
                                                     std::forward<T>(args)...);
}
```


