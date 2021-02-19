<template>
  <section class="dark-bg">
    <h1>Api used: icanhazdadjoke.com</h1>
    <div class="content">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">
        <span v-if="loading"><font-awesome-icon icon="spinner"/></span>
        {{ joke }}
      </div>
      <button @click="generateJoke()" id="jokeBtn" class="btn">
        Get Another Joke
      </button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      joke: null,
      loading: true
    };
  },
  methods: {
    async generateJoke() {
      this.loading = true;
      this.joke = null;
      const result = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      const data = await result.json();
      this.joke = data.joke;
      this.loading = false;
    }
  },
  mounted() {
    this.generateJoke();
  }
};
</script>
<style lang="scss" scoped>
.content {
  background: $effect-base-color;
  border-radius: 10px;
  padding: 50px 20px;
  color: $effect-light-font-color;
  text-align: center;
  box-shadow: 0 10px 20px rgba($effect-dark-font-color, 0.5),
    0 6px 6px rgba($effect-dark-font-color, 0.5);
  max-width: 90%;
  width: 800px;
}

span {
  display: block;
  font-size: 50px;

  svg {
    animation: rotate 1s infinite;
  }
}
h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}

.joke {
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
}

.btn {
  background-color: $effect-body-bg;
  color: $effect-dark-font-color;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: 0;
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
</style>
