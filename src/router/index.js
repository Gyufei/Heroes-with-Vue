import Vue from 'vue'
import VueRouter from 'vue-router'

import heroes from '../heroes/heroes'
import dashboard from '../dashboard/dashboard'
import hero from '../hero/hero'

Vue.use(VueRouter)

const routes = [
  {path:'', component: heroes},
  {path: '/heroes', name: 'heroes', component: heroes},
  {path: '/dashboard',name: 'dashboard', component: dashboard},
  {path: '/hero/:id(\\d+)', name: 'hero', component: hero}
]

export default new VueRouter({ routes })

