<template>
  <nav :class="{ active: active }">
    <ul>
      <li>
        <font-awesome-icon icon="home" /><router-link to="/"> Home</router-link>
      </li>
      <li>
        <font-awesome-icon icon="user-alt" /><router-link to="/about">
          About</router-link
        >
      </li>
      <li>
        <font-awesome-icon icon="envelope" /><router-link to="/contact">
          Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["navigation"],
  data() {
    return {
      active: false
    };
  },
  watch: {
    navigation: function(newValue) {
      this.active = newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  color: #fff;
  left: 0;
  bottom: 40px;
  z-index: -1;

  ul {
    list-style: none;
    padding-left: 20px;

    li {
      text-transform: uppercase;
      color: $main-background;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;

      a {
        text-decoration: none;
        color: $main-background;
      }

      svg {
        font-size: 20px;
        margin-right: 10px;
      }
    }

    li + li {
      margin-left: 10px;
      transform: translateX(-150%);
    }

    li + li + li {
      margin-left: 15px;
      transform: translateX(-200%);
    }
  }
}

nav.active li {
  transform: translateX(0);
  transition-delay: 0.2s;
}

nav.active {
  z-index: 10;
}
</style>
