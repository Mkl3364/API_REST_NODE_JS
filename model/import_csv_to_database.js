const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("reservation.CSV");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "api_rest"
    });

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO reservation (id, parking, parkingId, city, clientName, vehicule, licensePlate, checkin, checkout) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

stream.pipe(csvStream);

/*

For importing bdd.CSV

Output :
OkPacket {
fieldCount: 0,
affectedRows: 5,
insertId: 0,
serverStatus: 2,
warningCount: 0,
message: '2Enregistrements: 5  Doublons: 0  Avertissements: 0',
protocol41: true,
changedRows: 0
}

For importing reservation.CSV

OkPacket {
fieldCount: 0,
affectedRows: 6,
insertId: 0,
serverStatus: 2,
warningCount: 0,
message: '2Enregistrements: 6  Doublons: 0  Avertissements: 0',
protocol41: true,
changedRows: 0
}

*/



