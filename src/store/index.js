import Vue from 'vue'
import Vuex from 'vuex'
import hero from './module/hero'
import message from './module/message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hero,
    message
  }
})
