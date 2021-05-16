<template>
  <div class="main-wrapper">
    <c-header/>
    <router-view/>
    <bottom-nav/>
  </div>
</template>

<script>
import cHeader from './layouts/c-header'
import bottomNav from './layouts/bottom-nav'

export default {
  name: 'main-wrapper',
  components: {
    cHeader,
    bottomNav
  }
}
</script>
