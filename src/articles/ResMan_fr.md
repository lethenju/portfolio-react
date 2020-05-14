
Faire un malloc en C est une action qu'il faut faire avec précaution.
Oublier un free peut avoir des répercussions grave de fuite mémoire, et surtout il est  difficile, dans des applications lourdes, de retrouver le free manquant.

## Resman : Un manager de ressources 

ResMan vous permet d'envelopper votre appel malloc d'une couche logicielle qui gardera une trace de votre requête d'espace mémoire. Ainsi, on peut arrêter de se soucier des fuites mémoire, et liberer simplement a la fin de l'utilisation de notre resource par notre couche logicielle. On peut aussi suivre nos ressources, les afficher, et suivre les statistiques de nos appels mémoire.
