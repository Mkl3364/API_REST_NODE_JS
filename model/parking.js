const connection = require('../repository/connectionBDD')
const parking = {}

parking.list = async function () {
    return await connection.db.collection('parkings').find({}).toArray()
}

module.exports = parking