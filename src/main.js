import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/index.js'

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
