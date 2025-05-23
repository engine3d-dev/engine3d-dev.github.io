

# Namespace atlas::event



[**Namespace List**](namespaces.md) **>** [**atlas**](namespaceatlas.md) **>** [**event**](namespaceatlas_1_1event.md)




















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**joystick\_button**](structatlas_1_1event_1_1joystick__button.md) <br> |
| struct | [**joystick\_info**](structatlas_1_1event_1_1joystick__info.md) <br> |


## Public Types

| Type | Name |
| ---: | :--- |
| enum int | [**JoystickCodes**](#enum-joystickcodes)  <br> |
| enum uint32\_t | [**Key**](#enum-key)  <br> |
| enum uint32\_t | [**Mouse**](#enum-mouse)  <br> |
| enum  | [**input\_state**](#enum-input_state)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  glm::vec2 | [**cursor\_position**](#function-cursor_position) () <br> |
|  float | [**get\_joystic\_axis**](#function-get_joystic_axis) (int p\_controller\_id, int p\_button) <br> |
|  bool | [**is\_joystic\_present**](#function-is_joystic_present) (int p\_controller\_id) <br> |
|  bool | [**is\_joystick\_button\_pressed**](#function-is_joystick_button_pressed) (int p\_button) <br> |
|  bool | [**is\_joystick\_button\_released**](#function-is_joystick_button_released) (int p\_button) <br> |
|  const char \* | [**is\_joystick\_guid**](#function-is_joystick_guid) (int p\_controller\_id) <br> |
|  bool | [**is\_key\_pressed**](#function-is_key_pressed) (int p\_key) <br> |
|  bool | [**is\_key\_released**](#function-is_key_released) (int p\_key) <br> |
|  bool | [**is\_mouse\_pressed**](#function-is_mouse_pressed) (int p\_mouse\_code) <br> |
|  bool | [**is\_mouse\_released**](#function-is_mouse_released) (int p\_mouse\_code) <br> |
|  void | [**update\_events**](#function-update_events) () <br> |
|  void | [**wait\_for\_events**](#function-wait_for_events) () <br> |




























## Public Types Documentation




### enum JoystickCodes 

```C++
enum atlas::event::JoystickCodes {
    Joystick1 = 0,
    Joystick2 = 1,
    Joystick3 = 2,
    Joystick4 = 3,
    Joystick5 = 4,
    Joystick6 = 5,
    Joystick7 = 6,
    Joystick8 = 7,
    Joystick9 = 8,
    Joystick10 = 9,
    Joystick11 = 10,
    Joystick12 = 11,
    Joystick13 = 12,
    Joystick14 = 13,
    Joystick15 = 14,
    Joystick16 = 15,
    JoystickLAST = Joystick16
};
```




<hr>



### enum Key 

```C++
enum atlas::event::Key {
    Space = 32,
    Apostrophe = 39,
    Comma = 44,
    Minus = 45,
    Period = 46,
    Slash = 47,
    D0 = 48,
    D1 = 49,
    D2 = 50,
    D3 = 51,
    D4 = 52,
    D5 = 53,
    D6 = 54,
    D7 = 55,
    D8 = 56,
    D9 = 57,
    Semicolon = 59,
    Equal = 61,
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    LeftBracket = 91,
    Backslash = 92,
    RightBracket = 93,
    GraveAccent = 96,
    World1 = 161,
    World2 = 162,
    Escape = 256,
    Enter = 257,
    Tab = 258,
    Backspace = 259,
    Insert = 260,
    Delete = 261,
    Right = 262,
    Left = 263,
    Down = 264,
    Up = 265,
    PageUp = 266,
    PageDown = 267,
    Home = 268,
    End = 269,
    CapsLock = 280,
    ScrollLock = 281,
    NumLock = 282,
    PrintScreen = 283,
    Pause = 284,
    F1 = 290,
    F2 = 291,
    F3 = 292,
    F4 = 293,
    F5 = 294,
    F6 = 295,
    F7 = 296,
    F8 = 297,
    F9 = 298,
    F10 = 299,
    F11 = 300,
    F12 = 301,
    F13 = 302,
    F14 = 303,
    F15 = 304,
    F16 = 305,
    F17 = 306,
    F18 = 307,
    F19 = 308,
    F20 = 309,
    F21 = 310,
    F22 = 311,
    F23 = 312,
    F24 = 313,
    F25 = 314,
    KP0 = 320,
    KP1 = 321,
    KP2 = 322,
    KP3 = 323,
    KP4 = 324,
    KP5 = 325,
    KP6 = 326,
    KP7 = 327,
    KP8 = 328,
    KP9 = 329,
    KPDecimal = 330,
    KPDivide = 331,
    KPMultiply = 332,
    KPSubtract = 333,
    KPAdd = 334,
    KPEnter = 335,
    KPEqual = 336,
    LeftShift = 340,
    LeftControl = 341,
    LeftAlt = 342,
    Leftsuper = 343,
    RightShift = 344,
    RightControl = 345,
    RightAlt = 346,
    Rightsuper = 347,
    Menu = 348
};
```




<hr>



### enum Mouse 

```C++
enum atlas::event::Mouse {
    Button0 = 0,
    Button1 = 1,
    Button2 = 2,
    Button3 = 3,
    Button4 = 4,
    Button5 = 5,
    Button6 = 6,
    Button7 = 7,
    ButtonLast = Button7,
    ButtonLeft = Button0,
    ButtonRight = Button1,
    ButtonMiddle = Button2
};
```




<hr>



### enum input\_state 

```C++
enum atlas::event::input_state {
    None,
    Idle,
    Pressed,
    Released
};
```




<hr>
## Public Functions Documentation




### function cursor\_position 

```C++
glm::vec2 atlas::event::cursor_position () 
```




<hr>



### function get\_joystic\_axis 

```C++
float atlas::event::get_joystic_axis (
    int p_controller_id,
    int p_button
) 
```




<hr>



### function is\_joystic\_present 

```C++
bool atlas::event::is_joystic_present (
    int p_controller_id
) 
```




<hr>



### function is\_joystick\_button\_pressed 

```C++
bool atlas::event::is_joystick_button_pressed (
    int p_button
) 
```





**Note:**

FIXME: Make button later 





        

<hr>



### function is\_joystick\_button\_released 

```C++
bool atlas::event::is_joystick_button_released (
    int p_button
) 
```




<hr>



### function is\_joystick\_guid 

```C++
const char * atlas::event::is_joystick_guid (
    int p_controller_id
) 
```




<hr>



### function is\_key\_pressed 

```C++
bool atlas::event::is_key_pressed (
    int p_key
) 
```




<hr>



### function is\_key\_released 

```C++
bool atlas::event::is_key_released (
    int p_key
) 
```




<hr>



### function is\_mouse\_pressed 

```C++
bool atlas::event::is_mouse_pressed (
    int p_mouse_code
) 
```




<hr>



### function is\_mouse\_released 

```C++
bool atlas::event::is_mouse_released (
    int p_mouse_code
) 
```




<hr>



### function update\_events 

```C++
void atlas::event::update_events () 
```




<hr>



### function wait\_for\_events 

```C++
void atlas::event::wait_for_events () 
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/event/event.hpp`

