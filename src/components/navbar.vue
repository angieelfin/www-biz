<template>
  <div class="container compact-no-padding section-top">
    <div class="navbar padding-top">
      <h4 class="c-light no-margin compact-padding-bottom">Agata Kubiak</h4>
      <ul class="list-inline navbar-links">
        <li class="navbar-link">
          <a href="" v-scroll-to="'#case-studies'">Case Studies</a>
        </li>
        <li class="navbar-link">
          <a href="" v-scroll-to="'#work-process'">Work Process</a>
        </li>
        <li class="navbar-link">
          <a href="" v-scroll-to="'#about'">About</a>
        </li>
        <li class="navbar-link">
          <a href="" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import '~variables';
@import '~utils';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  padding-top: 10px;
  position: relative;
  z-index: 10;
}

.navbar-link a {
  color: $color-light;
  padding: 0 1em;
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: $color-light;
    visibility: hidden;
    transform: scaleX(0);
    transition: $base-transition;
  }

  &:hover:before {
    visibility: visible;
    background-color: $color-energized;
    transform: scaleX(1);
  }
}


@media only screen and (max-width: 568px) {

  .navbar {
    background: $bg-gradient;
    flex-direction: column;

    h4 {
      font-size: 2em;
    }

    .navbar-links {
      display: grid;
      font-size: 1.5em;
    }
  }
}

</style>
