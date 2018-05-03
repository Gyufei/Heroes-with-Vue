<template>
    <div>
        <h1>{{title}}</h1>
        <nav>
          <router-link to="/heroes"></router-link>
          <router-link to="/dashboard"></router-link>
        </nav>
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

<style>
</style>
