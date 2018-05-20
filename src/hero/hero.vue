<template>
  <div class="container">
    <h1>{{ hero.name }} Detail</h1>
  </div>
</template>

<script>
export default{
  name:'hero',
  data(){
    return {
      hero: {name:''},
    }
  },
  created () {
    let id = this.$route.params.id * 1
    this.hero = this.$store.state.heroes.find(item => item.id === id)
  }
}
</script>

<style lang="scss" scoped>
</style>
