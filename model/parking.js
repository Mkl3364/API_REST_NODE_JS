const connection = require('../repository/connectionBDD')
const parking = {} // Un objet vide qui va contenir les méthodes
// a exporté comme module

parking.list = async function () {
    return await connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM parking", function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    }
    )}

module.exports = parking