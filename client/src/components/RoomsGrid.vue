<template>
    <div class="columns">
        <rooms-grid-room
            class="column"
            v-for="room in rooms"
            :key="room._id"
            :roomName="room.name"></rooms-grid-room>
    </div>
</template>

<script>
import RoomService from '../services/RoomService'
import Room from './Room.vue';

/* eslint-disable */
export default {
    props: ['userInput'],
    data() {
        return {
            rooms: []
        }
    },
    components: {
        'rooms-grid-room': Room
    },
    mounted() {
        RoomService.getAllRooms()
            .then( (fetchedRooms) => {
                for (var i = 0; i < fetchedRooms.data.length; i++) {
                    this.rooms.push(fetchedRooms.data[i])
                }
            })
            .catch( (error) => console.log(error))
    }
}

</script>
