<template>
    <b-field>
        <b-datepicker
             placeholder="Select a date"
             icon="calendar-today"
             @input="sendDate($event)">
        </b-datepicker>
    </b-field>
</template>
<script>

export default {
    data() {
        return {
            pickedDate: new Date
        }
    },
    methods: {
        sendDate(event) {
            this.pickedDate = event;
            this.$emit('dateWasPicked', event.toISOString());
        }
    }
}
</script>
