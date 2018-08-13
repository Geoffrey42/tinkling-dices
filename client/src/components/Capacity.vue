<template>
    <b-field>
        <b-select placeholder="Capacity">
            <option
                v-for="(capacity, index) in capacities"
                :key="`capacities-${index}`">
                {{ capacity }}
            </option>
        </b-select>
    </b-field>
</template>

<script>
export default {
    data () {
        return {
            capacities: ['05','10','11','26']
        }
    }
}
</script>
