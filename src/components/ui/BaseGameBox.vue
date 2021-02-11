<template>
  <div class="card">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 10px;
  @extend %flex-row;
  justify-content: center;
  background: $effect-body-bg;
  color: $effect-dark-font-color;

  .content {
    width: 80%;
  }
}
</style>
