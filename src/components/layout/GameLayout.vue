<template>
  <div id="main-container">
    <the-header></the-header>
    <section class="container">
      <slot></slot>
    </section>
    <the-footer></the-footer>
  </div>
</template>
<script lang="ts">
import TheHeader from "./game/TheHeader.vue";
import TheFooter from "./game/TheFooter.vue";
export default {
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter
  }
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
}

#main-container {
  @extend %flex-column;
  width: 100vw;
  min-height: 100vh;
  background-color: $game-body;
  color: $game-font-color;
  font-family: $game-font-family;

  .container {
    width: 100%;
    @extend %flex-row;
  }
}

.base-btn {
  @include base-btn($game-inactive-btn);
  color: $game-font-color;
}

span.base-color {
  color: $game-base-color;
}
</style>
