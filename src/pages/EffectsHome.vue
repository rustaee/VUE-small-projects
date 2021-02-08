<template>
  <div class="main-container">
    <section class="dark-bg">
      <div class="content">
        <div class="effects-list">
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <span> Effect Name goes here!</span>
            </router-link>
          </div>
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <span> Effect Name goes here!</span>
            </router-link>
          </div>
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <span> Effect Name goes here!</span>
            </router-link>
          </div>
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <span> Effect Name goes here!</span>
            </router-link>
          </div>
          <div class="effect">
            <router-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <span> Effect Name goes here!</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="light-bg">
      <div class="content">
        <h2>My Favorites</h2>
        <div class="my-favorites">
          <div class="fav-effect">
            <img src="@/assets/funicon.jpg" alt="" />
            <div class="name">Effect Title</div>
            <div class="desc">A short description</div>
            <router-link :to="{ name: 'Effects' }"
              ><button class="base-btn">Show me!</button></router-link
            >
          </div>
          <div class="fav-effect">
            <img src="@/assets/funicon.jpg" alt="" />
            <div class="name">Effect Title</div>
            <div class="desc">A short description</div>
            <router-link :to="{ name: 'Effects' }"
              ><button class="base-btn">Show me!</button></router-link
            >
          </div>
          <div class="fav-effect">
            <img src="@/assets/funicon.jpg" alt="" />
            <div class="name">Effect Title</div>
            <div class="desc">A short description</div>
            <router-link :to="{ name: 'Effects' }"
              ><button class="base-btn">Show me!</button></router-link
            >
          </div>
          <div class="fav-effect">
            <img src="@/assets/funicon.jpg" alt="" />
            <div class="name">Effect Title</div>
            <div class="desc">A short description</div>
            <router-link :to="{ name: 'Effects' }"
              ><button class="base-btn">Show me!</button></router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.main-container {
  @extend %flex-column;
}

.dark-bg,
.light-bg {
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 80%;
    padding: 20px 0;
    text-align: center;
  }
}

.dark-bg {
  background: $effect-body-bg;

  .content {
    color: $effect-dark-font-color;
  }
}

.light-bg {
  background: $effect-base-color;

  .content {
    color: $effect-light-font-color;
  }
}

.effects-list {
  @extend %flex-row;

  .effect {
    margin: 20px 3rem;
    position: relative;

    a {
      color: $effect-light-bg;

      svg {
        color: $effect-light-font-color;
        margin-right: 10px;
        font-size: 2rem;
        position: absolute;
        bottom: 0;
      }

      span {
        position: relative;
        left: 2.7rem;
      }

      &:hover {
        color: $effect-base-color;

        svg {
          color: $effect-base-color;
          animation: rotate 1.2s ease infinite;
        }
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  12% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(90deg);
  }
  37% {
    transform: rotate(135deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(225deg);
  }
  75% {
    transform: rotate(270deg);
  }
  87% {
    transform: rotate(315deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.my-favorites{
  @extend %flex-row;

  .fav-effect{

    img{
      width: 70px;
      height: 70px;
      @include border-radius(50%);
    }
  }
}
</style>
