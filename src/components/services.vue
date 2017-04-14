<template>
  <div class="container services">
    <h1 class="padding-2/1-top">What I can help you with</h1>

    <div class="grid padding-4/1-top">
      <div class="grid-item 1/3">
        <img src="../assets/icon-branding.svg" alt="icon branding" class="services-icon">
        <h3 class="padding-top">Branding & Print Design</h3>
      </div>
      <div class="grid-item 1/3">
        <img src="../assets/icon-design.svg" alt="icon design" class="services-icon">
        <h3 class="padding-top">UI/UX Design</h3>
      </div>
      <div class="grid-item 1/3">
        <img src="../assets/icon-development.svg" alt="icon development" class="services-icon">
        <h3 class="padding-top">Web Development</h3>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

@import '~variables';

h1:after {
  content: "";
  background: $color-secondary;
  display: flex;
  margin: 0 auto;
  width: 200px;
  height: 2px;
  top: 10px;
  position: relative;
}

.services {
  color: $color-text;
}

.services-icon {
  height: 165px;
}

</style>
