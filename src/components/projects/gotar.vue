<template>
  <div class="section-top">
    <backButton></backButton>
    <div class="project-header padding-2/1-top c-light">
      <img src="../../assets/projects/gotar.png" target="_blank" alt="devices graphic" class="header-img">
    </div>
    <div>
      <h2>GOTAR</h2>
      <h3>Branding & Webdesign</h3>
      <a href="http://gotar.info/" target="_blank" class="button button-project">
        Go to website
        <img src="../../assets/arrow-right.svg" class="button-icon">
      </a>
    </div>

    <div class="c-dark">
      <div class="container project-study text-left">
        <div class="grid padding-2/1-top">
          <div class="grid-item 1/2 compact-1/1 text-left">
            <img src="../../assets/challenges.svg" alt="icon challenges" class="study-icon">
            <h3 class="d-inline padding-left">Challenges</h3>
            <p class="padding-top text-left white-space"> Design simple, intuitive & informative website for a small company, as well as the logo and business cards.</p>
          </div>
          <div class="grid-item 1/2 compact-1/1">
            <img src="../../assets/solutions.svg" alt="icon solutions" class="study-icon">
            <h3 class="d-inline padding-left">Solutions</h3>
            <p class="padding-top text-left white-space">The company name is associated with a dwarf - that's why the logo presents dwarf's face, drawn in a minimal, geometric way. To add the visual connection with the IT industry I've used 3d glitch effect.
            Both the business cards & website are visually based on logo appearance.
            Website structure is divided into sections with all necessary information such as work, about information, contact etc. All of these are placed in the intuitive navigation at the top of the page. The homepage is a brief sneak peek of all the information that we can find on the website. The important aspects here are the details - according to the clean & simple layout we can find here slight animations that give the breeze of fresh air.
            I took care of RWD as well so that the website looks good also on mobile devices.</p>
          </div>
        </div>
      </div>
      <div class="bg-primary-muted padding-3/1-vertical margin-2/1-top">
        <h2>Tools used</h2>
        <h3 class="padding-top">Affinity Designer / Elixir / Phoenix / slim / sass / hocus-pocus CSS Framework / GIT</h3>
      </div>
      <div class="container">
        <img src="../../assets/projects/gotar/1.png" class="project-img" alt="logo">
        <img src="../../assets/projects/gotar/2.png" class="project-img" alt="landing page">
        <img src="../../assets/projects/gotar/3.png" class="project-img" alt="business cards">
        <img src="../../assets/projects/gotar/4.png" class="project-img" alt="colors and typography">
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
