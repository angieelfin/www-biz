<template>
  <div class="hero padding-2/1-top">
    <img src="../assets/hero-img.svg" alt="devices graphic" class="hero-img">
    <h1>Web solutions tailored for you</h1>
    <img src="../assets/iphone-mockup-hero.png" alt="phone mockup" class="hero-phone-img">
  </div>
</template>


<style scoped lang="scss">

@import '~variables';

.hero {
  background: url('../assets/hero-bg.png') no-repeat, linear-gradient(to right, #3259ca 0%, #947ae1 100%);
  background-attachment: fixed;
  background-size: contain;
  background-position: top center;
  color: white;
  width: 100%;
  height: 640px;
  position: relative;
  top: -70px;
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
