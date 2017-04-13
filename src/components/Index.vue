<template>
  <div>
    <navbar></navbar>
    <hero></hero>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar,
    hero
  }
}
</script>

<style scoped lang="scss">

@import '~variables';

</style>
