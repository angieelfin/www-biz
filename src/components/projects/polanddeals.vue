<template>
  <div class="section-top">
    <backButton></backButton>
    <div class="project-header padding-2/1-top c-light">
      <img src="../../assets/projects/polanddeals.png" alt="devices graphic" class="header-img">
    </div>
    <div>
      <h2>Poland Deals</h2>
      <h3>App UI Design, Branding</h3>
      <a href="https://play.google.com/store/apps/details?id=eu.ekinnolab.krakowdeals" target="_blank" class="button button-project">
        Download App
        <img src="../../assets/arrow-right.svg" class="button-icon">
      </a>
    </div>

    <div class="c-dark">
      <div class="container project-study text-left">
        <div class="grid padding-2/1-top">
          <div class="grid-item 1/2 compact-1/1 text-left">
            <img src="../../assets/challenges.svg" alt="icon challenges" class="study-icon">
            <h3 class="d-inline padding-left">Challenges</h3>
            <p class="padding-top text-left white-space">Design a logo, UI & brand style guide for Kraków Deals application.
            The application is meant for foreigners who come to Poland and want to plan a trip to well-known beautiful cities from the southern region like Kraków or Zakopane. The app includes features such as Tours (with a group & private option), Transportation and Sightseeing.</p>
          </div>
          <div class="grid-item 1/2 compact-1/1">
            <img src="../../assets/solutions.svg" alt="icon solutions" class="study-icon">
            <h3 class="d-inline padding-left">Solutions</h3>
            <ul class="padding-top text-left">
              <li>the logo is associated with the city architecture & deal symbol, presented in a form of minimal linear icon with two colors chosen for Kraków. If the app is used in other cities in the future, each city can have its own colors</li>
              <li>the UI is simple, it emphasizes the content but not in an overwhelming way. Navigation and CTA buttons are in the color of calm red, so they are visible and easy do identify. To keep the consistency with the logo - I chose the linear icons for the UI and designed the custom linear illustrations and maps</li>
              <li>the main impact is put on easy navigation, intuitive flow, an appropriate way of exposing the content</li>
              <li>the brand style guide is divided into chapters - each chapter discovers a different topic, eg. Logo, Color System, Typography, UI Elements. All is presented in an simple way including visual examples with the necessary descriptions</li>
          </ul>
          <small class="padding-left c-dark">/In cooperation with: Małgorzata Bartoszewicz</small>
          </div>
        </div>
      </div>
      <div class="bg-primary-muted padding-3/1-vertical margin-2/1-top">
        <h2>Tools used</h2>
        <h3 class="padding-top">Affity Designer / Affinity Photo / Atlassian Confluence</h3>
      </div>
      <div class="container">
        <img src="../../assets/projects/polanddeals/1.png" class="project-img" alt="logo and colors">
        <img src="../../assets/projects/polanddeals/2.png" class="project-img" alt="typography">
        <img src="../../assets/projects/polanddeals/3.png" class="project-img" alt="brandbook">
        <img src="../../assets/projects/polanddeals/4.png" class="project-img" alt="app screens">
        <img src="../../assets/projects/polanddeals/5.png" class="project-img" alt="map and mockups">
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
