const reservations = require('../repository/reservation.json')
const reservationController = {}

reservationController.getReservation = (req,res) => {
    try {
        const docs = reservations;
        res.status(200).json(reservations);
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.getReservationId = (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const reservation = reservations.find(reservation => reservation.id === id)
        res.status(200).json(reservation)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.addReservation = (req,res) => {
    try {
        reservations.push(req.body)
        res.status(200).json(reservations)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.editReservation = (req,res) => {
    try {
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
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.deleteReservation = (req,res) => {
    try {
        const id = parseInt(req.params.id)
        let reservation = reservations.find(reservation => reservation.id === id)
        reservations.splice(reservations.indexOf(reservation),1)
        res.status(200).json(reservations)
    } catch (err) {
        console.log(err)
        throw err
    }
}





module.exports = reservationController