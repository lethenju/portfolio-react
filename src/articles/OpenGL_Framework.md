OpenGL is a API for graphics programming. It is used by video games but also to build any type of user interfaces, in a very low level way :

Essentially we're building the code for the GPU (which are shaders) and we're specifying the geometry (made of triangles) to our CPU, so that they both communicate to deliver to the screen some graphics.

There are many librairies that simplify and extends the use of OpenGL : glfw, GLEW, GLUT etc.. . On top of that you have libraries like the SDL and the SFML that gives you dev-friendly building block of user applications and games.

I knew a bit of SDL and SFML, and I wanted to get closer to the code of OpenGL, in order to better understand it.
 So I made my own little (and very naive) 2D OpenGL Framework.

## OpenGL_Framework

The OpenGL Framework stacks a "world" component to build elements (shapes) and put them in the world.
It also has a "physics" component to manage collisions, and velocity/accelerations of shapes.

Finaly, a "wrapper" component wraps your necessary calls to opengl to setup the environnement, the window, and draw the stuff on the screen.

## What did I learn

I learned a lot about C++ development, I try to use the latest C++17 and C++20 features inside the project, to better understand them.
I learned how OpenGL manages to get stuff displayed on the screen, using vertex and fragment shaders, and different types of data buffers.

Finally, I use CMake to build the code and link the libraries to the executables, so I learned quite much about it.
