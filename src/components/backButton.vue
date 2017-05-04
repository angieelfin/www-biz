<template>
  <div class="container">
    <a class="back-button" @click="goBack()">
      <img src="~@/assets/arrow-left.svg" class="button-icon">
      Back
    </a>
  </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>

<style scoped lang="scss">

@import '~variables';
@import '~buttons';

.container {
  position: relative;
  top: 20px;
  z-index: 10;
  text-align: left;
}

.back-button {
  text-transform: uppercase;
  color: $color-light;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid $color-light;
  border-radius: 50px;
  padding: 7px 35px;
}

</style>
