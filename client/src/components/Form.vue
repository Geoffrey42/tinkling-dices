<template>
    <div>
        <form>
            <form-date></form-date>
            <form-hour></form-hour>
            <form-capacity></form-capacity>
            <form-equipements></form-equipements>
        </form>
    </div>
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
    }
}

</script>
