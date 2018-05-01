<template>
    <div>
        <h1>{{title}}</h1>
        <heroes></heroes>
    </div>
</template>

<script>
import heroes from  './heroes/heroes'

export default {
  name: 'app',
  data () {
    return {
        title:"Tour of Heroes"
    }
  },
    components:{ heroes, }
}
</script>

<style>
</style>
