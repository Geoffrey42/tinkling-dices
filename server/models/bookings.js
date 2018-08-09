const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Room = require('./rooms');

const BookingSchema = new Schema({
    roomId: Schema.Types.ObjectId,
    beginsAt: Date,
    endsAt: Date
});

const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;
