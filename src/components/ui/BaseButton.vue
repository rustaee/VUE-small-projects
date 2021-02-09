<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>

  <!-- Use in component like this: 
  <base-botton link mode="flat" to="/about">About Me</base-botton> -->
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: $game-base-color;
  border: 1px solid $game-base-color;
  color: $main-background;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
}

button:focus {
  outline: none;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: $border;
  border-color: $body;
}

.flat {
  background-color: transparent;
  color: $body;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: $body;
  color: $body;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  color: $border;
}
</style>
