<template>
  <!-- To show the dynamic layout using computed property -->
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
const defaultLayout = "default";

export default {
  computed: {
    layout() {
      //layout name has been defined in router file-meta key
      return (this.$route.meta.layout || defaultLayout) + "-template";
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: $font-family;
  font-size: $font-size;
  margin: 0;
  background-color: $behind-rotate;
  overflow-x: hidden;
}
</style>
