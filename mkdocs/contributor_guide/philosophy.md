# Code Design

The core design tenets of `atlas` and libraries extending must seek to achieve every design choice, line written, and architecture made.


D.0. General

`atlas` abstraction API's such as `engine-audio` should focus on enabling configurational settings that does not have users directly writing backend code. If users decide to use `engine-audio` they should not be touching any piece of code or API of miniaudio.

D.1 Minimalist

`atlas` aims to be as simple as possible and no simpler. Libraries, Classes, implementation, and features should be implemented to handle currend edge cases. Then focus on expanding afterwards.

D.2 Safe & Reliable

`atlas` and its style guide uses patterns, techniques, and documentation to reduce safety issues and improve reliability throught out its codebases.

D.3 Tested & Testable

`atlas` codebases should be as testable and unit tested.

D.4 Portable

NOTE: In-progress

As of this current moment in the early development of `atlas`, we only support windows.

`atlas` will aim to support multiple OS's backends. Such as for Linux and Mac.

