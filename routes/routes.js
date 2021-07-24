const parkings = require('../repository/parking.json')
const reservations = require('../repository/reservation.json')
// const { json } = require('express');
var express = require('express')
//const routes = {};
var router = express.Router()

// Middleware : rend possible l'accès au body des requêtes POST, PUT, PATCH
router.use(express.json())

// Modifier un parking
router.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name = req.body.name,
    parking.city = req.body.city,
    parking.type = req.body.type,
    res.status(200).json(parking)
})

// Ajouter un parking
router.post('/parkings', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

// Récupérer la liste des parkings
router.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

// Récupérer un parking particulier grâce à son id
router.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

// Supprimer un parking
router.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

// Récupérer les reservation d'un parking avec son id
router.get('/parkings/:id/reservation', (req,res) => {
    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservation => reservation.id === id)
    res.status(200).json(reservation)
})

// Récupérer toutes les réservations
router.get('/reservations', (req,res) => {
    res.status(200).json(reservations)
})

router.post('/reservations', (req,res) => {
    reservations.push(req.body)
    res.status(200).json(reservations)
})

// Modification d'une reservation
router.put('/parkings/:id/reservation', (req, res) => {
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
router.delete('/parkings/:id/reservation', (req, res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservations.splice(reservations.indexOf(reservation),1)
    res.status(200).json(reservations)
})

module.exports = router;