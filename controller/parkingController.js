const parking = require('../repository/parking.json')
const parkingController = {}

parkingController.getParkings = async (req,res)=> {
    try {
        const docs = await parking.list()
        res.status(200).json(parkings)
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = parkingController