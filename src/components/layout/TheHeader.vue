<template>
  <header>
    <!-- Will be shown in small screens -->
    <div class="nav">
      <!-- Navigation Menu -->
      <ul>
        <li>
          <router-link to="/contact">
            <font-awesome-icon icon="envelope-open-text"
          /></router-link>
        </li>
        <li>
          <router-link to="/about">
            <font-awesome-icon icon="user-alt"
          /></router-link>
        </li>
        <li>
          <router-link to="/"> <font-awesome-icon icon="home"/></router-link>
        </li>
      </ul>

      <!-- Search Icon -->
      <div class="search-icon" @click="showSearchBox()">
        <font-awesome-icon icon="search" />
      </div>

      <!-- Search Box -->
      <div class="search">
        <input
          class="searchinput"
          :class="{ active: active }"
          type="text"
          placeholder="Looking for something?"
        />
      </div>
    </div>
    <!-- End Of Small Screen -->

    <!-- Navigation trigger for Larg screens -->
    <teleport to="body">
      <div class="circle-container">
        <div class="circle" :class="{ rotate: rotate }">
          <font-awesome-icon class="open" icon="bars" @click="showNav(true)" />

          <font-awesome-icon
            class="close"
            icon="times"
            @click="showNav(false)"
          />
        </div>
      </div>
    </teleport>
  </header>
</template>

<script lang="ts">
export default {
  props: ["navigation"],
  data() {
    return {
      rotate: false,
      active: false //Search Box
    };
  },
  methods: {
    showNav(status) {
      this.$emit("show-nav", status);
      this.rotate = status;
    },
    showSearchBox() {
      this.active = !this.active;
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
  z-index: 5;
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
  transform: rotate(-90deg);
}

/* Navigation menu for small screen  */
.nav {
  position: absolute;
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: row-reverse;
  flex-wrap: wrap;
  right: 70px;
  top: 30%;
  left: 3rem;

  .search-icon {
    font-size: 2rem;
    color: $main-background;
    margin-right: 5px;
    cursor: pointer;
  }
  .search {
    position: relative;
    width: 15rem;

    input {
      order: 3; /* to move down in XS Screens */
      -webkit-order: 3; /* Safari */
      padding: 0px;
      margin: 0 5px;
      border: none;
      color: $main-background;
      background: linear-gradient(to right, $rotate-circle, $body);
      transition: width 0.3s ease;
      width: 0px;
      height: 2.5rem;
      position: relative;
      right: 0;
      caret-color: transparent;
    }
    .active {
      width: 14.2rem;
      padding: 0 7px;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $body;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $body;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: $body;
    }

    input:focus {
      outline: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: none;
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

  header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 67px;
    z-index: 3;
    background: $body;
  }

  .nav ul {
    display: inline-block;
  }
}

@media screen and (max-width: 520px) {
  header {
    height: 68px;
  }

  .searchinput {
    z-index: 2;
    left: 5%;
  }
}
</style>
