import Vue from 'vue'
import VueRouter from 'vue-router'

import heroes from '../heroes/heroes'
import dashboard from '../dashboard/dashboard'

Vue.use(VueRouter)

const routes = [
  {path:'',component: heroes},
  {path: '/heroes', component: heroes},
  {path: '/dashboard', component: dashboard}
]

export default new VueRouter({ routes })

