<template>
  <header>
    <section class="header-container">
      <div class="burgermenu">
        <font-awesome-icon class="open" icon="bars" />
      </div>
      <div class="page-title">
        Have fun in Javascript
      </div>
      <div class="navigation">
        <nav>
          <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'Home' }">About</router-link></li>
            <li><router-link :to="{ name: 'Home' }">Contact</router-link></li>
            <li>
              <router-link :to="{ name: 'Effects' }">Effects</router-link>
            </li>
            <li><router-link :to="{ name: 'Games' }">Games</router-link></li>
          </ul>
        </nav>
      </div>
      <!-- <div class="description">
        <p>Here you can see some javascript fun effects.</p>
        <p>
          Any question? <br />
          Don't hesitate to contact me :)
        </p>
      </div> -->
    </section>
  </header>
</template>
<style lang="scss" scoped>
header {
  @extend %flex-column;
  justify-content: flex-start;
  width: 100%;
  height: 35vh;
  background-image: url(../../../assets/effect-header.jpg);
  background-color: #000;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: bottom;
  position: relative;

  &::before {
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    background: $effect-base-color;
  }
}

.header-container {
  width: 80%;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      margin: 0px 1px;

      a {
        color: $effect-font-color;
        text-shadow: 1px 1px 2px #000;
        padding: 5px 20px;
        transition: background 0.3s ease;

        &:hover,
        &.router-link-active {
          background: $effect-base-color;
          border-radius: 3px;
        }

        &.router-link-active {
          color: $effect-light-font-color;
          text-shadow: 1px 1px 1px #aaa;
        }
      }
    }
  }

  .description {
    text-align: center;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background: #000;
    opacity: 0.6;
    border: 1px solid #2d3f6f;
    @include border-radius(20px);
  }
}

.burgermenu,
.page-title {
  display: none;
}

@media screen and (max-width: 768px) {
  header {
    background-size: 100% auto;
    background-position: center;
    height: 10vh;
    position: fixed;
    z-index: 5;
    box-shadow: 1px 0px 10px rgba(255, 255, 255, 0.8);
  }
  .header-container {
    width: 95%;

    .navigation {
      display: none;
    }

    .description {
      display: none;
    }

    .burgermenu {
      display: block;
      font-size: 2rem;
      position: absolute;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
    }

    .page-title {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5rem;
      font-family: $game-headline-font;
    }
  }
}
</style>
