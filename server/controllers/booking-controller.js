const Booking = require('../models/bookings')

module.exports = {
    readAll(req, res) {
        Booking
            .find()
            .then( (results) => {
                res.send(results);
            })
    },
    read(req, res) {
        Booking
            .findOne({'_id':req.params.id})
            .then( (result) => {
                res.send(result);
            })
    },
    create(req, res) {
        const {roomId,beginsAt,endsAt} = req.body;
        const booking = new Booking({
            roomId: roomId,
            beginsAt: beginsAt,
            endsAt: endsAt
        });
        booking.save();
    }
}
