<template>
    <form class="filter_container">
            <form-date @dateWasPicked="date = $event"></form-date>
            <form-hour @hourWasChanged="hour = $event"></form-hour>
            <form-capacity></form-capacity>
            <form-equipements></form-equipements>
    </form>
</template>

<script>
import MyDate from './Date.vue';
import Hour from './Hour.vue';
import Capacity from './Capacity.vue';
import Equipements from './Equipements.vue';

export default {
    components: {
        'form-date': MyDate,
        'form-hour': Hour,
        'form-capacity': Capacity,
        'form-equipements': Equipements
    },
    data() {
        return{
            date: "",
            hour: 0
        };
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
