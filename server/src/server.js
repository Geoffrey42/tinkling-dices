const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('../routes/index')
const server = express()
const Room = require("../models/rooms");
const fs = require('fs');

server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())
routes(server);

var dbName = 'sf_booking';
mongoose.connect('mongodb://localhost:27017/' + dbName, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection to " + dbName + " failed"));
db.once("open", () => console.log("Connection to " + dbName + " Succeeded"));


server.listen(process.env.PORT || 8081)
