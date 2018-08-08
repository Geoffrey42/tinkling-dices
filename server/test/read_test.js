const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Read test', () => {
    // create new rooms collection because collection is drop between each file
    rawJSON = fs.readFileSync('./originalDataSet/rooms.json')
    var parsedContent = JSON.parse(rawJSON)
    const rooms = new Room(parsedContent)

    beforeEach((done) => {
        rooms
            .save()
            .then( () => {
            done();
        });
    })

    it('Find Room by name', (done) => {
        Room
            //.findOne({'rooms.0.name': 'Salle #1'})
            .findOne({'rooms.0.name': 'Salle #1'})
            .then( (resultRooms) => {
                console.log(resultRooms.rooms[0]);
                done();
        })
    })

    it('Find Room by id', () => {
    })
})
