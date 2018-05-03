<template>
  <div>
    <h3>top heroes</h3>
    <div>
      <a v-for="hero of topHeroes">
        <div>
          <h4>{{hero.name}}</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

  export default({
    name:'dashboard',
    data(){
      return {
      }
    },
    computed:{
      topHeroes(){
        return this.$store.state.heroes.splice(0,4)
      }
    }
  })
</script>

<style></style>
