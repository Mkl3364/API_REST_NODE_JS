# API_REST_NODE_JS

![NodeJS-Express](/images/nodejs_express.jpg)

Création d'une API Rest avec **NodeJS** et **Express**

Le but de ce projet est de créer une API REST utilisant NodeJS et le framework Express afin d'éffectuer des opération CRUD sur l'API.

Ce projet se base sur une architecture 3 tiers qui contient des layers :

* Routes : prend en charge les requêtes HTTP sur l'API et les route vers le controller.
* Controller : consruit les données arrivant de la requête et les envoie au Model.
* Model : effectue des requêtes vers la base de données.
* Repository : contient la configuration et crée la connexion avec la base de donnée.


# Prérequis

## Logiciel à installer :

- NodeJS : https://nodejs.org/en/download/ (notre serveur écrit en JS)
- GIT : https://git-scm.com/downloads (notre système de gestion de versionnage pour notre projet)
- WAMP SERVER (WINDOWS): https://www.wampserver.com/en/download-wampserver-64bits/ (notre serveur web local pour une création de base de donnée mysql en ligne de commande)

Pour tester et exécuter les différentes requêtes HTTP (GET, POST, PUT, PATCH, DELETE) sur notre API, il est recommandé d'utiliser l'outil **POSTMAN** : https://www.postman.com/

1. Créer un serveur Express

``npm init``

Un fichier JSON est diponible à la racine du projet et contient les informations du projet, c'est le squelette de l'application

<small>Il est possible de sauter les étapes de configuration lors de l'exécution de la commande en tapant npm init -y</small>

2. Ajout d'express a notre NodeJS API

``npm install express``

3. Création du serveur express dans le fichier index.js

``const express = require('express')``

``const app = express()``

Le **const express = require('express')** permet d'importer la librairie express et ses fonctions.
La constante **app** est l'instanciation d'un objet Express qui contient le serveur et ses méthodes.

BONUS : Pour éviter d'ouvrir et fermer le serveur Node, il est possible d'utiliser la librairie **Nodemon** qui permet de relancer automatiquement le serveur node à chaque fois que l'on sauvegarde un fichier.
``npm install nodemon -g``

# Informations sur le projet

Ce projet commence par l'utilisation de fichiers de données au format JSON pour effectuer les opérations CRUD. Puis les fichiers JSON sont convertis au format CSV pour une intégration dans une BDD mysql.

Il possède 3 branches :
* Une première branche pour effectuer les opérations CRUD sur deux fichiers JSON ("parking.json" et "reservation.json) et tester les requêtes POST, PUT et DELETE avec Postman
* Une deuxième branche pour tester la connexion avec la base de donnée, importer les fichier JSON au préalable converti au format csv dans une base de donnée crée (api_rest), création du dossier repository qui contient la connexion avec la base de donnée.
* Une troisème branche pour mettre en place l'architecture 3 tiers d'une API REST, création des dossiers controller, model ainsi que route. Réorganisation des fichiers dans les dossiers et mise en place des connexion entre les routes, controllers et model.