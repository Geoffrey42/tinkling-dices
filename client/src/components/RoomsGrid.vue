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
            currentBookings: []
        }
    },
    components: {
        'single-room': Room
    },
    beforeCreate() {
      // console.log('RoomsGrid : beforeCreate() hook activated');
    },
    created() {
        RoomService.getAllRooms()
            .then( (fetchedRooms) => {
                for (var i = 0; i < fetchedRooms.data.length; i++) {
                    this.rooms.push(fetchedRooms.data[i])
                    this.rooms[i]['disabled'] = false;
                }
            })
            eventBus.$on('formWasChanged', (userInput) => {
                console.log('rooms: ', this.rooms);
                console.log('userInput: ', userInput);

                // function isNotSuitable(room, userInput) {
                //   // console.log('**************************************');
                //   // console.log(userInput);
                //   console.log('name : ', room.name);
                //
                //   console.log('room.capacity: ', room.capacity);
                //   console.log('userInput.capacity: ', userInput.capacity);
                //   console.log('                 ***');
                //   for (let i = 0; i < room.equipements.length; i++) {
                //     if (typeof room.equipements[i].name !== "undefined") {
                //       console.log('room.equipements.name: ', i, ': ', room.equipements[i].name);
                //     }
                //   }
                //   console.log('userInput.equipement: ', userInput.equipement);
                //   let disabled = true;
                //   if (userInput.capacity) {
                //     if (room.capacity >= userInput.capacity) {
                //       disabled = false
                //     }
                //   }
                //   if (userInput.equipement !== "Aucun" && room.name != "Salle Okjsdkso") {
                //     console.log(room.name, ' may have suitable equipement');
                //     for (let i = 0; i < room.equipements.length; i++) {
                //       if (room.equipements[i].name === userInput.equipement) {
                //         console.log(room.name, ' SURE have the correct equipement !!!!! ******');
                //         disabled = false
                //       }
                //     }
                //     // if (!disabled) {
                //     //   console.log(room.name, ' DO NOT have the correct equipement !!!!! TOO BAD !!!');
                //     //   disabled = true
                //     // }
                //   }
                //   console.log('**************************************');
                //   return disabled
                // }

                function isDisabled(room, booking, userInput) {
                  if ((room._id === booking.roomId) && (userInput.date === booking.date) && (userInput.hour == booking.hour)) {
                    console.log(room.name + ' will NOT be displayed !');
                    return true
                  }
                  console.log(room.name + ' will be displayed just fine');
                  // return isNotSuitable(room, userInput)
                  return false

                }

                this.userInput = userInput;
                for (var i = 0; i < this.rooms.length; i++) {
                    this.rooms[i]['disabled'] = false;
                }
                BookingService
                    .getBookingsByTime(this.userInput.date, this.userInput.hour)
                    .then ( (fetchedBookings) => {
                        console.log('time to do async stuff');
                        for (var i = 0; i < fetchedBookings.data.results.length; i++) {
                            this.currentBookings.push(fetchedBookings.data.results[i])
                        }
                        for (let i = 0; i < this.rooms.length; i++) {
                          for (let j = 0; j < this.currentBookings.length; j++) {
                            if (!this.rooms[i]['disabled']) {
                                this.rooms[i]['disabled'] = isDisabled(this.rooms[i], this.currentBookings[j], this.userInput);
                                console.log('finally, ', this.rooms[i].name, ' has his disabled attribute at: ', this.rooms[i]['disabled']);
                            }
                          }
                        }
                        // if (this.currentBookings.length == 0) {
                        //   for (let i = 0; i < this.rooms.length; i++) {
                        //     this.rooms[i]['disabled'] = isNotSuitable(this.rooms[i], this.userInput)
                        //     console.log('finally, ', this.rooms[i].name, ' has his disabled attribute at: ', this.rooms[i]['disabled']);
                        //
                        //   }
                        // }
                    })
                    .catch ( (error) => console.error(error))
                  console.log('also');
            });
            console.log('here');
    },
    beforeMount() {
      // console.log('RoomsGrid : beforeMount() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        // console.log('userInput is received (beforeMount):', userInput);
      })
    },
    mounted() {
      // console.log('RoomsGrid : mounted() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        // console.log('userInput is received (mounted):', userInput);
      })
    },
    beforeUpdate() {
      // console.log('RoomsGrid : beforeUpdate() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        // console.log('userInput is received (beforeUpdate):', userInput);
      })
    },
    updated() {
      // console.log('RoomsGrid : updated() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        // console.log('userInput is received (updated):', userInput);
      })

      // let newRooms = null
      //  newRooms = this.rooms.map((room) => {
      //    console.log('CURRENTBOOKINGS',this.currentBookings);
      //    const find = this.currentBookings.find( (booking) => booking.roomId === room._id)
      //    console.log('find results', find);
      //   if (this.currentBookings.find( (booking) => {
      //     console.log('DANS IF');
      //       return booking.roomId === room._id
      //     })) {
      //       room.disabled = true
      //     }
      //   return room
      // })
      //
      // console.log('dans update***-');
      // console.log('userInput u', this.userInput);
      // console.log('rooms u', this.rooms);
      // console.log('currentBookings u', this.currentBookings);
      // console.log('---------------------------------------');
    },
    beforeDestroy() {
      // console.log('RoomsGrid : beforeDestroy() hook activated');
    },
    destroyed() {
      // console.log('RoomsGrid : destroyed() hook activated');
    }
}

</script>
