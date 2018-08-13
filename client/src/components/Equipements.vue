
<template>
    <b-field>
        <b-select placeholder="Equipements">
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
            equipements: ["TV","Retro Projecteur","Aucun"]
        }
    }
}
</script>
