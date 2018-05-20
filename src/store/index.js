import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    heroes: [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ],
}

const actions = {
  addHero ({ commit }, preload){
    commit('ADDHERO', preload)
  },
  deleteHero ({ commit }, preload){
    commit('DELETEHERO',preload)
  }
}

const mutations = {
  ADDHERO ({ heroes }, { newHero }) {
    heroes.push(newHero)
  },
  DELETEHERO (state, { id }) {
    state.heroes = state.heroes.filter((item) => item.id !== id)
  }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});
