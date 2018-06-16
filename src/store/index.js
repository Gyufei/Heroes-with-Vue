import Vue from 'vue'
import Vuex from 'vuex'
import hero from './module/hero'
import message from './module/message'
import createMessagePlugin from './plugin/messagePlugin'

Vue.use(Vuex)

const myMessagePlugin = createMessagePlugin()

export default new Vuex.Store({
  modules: {
    hero,
    message
  },
  plugins: [myMessagePlugin]
})
