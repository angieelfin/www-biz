<template>
  <div class="contact c-light" id="contact">
    <h2 class="padding-3/1-vertical">Interested in working together?</h2>
    <a href="mailto:agatakubiak.dev@gmail.com" class="button">Contact me!</a>
  </div>
</template>


<style scoped lang="scss">

@import '~variables';
@import '~utils';
@import '~buttons';

.contact {
  background: url('../assets/hero-bg.png') no-repeat, $bg-gradient;
  background-attachment: fixed;
  background-size: contain;
  background-position: top center;
  height: 370px;
  width: 100%;
}

h2:after {
  background: $color-light;
}

</style>
