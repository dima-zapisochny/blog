<template>
  <div class="user" @click="toUserChat">
    <div class="user__avatar"></div>
    <div class="user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{ user_data.chat[user_data.chat.length-1].text }}</p>
    </div>
    <div class="user__time">{{ user_data.chat[user_data.chat.length-1].time }}</div>
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
  computed: {},
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
