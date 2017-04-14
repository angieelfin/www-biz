<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <services></services>
    <workProcess></workProcess>
    <about></about>
    <contact></contact>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'
import services from '@/components/services.vue'
import workProcess from '@/components/workProcess.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
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
    workProcess,
    about,
    contact
  }
}
</script>

<style scoped lang="scss">

@import '~variables';

</style>
