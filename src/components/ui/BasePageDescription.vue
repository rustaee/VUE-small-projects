<template>
  <div class="page-description">
    <h1 class="title"><slot name="title">d</slot></h1>
    <div class="description">
      <slot>description</slot>
    </div>
    <hr />
  </div>
</template>
<style scoped lang="scss">
.page-description {
  text-align: center;
  width: 100%;
  @extend %flex-column;

  .title {
    font-family: $game-classic-font;
    letter-spacing: 2px;
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  hr {
    border: 1px solid $game-base-color;
    width: 150px;
  }
}
</style>
