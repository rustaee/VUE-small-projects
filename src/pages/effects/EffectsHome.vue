<template>
  <base-effect-page-title>
    <h1>
      Here you can see some Java script fun effects.
    </h1>
  </base-effect-page-title>
  <section class="dark-bg">
    <div class="content">
      <effects-list></effects-list>
    </div>
  </section>
  <section class="light-bg">
    <div class="content">
      <favorite-effects></favorite-effects>
    </div>
  </section>
</template>
<script lang="ts">
import EffectsList from "@/components/effects-homepage/EffectsList.vue";
import FavoriteEffects from "@/components/effects-homepage/FavoriteEffects.vue";

export default {
  components: {
    "effects-list": EffectsList,
    "favorite-effects": FavoriteEffects
  }
};
</script>
<style lang="scss" scoped>
.dark-bg,
.light-bg {
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 80%;
    padding: 20px 0;
    text-align: center;
  }
}

.my-favorites {
  @extend %flex-row;
  justify-content: center;

  .fav-effect {
    margin: 0 10px;

    img {
      width: 70px;
      height: 70px;
      @include border-radius(50%);
      margin: 10px;
    }

    .name {
      font-weight: bold;
    }

    .desc {
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
}
</style>
