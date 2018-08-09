<template>
  <div id="app">
      <app-header></app-header>
      <app-filter></app-filter>
      <app-rooms-grid></app-rooms-grid>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Filter from './components/Filter.vue';
import RoomsGrid from './components/RoomsGrid.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
      'app-header': Header,
      'app-filter': Filter,
      'app-rooms-grid': RoomsGrid,
      'app-footer': Footer
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
</style>
