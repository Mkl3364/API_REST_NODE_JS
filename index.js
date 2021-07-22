const express = require('express')
const app = express()
var mysql = require('mysql');
const parkings = require('./bdd.json')

// Middleware : rend possible l'accès au body des requêtes POST, PUT, PATCH
app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parking.find(parking => parking.id === id)
    parking.name = req.body.name,
    parking.city = req.body.city,
    parking.type = req.body.type,
    res.status(200).json(parking)
})

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');
})


