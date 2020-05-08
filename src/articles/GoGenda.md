



It has been already a couple of time (actually more than a year) that I log most of the things I do on google agenda.
You may ask, why do I do it ?

I like to have a view on how my days look like, without just relying on my biased point of vue. 
I really love to see if I worked more a day or another. Dont judge me.

And I was logging everything by hand, in the Google Calendar app on my phone, or more frequently on the website.
Adding to that, the UX is pretty bad : to create an event with custom color, you had to create one and then modify the color.
It was also impossible to set up an event from "now", I had to manually redo the 

I wanted to automate a bit this action, as it can be quite overwhelming to have a google calendar tab open at all times..
Also, google gives some cool apis to play with, and this project was the perfect occasion to try it.

## Description

GoGenda is a Go client of Google Agenda used for logging activities. You can use your custom categories and colors in a config.json file,
to fit your needs.

![Alt text](res/capture_gogenda.png)

## What I learned

I gained experience with Go development, and OAuth2 security mechanism for the API.

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
