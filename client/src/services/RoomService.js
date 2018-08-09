import Api from '@/services/Api'

export default {
    fetchRooms() {
        return Api().readAll('rooms')
    }
}
