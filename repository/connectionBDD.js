// Séparation de la connexion avec la base de données

const database = {} // objet vide qui englobera la méthode connect suivante
const mysql = require('mysql'); //importation du module mysql

database.connect = async () => {
    const mysql = require('mysql');
    const db = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "",
        database: "api_rest"
    });
    db.connect(function(err) {
        if (err) throw err;
        console.log("Connecté à la base de données MySQL!"); //OK
        database.db = db.database; //création d'un clé db à laquelle on attribut
        // la connexion a la base de donnée api_rest
    });
}

module.exports = database


