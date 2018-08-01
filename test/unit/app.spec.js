import Vue from 'vue'
import app from '../../src/App'

describe('App.vue', () => {
  it('display title', () => {
    let vm = new Vue(app).$mount()
    expect(vm.title).toEqual('Tour of Heroes')
  })
})