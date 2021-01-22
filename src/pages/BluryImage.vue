<template>
  <div id="blury-image">
    <base-card class="question">
      <h1>
        Do you know the five colours of the Olympic rings?
      </h1>
    </base-card>
    <base-card class="answer">
      <div
        class="answer-image"
        style="background-image: url(../../assets/blury-images/olympic-rings.jpg);"
        :style="`filter: blur(${blur}px)`"
      ></div>

      <div class="loading" :style="{ opacity: loadOpacity }">
        {{ loading }}%
      </div></base-card
    >
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      loading: 0,
      int: null,
      loadOpacity: 1,
      blur: 70
    };
  },
  methods: {
    blurring() {
      this.loading++;
      this.loadOpacity = this.scale(this.loading, 0, 100, 1, 0);
      this.blur = this.scale(this.loading, 0, 100, 70, 0);
      if (this.loading > 99) {
        clearInterval(this.int);
      }
    },
    scale(num, inMin, inMax, outMin, outMax) {
      return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  },
  mounted() {
    this.int = setInterval(() => this.blurring(), 40);
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");
#blury-image {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $font-color;
  font-family: "Exo", sans-serif;
}

.card.answer {
  width: 43%;
  height: 50vh;
  padding: 0;
  position: relative;
}

.question {
  display: flex;
  align-items: center;
  text-align: center;
  width: 43%;
  height: 50vh;
}

.answer-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  filter: blur(70px);
}

.loading {
  font-size: 50px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  left: 50%;
  margin-left: -20px;
  color: #fff;
}

@media screen and (max-width: 768px) {
  #blury-image {
    flex-direction: column;
  }

  .question,
  .answer {
    width: 90%;
  }
}
</style>
