<template>
  <div id="body">
    <the-header></the-header>
    <section class="container">
      <slot></slot>
    </section>
    <the-footer></the-footer>
  </div>
</template>
<script lang="ts">
import TheHeader from "./effect/TheHeader.vue";
import TheFooter from "./effect/TheFooter.vue";
export default {
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter
  }
};
</script>
<style lang="scss">
#body {
  @extend %flex-column;
  width: 100vw;
  min-height: 100vh;
  background: $effect-body-bg;
  color: $effect-font-color;
  font-family: $effect-font-family;

  .container,
  .dark-bg,
  .light-bg {
    width: 100%;
    @extend %flex-column;
  }
}

.base-btn {
  @include base-btn(red);
  color: $effect-font-color;
}

span.basecolor {
  color: $effect-base-color;
}
</style>
