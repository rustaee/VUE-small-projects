<template>
  <div class="rotate-container" :class="{ 'show-nav': navigation }">
    <!-- Header -->
    <the-header :navigation="navigation" @show-nav="showNav"></the-header>

    <!-- Project List -->
    <Sidebar></Sidebar>

    <section id="container" @click="changeMenuStatus()">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>

    <!-- Footer -->
    <TheFooter></TheFooter>
  </div>

  <!-- Bottom Navigation Menu -->
  <TheNavigation :navigation="navigation"></TheNavigation>
</template>

<script lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TheNavigation from "@/components/layout/TheNavigation.vue";

export default {
  components: { Sidebar, TheHeader, TheFooter, TheNavigation },
  data() {
    return {
      navigation: false
    };
  },
  methods: {
    changeMenuStatus() {
      this.$store.commit("menuStatus", false);
    },
    showNav(status) {
      this.navigation = status;
    }
  },
  watch: {
    $route() {
      this.$store.commit("menuStatus", false);
      this.navigation = false;
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
  font-family: $font-family;
  font-size: $font-size;
  margin: 0;
  background-color: $behind-rotate;
  overflow-x: hidden;
}

#container {
  margin-left: 200px;
  background: $main-background;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  border-radius: 45px;
  position: relative;
}

//Route changing animation
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(3%);
}
//End of Route changing animation

//Rotating Container (whole page)
.rotate-container {
  transform-origin: top left;
  background-color: $body;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 94vh;
}
.rotate-container.show-nav {
  transform: rotate(-13deg);
  background-color: $body;
}
//End of Rotating Container

@media screen and (max-width: 768px) {
  #container {
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 65px;
  }
}
</style>
