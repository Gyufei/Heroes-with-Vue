<template>
  <div class="msg">
    <div class="panel" v-if="isShow">
      <div class="panel-heading">
        <div class="panel-title">
          MESSAGE
          <span 
            @click="handleToggle"
            class="glyphicon glyphicon-remove close-icon pull-right"></span>
        </div>
      </div>
      <ul class="list-group">
        <li 
          class="list-group-item"
          :class="getClass(msg.statu)"
          v-for="msg in messages">{{ msg.detail }}</li>
      </ul>
    </div>
    <div v-else class="msg-btn-con">
      <button 
        class="btn btn-info msg-btn"
        @click="handleToggle"
        >
        msg</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'appMessage',

  computed: {
    ...mapState({
      isShow: state => state.message.isShowMessage,
      messages: state => state.message.messages
    })
  },
  methods: {
    ...mapActions([
        'toggleMessage'
    ]),
    getClass (text) {
      return `list-group-item-${text}`
    },
    handleToggle () {
      this.toggleMessage()
    }
  }
}
</script>

<style lang="scss" scoped>
.msg {
  position: fixed;
  top: 20%;
  right: 5px;

  height: 70%;
  width: 250px;

  .panel-heading {
    border: 1px solid #ff4273;
    background-color: #1fffff;

    .close-icon {
      cursor: pointer;
    }
  }
}
.msg-btn-con {
  position: fixed;
  top: 20%;
  right: -5px;
  .msg-btn {
    height: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
</style>
