<template>
  <div class="section-top">
    <backButton></backButton>
    <div class="project-header padding-2/1-top c-light">
      <img src="../../assets/projects/article.png" alt="devices graphic" class="header-img">
    </div>
    <div>
      <h2>[ART/ICLE]</h2>
      <h3>Branding & App UI Design</h3>
    </div>
    <div class="c-dark">
      <div class="container project-study text-left">
        <div class="grid padding-2/1-top">
          <div class="grid-item 1/2 compact-1/1 text-left">
            <img src="../../assets/challenges.svg" alt="icon challenges" class="study-icon">
            <h3 class="d-inline padding-left">Challenges</h3>
            <p class="padding-top text-left white-space">The idea behind the [ART/ICLE] app is that you have an opportunity to add & read articles based exactly on your interests. All you need to do is to choose your favorite topics and you can read whenever and wherever you like (while traveling by bus to the work or waiting in a queue to the doctor).</p>
          </div>
          <div class="grid-item 1/2 compact-1/1">
            <img src="../../assets/solutions.svg" alt="icon solutions" class="study-icon">
            <h3 class="d-inline padding-left">Solutions</h3>
            <ul class="padding-top text-left">
              <li>You can save favorite articles or when you see something interesting but you don't have the time to read it at this moment - you can click the 'Read later' button and read at the most convenient time.</li>
              <li>The impact is put on simple and not distracting navigation as well as the intuitive and friendly interface. You have your own Library where everything is gathered in one place.</li>
              <li>The identity uses two main bright colors, white for contrast and cold grays for typography. The eye-catching accent here is the shadow on the elements that makes the impression of layered elements. The design is minimalist and clean to help maintain the focus on the content that people share.</li>
              <small class="padding-left c-dark">/personal Project</small>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-primary-muted padding-3/1-vertical margin-2/1-top">
        <h2>Tools used</h2>
        <h3 class="padding-top">Affity Designer / Affinity Photo</h3>
      </div>
      <div class="container">
        <img src="../../assets/projects/article/1.png" class="project-img" alt="logo and business cards">
        <img src="../../assets/projects/article/2.png" class="project-img" alt="brand stationery">
        <img src="../../assets/projects/article/3.png" class="project-img" alt="colors and typography">
        <img src="../../assets/projects/article/4.png" class="project-img" alt="app screen mockups">
        <img src="../../assets/projects/article/5.png" class="project-img" alt="app screens">
        <img src="../../assets/projects/article/6.png" class="project-img" alt="app screens showcase">
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
