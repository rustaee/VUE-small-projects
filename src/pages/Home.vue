<template>
  <div class="container" :class="dynamicClass">
    <div
      class="split left"
      @mouseenter="changeClass(true, 'hover-left')"
      @mouseleave="changeClass(false)"
    >
      <h1>Have some fun</h1>
      <router-link :to="{ name: 'Effects' }" class="btn">Let's GO!</router-link>
    </div>
    <div
      class="split right"
      @mouseenter="changeClass(true, 'hover-right')"
      @mouseleave="changeClass(false)"
    >
      <h1>Play Small Games</h1>
      <router-link :to="{ name: 'Games' }" class="btn">let's go!</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dynamicClass: null
    };
  },
  methods: {
    changeClass(status: boolean, className: string | undefined) {
      status ? (this.dynamicClass = className) : (this.dynamicClass = null);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Play&display=swap");
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  background: #333;
  font-family: "Play", sans-serif;
}

h1 {
  font-size: 3rem;
  color: #fff;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.btn {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 1.5rem;
  width: 15rem;
  text-transform: uppercase;
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;

  &.left {
    left: 0;
    background: url("../assets/home-page/left.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;

    .btn:hover {
      background-color: #ffd800;
      border-color: #ffd800;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(247, 195, 55, 0.6);
    }
  }

  &.right {
    right: 0;
    background: url("../assets/home-page/right.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;

    .btn:hover {
      background-color: #ed145b;
      border-color: #ed145b;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(43, 43, 43, 0.7);
    }
  }
}

//Container hover effect
.hover-left .left {
  width: 75%;
}

.hover-left .right {
  width: 25%;
}

.hover-right .left {
  width: 25%;
}

.hover-right .right {
  width: 75%;
}

//Container hover animation
.split.right,
.split.left,
.split.right::before,
.split.left::before {
  transition: all 1000ms ease-in-out;
}

//Small screens
@media screen and (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }

  .split.left {
    background-position: center;
  }
}
</style>
