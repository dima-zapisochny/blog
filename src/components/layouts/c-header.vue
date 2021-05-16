<template>
  <div class="c-header">
    <div
      v-if="!isCoreRoute"
      class="c-header__back"
      @click="goBack"
    >
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div
      v-if="!isCoreRoute"
      class="c-header__user-info">
      <span>{{currentUserChat}}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'c-header',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState([
      'currentUserChat'
    ]),
    isCoreRoute () {
      return this.$route.path === '/'
    }
  }
}
</script>
