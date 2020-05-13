
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


