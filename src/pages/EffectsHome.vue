<template>
  <div class="main-container">
    <section class="dark-bg">
      <div class="content">
        <div class="effects-list">
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              Effect Name goes here!
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="light-bg">
      <div class="content">
        lkjuhfslkdsf
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.main-container {
  @extend %flex-column;
}

.dark-bg,
.light-bg {
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 80%;
    padding: 20px 0;
  }
}

.dark-bg {
  background: $effect-body-bg;

  .content {
    color: $effect-dark-font-color;
  }
}

.light-bg {
  background: $effect-base-color;

  .content {
    color: $effect-light-font-color;
  }
}
</style>
