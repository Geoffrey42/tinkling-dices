<template>
    <section>
        <button class="button is-medium is-info" @click="confirm">
            {{ roomName }}
        </button>
    </section>
</template>

<script>
import BookingService from '../services/BookingService';


export default {
    props: ['roomName', 'roomId', 'userInput'],
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
    }
}

</script>
