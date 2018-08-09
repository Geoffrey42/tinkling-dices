<template>
    <b-dropdown hoverable>
        <button class="button is-info" slot="trigger">
            <span>Hour</span>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item v-for="(hour, index) in hours" :key="`hours-${index}`">{{ hour }}</b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
    data () {
        return {
            hours: ['7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h']
        }
    }
}
</script>
