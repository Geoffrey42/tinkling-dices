
<template>
    <b-field>
        <b-select placeholder="Equipements" @input="sendEquipement($event)" v-model="defaultEquipement">
            <option
                v-for="(equipement, index) in equipements"
                :key="`equipements-${index}`">
            {{ equipement }}
            </option>
        </b-select>
    </b-field>
</template>

<script>
export default {
    data () {
        return {
            defaultEquipement: "Aucun",
            equipements: ["TV","Retro Projecteur","Aucun"]
        }
    },
    methods: {
        sendEquipement(event) {
            this.$emit("equipementWasChanged", event);
        }
    }
}
</script>
