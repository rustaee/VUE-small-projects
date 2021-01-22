<template>
  <header>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/"> <font-awesome-icon icon="home"/></router-link>
        </li>
        <li>
          <router-link to="/about">
            <font-awesome-icon icon="user-alt"
          /></router-link>
        </li>
        <li>
          <router-link to="/contact">
            <font-awesome-icon icon="envelope"
          /></router-link>
        </li>
      </ul>
    </div>
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
  position: relative;
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

/* Navigation menu for small screen  */
.nav {
  position: absolute;
  right: 50px;
  top: 15px;
  visibility: hidden;
  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 2rem;

    a {
      color: $main-background;
    }
  }
}

@media screen and (max-width: 768px) {
  .circle-container {
    display: none;
  }

  .nav {
    visibility: visible;
  }
}
</style>
