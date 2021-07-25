// Séparation de la connexion avec la base de données

let database = {} // objet vide qui englobera la méthode connect suivante
const mysql = require('mysql'); //importation du module mysql

const db = mysql.createConnection({

    host: "localhost",
    user: "mickael",
    password: "password",
    database: "api_rest",
    //port: "3306",
    });

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!"); //OK
    database = db;
    });

module.exports = database


