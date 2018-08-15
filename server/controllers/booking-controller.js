const Booking = require('../models/bookings')


module.exports = {
    readAll(req, res) {
        Booking
            .find()
            .then( (results) => {
                res.send(results);
            })
    },
    readById(req, res) {
        Booking
            .findOne({'_id':req.params.id})
            .then( (result) => {
                res.send(result);
            })
    },
    readByTime(req, res) {
        Booking
            .find({'date':req.params.date, 'hour':req.params.hour})
            .then( (results) => {
                res.send(results);
            })
    },
    create(req, res) {
        const booking = new Booking({
            roomId: req.body.roomId,
            date: req.body.date,
            hour: req.body.hour
        });
        booking.save((error) => {
            if (error) {
                return res.status(500).send({
                    message: "Booking has not been recorded because " + error
                });
            }
            res.send({ message: "Booking recorded successfully !" });
        });
    },
    delete(req, res) {
        Booking.findByIdAndRemove(req.params.id)
            .then( (result) => {
                if (!result) {
                    return res.status(500).send({
                        message: "Booking not found with id " + req.params.id
                    });
                }
                res.send({ message: "Booking deleted successfully !"});
            })
    }
}
