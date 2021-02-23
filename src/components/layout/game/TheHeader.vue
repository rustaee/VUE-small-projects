<template>
  <header>
    <section class="header-content">
      <div class="burgermenu">
        <font-awesome-icon class="open" icon="bars" />
      </div>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Games' }">Games List</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Effects' }">Effects</router-link>
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
  background: url(../../../assets/game-header.jpg) right bottom no-repeat,
    linear-gradient(to right, #141414 70%, #000 80%);
  background-size: auto 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30vh;
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
  width: 80vw;
  height: 85%;
  display: flex;
  flex-direction: column;
  color: $game-light-color;
  overflow: hidden;

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
      padding: 10px;
    }
  }

  .burgermenu {
    display: none;
  }
}

@media screen and (min-width: 2500px) {
  header {
    font-size: 1rem;

    nav {
      font-size: 1.1rem;
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 1440px) {
  .header-content .page-description {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  header {
    height: 15vh;
    background: url(../../../assets/game-header.png) right top no-repeat,
      linear-gradient(to right, #141414 70%, #000 80%);
    background-size: auto 100%;
    overflow: visible;
  }
  nav {
    display: none;
  }

  .header-content {
    width: 90vw;
    position: relative;

    .burgermenu {
      display: block;
      font-size: 2.5rem;
      position: absolute;
      top: 25%;
      cursor: pointer;
    }
  }
}
</style>
