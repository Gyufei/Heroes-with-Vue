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

      <ul 
        class="list-group" 
        v-if="messages.length">
        <li 
          class="list-group-item"
          :class="getClass(msg.statu)"
          v-for="msg in messages">{{ msg.detail }}</li>
      </ul>

      <div v-else class="alert alert-success">
        <span>暂无消息</span>
      </div>
    </div>
    <div v-else class="msg-btn-con">
      <button 
        class="btn btn-info msg-btn"
        @click="handleToggle">
        <i class="glyphicon glyphicon-comment" />
      </button>
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
    background-color: #1fffff;

    .close-icon {
      cursor: pointer;
    }
  }
}
.msg-btn-con {
  position: fixed;
  top: 20%;
  right: 5%;

  .msg-btn {
    height: 40px;
    width: 40px;

    border-radius: 50%;
    margin: 15px 30px;
    box-shadow: 0 0 0 4px rgba(255,255,255,1);
    cursor: pointer;
  }
}
</style>
