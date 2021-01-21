<template>
  <header>
    <div class="circle-container">
      <div class="circle" :class="{ rotate: rotate }">
        <font-awesome-icon class="open" icon="bars" @click="showNav(true)" />

        <font-awesome-icon class="close" icon="times" @click="showNav(false)" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  props: ["navigation"],
  data() {
    return {
      rotate: false
    };
  },
  methods: {
    showNav(status) {
      this.$emit("show-nav", status);
      this.rotate = status;
    }
  },
  watch: {
    navigation: function(newValue) {
      this.rotate = newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 10vh;
}

.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: $rotate-circle;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    font-size: 26px;
    color: $main-background;
    cursor: pointer;
  }
  .open {
    left: 60%;
  }

  .close {
    top: 60%;
    transform: rotate(90deg);
    transform-origin: top left;
  }
}

.circle.rotate {
  transform: rotate(-70deg);
}
</style>
