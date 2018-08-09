RoomController = require('../controllers/room-controller');
BookingController = require('../controllers/booking-controller');

module.exports = (server) => {
    server.get('/rooms', RoomController.readAll);
    server.get('/rooms/:id', RoomController.read);
    server.post('/booking', BookingController.create);
}
