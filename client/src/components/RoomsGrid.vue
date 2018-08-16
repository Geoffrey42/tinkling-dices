<template>
    <div class="columns">
        <single-room
            class="column"
            v-for="room in rooms"
            :key="room._id"
            :userInput="userInput"
            :roomName="room.name"
            :roomId="room._id"></single-room>
    </div>
</template>

<script>
import RoomService from '../services/RoomService';
import BookingService from '../services/BookingService';
import Room from './Room.vue';
import { eventBus } from '../main';

export default {
    data() {
        return {
            userInput: Object,
            rooms: [],
            currentBookings: []
        }
    },
    components: {
        'single-room': Room
    },
    created() {
        eventBus.$on('formWasChanged', (userInput) => {
            this.userInput = userInput;
            BookingService.getBookingsByTime(this.userInput.date, this.userInput.hour)
                .then ( (fetchedBookings) => {
                    for (var i = 0; i < fetchedBookings.data.length; i++) {
                        this.currentBookings.push(fetchedBookings.data[i])
                    }
                })
        });
        RoomService.getAllRooms()
            .then( (fetchedRooms) => {
                for (var i = 0; i < fetchedRooms.data.length; i++) {
                    this.rooms.push(fetchedRooms.data[i])
                }
            })
    }
}

</script>
