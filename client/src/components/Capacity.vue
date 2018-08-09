<template>
    <b-dropdown hoverable>
        <button class="button is-info" slot="trigger">
            <span>Capacity</span>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item
            v-for="(capacity, index) in capacities"
            :key="`capacities-${index}`">
            {{ capacity }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
    data () {
        return {
            capacities: ['5','10','11','26']
        }
    }
}
</script>
