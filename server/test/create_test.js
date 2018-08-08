const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Create test', () => {
    it('Room saving', (done) => {
        rawJSON = fs.readFileSync('./originalDataSet/rooms.json')
        var parsedContent = JSON.parse(rawJSON)
        console.log(parsedContent.rooms[0])
        for (var i = 0; i < parsedContent.rooms.length; i++) {
            const rooms = new Room(parsedContent.rooms[i])
            rooms
                .save()
                .then( () => {
                    assert(!rooms.isNew);
            });
        }
        done();
    })
})
