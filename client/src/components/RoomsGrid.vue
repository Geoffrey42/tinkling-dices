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
      console.log('dans data');
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
      console.log('dans created');
      console.log('userInput', this.userInput);
      console.log('rooms', this.rooms);
      console.log('currentBookings', this.currentBookings);
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
      console.log('dans created');
      console.log('userInput c', this.userInput);
      console.log('rooms c', this.rooms);
      console.log('currentBookings c', this.currentBookings);
      console.log('---------------------------------------');
    },
    beforeUpdate(){
      console.log('dans beforeUpdate');
      console.log('userInput b', this.userInput);
      console.log('rooms b', this.rooms);
      console.log('currentBookings b', this.currentBookings);
      console.log('---------------------------------------');
    },
    updated() {
      eventBus.$on('formWasChanged', (userInput) => {
          this.userInput = userInput;
          BookingService.getBookingsByTime(this.userInput.date, this.userInput.hour)
              .then ( (fetchedBookings) => {
                  for (var i = 0; i < fetchedBookings.data.length; i++) {
                      this.currentBookings.push(fetchedBookings.data[i])
                  }
              })
              .catch ( (error) => console.error(error))
      });
      console.log('dans update');
      console.log('userInput u', this.userInput);
      console.log('rooms u', this.rooms);
      console.log('currentBookings u', this.currentBookings);
      console.log('---------------------------------------');
    }
}

</script>
