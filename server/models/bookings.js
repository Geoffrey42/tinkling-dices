const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Room = require('./rooms');

const BookingSchema = new Schema({
    roomId: Schema.Types.ObjectId,
    date: Date,
    hour: Number
});

const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;
