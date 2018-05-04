<template>
    <div>
        <h3>my hero</h3>

        <div>
            <label for="">Hero name:
                <input type="text" ref="nameInput" v-model.trim="heroName">
            </label>
            <button @click="addHero">add</button>
        </div>

        <ul class="heroes">
            <li v-for="hero of heroes" :key="hero.id">
              <a>
                <span class="badge">{{hero.id}}</span>{{hero.name}}
              </a>
                <button class="delete" @click="deleteHero(hero)">X</button>
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
            //此处后续需要使用 vuex 重写，此时仅仅象征性的添加一下^_^
            addHero:function(){
                if (this.heroName.length === 0) return 
                let newId = this.heroes[this.heroes.length-1]['id']
                let newHero = { id: ++newId, name: this.heroName }
                this.heroes.push(newHero)
                this.heroName = ''
                this.$refs.nameInput.focus()
            },
            deleteHero:function(hero){
                this.heroes = this.heroes.filter((h)=>hero != h)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
      
    li {
      position: relative;
      cursor: pointer;
      background-color: #eee;
      margin: .5em;
      padding: .3em 0;
      height: 2.2em;
      border-radius: 4px;

        &:hover {
          color: #607D8B;
          background-color: #ddd;
          left: .1em;
        }
      }
      
      a {
        color: #888;
        text-decoration: none;
        position: relative;
        display: block;
        width: 250px;

        &:hover{
          color:#607d88;
        }
      }

      .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        position: relative;
        left: -1px;
        top: -4px;
        height: 2.6em;
        min-width: 16px;
        text-align: right;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    }
    
    button {
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      cursor: hand;
      font-family: Arial;

      &:hover {
        background-color: #cfd8dc;
      }

      &.delete {
        position: relative;
        left: 194px;
        top: -37px;
        background-color: gray !important;
        color: white;
      }
    }
</style>
