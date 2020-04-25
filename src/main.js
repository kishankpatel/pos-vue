import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './axios.config';

// Bootstrap 4.4.1
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const vueApp = new Vue({
  router: router,
  components: {
    App
  },
  render: h => h(App)
})

vueApp.$mount('#app')

export default { vueApp }
