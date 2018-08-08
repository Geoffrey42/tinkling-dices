const assert = require('assert')
const Booking = require('../models/booking')
var fs = require('fs')

describe('Update test', () => {
    // create new bookings collection because collection is drop between each file
    let booking_1;
    let currentEndsAt = 'July 5, 1999'
    let newEndsAt = new Date('July 3, 1999');

    beforeEach( (done) => {
        booking_1 = new Booking(
            {
                roomId: "5b6b600a568d1a29d360f069",
                beginsAt: new Date('July 1, 1999'),
                endsAt: new Date(currentEndsAt)
            });
        booking_1
            .save()
            .then( () => {
                done();
            })
    })

    function assertEndsAt(promise, done) {
        promise.then( () => {
            Booking.find({}).then( (bookings) => {
                assert(bookings[0].endsAt.getTime() === newEndsAt.getTime());
                done();
            })
        })
    }

    it('Update via instance', (done) => {
        booking_1.set('endsAt', newEndsAt);
        assertEndsAt(booking_1.save(), done)
    })

    it('Update via model', (done) => {
        assertEndsAt(Booking.update({endsAt:new Date(currentEndsAt)},{endsAt:newEndsAt}), done)
    })

    it('Find by date and update', (done) => {
        assertEndsAt(Booking.findOneAndUpdate({endsAt: new Date(currentEndsAt)}, {endsAt:newEndsAt}),done)
    })

    it('Find by id and update', (done) => {
        assertEndsAt(Booking.findByIdAndUpdate(booking_1._id, {endsAt:newEndsAt}), done)
    })
})
