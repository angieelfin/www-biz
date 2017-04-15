<template>
  <div class="hero padding-2/1-top c-light">
    <img src="../assets/hero-img.svg" alt="devices graphic" class="hero-img">
    <h1 class="font-size-large">Web solutions tailored for you</h1>
    <img src="../assets/iphone-mockup-hero.png" alt="phone mockup" class="hero-phone-img">
  </div>
</template>


<style scoped lang="scss">

@import '~variables';
@import '~utils';

.hero {
  background: url('../assets/hero-bg.png') no-repeat, $bg-gradient;
  background-attachment: fixed;
  background-size: contain;
  background-position: top center;
  position: relative;
  top: -70px;
  height: 640px;
  width: 100%;
}

.hero-img {
  padding-top: 10%;
  height: 215px;
}

.hero-phone-img {
  position: absolute;
  top: 437px;
  right: 78%;
}

</style>
