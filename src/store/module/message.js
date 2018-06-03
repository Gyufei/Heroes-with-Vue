const state = {
  isShowMessage: true,
  messages: []
}

const getters = {
}

const actions = {
  addMessage ({ commit }, preload) {
    commit('ADDMESSAGE', preload)
  },
  toggleMessage ({ commit }) {
    commit('TOGGLEMESSAGE')
  }
}

const mutations = {
  ADDMESSAGE (state, preload) {
    state.messages.push(preload)
  },
  TOGGLEMESSAGE (state) {
    state.isShowMessage = !state.isShowMessage
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
