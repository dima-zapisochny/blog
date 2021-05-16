<template>
  <div class="user" @click="toUserChat">
    <div class="user__avatar"></div>
    <div class="user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{ getLastMessage }}</p>
    </div>
    <div class="user__time">{{ getLastTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user_data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getLastMessage () {
      return this.user_data.chat[this.user_data.chat.length - 1].text
    },
    getLastTime () {
      return this.user_data.chat[this.user_data.chat.length - 1].time
    }
  },
  methods: {
    toUserChat () {
      this.$router.push({
        name: 'chat',
        params: { messages: this.user_data.chat, user: this.user_data }
      })
    }
  }
}
</script>
