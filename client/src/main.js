import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

export const eventBus = new Vue();

axios.defaults.baseURL = 'http://localhost:8081'

Vue.config.productionTip = false
Vue.use(Buefy)


new Vue({
  render: h => h(App)
}).$mount('#app')

