import axios from 'axios'

export default {
    getBookingsByTime(date, hour) {
        return axios.get('/booking/' + encodeURIComponent(date) + '/' + hour);
    },
    postBooking(params) {
        return axios.post('/booking', params);
    }
}
