
Quand on développe une application, un des outils de debuggage les plus utiles c'est de tracer ce qu'il se passe dans ton application.
Pour rendre possible ca, on peut utiliser des fonctions printf(), mais vous allez vous retrouvez rapidement inondés de messages inutiles.

Une idée est donc de créer un système log par niveaux (error, warning, info.. etc) et décider d'afficher seulement ce dont on a besoin.

Mais pas besoin d'un vrai projet pour ca, de simple macros suffisent, pas vrai ?

## Allo Houston on a un problème

On a tous été dans la fameuse situation où un million de logs arrivent en une seconde, on doit mettre pause et tout lire, ca va trop vite !

En plus, imaginez que vous travaillez sur un projet qui utilise une interface utilisateur dans le terminal. L'application est dans le terminal, 
on peut donc pas utiliser stdout pour les logs..

## Et voila LogSystem

C'est la que LogSystem devient utile :

Il est basé sur un système de buffer. On peut spécifier une vitesse maximale de défilement des logs, ainsi les logs seront buffered pour ne jamais se retrouver dans une situation où on ne peut rien lire.

On peut aussi écrire les logs sur le réseau, et si un serveur LogSystem est ouvert
quelque part sur votre réseau local (ou sur votre PC local directement), les logs arriveront là !

Enfin on peut aussi rediriger les logs vers un simple fichier de log.
