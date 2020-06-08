
If you want to store data, you either have to develop a file-based API and choose a protocol
for the storage (JSON, CSV, YAML..), or you can use a SQL server, which requires a lot of setup
and drain a lot of resources if you want to develop for a small target.
DataBash was conceived to simplify all this, by giving you a permanent storage data solution, 
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
