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
/* eslint-disable */

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
            hour: 0,
            capacity: "",
            equipement: ""
        };
    },
    methods: {
        sendUserInput() {
            var userInput = {
                date: this.date,
                hour: this.hour,
                capacity: this.capacity,
                equipement: this.equipement
            };
            return this.$emit("formWasChanged", userInput)
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
