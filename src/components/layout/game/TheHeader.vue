<template>
  <header>
    <section class="header-content">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Games' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Games List</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Effects</router-link>
          </li>
        </ul>
      </nav>
      <div class="page-description">
        <h1 class="title">Simple Javascript Games</h1>
        <div class="line"></div>
        <div class="description">
          <p>
            Here you can see Some of my small projects using Vue.js
          </p>
          <p>
            Wish you a happy time :)
          </p>
        </div>
      </div>
    </section>
  </header>
</template>
<style lang="scss" scoped>
header {
  background: url(../../../assets/header.jpg) right bottom no-repeat,
    linear-gradient(to right, #141414 70%, #000 80%);
  background-size: auto 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33vh;
  flex-direction: column;

  &::after {
    content: "";
    width: 100%;
    height: 2vh;
    background-image: linear-gradient(
      179deg,
      $game-base-color 56%,
      $game-body 60%
    );
  }
}

.header-content {
  width: 70vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $game-light-color;

  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 20px 0;

      li {
        display: inline-block;
        margin-right: 20px;
        font-family: $game-font-family;

        a {
          text-decoration: none;
          color: $game-light-color;

          &:hover,
          &:active,
          &.router-link-active {
            color: $game-base-color;
          }
        }
      }
    }
  }

  .page-description {
    padding: 0 20px;
    text-align: center;
    @extend %flex-column;

    .title {
      font-family: $game-font;
    }

    .line {
      display: block;
      width: 150px;
      height: 2px;
      background: $game-base-color;
    }
    .description {
      background: #000;
      opacity: 0.7;
      border-radius: 10px;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }
}
</style>
