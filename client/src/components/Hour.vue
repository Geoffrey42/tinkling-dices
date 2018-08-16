<template>
    <b-field>
        <b-select placeholder="Hour" @input="sendHour($event)">
            <option
                  v-for="(hour, index) in hours"
                  :key="`hours-${index}`">
            {{ hour }}
            </option>
        </b-select>
    </b-field>
</template>

<script>
export default {
    data () {
        return {
            hours: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            selectedHour: 0
        }
    },
    methods: {
        sendHour(event) {
            this.selectedHour = event;
            this.$emit("hourWasChanged", event);
        }
    }
}
</script>
