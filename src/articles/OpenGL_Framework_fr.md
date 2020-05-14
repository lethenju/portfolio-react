OpenGL est une API pour la programmation graphique (2D et 3D). Elle est utilisée pour les jeux videos, mais aussi pour construire toutes sortes d'interfaces utilisateur, de manière très bas niveau : 

Essentiallement, nous construisons le code pour le GPU (donc les shaders) et nous spécifions la géométrie (faite de triangles) vers notre CPU, de manière a ce qu'ils communiquent ensemble pour qu'il affiche des choses sur l'écran.

Il y a beaucoup de librairies qui simplifient et extendent l'utilisation d'OpenGL : glfw, GLEW, GLUT etc.. En plus de cela vous avez des librairies comme SDL ou SFML qui vous donnent des outils très pratiques pour developper des interfaces utilisateur et des jeux.

J'ai connu un peu de SDL et SFML, et je voulais aller plus proche d'OpenGL, pour mieux le comprendre.
Donc j'ai fait mon propre (et très naif) framework 2D OpenGL 

## OpenGL_Framework

Ce framework OpenGL contient un composant "world" pour construire des 'elements' (formes) et les placer dans le monde.
Il y a aussi un composant "physics" pour la gestion des vélocité/accélérations ainsi que les collisions des formes.

Enfin, un composant "wrapper" encapsule les appels a OpenGL necessaires pour setup l'environnement, la fenetre, et afficher le "world" a l'écran.

## Ce que j'ai appris 

J'ai beaucoup appris du développement C++, j'essaie d'utiliser les dernières fonctionnalités C++17 et C++20 dans le projet, pour mieux les comprendre.
J'ai appris comment OpenGL parvient a afficher des choses a l'écran, en utilisant les vertex et fragment shaders, les différent types de buffers de données.

Enfin, j'utilise CMake pour builder le projet et linker les librairies aux executables, donc j'ai appris pas mal la dessus aussi. 