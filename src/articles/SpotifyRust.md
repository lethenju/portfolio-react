I love to listen to my music when I'm working, it helps me keep up a consistent rythm and motivation when I write some code.
I'm generally using the Spotify client on my PC, or the web interface, and when I'm on the go, I simply use my phone app.

The problem with that is that each time I want to play something else, I need to switch windows, I need to switch interfaces and so I lose a small amount of time, which cumulates to actually large time loss.

I wanted to find a solution of this problem. Enable me to choose my music while staying on my development environment.

Unrelatedly, I also wanted to learn the language Rust and I built this project also for this reason. Rust is a language created by Mozilla and which puts all its philosophy in stability-based design. It aims to fix the problems of C in memory management : C is very permissive with what to do with your memory, while Rust actually wont compile if you share resources outside of the best practices principles.

I'd say Rust is C with the best practices enforced in the language. The compiler's error messages are very comprehensive and help you as much as if it was a code review by your favorite mentor.

## Here comes SpotifyRust

SpotifyRust is a CLI for Spotify, built in the language Rust. You can manage your playback and browse your entire library, directly from your terminal.

It actually consists of 2 elements : 
* A Library which abstracts the Spotify REST API (authentication, and more easy-to-use set of APIs)
* The Text-based user interface for the end user.

## What did I learn

Obviously I learnt the basics of the Rust language, but also REST APIs. 
