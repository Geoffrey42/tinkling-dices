<template>
    <div class="columns">
        <single-room
            class="column"
            v-for="room in rooms"
            :key="room._id"
            :userInput="userInput"
            :roomName="room.name"
            :currentBookings="currentBookings"
            :visibility="room.disabled"
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
      // console.log('dans data');
        return {
            userInput: Object,
            rooms: [],
            currentBookings: [],
            errorsList: []
        }
    },
    components: {
        'single-room': Room
    },
    created() {
        RoomService.getAllRooms()
            .then( (fetchedRooms) => {
                for (var i = 0; i < fetchedRooms.data.length; i++) {
                    this.rooms.push(fetchedRooms.data[i])
                    this.rooms[i]['disabled'] = true;
                }
            })
            eventBus.$on('formWasChanged', (userInput) => {

                function checkCapacity(room, userInput) {
                  let refusal = true;

                  if (userInput.capacity != 0) {
                    if (room.capacity >= userInput.capacity) {
                      refusal = false
                    }
                  }
                  return refusal
                }

                function checkEquipement(room, userInput) {
                  let disabled = true

                  if (userInput.equipement !== "Aucun" && room.equipements.length > 0) {
                    for (let i = 0; i < room.equipements.length; i++) {
                      if (room.equipements[i].name === userInput.equipement) {
                        disabled = false
                      }
                    }
                  }
                  if (userInput.equipement === "Aucun") {
                    disabled = false
                  }
                  return disabled
                }

                function isAlreadyBooked(room, booking, userInput) {
                  if ((room._id === booking.roomId) && (userInput.date === booking.date) && (userInput.hour == booking.hour)) {
                    return true
                  }
                  return false
                }

                this.userInput = userInput;
                for (var i = 0; i < this.rooms.length; i++) {
                    this.rooms[i]['disabled'] = false;
                }
                BookingService
                    .getBookingsByTime(this.userInput.date, this.userInput.hour)
                    .then ( (fetchedBookings) => {
                        for (var i = 0; i < fetchedBookings.data.results.length; i++) {
                            this.currentBookings.push(fetchedBookings.data.results[i])
                        }
                        for (let i = 0; i < this.rooms.length; i++) {
                          for (let j = 0; j < this.currentBookings.length; j++) {
                            if (this.userInput.capacity > 0)
                                this.rooms[i]['disabled'] = checkCapacity(this.rooms[i], this.userInput);
                            if (this.userInput.equipement !== "Aucun" && !this.rooms[i]['disabled'])
                                this.rooms[i]['disabled'] = checkEquipement(this.rooms[i], this.userInput)
                            if (!this.rooms[i]['disabled']) {
                                this.rooms[i]['disabled'] = isAlreadyBooked(this.rooms[i], this.currentBookings[j], this.userInput);
                            }
                          }
                        }
                        if (this.currentBookings.length == 0) {
                          for (let i = 0; i < this.rooms.length; i++) {
                            if (this.userInput.capacity > 0) {
                                this.rooms[i]['disabled'] = checkCapacity(this.rooms[i], this.userInput)
                              }
                            if (this.userInput.equipement !== "Aucun" && !this.rooms[i]['disabled']) {
                                this.rooms[i]['disabled'] = checkEquipement(this.rooms[i], this.userInput)
                            }
                            eventBus.$emit('visibilityHasChanged', this.rooms[i])
                          }
                        }
                    })
                    .catch ( (error) => {
                      this.errorsList.push(error)
                    })
            });
    }
}

</script>
