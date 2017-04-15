<template>
  <div class="container">
    <div class="navbar">
      <img src="../assets/logo.svg" alt="brand logo" class="navbar-logo">
      <ul class="list-inline navbar-links">
        <li>
          <a href="">Case Studies</a>
        </li>
        <li>
          <a href="">Work Process</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped lang="scss">

@import '~variables';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  padding-top: 10px;
  position: relative;
  z-index: 10;

  a {
    color: $color-light;
    padding: 0 1em;
    text-decoration: none;
  }
}

.navbar-logo {
  height: 60px;
}

</style>
