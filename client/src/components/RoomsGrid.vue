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
                this.userInput = userInput;
                console.log('updated');
                for (var i = 0; i < this.rooms.length; i++) {
                    this.rooms[i]['disabled'] = false;
                }
                BookingService.getBookingsByTime(this.userInput.date, this.userInput.hour)
                    .then ( (fetchedBookings) => {
                        for (var i = 0; i < fetchedBookings.data.results.length; i++) {
                            this.currentBookings.push(fetchedBookings.data.results[i])
                        }
                        console.log('CURRENTBOOKINGS: ', this.currentBookings);
                        console.log('len rooms:', this.rooms.length);
                        console.log('rooms:', this.rooms);

                        console.log('len currentBookings: ', this.currentBookings.length);
                        console.log('currentBookings: ', this.currentBookings);


                        for (let i = 0; i < this.rooms.length; i++) {
                          console.log('1st loop level');
                          for (let j = 0; j < this.currentBookings.length; j++) {
                            console.log('2nd loop level');
                            console.log('roomID: ', this.currentBookings[j].roomId);
                            console.log('_id: ', this.rooms[i]._id);
                            if (this.rooms[i]._id === this.currentBookings[j].roomId) {
                              this.rooms[i]['disabled'] = true;
                              console.log("Don't display", this.rooms[i].name);
                            }
                            console.log('----------------------------------------');
                            console.log('roomsEND:', this.rooms);

                          }
                        }
                        console.log('roomsEND:', this.rooms);

                    })
                    .catch ( (error) => console.error(error))
            });
            console.log('roomsEND:', this.rooms);


    },
    updated() {

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

      console.log('dans update***-');
      console.log('userInput u', this.userInput);
      console.log('rooms u', this.rooms);
      console.log('currentBookings u', this.currentBookings);
      console.log('---------------------------------------');
    }
}

</script>
