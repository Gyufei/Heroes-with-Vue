<template>
  <div class="container">
    <h1>{{ oldHero.name }} Detail</h1>
    <div>
      <div class="form-group">
        <label>id:</label>
        <span>{{ hero.id }}</span>
      </div>
      <div class="form-group">
        <label>name:</label>
        <input type="text" v-model="hero.name">
      </div>
    </div>
    <div>
      <button class="btn btn-default" @click="handleBack">back</button>
      <button
        class="btn btn-success" 
        :disabled="oldHero.name === hero.name"
        @click="handleSave">
        save
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
  name:'hero',
  data(){
    return {
      hero: {},
      oldHero: {}
    }
  },
  watch:{
    //用于响应直接修改url时的页面更新
    ['$route'] (val) {
      this.getHero()
    }
  },
  created () {
    this.getHero()
  },
  methods: {
    ...mapActions([
      'updateHero',
    ]),
    getHero () {
      const id = this.$route.params.id * 1
      const commonHero = this.$store.state.hero.heroes.find(item => item.id === id)
      this.hero = Object.assign({}, commonHero)
      this.oldHero = Object.assign({}, commonHero)
    },
    handleBack () {
      this.$router.go(-1)
    },
    handleSave () {
      this.updateHero(this.hero).then(res => {
        this.handleBack()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
