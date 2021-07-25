const parking = require('../repository/reservation.json')
const reservationController = {}

reservationController.getParkings = async (req,res)=> {
    try {
        const docs = await reservations.list()
        res.status(200).json(reservations)
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = reservationController