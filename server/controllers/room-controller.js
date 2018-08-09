const Room = require('../models/rooms')

module.exports = {
    readAll(req, res) {
        Room
            .find()
            .then( (results) => {
                res.send(results);
            })
    },
    read(req, res) {
        Room
            .findOne({'_id': req.params.id})
            .then( (result) => {
                res.send(result);
            })
    }
}
