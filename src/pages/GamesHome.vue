<template>
  <section class="white-container">
    <div class="main-area">
      <div class="page-description">
        <h1 class="title">Simple Javascript Games</h1>
        <div class="description">
          <p>
            Here you can see Some of my small projects using Vue.js
            <br />
            Wish you a happy time :)
          </p>
        </div>
        <hr />
      </div>
      <div class="games">
        <h2 class="name">general knowledge</h2>

        <router-link :to="{ name: 'Blur' }">
          <button class="base-btn">Let's play!</button>
        </router-link>
      </div>
    </div>
  </section>
  <section class="gray-container">
    <div class="main-area"></div>
  </section>
</template>
<style lang="scss" scoped>
.gray-container,
.white-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
}

.gray-container {
  background: $game-gray-container;
}

.main-area {
  @extend %flex-row;
  justify-content: center;
  width: 70%;
  align-items: stretch;

  .games {
    position: relative;
    width: 23%;
    background: $game-font-color;
    color: $game-light-color;
    text-align: center;
    padding: 10px 5px 40px 5px;
    margin: 20px 1%;
    font-family: $game-headline-font;
    font-size: 1.1rem;
    box-shadow: 4px 4px 4px #eee;
    border-radius: 2px;

    &:hover {
      background: $game-base-color;
      transition: background 0.3s ease;

      .base-btn {
        color: $game-base-color;
      }
    }

    h2 {
      font-size: 1rem;
      font-weight: normal;
    }

    .base-btn {
      width: 80%;
      position: absolute;
      right: 50%;
      transform: translateX(50%) translateY(55%);
      border: 1px solid #ccc;

      &:hover {
        border-color: $game-base-color;
        transition: all 0.3s ease;
      }
    }
  }
}

.page-description {
  display: none;
  text-align: center;
  width: 100%;
  @extend %flex-column;

  .title {
    font-family: $game-font;
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  hr {
    border: 1px solid $game-base-color;
    width: 150px;
  }
}

@media screen and (max-width: 768px) {
  .page-description {
    display: flex;
  }

  .main-area {
    .games {
      width: 45%;
    }
  }
}
</style>
