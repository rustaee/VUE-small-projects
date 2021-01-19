<template>
  <the-header></the-header>
  <Sidebar></Sidebar>
  <section id="container">
    <router-view></router-view>
  </section>
  <TheFooter></TheFooter>
</template>

<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: { Sidebar, TheHeader, TheFooter }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}

#container {
  margin-left: 200px;
  background: $background;
  margin-left: 200px;
  display: flex;
  justify-content: center;
}
</style>
