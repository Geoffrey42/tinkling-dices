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
    methods: {
        sendDate(event) {
            this.$emit('dateWasPicked', event);
        }
    }
}
</script>
