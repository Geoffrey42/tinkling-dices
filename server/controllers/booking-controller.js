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
        //const {roomId, date,hour} = req.body;
        console.log("dans controller")
        console.log(req.body.roomId)
        console.log("----------------")
        console.log(req.body.date)
        console.log("----------------")
        console.log(req.body.hour)
        console.log("----------------")
        const booking = new Booking({
            roomId: roomId,
            date: date,
            hour: hour
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
