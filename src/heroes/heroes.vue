<template>
    <div>
        <h3>my hero</h3>

        <div>
            <label for="">Hero name:
                <input type="text" ref="nameInput" v-model.trim="heroName">
            </label>
            <button @click="addHero">add</button>
        </div>

        <ul>
            <li v-for="hero of heroes" :key="hero.id">
                <span>{{hero.id}}</span>{{hero.name}}
                <button @click="deleteHero(hero)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../vuex/store'

    export default{
        name:'heroes',
        store,
        data(){
            return {
                heroName:'',
                heroes : store.state.heroes,
            }
        },
        methods:{
            //此处后续需要使用 vuex 重写，此时仅仅象征性的添加一下^_^
            addHero:function(){
                let newId = this.heroes[this.heroes.length-1]['id'];
                let newHero = { id: ++newId, name: this.heroName };
                this.heroes.push(newHero);
                this.heroName = '';
                this.$refs.nameInput.focus();
            },
            deleteHero:function(hero){
                this.heroes = this.heroes.filter((h)=>hero != h)
            }
        }
    }
</script>

<style>
  
</style>
