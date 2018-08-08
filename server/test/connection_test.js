const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before( (done) => {
    mongoose.connect('mongodb://localhost:27017/rooms_booking', { useNewUrlParser: true });

    mongoose
        .connection
        .once('open', () =>
                {
                    console.log('Connection is established');
                    done();
                })
        .on('error', (error) =>
                {
                    console.warn('Error during connection : ', error)
                })
})

beforeEach('Delete rooms', (done) => {
    const {rooms} = mongoose.connection.collections;
    rooms.drop( () => {
        done();
    })
});
