//var mysql = require('mysql');
//const parkings = require('./repository/bdd.json')
//const reservations = require('./repository/reservation.json')

const { json } = require('express');
const express = require('express')
const app = express()
const database = require('./repository/connectionBDD')
var routes = require('./routes/routes')

database.connect();

//app.use('/parkings', routes)
app.use(routes)

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');
})


