export default function createMessagePlugin () {
  return store => {
    const prevState = JSON.parse(JSON.stringify(store.state))
    store.subscribe((mutations, state) => {
      const {type, payload} = mutations
      switch (type) {
        case 'DELETEHERO':
          deleteHeroMessage(store, payload)
          break
        case 'ADDHERO':
          addHeroMessage(store, payload)
          break
        case 'UPDATEHERO':
          updateHeroMessage(store, payload, prevState)
          break
        default:
          break
      }
    })
  }
}

function deleteHeroMessage ({ commit }, { id, name }) {
  const msg = {
    detail: `${id}号英雄 ${name} 离开`,
    statu: 'warning'
  }
  commit('ADDMESSAGE', msg)
}

function addHeroMessage ({ commit }, { id, name }) {
  const msg = {
    detail: `英雄加入，${id}号 ${name}!!`,
    statu: 'success'
  }
  commit('ADDMESSAGE', msg)
}

function updateHeroMessage ({ commit }, { id, name }, prevstate) {
  const prevHero = prevstate.hero.heroes.find(item => item.id === id)
  const msg = {
    detail: `${id}号英雄 ${prevHero && prevHero.name} 变身为 ${name}!!`,
    statu: 'info'
  }
  commit('ADDMESSAGE', msg)
}
