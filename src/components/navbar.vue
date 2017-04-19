<template>
  <div class="container compact-no-padding">
    <div class="navbar padding-top">
      <h4 class="c-light no-margin compact-padding-bottom">Agata Kubiak</h4>
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
@import '~utils';

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
