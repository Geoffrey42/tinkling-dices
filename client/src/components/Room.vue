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
            var rawData = {
                roomId: this.roomId,
                date: this.userInput.date,
                hour: this.userInput.hour
            };
            var jsonBooking = JSON.stringify(rawData);
            BookingService.postBooking(jsonBooking)
        }
    }
}

</script>
