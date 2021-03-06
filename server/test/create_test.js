const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Create test', () => {
    it('Room saving', (done) => {
        rawJSON = fs.readFileSync('./originalDataSet/rooms.json')
        var parsedContent = JSON.parse(rawJSON)
        for (var i = 0; i < parsedContent.rooms.length; i++) {
            const room = new Room(parsedContent.rooms[i])
            room
                .save()
                .then( () => { assert(!room.isNew); });
        }
        done();
    })
})
