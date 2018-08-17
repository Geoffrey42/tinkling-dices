const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EquipementSchema = new Schema({
    name: String
})

const SingleRoomSchema = new Schema({
    name: String,
    description: String,
    capacity: Number,
    equipements: [EquipementSchema],
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now }
});

const Room = mongoose.model('room', SingleRoomSchema);

module.exports = Room;
