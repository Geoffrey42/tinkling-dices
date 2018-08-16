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
      console.log('RoomsGrid : beforeCreate() hook activated');
    },
    created() {
      console.log('RoomsGrid : created() hook activated');
      /*
        eventBus.$on('formWasChanged', (userInput) => {
            this.userInput = userInput;
            BookingService.getBookingsByTime(this.userInput.date, this.userInput.hour)
                .then ( (fetchedBookings) => {
                  console.log('fetchedBookings created', fetchedBookings);
                    for (var i = 0; i < fetchedBookings.data.length; i++) {
                        this.currentBookings.push(fetchedBookings.data[i])
                    }
                })
        });*/
        RoomService.getAllRooms()
            .then( (fetchedRooms) => {
              console.log('fetchedRoomscreated', fetchedRooms);
                for (var i = 0; i < fetchedRooms.data.length; i++) {
                    this.rooms.push(fetchedRooms.data[i])
                    this.rooms[i]['disabled'] = false;
                }
            })
            eventBus.$on('formWasChanged', (userInput) => {

                function isDisabled(room, booking, userInput) {
                  console.log('--------------------------------------------------');
                  console.log('name : ', room.name);
                  console.log('               ***');
                  console.log('room._id: ', room._id);
                  console.log('booking.roomId: ', booking.roomId);
                  console.log('id condition: ', room._id === booking.roomId);

                  console.log('               ***');
                  console.log('booking.date: ', booking.date);
                  console.log('userInput.date: ', userInput.date);
                  console.log('date condition',userInput.date === booking.date);

                  console.log('               ***');
                  console.log('booking.hour: ', booking.hour, typeof booking.hour);
                  console.log('userInput.hour: ', userInput.hour, typeof userInput.hour);
                  console.log('hour condition: ', userInput.hour == booking.hour);
                  console.log('--------------------------------------------------');
                  if ((room._id === booking.roomId) && (userInput.date === booking.date) && (userInput.hour == booking.hour)) {
                    console.log(room.name + ' will NOT be displayed !');
                    return true
                  }
                  console.log(room.name + ' will be displayed just fine');
                  return false
                }
                this.userInput = userInput;
                console.log('userInput is received (created):', userInput);
                for (var i = 0; i < this.rooms.length; i++) {
                    this.rooms[i]['disabled'] = false;
                }
                BookingService.getBookingsByTime(this.userInput.date, this.userInput.hour)
                    .then ( (fetchedBookings) => {
                        for (var i = 0; i < fetchedBookings.data.results.length; i++) {
                            this.currentBookings.push(fetchedBookings.data.results[i])
                        }
                        // console.log('CURRENTBOOKINGS: ', this.currentBookings);
                        // console.log('len rooms:', this.rooms.length);
                        // console.log('rooms:', this.rooms);
                        //
                        // console.log('len currentBookings: ', this.currentBookings.length);
                        // console.log('currentBookings: ', this.currentBookings);


                        for (let i = 0; i < this.rooms.length; i++) {
                          // console.log('1st loop level');
                          for (let j = 0; j < this.currentBookings.length; j++) {
                            // console.log('2nd loop level');
                            // console.log('roomID: ', this.currentBookings[j].roomId);
                            // console.log('_id: ', this.rooms[i]._id);
                            // if (this.rooms[i]._id === this.currentBookings[j].roomId) {
                            //   this.rooms[i]['disabled'] = true;
                            //   //console.log("Don't display", this.rooms[i].name);
                            // }
                            this.rooms[i]['disabled'] = isDisabled(this.rooms[i], this.currentBookings[j], this.userInput)
                            //console.log('----------------------------------------');
                            // console.log('roomsEND:', this.rooms);

                          }
                        }
                        // console.log('roomsEND:', this.rooms);

                    })
                    .catch ( (error) => console.error(error))
            });
            // console.log('roomsEND:', this.rooms);


    },
    beforeMount() {
      console.log('RoomsGrid : beforeMount() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        console.log('userInput is received (beforeMount):', userInput);
      })
    },
    mounted() {
      console.log('RoomsGrid : mounted() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        console.log('userInput is received (mounted):', userInput);
      })
    },
    beforeUpdate() {
      console.log('RoomsGrid : beforeUpdate() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        console.log('userInput is received (beforeUpdate):', userInput);
      })
    },
    updated() {
      console.log('RoomsGrid : updated() hook activated');
      eventBus.$on('formWasChanged', (userInput) => {
        console.log('userInput is received (updated):', userInput);
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
      console.log('RoomsGrid : beforeDestroy() hook activated');
    },
    destroyed() {
      console.log('RoomsGrid : destroyed() hook activated');
    }
}

</script>
