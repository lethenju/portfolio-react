When it comes to implementing an user interface based on several windows, you rarely have the choice but to opt for a desktop environment built on a Window X server. This solution is nice but goes heavy on ressources, and it is even impossible if you are working with a low performance target, connected via SSH.

CLI applications, on the other hand, are often not user friendly for non-developers, and people seems to avoid them. 

winman tries to tackle theses issues, via a complex window system, while maintaining a very easy to use API.

## Description

Winman stands for Window Manager. It is used as building blocks to create real TUI (Text User Interface) applications.

It provides windows, that can be filled with widgets.
Those widgets can be buttons, text, or simpler shapes.

## What I learned

I gained experience with C development and makefile building while developing this project. I also learned how to use CMake when I switched from manual makefiles to CMake.
