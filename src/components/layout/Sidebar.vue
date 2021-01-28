<template>
  <!-- Hamburger menu icon -->
  <div id="bar-menu" @click="showMenu()">
    <font-awesome-icon icon="bars" />
  </div>
  <!-- End of Hamburger menu icon -->

  <aside :class="{ responsive: responsiveMenu }" :style="{ 'z-index': zIndex }">
    <!-- Close Icon when responsive menu is open -->
    <font-awesome-icon icon="times" class="close" @click="showMenu()" />
    <!-- End of close icon -->
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
    {{ menuStatus }}
  </aside>
</template>

<script lang="ts">
export default {
  data() {
    return {
      responsiveMenu: false,
      zIndex: 0
    };
  },
  methods: {
    showMenu() {
      this.responsiveMenu = !this.responsiveMenu;
      this.zIndex = 5;
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
.close {
  color: #fff;
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 1.3rem;
  display: none;
  cursor: pointer;
}
aside {
  width: 201px;
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
  z-index: 3;
}

@media screen and (max-width: 768px) {
  aside {
    z-index: -1;
    background: $sidebar;
    padding: 0;
    transform: translateX(-300px);
    transition: transform 0.5s ease;
    width: 190px;
    height: 100vh;
    position: fixed;
    top: 0;
    -moz-box-shadow: 10px 0 30px #000;
    -webkit-box-shadow: 10px 0 30px #000;
    box-shadow: 10px 0 30px #888;

    ul {
      position: relative;
      top: 20px;
      padding: 10px;
    }
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

  .responsive {
    transform: translateX(0);
  }

  .close {
    display: inline-block;
  }

  #bar-menu {
    visibility: visible;
  }
}
</style>
