
Lorsque vous voulez enregistrer des données de manière persistente, soit vous devez developper une API pour un stockage local, et donc choisir vous même le protocole des données (JSON, CSV, YAML..), ou vous pouvez utiliser un serveur SQL, ce qui nécessite beaucoup de setup, et utilise potentiellement beaucoup de ressources comparés aux besoins de votre appli.
DataBash a été conçu pour simplifier tout ça, en vous donnant une solution de stockage de données, basé sur bash et perl, en utilisant simplement des RegEx.

C'est simple, c'est rapide, c'est efficace.

## Description

Un simple script bash vous fournit une API complète pour récuperer, ajouter, supprimer, mettre à jour des données dans une base de donnée spécifique.
Le stockage est construit, comme SQL, par des tables dans des bases que l'on remplit, et tout est écrit dans un seul fichier.

Un mécanisme de protection de concurrence protège vos données si plusieurs instances de DataBash utilisent le même fichier au même moment.

## Ce que j'ai appris

J'ai beaucoup appris et gagné de l'expérience dans la manipulation des expressions régulières avec sed et perl.
J'ai aussi gagné en expérience en écriture de scripts bash.