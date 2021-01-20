<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress" id="progress" :style="{ width: progressBar }"></div>
      <div class="circle" :class="activeSteps.includes(1) ? 'active' : ''">
        1
      </div>
      <div class="circle" :class="activeSteps.includes(2) ? 'active' : ''">
        2
      </div>
      <div class="circle" :class="activeSteps.includes(3) ? 'active' : ''">
        3
      </div>
      <div class="circle" :class="activeSteps.includes(4) ? 'active' : ''">
        4
      </div>
    </div>
    <base-card>
      <transition name="steps" mode="out-in">
        <Step1 v-if="currentStep == 1"></Step1>
        <Step2 v-else-if="currentStep == 2"></Step2>
        <Step3 v-else-if="currentStep == 3"></Step3>
        <Step4 v-else></Step4>
      </transition>
    </base-card>
    <div>
      <button
        class="btn"
        id="prev"
        @click="prevStep()"
        :disabled="disabled.prev"
      >
        Prev
      </button>
      <button
        class="btn"
        id="next"
        @click="nextStep()"
        :disabled="disabled.next"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Step1 from "../components/progressBar/Step1.vue";
import Step2 from "../components/progressBar/Step2.vue";
import Step3 from "../components/progressBar/Step3.vue";
import Step4 from "../components/progressBar/Step4.vue";
export default {
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      currentStep: 1,
      activeSteps: [1],
      steps: 4,
      disabled: {
        prev: true,
        next: false
      }
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
      this.disabled.prev = false;
      if (this.currentStep >= this.steps) {
        this.currentStep = this.steps;
        this.disabled.next = true;
      }
      this.activeSteps.push(this.currentStep);
    },
    prevStep() {
      this.currentStep--;
      this.disabled.next = false;
      if (this.currentStep <= 1) {
        this.currentStep = 1;
        this.disabled.prev = true;
      }
      this.activeSteps.pop();
    }
  },
  computed: {
    progressBar() {
      return ((this.activeSteps.length - 1) / (this.steps - 1)) * 100 + "%";
    }
  },
  mounted() {
    //   const actives = document.querySelectorAll(".active");
    //   progress.style.width =
    //     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");

.container {
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden;
  margin: 0;
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  width: 100%;
  position: absolute;
  background: $inactivebg;
  height: 4px;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
}

.progress {
  width: 0%;
  position: absolute;
  background: $progress;
  height: 4px;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  @include transition(0.5s ease);
}

.circle {
  background-color: $main-background;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid $inactivebg;
  z-index: 1;
  @include transition(all 0.5s ease 0.3s);
}

.circle.active {
  border-color: $progress;
  color: $progress;
}

.btn {
  background-color: $progress;
  color: #fff;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  padding: 10px 40px;
  margin: 5px;
  font-size: 16px;
}

.btn:active {
  transform: scale(0.97);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: $inactivebg;
  cursor: not-allowed;
}

.steps-enter-active,
.steps-leave-active {
  transition: opacity 0.3s ease;
}

.steps-enter-from,
.steps-leave-to {
  opacity: 0;
}
</style>
