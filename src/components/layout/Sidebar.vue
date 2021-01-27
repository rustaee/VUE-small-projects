<template>
  <div id="bar-menu" @click="showMenu()">
    <font-awesome-icon icon="bars" />
  </div>
  <aside :style="{ height: dynamicHeight, 'z-index': zIndex }">
    <ul>
      <li>
        <router-link :to="{ name: 'Scroll' }">Scroll Animation</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Blur' }">Blury Facts</router-link>
      </li>
      <li><router-link to="/expandingcards">Expanding Cards</router-link></li>
      <li>
        <router-link :to="{ name: 'Progress' }">Progress Bar</router-link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </aside>
  {{ menuStatus }}
</template>

<script lang="ts">
export default {
  data() {
    return {
      dynamicHeight: null,
      responsiveMenu: false,
      zIndex: null
    };
  },
  methods: {
    showMenu() {
      if (!this.responsiveMenu) {
        this.dynamicHeight = "80vh";
        this.responsiveMenu = true;
      } else {
        this.dynamicHeight = "0px";
        this.responsiveMenu = false;
      }
      this.zIndex = "2";
      this.$store.commit("menuStatus", this.responsiveMenu);
    },
    closeMenu() {
      this.dynamicHeight = "0px";
      this.responsiveMenu = false;
    }
  },
  computed: {
    menuStatus() {
      if (this.$store.state.responsiveMenu == false && window.innerWidth <= 768)
        this.closeMenu();
      return "";
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
    z-index: 0;
    background-color: $body;
    opacity: 0.9;
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: height 0.5s ease;
    border-radius: 30px;
    width: 250px;

    a {
      color: #000;
    }

    a:hover {
      color: #eee;
    }

    a.router-link-active {
      background: none;
      color: #fff;
    }

    a.router-link-active::before {
      content: " » ";
    }
  }
  #bar-menu {
    visibility: visible;
  }
}
</style>
