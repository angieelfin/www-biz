<template>
  <div class="container padding-4/1-top" id="case-studies">
    <h2>Case Studies</h2>
    <div class="grid padding-3/1-top">
      <div class="grid-item 1/3 compact-1/1" v-for="project in projects">
        <router-link :to="{path: project.id}" href="#" class="project-card margin-bottom">
          <div class="project-thumbnail">
            <img src="../assets/trug.png" alt="" class="project-thumbnail-img">
          </div>
          <a href="" class="button button-project-card">See case Study</a>
          <div class="project-title">
            <h5 class="padding-1/4-top">{{ project.name }}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      projects: [
      {name: 'Poland Deals', id: 'polanddeals'},
      {name: 'DGTMARKET', id: 'dgtmarket'},
      {name: 'GOTAR', id: 'gotar'},
      {name: '[ART/ICLE]', id: 'article'},
      {name: 'certace', id: 'certace'},
      {name: 'TRUG', id: 'trug'},
      {name: '10.ragnarson.com', id: 'ragnarson'},
      {name: 'Ragnarson Branding', id: 'ragnarsonbrand'},
      {name: 'Branding Collection', id: 'branding'}
      ]
    }
  }
}
</script>


<style scoped lang="scss">

@import '~variables';
@import '~utils';
@import '~buttons';

.project-card {
  box-shadow: $base-box-shadow;
  color: $color-dark;
  display: block;
  height: 200px;
  width: 100%;
  position: relative;
  text-decoration: none;
  transition: $base-transition;

  &:hover {
    color: $color-primary;

    .project-thumbnail {
      opacity: 0;
    }

    .button-project-card {
      opacity: 1;
    }
  }
}

.project-thumbnail {
  background: $bg-gradient;
  height: 155px;
  width: 100%;
  transition: $base-transition;
}

.project-thumbnail-img {
  position: relative;
  height: 100%;
}

.button-project-card {
  opacity: 0;
}

</style>
