
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
  ]
}

const getters = {
  topHeroes (state) {
    return state.heroes.slice(0, 4)
  }
}

const actions = {
  addHero ({ commit }, preload) {
    commit('ADDHERO', preload)
  },
  deleteHero ({ commit }, preload) {
    commit('DELETEHERO', preload)
  },
  updateHero ({ commit }, preload) {
    commit('UPDATEHERO', preload)
  }
}

const mutations = {
  ADDHERO ({ heroes }, newHero) {
    heroes.push(newHero)
  },
  DELETEHERO (state, { id }) {
    state.heroes = state.heroes.filter((item) => item.id !== id)
  },
  UPDATEHERO ({ heroes }, hero) {
    const targetHero = heroes.find(item => item.id === hero.id)
    targetHero.name = hero.name
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
