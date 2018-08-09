RoomController = require('../controllers/room-controller');
module.exports = (server) => {
    server.get('/rooms', RoomController.readAll);
    server.get('/rooms/:id', RoomController.read);
    server.post('/rooms', RoomController.create);
}
