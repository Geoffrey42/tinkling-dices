<template>
    <section>
        <button
          class="button is-medium is-info"
          :disabled="isDisabled"
          @click="confirm">
            {{ roomName }}
        </button>
    </section>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

const moment = require('moment');

export default {
    props: ['roomName', 'roomId', 'userInput', 'visibility','currentBookings', 'roomColor'],
    data(){
      return {
        visible: true,
        moment: moment
      }
    },
    computed: {
      isDisabled () {
          return this.visibility
      },
      rightDate() {
        return this.moment(this.userInput.date).format('LL')
      }
    },
    methods: {
        confirm() {
            this.$dialog.confirm({
                message: "You're about to book " + this.roomName + " for " + this.rightDate + ". Are you sure ?",
                onConfirm: () => {
                    BookingService.postBooking({
                        roomId: this.roomId,
                        date: this.userInput.date,
                        hour: this.userInput.hour
                    })
                    .then((response) => {
                        console.log("response to post")
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log("error to post")
                        console.log(error)
                    })
                    this.visibility = true
                    this.$toast.open('Booking confirmed')
                }
            })
        },
    },
    beforeCreate() {
      console.log('\tSingleRoom : beforeCreate() hook activated');
    },
    created() {
      console.log('\tSingleRoom (', this.roomName, '): created() hook activated');
      eventBus.$on('visibilityHasChanged', (singleRoom) => {
        if (singleRoom._id == this.roomId) {
          this.visibility = singleRoom.disabled;
        }
      })
    },
    // beforeMount() {
    //   console.log('\tSingleRoom (', this.roomName, '): beforeMount() hook activated');
    // },
    // mounted() {
    //   console.log('\tSingleRoom (', this.roomName, '): mounted() hook activated');
    // },
    // beforeUpdate() {
    //   console.log('\tSingleRoom (', this.roomName, '): beforeUpdate() hook activated');
    // },
    // updated() {
    //   console.log('\tSingleRoom (', this.roomName, '): updated() hook activated');
    // },
    // beforeDestroy() {
    //   console.log('\tSingleRoom (', this.roomName, '): beforeDestroy() hook activated');
    // },
    // destroyed() {
    //   console.log('\tSingleRoom (', this.roomName, '): destroyed() hook activated');
    // }
}

</script>
