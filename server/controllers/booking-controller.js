const Booking = require('../models/bookings')
const fs = require('fs');

module.exports = {
    readAll(req, res) {
        Booking
            .find()
            .then( (results) => {
                res.send(results);
            })
            .catch((error) => {
                res.status(404).send({
                  message: "Bookings not found : " + error
                })
            })
    },
    readById(req, res) {
        Booking
            .findOne({'_id':req.params.id})
            .then( (result) => {
                res.send(result);
            })
            .catch((error) => {
                res.status(404).send({
                  message: "Booking not found : " + error
                })
            })
    },
    readByTime(req, res) {
        Booking
            .find({'date':decodeURIComponent(req.params.date), 'hour':req.params.hour})
            .then( (results) => {
                res.send({results, message: "Booking successfully received"});
            })
            .catch((error) => {
                res.status(404).send({
                  message: "Booking not found : " + error
                })
            })
    },
    create(req, res) {
        const booking = new Booking({
            roomId: req.body.roomId,
            date: req.body.date,
            hour: req.body.hour
        });
        booking
          .save()
          .then( (result) => {
              Booking
                  .find()
                  .then( (results) => {
                    console.log('starting writing bookings.json');
                    let data = JSON.stringify(results, null, 2);
                    fs.writeFileSync('./json_files/bookings.json', data);
                    console.log('bookings.json has been writed');
                  })
              res.send({result, message: "Booking recorded successfully !" });
          })
          .catch( (error) => {
              res.status(500).send({
                    message: "Booking has not been recorded because " + error
              })
          })
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
