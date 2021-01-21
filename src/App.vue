<template>
  <the-header></the-header>
  <Sidebar></Sidebar>
  <section id="container" @click="changeMenuStatus()">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
  <TheFooter></TheFooter>
</template>

<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: { Sidebar, TheHeader, TheFooter },
  methods: {
    changeMenuStatus() {
      this.$store.commit("menuStatus", false);
    }
  },
  watch: {
    $route() {
      this.$store.commit("menuStatus", false);
    }
  }
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
  background-color: $body;
}

#container {
  margin-left: 200px;
  background: $main-background;
  margin-left: 200px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  border-radius: 45px;
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(3%);
}

@media screen and (max-width: 768px) {
  #container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
