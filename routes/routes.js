const parkings = require('../repository/parking.json')
const reservations = require('../repository/reservation.json')
var express = require('express')
var router = express.Router()
var parkingController = require('../controller/parkingController')
let reservationController = require('../controller/reservationController')

// Middleware : rend possible l'accès au body des requêtes POST, PUT, PATCH
router.use(express.json())

// Modifier un parking
router.put('/parkings/:id', (req,res) => {
    parkingController.editParking(req, res)
})

// Ajouter un parking
router.post('/parkings', (req, res) => {
    parkingController.addParking(req, res);
})

// Récupérer la liste des parkings
router.get('/parkings', (req,res) => {
    parkingController.getParkings(req, res);
})

// Récupérer un parking particulier grâce à son id
router.get('/parkings/:id', (req,res) => {
    parkingController.getParkingsId(req, res)
})

// Supprimer un parking
router.delete('/parkings/:id', (req,res) => {
    parkingController.deleteParking(req, res);
})

// Récupérer les reservation d'un parking avec son id
router.get('/parkings/:id/reservation', (req,res) => {
    reservationController.getReservationId(req, res)
})

// Récupérer toutes les réservations
router.get('/reservations', (req,res) => {
    reservationController.getReservation(req, res);
})

router.post('/reservations', (req,res) => {
    reservationController.addReservation(req, res)
})

// Modification d'une reservation
router.put('/parkings/:id/reservation', (req, res) => {
    reservationController.editReservation(req,res)
})

// Suppression d'une réservation
router.delete('/parkings/:id/reservation', (req, res) => {
    reservationController.deleteReservation(req, res)
})

module.exports = router;