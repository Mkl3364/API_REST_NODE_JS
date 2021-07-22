# API_REST_NODE_JS

Création d'une API Rest avec **NodeJS** et **Express**

Le but de ce projet est de créer une API REST utilisant NodeJS et le framework Express.

Ce projet se base sur une structure d'API qui contient des layers :

* Routeur : prend en charge les requêtes HTTP sur l'API et les route vers le controller.
* Controller : consruit les données arrivant de la requête et les envoie au Service.
* Service : 
* Repository : communication avec la base de donnée.

# Prérequis

1. Créer un serveur Express

``npm init``

Un fichier JSON est diponible à la racine du projet et contient les informations du projet, c'est le squelette de l'application

<small>Il est possible de sauter les étapes de configuration lors de l'exécution de la commande en tapant npm init -y</small>

2. Ajout d'express a notre NodeJS API

``npm install express``

3. Création du serveur express dans le fichier index.js

``const express = require('express')``
```const app = express()``

Le **const express = require('express')** permet d'importer la librairie express et ses fonctions.
La constante **app** est l'instanciation d'un objet Express qui contient le serveur et ses méthodes.


