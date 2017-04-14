<template>
  <div class="contact">
    <h2 class="padding-3/1-vertical">Interested in working together?</h2>
    <a href="mailto:agatakubiak.dev@gmail.com" class="button">Contact me!</a>
  </div>
</template>


<style scoped lang="scss">

@import '~variables';
@import '~buttons';

.contact {
  background: url('../assets/hero-bg.png') no-repeat, linear-gradient(to right, $color-secondary 0%, $color-primary 100%);
  background-attachment: fixed;
  background-size: contain;
  background-position: top center;
  color: white;
  width: 100%;
  height: 370px;
}

h2:after {
  background: white;
}

</style>
