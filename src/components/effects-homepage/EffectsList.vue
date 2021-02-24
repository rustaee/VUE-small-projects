<template>
  <div class="effects-list">
    <div class="effect">
      <router-link to="/expandingcards">
        <font-awesome-icon icon="images" />
        <span> Expanding Cards</span>
      </router-link>
    </div>
    <div class="effect">
      <router-link :to="{ name: 'Progress' }">
        <font-awesome-icon icon="fan" />
        <span> Progress bar</span>
      </router-link>
    </div>
    <div class="effect">
      <router-link :to="{ name: 'Scroll' }">
        <font-awesome-icon icon="scroll" />
        <span>Scroll Animation</span>
      </router-link>
    </div>
    <div class="effect">
      <router-link :to="{ name: 'Joke' }">
        <font-awesome-icon icon="laugh-squint" />
        <span>Dad Jokes</span>
      </router-link>
    </div>
    <div class="effect">
      <router-link :to="{ name: 'IQ' }">
        <font-awesome-icon icon="brain" />
        <span>IQ Fun Test</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.effects-list {
  @extend %flex-row;
  flex-wrap: wrap-reverse;

  .effect {
    margin: 20px 3rem;
    position: relative;

    a {
      color: $effect-light-bg;

      svg {
        color: $effect-dark-font-color;
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

@media screen and (max-width: 786px) {
  .effect:nth-of-type(3) {
    display: none;
  }
}
</style>
