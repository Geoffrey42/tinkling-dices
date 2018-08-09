<template>
    <b-dropdown hoverable>
        <button class="button is-info" slot="trigger">
            <span>Equipements</span>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item
            v-for="(equipement, index) in equipements"
            :key="`equipements-${index}`">
            {{ equipement }}
        </b-dropdown-item>
    </b-dropdown>
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
