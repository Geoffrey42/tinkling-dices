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
        moment: moment,
        errorsList: [],
        responseList: []
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
                        this.responseList.push(response)
                    })
                    .catch((error) => {
                        this.errorsList.push(error)
                    })
                    this.visibility = true
                    this.$toast.open('Booking confirmed')
                }
            })
        },
    },
    created() {
      eventBus.$on('visibilityHasChanged', (singleRoom) => {
        if (singleRoom._id == this.roomId) {
          this.visibility = singleRoom.disabled;
        }
      })
    },
}

</script>
