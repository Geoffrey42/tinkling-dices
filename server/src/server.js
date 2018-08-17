const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('../routes/index')
const server = express()
const Room = require("../models/rooms");
const fs = require('fs');
require('dotenv').config;

server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())
routes(server);

let dbName = 'sf_booking';
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect('mongodb://' + DATABASE_URL + ':27017/' + dbName, { useNewUrlParser: true });


let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection to " + dbName + " failed"));
db.once("open", () => console.log("Connection to " + dbName + " Succeeded"));

Room.findOne({'name':'Salle #1'})
    .then( (result) => {
        if (result) {
            console.log(dbName + ' is populated')
        } else {
            console.log('populating ' + dbName);
            const rawJSON = fs.readFileSync('./originalDataSet/rooms.json');
            const  parsedContent = JSON.parse(rawJSON);
            for (let i = 0; i < parsedContent.rooms.length; i++) {
                const room = new Room(parsedContent.rooms[i]);
                room.save();
            }
            console.log(dbName + ' is now populated');
        }
    })


server.listen(process.env.PORT || 8081)
