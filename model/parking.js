const config = require('../repository/connectionBDD')
const mysql = require('mysql')
let parking = {} // Un objet vide qui va contenir les méthodes
// a exporté comme module

let connection = mysql.createConnection(config)

parking.getParkings = (req,res) => {
  try {
    let sql = 'SELECT * FROM parking';
    connection.query(sql, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      parking = results;
    });
  } catch (err) {
      console.log(err)
      throw err
  }
}

parking.getParkingsId = (req,res) => {
  try {
    let sql = 'SELECT * FROM parking WHERE id=2';
    connection.query(sql, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      parking = results;
    });
  } catch (err) {
      console.log(err)
      throw err
  }
}

parking.addParkings = (req,res) => {
  try {
    let sql = 'INSERT INTO parking(id, name, type, city) VALUES (6, "parking-6", "camping-car", "Montpellier")';
    connection.query(sql, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      parking = results;
    });
  } catch (err) {
      console.log(err)
      throw err
  }
}

parking.editParkings = (req,res) => {
  try {
    let sql = 'UPDATE parking SET id=6, name="parking-6", type="camping-car", city="Pau" WHERE id=6';
    connection.query(sql, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      parking = results;
    });
  } catch (err) {
      console.log(err)
      throw err
  }
}

parking.deleteParkings = (req,res) => {
  try {
    let sql = 'DELETE FROM parking WHERE id=6';
    connection.query(sql, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      parking = results;
    });
  } catch (err) {
      console.log(err)
      throw err
  }
}

module.exports = parking