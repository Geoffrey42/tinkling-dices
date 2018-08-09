RoomController = require('../controllers/room-controller');
module.exports = (server) => {
    server.get('/rooms', RoomController.getRooms);
    server.get('/rooms/:id', RoomController.getRoom);
}
