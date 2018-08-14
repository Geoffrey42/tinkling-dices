<template>
    <div id="app">
        <app-header></app-header>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <p>Make a wish ...</p>
                    <app-form @formWasChanged="getUserInput($event)"></app-form>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
            <p class="misplaced">... Book an amazing room</p>
            <app-rooms-grid :userInput="userInput"></app-rooms-grid>
                </div>
            </div>
        </section>
        <div class="container">
            <p>Thanks !</p>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import RoomsGrid from './components/RoomsGrid.vue';
import Footer from './components/Footer.vue';
/* eslint-disable */

export default {
    name: 'app',
    data() {
        return {
            userInput: {}
        };
    },
    components: {
        'app-header': Header,
        'app-form': Form,
        'app-rooms-grid': RoomsGrid,
        'app-footer': Footer
    },
    methods: {
        getUserInput(event) {
            console.log('event: ' + event)
            this.userInput.date = event.date
            this.userInput.hour = event.hour
            this.userInput.capacity = event.capacity
            this.userInput.equipement = event.equipement
            return this.userInput
        }
    }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.misplaced {
    margin-bottom: 100px;
}
</style>
