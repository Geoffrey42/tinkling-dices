const assert = require('assert')
const Room = require('../models/rooms')
var fs = require('fs')

describe('Rooms creation', () => {
    it('Room saving', () => {
        rawJSON = fs.readFileSync('./originalDataSet/rooms.json')
        var parsedContent = JSON.parse(rawJSON)
        const rooms = new Room(parsedContent)
        rooms.save();
    })
})
