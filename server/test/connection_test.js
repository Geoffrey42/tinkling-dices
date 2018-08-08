const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rooms_booking', { useNewUrlParser: true });

mongoose.connection
    .once('open', () =>
    {
        console.log('Connection is established')
    })
    .on('error', (error) =>
    {
        console.warn('Error during connection : ', error)
    })
