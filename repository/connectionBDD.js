const database = {}
const mysql = require('mysql');

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
        //database.db = db;
    });
}

module.exports = database


