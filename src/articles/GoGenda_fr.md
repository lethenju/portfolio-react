

Cela fait déjà quelques temps (en fait plus d'un an) que je log la plupart des choses que je fais de mes journées, directement sur Google Agenda.
Vous vous demandez sûrement pourquoi je fais ca ?

J'aime avoir une vue sur ce a quoi ressemblent mes journées, sans juste me fier a mon point de vue biaisé.
J'aime vraiment voir si j'ai travaillé plus un tel jour ou un tel autre. Ne me jugez pas.

Et je loggais tout a la main, dans l'application Google Agenda sur mon smartphone, ou plus fréquemment dans la web app Google Agenda. 
En plus, l'UX de Google Agenda est pas vraiment adapté a cette utilisation : pour créer un événement d'une couleur particulière, il faut le creer avec la couleur par défault, puis modifier la couleur.
Il est aussi impossible de mettre en place en un seul clic un événement commençant immédiatement.

Je voulais automatiser un peu cette action, pour la simplifier largement.
Et puis Google propose pas mal d'API cools a utiliser, et ce projet était l'occasion parfaite de les essayer

## Description

GoGenda est donc un client CLI de Google Agenda fait en Go, pour logger vos activités. Vous pouvez déclarer des catégories d'activités avec leur couleurs respectives dans un fichier config.json.

Vous avez donc accès a plein d'API pour démarrer une nouvelle activité, la stopper, la supprimer, mais aussi en programmer a tout moment dans le passé et le futur, voir vos activités du jour et plein d'autres.
Et tout ca avec une interface très simple a utiliser.

![Alt text](res/capture_gogenda.png)

## Ce que j'ai appris

J'ai gagné beaucoup d'expérience en développement d'applications Go, et avec le mécanisme de sécurity OAuth2 pour l'API.
