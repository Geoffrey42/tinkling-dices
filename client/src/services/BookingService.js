import axios from 'axios'

export default {
    getBookingsByTime(date, hour) {
        return axios.get('/booking/' + date + '/' + hour);
    },
    postBooking(payload) {
        return axios.post('/booking', payload);
    }
}
