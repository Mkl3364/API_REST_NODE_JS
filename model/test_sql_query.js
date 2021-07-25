var mysql = require('mysql')

const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database : "api_rest"
 });

  con.connect(function(err) {
   if (err) throw err;
   console.log("Connecté à la base de données MySQL!");
   con.query("SELECT * FROM parking", function (err, result) {
       if (err) throw err;
       console.log(result);
     });
 });

 /* OK !
 Output :
Connecté à la base de données MySQL!
[
  RowDataPacket {
    id: 1,
    name: 'Parking-1',
    type: 'AIRPORT',
    city: 'ROISSY EN FRANCE'
  },
  RowDataPacket {
    id: 2,
    name: 'Parking-2',
    type: 'AIRPORT',
    city: 'BEAUVAIS'
  },
  RowDataPacket {
    id: 3,
    name: 'Parking-3',
    type: 'AIRPORT',
    city: 'ORLY'
  },
  RowDataPacket {
    id: 4,
    name: 'Parking-4',
    type: 'AIRPORT',
    city: 'NICE'
  },
  RowDataPacket {
    id: 5,
    name: 'Parking-5',
    type: 'AIRPORT',
    city: 'LILLE'
  }
]

*/