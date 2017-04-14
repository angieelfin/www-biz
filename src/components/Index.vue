<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <services></services>
    <workProcess></workProcess>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'
import services from '@/components/services.vue'
import workProcess from '@/components/workProcess.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar,
    hero,
    services,
    workProcess
  }
}
</script>

<style scoped lang="scss">

@import '~variables';

</style>
