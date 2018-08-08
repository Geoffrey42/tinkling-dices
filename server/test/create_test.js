const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Create test', () => {
    it('Room saving', (done) => {
        rawJSON = fs.readFileSync('./originalDataSet/rooms.json')
        var parsedContent = JSON.parse(rawJSON)
        const rooms = new Room(parsedContent)
        rooms.save().then( () => {
            assert(!rooms.isNew);
            done();
        });
    })
})
