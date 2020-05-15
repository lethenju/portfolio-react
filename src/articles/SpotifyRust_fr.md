J'adore écouter ma musique quand je travaille, ca m'aide a garder un rythme consistant et rester motiver quand j'écris du code.
J'utilise d'habitude le client Spotify sur mon PC, ou l'interface web, et mon appli smartphone quand je suis en déplacement.

Le problème est que a chaque fois que je veux écouter quelque chose d'autre, je doit switcher de fenêtres, je doit changer d'interface et donc je perds un peu de temps, ce qui fait pas mal de temps perdu si on additionne.

Je voulais donc trouver une solution à ce problème. Me donner la possibilité de choisir ma musique tout en restant dans mon environnement de développement.

Rien à voir, mais je voulais aussi apprendre le langage Rust, et j'ai fait ce projet aussi pour cette raison. Rust est un langage créé par Mozilla et qui mets toute sa philosophie dans la priorisation de la stabilité. Il vise a addresser les problèmes du C en gestion de mémoire : le C est très permissif avec comment on gère la mémoire, alors que Rust ne vas pas compiler si on partage des ressources sans être dans les meilleurs pratiques.

On pourrait dire que Rust c'est du C mais avec les bonnes pratiques forcées dans le langage même. Les messages d'erreur du compilateur sont très facile a lire, et vous aident autant que si c'était une revue de code de votre mentor favori.

## Et voici SpotifyRust

SpotifyRust est un CLI pour Spotify, fait avec le langage Rust. Vous pouvez gérer le playback, et parcourir votre librairie, directement depuis le terminal.

Il est constitué de 2 éléments :
* Une librairie qui abstrait l'API REST de Spotify (l'authentification, et des API plus simples a utiliser)
* Une interface utilisateur terminal pour l'utilisateur final.

## Ce que j'ai appris 

Evidemment j'ai appris les bases du langage Rust, mais aussi comment communiquer à une API REST.