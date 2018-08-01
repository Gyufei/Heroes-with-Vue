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
      <app-message></app-message>
    </div>
</template>

<script>
import appMessage from './message/message'

export default {
  name: 'app',
  data () {
    return {
        title:"Tour of Heroes"
    }
  },
  components: {
    appMessage,
  }
}
</script>

<style lang="scss" scoped>
a{
  color:aaa
}
</style>
