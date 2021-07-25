const config = require('../repository/connectionBDD')
const mysql = require('mysql')
const reservation = {} // Un objet vide qui va contenir les méthodes
// a exporté comme module
const reservationController = require('../controller/reservationController')

let connection = mysql.createConnection(config)

reservation.getReservation = (req,res) => {
  try {
    let sql = 'SELECT * FROM reservation';
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

reservation.getReservationId = (req,res) => {
  try {
    let sql = 'SELECT * FROM reservation WHERE id=2';
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

reservation.addReservation = (req,res) => {
  try {
    let sql = 'INSERT INTO reservation(id, parking, parkingId, city, clientName, vehicule, licensePlate, checkin, checkout ) VALUES (7, "parking-7", 6, "Pau", "Mickael BRUNET", "tracteur", "MB198DD", "2020-08-21 06:00:00", "2020-08-27 06:00:00")';
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

reservation.editReservation = (req,res) => {
  try {
    let sql = 'UPDATE reservation SET id=7, parking="parking-10", parkingId=10, city="Dax", clientName="Florian BRUNET", vehicule="voiture", licensePlate="FB198DD", checkin="2020-07-21 06:00:00", checkout="2020-07-27 06:00:00" WHERE id=7';
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

reservation.deleteReservation = (req,res) => {
  try {
    let sql = 'DELETE FROM reservation WHERE id=7';
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

module.exports = reservation