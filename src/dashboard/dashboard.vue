<template>
  <div class="container">
    <h3>Top Heroes</h3>
    <div class="row">
      <a class="col-md-2 text-center bg-primary"
        v-for="hero of topHeroes" 
        @click="goToDetail(hero)">
        <div>
          <span>{{hero.name}}</span>
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
        return this.$store.state.heroes.slice(0,4)
      }
    },
    methods:{
      goToDetail ({ id }) {
        this.$router.push({name: 'hero', params:{ id }})
      }
    }
  })
</script>

<style lang="scss" scoped>
h3{
  margin-top: 10px;
  margin-left: 35%;
}

.row a{
  height: 100px;
  margin-right: 5%;
  border-radius: 5px;
  font-size: 27px;
  padding-top: 30px;
  &:hover{
    color: white;
    text-decoration: none;
  }
}
</style>
