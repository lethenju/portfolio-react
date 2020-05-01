// TODO -> Use Github API to automatically retrieve READMEs from projects
export const winman_md = `

When it comes to user interfaces, you rarely have the choice but to opt for a desktop environment to beneficiate complex features as multi-window systems. Those solutions are nice but goes heavy on ressources, if you are very limited with a low powered target, connected via SSH.

CLI applications, on the other hand, are often not user friendly for non-developers, and people seems to avoid them. 

winman tries to tackle theses issues, via a complex window system, while maintaining a very easy to use API.

Some nice TUI applications exists, like ui-rs for rust, but not many uses a true window system.

## Description

Winman stands for Window Manager. It is used as building blocks to create real TUI (Text User Interface) applications.

It provides windows, that can be filled with widgets.
Those widgets can be buttons, text, or simpler shapes.

## What I learned

I gained experience with C development and makefile building while developing this project.

`;

export const databash_md = `

If you want to store data, you either have to develop a file-based API and choose a protocol
for the storage (JSON, CSV, YAML..), or you can use a SQL server, which requires a lot of setup
and drain a lot of resources if you want to develop for a small target.

This project was made to simplify all this, by giving you a permanent storage data solution, 
based on bash and perl, with extensive use of regex.

It is simple, it is fast, it is efficient.

## Description

A simple bash script give you an API (by parameters) to add, delete, update and get data to a 
specific base.

It is made, like SQL, by tables in bases that you populate, and everything gets written in 
one file.

A concurrency mechanism protects everything if several instances of Databash are using the same file
at the same time.

## What I learned

I learned a lot and gained experience in regex manipulation with sed, and perl.
I also got experienced in bash scripting.

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
