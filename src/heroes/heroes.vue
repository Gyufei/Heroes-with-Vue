<template>
    <div>
        <h3 class="h3">my hero</h3>

        <div class="form">
          <div class="form-group">
            <label for="">Hero name:
              <input type="text" ref="nameInput" v-model.trim="heroName">
            </label>
            <button class="btn btn-primary btn-sm" @click="addHero">add</button>
          </div>
        </div>

        <ul class="list-group hero-list">
            <li class="list-group-item" v-for="hero of heroes" :key="hero.id">
              <a>
                <span class="label label-warning">{{hero.id}} </span>
                <span class="hero-name"> {{hero.name}} </span>
              </a>
                <button class="close" @click="deleteHero(hero)"><span>&times;</span></button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        name:'heroes',
        data(){
            return {
                heroName:'',
            }
        },
        computed:{
          heroes(){
            return this.$store.state.heroes
          }
        },
        methods:{
            addHero:function(){
                if (this.heroName.length === 0) return 
                let newId = this.heroes[this.heroes.length-1]['id']
                let newHero = { id: ++newId, name: this.heroName }
                this.$store.dispatch('addHero',{ newHero })
                this.heroName = ''
                this.$refs.nameInput.focus()
            },
            deleteHero:function(hero){
              this.$store.dispatch('deleteHero',hero)
            }
        }
    }
</script>

<style lang="scss" scoped>
a{
  &:hover{
    cursor: pointer;
    text-decoration: none;
  }
}
.h3{
  margin-top:10px;
}
.hero-list{
  width:20%;
}
.hero-name{
  margin-left:10px;
}
</style>
