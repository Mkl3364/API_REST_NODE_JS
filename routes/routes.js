const parkings = require('../repository/bdd.json')
const reservations = require('../repository/reservation.json')
const { json } = require('express');
const express = require('express')
const app = express()
const routes = {};


// Modifier un parking
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name = req.body.name,
    parking.city = req.body.city,
    parking.type = req.body.type,
    res.status(200).json(parking)
})

// Ajouter un parking
app.post('/parkings', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

// Récupérer la liste des parkings
app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

// Récupérer un parking particulier grâce à son id
app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

// Supprimer un parking
app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

// Récupérer les reservation d'un parking avec son id
app.get('/parkings/:id/reservation', (req,res) => {
    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservation => reservation.id === id)
    res.status(200).json(reservation)
})

// Récupérer toutes les réservations
app.get('/reservations', (req,res) => {
    res.status(200).json(reservations)
})

app.post('/reservations', (req,res) => {
    reservations.push(req.body)
    res.status(200).json(reservations)
})

// Modification d'une reservation
app.put('/parkings/:id/reservation', (req, res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservation.parking = req.body.parking,
    reservation.parkingId = req.body.parkingId,
    reservation.city = req.body.city,
    reservation.clientName = req.body.clientName,
    reservation.vehicle = req.body.vehicle,
    reservation.licensePlate = req.body.licensePlate,
    reservation.checkin = req.body.checkin,
    reservation.checkout = req.body.checkout,
    res.status(200).json(reservation)
})

// Suppression d'une réservation
app.delete('/parkings/:id/reservation', (req, res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservations.splice(reservations.indexOf(reservation),1)
    res.status(200).json(reservations)
})

module.exports = routes;