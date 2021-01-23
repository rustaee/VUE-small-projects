<template>
  <!-- Question Box -->
  <base-card class="question">
    <h1>
      {{ item.question }}
    </h1>
    <base-button @click="changeItem()">Show me Another Fact</base-button>
  </base-card>

  <!-- Answer Box -->
  <base-card class="answer">
    <div
      class="answer-image"
      :style="{
        'background-image': `url(../../assets/blury-images/${item.answerImage})`,
        filter: `blur(${blur}px)`
      }"
    ></div>

    <div class="loading" :style="{ opacity: loadOpacity }">{{ loading }}%</div>
  </base-card>
</template>

<script>
export default {
  emits: ["change-question"],
  props: ["item"], //Random Item to show
  data() {
    return {
      loading: 0, //loading Counter
      int: null, //Interval
      loadOpacity: 1, //loading Counter Opacity
      blur: 70
    };
  },
  methods: {
    blurring() {
      this.loading++;
      //Changing the blur and opacity in scale of loading counter
      this.loadOpacity = this.scale(this.loading, 0, 100, 1, 0);
      this.blur = this.scale(this.loading, 0, 100, 70, 0);
      if (this.loading > 99) {
        clearInterval(this.int);
      }
    },
    scale(num, inMin, inMax, outMin, outMax) {
      return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    },
    changeItem() {
      this.$emit("change-question");
    }
  },
  created() {
    this.int = setInterval(() => this.blurring(), 40);
  }
};
</script>

<style lang="scss" scoped>
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
  flex-direction: column;
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
  .question,
  .answer {
    width: 90%;
  }
}
</style>
