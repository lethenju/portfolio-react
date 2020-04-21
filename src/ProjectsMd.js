// TODO -> Use Github API to automatically retrieve READMEs from projects
export const winman_md = `

When it comes to user interfaces, you rarely have the choice but to opt for a desktop environment to beneficiate complex features as multi-window systems. Those solutions are nice but goes heavy on ressources, if you are very limited with a low powered target, connected via SSH.

CLI applications, on the other hand, are often not user friendly for non-developers, and people seems to avoid them. 

winman tries to tackle theses issues, via a complex window system, while maintaining a very easy to use API.

Some nice TUI applications exists, like [tui-rs](https://github.com/fdehau/tui-rs) for rust, but not many uses a true window system.

## Description

Winman stands for Window Manager. It is used as building blocks to create real TUI (Text User Interface) applications.

It provides windows, that can be filled with widgets.
Those widgets can be buttons, text, or simpler shapes. In the future there will be some complex widgets, as frames, scrollbars and other building blocks of window application.

It can be compared to ncurses in the fonctionnalities, but tries to be even more user friendly and have more window-like features

## Usage

You can read and launch the example file to understand how to use the project.
type make build_and_launch to build the whole system, the log system server and launch all what is needed.

You can type to modify the windows name, press '0' to change in interwindow mode and move the windows themselves using ZQSD.

Don't hesitate to tweak the example file to better understand what is going on.

## Example

Go read the examples/test.c file to read the code for the screenshot up there.

`;

export const databash_md = `
Simple database solution with Linux bash 

## What for ?

You want a simple CRUD system that is lighter than 400 lines of shell code ?

No nodeJS, no Python, no Ruby, no dependency, not even a compiled binary ?

Here you go : this simple script based on sed and perl give you different APIs to manage your data just like any CRUD system.

## Usage

You can see the test.sh script to see how the script is used.

It will create a small table in the BASE file and query information from it
`;

export const goState_md = `
A simple framework for designing state machines in Go

## What is it ?

You like to design state machines but you dont want to waste time with the implementation ? 
This project aim to answer your needs and provide an easy way to design your state machines based programs very easily.

## Cool ! How can I use it ?

You need to declare your state machine first before playing with it. I will be working on 
dynamic state setup later.

Any questions ?
Send to julien.letheno@gmail.com, I will be happy to answer them !
`;

export const testMan_md = `

A micro unit test framework for your C programs

## Usage

Look at the example test suite in the example folder. There is a micro library that have only one function to multiply numbers. The different files are :

example.c is the code source of the mini library

example.h is the associated header

example_test.c is the unit test to test the library
`;

export const resMan_md = `
# Resman
Resman is a resource manager

It aims to wrap your normal malloc calls into a system that keeps 
trace of your allocated resources, and can free them even if you lost track of the allocated data

## Example

See the test file for an example of how to allocate with resman
`;

export const logSystem_md = `
Log_system is a simple module for managing a logging system to log
your messages on different outputs (files, stdout..)

It can buffer your logs to never feel bloated with too many messages.
`;
