var mysql = require('mysql');
var connection = mysql.createConnection({
  database : 'tp_node',
  host     : 'localhost',
  user     : 'root',
  password : ''
});

/*
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected !');
});
*/

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.connect();
connection.end();

module.exports = {
    connection,
    query
  }