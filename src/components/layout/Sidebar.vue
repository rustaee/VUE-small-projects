<template>
  <aside :style="{ height: dynamicHeight }">
    <div id="bar-menu" @click="showMenu()">
      <font-awesome-icon icon="bars" />
    </div>
    <ul>
      <li><router-link to="/expandingcards">Expanding Cards</router-link></li>
      <li>
        <router-link :to="{ name: 'Progress' }">Progress Bar</router-link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </aside>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dynamicHeight: ""
    };
  },
  methods: {
    showMenu() {
      this.dynamicHeight == "200px"
        ? (this.dynamicHeight = "0")
        : (this.dynamicHeight = "200px");
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  width: 200px;
  padding: 25px 0;
  position: absolute;
  height: 80vh;
}

li {
  list-style: none;
  position: relative;
  a {
    text-decoration: none;
    color: $secondary-color;
    padding: 10px;
    border-radius: 15px 0 0 15px;
    width: 100%;
    display: block;
  }

  a.router-link-active {
    color: $body;
    background: $main-background;
  }
}

#bar-menu {
  position: fixed;
  left: 15px;
  top: 15px;
  color: $main-background;
  visibility: hidden;
  font-size: 2rem;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  aside {
    z-index: 2;
    background-color: $body;
    opacity: 0.8;
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: height 0.5s ease;
    border-radius: 30px;
    width: 300px;

    a {
      color: #000;
    }

    a.router-link-active {
      background: none;
      color: #fff;
    }

    a.router-link-active::before {
      content: " >> ";
    }
  }
  #bar-menu {
    visibility: visible;
  }
}
</style>
