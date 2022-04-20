# latelierTest

Avant tout: 

    Pour rapprocher ce test beaucoup plus aux conditions réelles de développement, j'ai choisis de transformer le modèle de donnée proposé dans le "dataset.json" en une table de base de données MySQL (table player au lieu d'un tableau d'objets). 

    Donc au lieu d'utiliser une approche facile de recherche et parcour d'array, j'ai rajouté un concept d'interrogation de base de données. Donc toutes les requetes vont interroger la base de données pour récupérer les résultats à travers les différents url de l'api.

    J'ai utilisé clever-cloud.com pour un hébergement gratuit de bdd mysql
    J'ai utilisé heroku pour le déploiement de mon api en cloud

***********************************************************************************************
***********************************************************************************************

Pour tester le code à partir de GIT, il faudra: 
    - cloner le projet en local dans l'emplacement de votre choix
    - ouvrir une invite de commande dans le répertoire de base du projet
    - lancer la commande suivante: $npm install 
    - tester les différentes routes comme mentionné ci-dessous

Pour tester le code directment à partir du cloud: 
    - ouvrir l'adresse suivante : https://latelier-test.herokuapp.com/
    - tester les différentes routes comme mentionné ci-dessous

Tester les routes et les fonctionnalités: 
    - lancer le navigateur ou bien un outil de test d'API (ex: postman)
    - entrer l'url: {baseURI}/players pour afficher tout les joueurs
    - entrer l'url: {baseURI}/player/(id) pour afficher un joueur avec l'id de votre choix (id=17 pour R.Nadal)
    - entrer l'url: {baseURI}/stats pour affichers les différents calculs demandés

PS: {baseURI} = localhost:3000 en local et https://latelier-test.herokuapp.com sur le cloud