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

export default {
    props: ['roomName', 'roomId', 'userInput', 'visibility','currentBookings'],
    data(){
      return {
        visible:false
      }
    },
    computed: {
      isDisabled () {
        // console.log('did something happen ???');
        // console.log('room: ', this.roomName);
        // console.log('visibility: ', this.visibility);

        return this.visibility
      }
    },
    methods: {
        confirm() {
            this.$dialog.confirm({
                message: "You're about to book " + this.roomName + " for " + this.userInput.date + ".\nAre you sure ?",
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
    },
    beforeMount() {
      console.log('\tSingleRoom (', this.roomName, '): beforeMount() hook activated');
    },
    mounted() {
      console.log('\tSingleRoom (', this.roomName, '): mounted() hook activated');
    },
    beforeUpdate() {
      console.log('\tSingleRoom (', this.roomName, '): beforeUpdate() hook activated');
    },
    updated() {
      console.log('\tSingleRoom (', this.roomName, '): updated() hook activated');
    },
    beforeDestroy() {
      console.log('\tSingleRoom (', this.roomName, '): beforeDestroy() hook activated');
    },
    destroyed() {
      console.log('\tSingleRoom (', this.roomName, '): destroyed() hook activated');
    }
}

</script>
