<template>
  <div class="section-top">
    <backButton></backButton>
    <div class="project-header padding-2/1-top c-light">
      <img src="../../assets/projects/branding.png" alt="devices graphic" class="header-img">
    </div>
    <div>
      <h2>Branding</h2>
      <h3>Logo & Business Cards Collection</h3>
    </div>
    <div class="c-dark">
      <div class="container project-study text-left">
        <div class="grid padding-2/1-top">
          <div class="grid-item 1/2 compact-1/1 text-left">
            <h3 class="d-inline">The logo...</h3>
            <p class="padding-top text-left white-space">...should be unique and tailored for its owner. That's why the design process is so important in this case. It's crucial to know about client's needs, industry specification and make the appropriate research. I treat each case individually and make the logo to say something more & present some values instead of being just a 'pretty picture'. That is the recipe for keeping the satisfaction from a design for a very long time.</p>
          </div>
          <div class="grid-item 1/2 compact-1/1">
            <h3 class="d-inline">Business cards...</h3>
            <p class="padding-top text-left white-space">...represent you/your company and sometimes even your personality. There are a bunch of business cards made from the templates, but do they provide any message about their owner? As a designer, I focus on making this little piece of paper to look outstanding, attract attention and be distinguishable from many other business cards that you keep in your wallet.</p>
          </div>
        </div>
      </div>
      <div class="container padding-2/1-top">
        <img src="../../assets/projects/branding/1.png" class="project-img" alt="business cards Article">
        <img src="../../assets/projects/branding/2.png" class="project-img" alt="business cards Gotar">
        <img src="../../assets/projects/branding/3.png" class="project-img" alt="business cards Via Finanse">
        <img src="../../assets/projects/branding/4.png" class="project-img" alt="business cards Glow">
        <img src="../../assets/projects/branding/5.png" class="project-img" alt="business cards Szymon Szyulski">
        <img src="../../assets/projects/branding/6.png" class="project-img" alt="business cards Natalie Juann">
        <img src="../../assets/projects/branding/7.png" class="project-img" alt="business cards Ragnarson">
      </div>
    </div>
    <contact></contact>
    <appFooter></appFooter>
  </div>
</template>

<script>

import backButton from '@/components/backButton.vue'
import contact from '@/components/contact.vue'
import appFooter from '@/components/appFooter.vue'

export default {
  components: {
    backButton,
    contact,
    appFooter
  }
}
</script>

<style scoped lang="scss">

@import '~project';

</style>
