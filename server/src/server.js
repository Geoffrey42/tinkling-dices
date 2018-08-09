const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('../routes/index')

const server = express()
routes(server);
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection Succeeded");
});

var rooms = require("../models/rooms");

server.listen(process.env.PORT || 8081)
