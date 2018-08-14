<template>
    <button class="button" @click="sendBooking">
        {{ roomName }}
    </button>
</template>

<script>
import BookingService from '../services/BookingService'


export default {
    props: ['roomName', 'roomId', 'userInput'],
    methods: {
        sendBooking() {
            console.log(this.userInput.date);
            var rawData = {
                roomId: this.roomId,
                date: this.userInput.date,
                hour: this.userInput.hour
            };
            console.log("in Vue.js (rawData):");
            console.log(rawData);
            var jsonBooking = JSON.stringify(rawData);
            console.log("in Vue.js (json):");
            console.log(jsonBooking);
            BookingService.postBooking(jsonBooking)
        }
    }
}

</script>
