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
    //db.query("CREATE DATABASE api_rest", function (err, result) {
    //    if (err) throw err;
    //    console.log("Base de données créée !"); // api_rest créé
    //  });
});

db.end();

