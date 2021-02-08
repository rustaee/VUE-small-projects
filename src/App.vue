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
      //layout name has been defined in router file  , meta key
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  font-family: $font-family;
  font-size: $font-size;
  margin: 0;
  overflow-x: hidden;
}
</style>
