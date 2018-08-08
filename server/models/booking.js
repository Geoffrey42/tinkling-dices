const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    roomId: String,
    beginsAt: Date,
    endsAt: Date
});

const Room = mongoose.model('booking', BookingSchema);

module.exports = Booking;
