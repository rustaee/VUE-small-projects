<template>
  <div class="step">
    <div class="form-control">
      <input type="text" required />
      <label v-html="recreateLabel('Your Name')"> </label>
    </div>
    <div class="form-control">
      <input type="email" required />
      <label v-html="recreateLabel('Email')"> </label>
    </div>
    <div class="form-control">
      <input type="tel" required />
      <label v-html="recreateLabel('Phone')"> </label>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    recreateLabel(names) {
      return names
        .split("")
        .map(
          (letter, index) =>
            `<span style="transition-delay:${index * 50}ms">${letter}</span>`
        )
        .join("");
    }
  }
};
</script>
<style lang="scss">
.step {
  @extend %flex-column;
}

.form-control {
  width: 300px;
  position: relative;
  margin: 20px 0 40px;

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid $effect-base-color;
    display: block;
    width: 100%;
    padding: 15px 0;
    color: $effect_dark-font-color;

    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: $effect-base-color-2;

      & + label span {
        color: $effect-base-color-2;
        transform: translateY(-30px);
      }
    }
  }

  label {
    position: absolute;
    top: 15px;
    left: 0px;

    span {
      display: inline-block;
      font-size: 1rem;
      min-width: 3px;
      @include transition(0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55));
    }
  }
}
</style>
