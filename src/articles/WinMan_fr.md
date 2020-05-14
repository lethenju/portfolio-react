
Lorsqu'il s'agit d'implementer une interface utilisateur basé sur des fenêtres, vous êtes un peu obligé d'utiliser un environnement de bureau qui tourne sur un serveur X Window. Cette solution est bien mais prends beaucoup de resources, et c'est même carrément impossible si vous travaillez sur une cible très peu puissante, connectée en SSH.

Les application CLI, dans le même temps, sont souvent très peu accessibles pour des non développeurs, les gens semblent les éviter comme la peste.

WinMan essaye donc de répondre a ces problèmes, avec un système complexe de fenêtrage dans le terminal, tout en gardant une API extrèmement simple a utiliser.

## Description

WinMan veut dire "Window Manager". Il s'agit d'une librairie graphique, faite par dessus Termlib (un autre de mes projets), pour construire des applications dans le terminal.

Il propose donc des fenêtres, qui peuvent être remplies par des widgets, qui peuvent donc être des boutons, du texte ou des formes plus simples (lignes, rectangles, cercles..).

## Ce que j'ai appris

J'ai gagné de l'expérience en développement C et en écriture de makefile en développant ce projet. J'ai aussi appris a utiliser CMake quand j'ai migré d'un système de makefile manuels a CMake.
