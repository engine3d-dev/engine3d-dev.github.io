

# Struct atlas::event::joystick\_info



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**event**](namespaceatlas_1_1event.md) **>** [**joystick\_info**](structatlas_1_1event_1_1joystick__info.md)


























## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; int, const float \* &gt; | [**AxesOfController**](#variable-axesofcontroller)  <br> |
|  std::map&lt; int, [**joystick\_button**](structatlas_1_1event_1_1joystick__button.md) &gt; | [**Buttons**](#variable-buttons)  <br> |
|  std::map&lt; int, bool &gt; | [**ButtonsDown**](#variable-buttonsdown)  <br> |
|  int | [**ID**](#variable-id)   = `-1`<br> |
|  std::string | [**JoystickName**](#variable-joystickname)   = `"Default"`<br> |












































## Public Attributes Documentation




### variable AxesOfController 

```C++
std::map<int, const float*> atlas::event::joystick_info::AxesOfController;
```




<hr>



### variable Buttons 

```C++
std::map<int, joystick_button> atlas::event::joystick_info::Buttons;
```




<hr>



### variable ButtonsDown 

```C++
std::map<int, bool> atlas::event::joystick_info::ButtonsDown;
```




<hr>



### variable ID 

```C++
int atlas::event::joystick_info::ID;
```




<hr>



### variable JoystickName 

```C++
std::string atlas::event::joystick_info::JoystickName;
```




<hr>

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/event/event.hpp`

