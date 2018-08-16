<template>
    <b-field>
        <b-select placeholder="Capacity" @input="sendCapacity($event)">
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
            capacities: [5, 10, 11, 26]
        }
    },
    methods: {
        sendCapacity(event) {
            this.$emit("capacityWasChanged", Number(event));
        }
    }
}
</script>
