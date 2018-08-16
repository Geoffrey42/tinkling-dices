<template>
    <form class="filter_container">
            <form-date @dateWasPicked="date = $event"></form-date>
            <form-hour @hourWasChanged="hour = $event"></form-hour>
            <form-capacity @capacityWasChanged="capacity = $event"></form-capacity>
            <form-equipements
                @equipementWasChanged="equipement = $event">
            </form-equipements>
            <button class="button" @click.prevent="sendUserInput">OK</button>
    </form>
</template>

<script>
import MyDate from './Date.vue';
import Hour from './Hour.vue';
import Capacity from './Capacity.vue';
import Equipements from './Equipements.vue';
import { eventBus } from '../main';
const moment = require('moment');

export default {
    components: {
        'form-date': MyDate,
        'form-hour': Hour,
        'form-capacity': Capacity,
        'form-equipements': Equipements
    },
    data() {
        return{
            date: new Date(),
            hour: 7,
            capacity: 0,
            equipement: "Aucun",
            moment: moment
        };
    },
    methods: {
        sendUserInput() {
            var userInput = {
                date: this.moment(this.date).add(1, 'day').toISOString(),
                hour: this.hour,
                capacity: this.capacity,
                equipement: this.equipement
            };
            eventBus.$emit("formWasChanged", userInput)
        }
    }
}

</script>

<style scoped>

.filter_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>
