import axios from 'axios'

export default {
    getAllRooms() {
        return axios.get('/rooms');
    }
}
