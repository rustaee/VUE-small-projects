<template>
  <h2>My Favorites</h2>
  <div class="my-favorites">
    <div class="fav-effect">
      <img src="@/assets/funicon.jpg" alt="" />
      <div class="name">Effect Title</div>
      <div class="desc">A short description</div>
      <router-link :to="{ name: 'Effects' }"
        ><button class="base-btn">Show me!</button></router-link
      >
    </div>
    <div class="fav-effect">
      <img src="@/assets/funicon.jpg" alt="" />
      <div class="name">Effect Title</div>
      <div class="desc">A short description</div>
      <router-link :to="{ name: 'Effects' }"
        ><button class="base-btn">Show me!</button></router-link
      >
    </div>
    <div class="fav-effect">
      <img src="@/assets/funicon.jpg" alt="" />
      <div class="name">Effect Title</div>
      <div class="desc">A short description</div>
      <router-link :to="{ name: 'Effects' }"
        ><button class="base-btn">Show me!</button></router-link
      >
    </div>
    <div class="fav-effect">
      <img src="@/assets/funicon.jpg" alt="" />
      <div class="name">Effect Title</div>
      <div class="desc">A short description</div>
      <router-link :to="{ name: 'Effects' }"
        ><button class="base-btn">Show me!</button></router-link
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
