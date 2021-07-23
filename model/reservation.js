const connection = require('../repository/connectionBDD')
const reservation = {}

reservation.list = async function () {
    return await connection.db.collection('parkings').find({}).toArray()
}
