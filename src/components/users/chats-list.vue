<template>
  <div class="chats-list">
    <user
      v-for="chat in chats"
      :key="chat.id"
      :user_data="chat"
    />
  </div>
</template>

<script>
import user from './user'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'chats-list',
  components: {
    user
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'chats'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CHATS',
      'SET_USER_TO_HEADER'
    ])
  },
  mounted () {
    this.FETCH_CHATS()
    this.SET_USER_TO_HEADER()
  }
}
</script>

<style scoped>

</style>
