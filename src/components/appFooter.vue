<template>
  <div class="container padding-2/1-vertical compact-no-padding-horizontal">
    <div class="social-media-bar margin-3/1-bottom">
      <a href="https://twitter.com/angie_elfin" target="_blank">
        <img src="~@/assets/footer-icons/twitter-logo.svg" alt="twitter logo">
      </a>
      <a href="https://github.com/angieelfin" target="_blank">
        <img src="~@/assets/footer-icons/github-logo.svg" alt="github logo">
      </a>
      <a href="https://www.linkedin.com/in/agata-kubiak-029a13109/" target="_blank">
        <img src="~@/assets/footer-icons/linkedin-logo.svg" alt="linkedin logo">
      </a>
      <a href="https://www.behance.net/AgataKubiak" target="_blank">
        <img src="~@/assets/footer-icons/behance-logo.svg" alt="behance logo">
      </a>
      <a href="https://www.youtube.com/channel/UCQSAmGBbKkLsGAz0EULyVbA" target="_blank">
        <img src="~@/assets/footer-icons/yt-logo.svg" alt="youtube logo">
      </a>
    </div>
    <a class="button button-small" v-scroll-to="{
      el:'.section-top',
      easing: 'linear'}">
      top
      <img src="~@/assets/arrow-up.svg" class="button-icon">
    </a>
  </div>
</template>


<style scoped lang="scss">

@import '~variables';
@import '~buttons';

.social-media-bar a {
  transition: $base-transition;

  img {
    height: 35px;
    padding: 0 2em;
  }

  &:hover {
    opacity: .8;
  }
}

@media only screen and (max-width: 568px) {
  .social-media-bar a {
    img {
      padding: 0 10px;
    }
  }
}

</style>
