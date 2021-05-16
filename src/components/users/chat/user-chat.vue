<template>
  <div class="user-chat">
    <message
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
    <div class="input__field">
      <input
        type="text"
        class="user-chat__textfield"
        v-model="textValue"
        @keypress.enter="sendMessage"
      >
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import message from './message'
import { mapActions } from 'vuex'

export default {
  name: 'user-chat',
  components: {
    message
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      textValue: ''
    }
  },
  methods: {
    ...mapActions([
      'SET_MESSAGE_TO_CHAT'
    ]),
    sendMessage () {
      const user = { ...this.user }
      const chat = {
        id: this.messages.length + 1,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric'
        }),
        text: this.textValue,
        type: 'own'
      }
      console.log(chat)
      user.chat.push(chat)
      this.SET_MESSAGE_TO_CHAT({ userId: user.id, chat: user })
        .then(() => {
          this.textValue = ''
        })
    }
  }
}
</script>
