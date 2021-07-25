const json = require('express');
const parkings = require('../repository/parking.json')
const parkingModel = require('../model/parking')
const parkingController = {}
var express = require('express')
var router = express.Router()
app = express()

// Middleware : rend possible l'accès au body des requêtes POST, PUT, PATCH
router.use(express.json())
//express.urlencoded()
app.use(express.urlencoded({
  extended: true
}));


parkingController.editParking = (req, res, next) => {
    try {
        //const id = parseInt(req.params.id)
        //let parking = parkings.find(parking => parking.id === id)
        //parking.name = req.body.name,
        //parking.city = req.body.city,
        //parking.type = req.body.type,
        //console.log(req.body.name)
        //res.status(200).json(parkings)
        parkingModel.editParkings(req, res)
        
        
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.getParkings = (req,res) => {
    try {
        parkingModel.getParkings(req, res)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.addParking = (req,res, next) => {
    try {
        //parkings.push(req.body)
        //res.status(200).json(parkings);
        parkingModel.addParkings(req, res)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.deleteParking = (req, res, next) => {
    //const id = parseInt(req.params.id)
    //let parking = parkings.find(parking => parking.id === id)
    //parkings.splice(parkings.indexOf(parking),1)
    //res.status(200).json(parkings)
    parkingModel.deleteParkings(req, res)
}

parkingController.getParkingsId = (req,res) => {
    try {
        //const id = parseInt(req.params.id)
        //const parking = parkings.find(parking => parking.id === id)
        //res.status(200).json(parking)
        parkingModel.getParkingsId(req, res)
    } catch (err) {
        console.log(err)
        throw err
    }
}




module.exports = parkingController