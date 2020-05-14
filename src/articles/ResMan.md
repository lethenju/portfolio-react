
Calling malloc in C is not something you do without thinking twice.
Forgetting a free can have bad repercussions in terms of memory leakage, and it is quite difficult to find a missing free in a heavy application.

## Resman : A resource manager

Resman enables you to wrap you malloc call with a software layer that will keep a trace of your request. So we can stop worrying about memory leakages, and simply free your resource by Resman. We can also follow our resources, display them, follow stats of our different requests.
