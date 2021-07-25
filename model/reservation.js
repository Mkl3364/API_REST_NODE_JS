const config = require('../repository/connectionBDD')
const mysql = require('mysql')
const parking = {} // Un objet vide qui va contenir les méthodes
// a exporté comme module

let connection = mysql.createConnection(config)

let sql = 'SELECT * FROM reservation';
connection.query(sql, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

/*
mysql.query("SELECT * FROM parking", function(err, lignes) {
    if (err) throw err
    console.log(lignes)
    //parking.enr = result;
})

//module.exports = parking

*/