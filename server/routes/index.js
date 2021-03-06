RoomController = require('../controllers/room-controller');
BookingController = require('../controllers/booking-controller');

module.exports = (server) => {
    server.get('/rooms', RoomController.readAll);
    server.get('/rooms/:id', RoomController.read);

    server.get('/bookings', BookingController.readAll);
    server.get('/bookings/:id', BookingController.readById);
    server.get('/booking/:date/:hour', BookingController.readByTime);
    server.post('/booking', BookingController.create);
    server.delete('/booking/:id', BookingController.delete);
}
