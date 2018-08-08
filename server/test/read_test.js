const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Read test', () => {
    // create new rooms collection because collection is drop between each file
    let room_1;

    beforeEach( (done) => {
        room_1 = new Room(
            {
                name: "Salle #1",
                description: "Salle #1",
                capacity: 5,
                equipements: [
                {
                    name: "TV"
                },
                {
                    name: "Retro Projecteur"
                }
                ],
                createdAt: "2016-12-07T12:39:29.812Z",
                updatedAt: "2016-12-08T17:31:39.489Z"
            });
        room_1
            .save()
            .then( () => {
                done();
            })
    })
    it('Find Room by name', (done) => {
        Room
            .find({'name': 'Salle #1'})
            .then( (resultRooms) => {
                assert(resultRooms[0]._id.equals(room_1._id))
                done();
            })
    })

    it('Find Room by id', (done) => {
        Room
            .findOne({"_id":room_1._id})
            .then( (resultRoom) => {
                assert(resultRoom.name === room_1.name)
                done();
            })
    })
})
