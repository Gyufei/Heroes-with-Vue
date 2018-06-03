<template>
    <div>
        <h3 class="h3">my hero</h3>

        <div class="form">
          <div class="form-group">
            <label for="">Hero name:
              <input type="text" ref="nameInput" v-model.trim="heroName">
            </label>
            <button class="btn btn-primary btn-sm" @click="addNewHero">add</button>
          </div>
        </div>

        <ul class="list-group hero-list">
            <li class="list-group-item" v-for="hero of heroes" :key="hero.id">
              <a @click="goToDetail(hero.id)">
                <span class="label label-warning">{{hero.id}} </span>
                <span class="hero-name"> {{hero.name}} </span>
              </a>
                <button class="close" @click="deleteHero(hero)"><span>&times;</span></button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default{
    name:'heroes',
    inject: ['addMessage'],
    data(){
        return {
            heroName:'',
        }
    },
    computed:{
      ...mapState({
        heroes: state => state.hero.heroes
      }
      )
    },
    methods:{
        ...mapActions([
            'addHero',
        ]),
        addNewHero (){
            if (this.heroName.length === 0) return 
            let newId = this.heroes[this.heroes.length-1]['id']
            let newHero = { id: ++newId, name: this.heroName }
            this.addHero({ newHero }).then(res => {
              const msg =  {
                detail: `英雄加入，${newId}号 ${newHero.name}!!`,
                statu: 'success'
              }
              this.addMessage(msg)
              this.heroName = ''
              this.$refs.nameInput.focus()
            })
        },
        deleteHero (hero){
          this.$store.dispatch('deleteHero',hero).then(res => {
            const msg =  {
              detail: `${hero.id}号英雄 ${hero.name} 离开`,
              statu: 'warning'
            }
            this.addMessage(msg)
          })
        },
        goToDetail (id) {
          this.$router.push({name: 'hero', params:{ id }})
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
