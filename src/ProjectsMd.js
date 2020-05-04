// TODO -> Use Github API to automatically retrieve READMEs from projects
export let projects_articles = 
{
  winman : {name:"WinMan"},
  databash : {name:"DataBash"},
  gostate : {name:"GoState"},
  testman : {name:"TestMan"},
  resman : {name:"ResMan"},
  logsystem : {name:"LogSystem"},
};
projects_articles.winman.markdown = `

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

projects_articles.databash.markdown = `

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

projects_articles.gostate.markdown = `
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

projects_articles.testman.markdown = `

A micro unit test framework for your C programs

## Usage

Look at the example test suite in the example folder. There is a micro library that have only one function to multiply numbers. The different files are :

example.c is the code source of the mini library

example.h is the associated header

example_test.c is the unit test to test the library
`;

projects_articles.resman.markdown = `
Resman is a resource manager

It aims to wrap your normal malloc calls into a system that keeps 
trace of your allocated resources, and can free them even if you lost track of the allocated data

## Example

See the test file for an example of how to allocate with resman
`;

projects_articles.logsystem.markdown  = `
  When designing applications, one of the most useful debugging tool is to trace
what is happening in the application.
For that, you could simply use a printf() function, but you will soon feel
bloated in loads of messages.

One idea is to create a leveled log system, with error logs, warning logs etc,
and decide to show only what you need.

But no need of a real project for that, a simple solution is to use macros..

## So whats the problem ?

We have all been through the famous situation where a million logs comes in a second
we need to pause everything and read it through, its going too fast !

Also, imagine you're working on a TUI project. The applications renders in the terminal 
directly. You can't use your stdout for logging, of course..

## What can I do ?

Thats where log_system comes handy :

The log_system is buffered. When you log many messages at once, you can specify 
a maximum speed to never feel totally bloated with no time to read logs!

You can also write logs to a open socket, 
and if a log_system server application is open elsewhere, your logs will come here !

You can also choose to write in a file !

## What is log_system actually ?

Log_system is a simple module for managing a logging system to log
your messages on different outputs (files, stdout..)

It is also a server, to show your log messages in real time in another app !
(or even remotely if you open your ports ! )


`;
