<template>
    <div class="container">
      <div class="page-header">
        <h1>{{title}}</h1>
      </div>
      <ul class="nav nav-pills">
        <li>
          <router-link to="/heroes">Heroes</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
import heroes from  './heroes/heroes'
import dashboard from './dashboard/dashboard'

export default {
  name: 'app',
  data () {
    return {
        title:"Tour of Heroes"
    }
  },
  components:{ heroes,dashboard }
}
</script>

<style lang="scss" scoped>
</style>
