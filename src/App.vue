<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Agata Kubiak biz'
    }
  },
  name: 'app',
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style lang="scss">

@import "node_modules/hocus-pocus/hocus-pocus";
@import '~variables';

html, body {
  width: 100vw;
  overflow-x: hidden;
}

#app, h1, h2, h3, h4, h5, p {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h2 {
  font-size: 2.2em;

  &:after {
    content: "";
    background: $color-secondary;
    display: flex;
    margin: 0 auto;
    width: 200px;
    height: 2px;
    top: 10px;
    position: relative;
  }
}

</style>
