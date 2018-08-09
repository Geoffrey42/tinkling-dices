<template>
    <div class="columns is-gapless is-centered">
        <div class="column">
            <filter-date></filter-date>
        </div>
        <div class="column">
            <filter-hour></filter-hour>
        </div>
        <div class="column">
            <filter-capacity></filter-capacity>
        </div>
        <div class="column">
            <filter-equipements></filter-equipements>
        </div>
    </div>
</template>

<script>
import Date from './Date.vue';
import Hour from './Hour.vue';
import Capacity from './Capacity.vue';
import Equipements from './Equipements.vue';

export default {
    components: {
        'filter-date': Date,
        'filter-hour': Hour,
        'filter-capacity': Capacity,
        'filter-equipements': Equipements
    }
}

</script>
