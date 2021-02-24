<template>
  <div class="iq" :class="{ active: active }">
    <div v-if="active" class="comment-icon">
      <font-awesome-icon class="open" icon="comment" />
    </div>
    <div v-if="active" class="comment-icon">
      <font-awesome-icon class="close" icon="comment" />
    </div>
    <h3 class="question">
      {{ question }}
    </h3>
    <p class="answer">
      {{ answer }}
    </p>
    <button class="toggle" @click="activeBox()">
      <font-awesome-icon icon="times" />
      <font-awesome-icon icon="angle-down" />
    </button>
  </div>
</template>
<script>
export default {
  props: ["question", "answer"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    activeBox() {
      this.active = !this.active;
    }
  }
};
</script>
<style lang="scss" scoped>
.iq {
  background-color: transparent;
  border: 1px solid $effect-base-color-2;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  width: 600px;
  max-width: 100%;

  .question {
    z-index: 5;
    margin: 0 35px 0 0;
    position: relative;
  }

  .answer {
    position: relative;
    margin: 30px 0;
    display: none;
  }

  .toggle {
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    @extend %flex-row;
    font-size: 16px;
    padding: 0;
    position: absolute;
    top: 25px;
    right: 10px;
    padding: 5px 7px;
    text-align: right;
    color: #fff;

    .fa-times {
      display: none;
    }

    &:focus {
      outline: 0;
    }
  }

  &.active {
    background-color: $effect-base-color-2;
    box-shadow: 0 3px 6px rgb(255, 255, 255, 0.2),
      0 3px 6px rgb(255, 255, 255, 0.2);
    color: $effect-light-font-color;

    .answer {
      display: block;
    }
    .comment-icon {
      font-size: 7rem;
      opacity: 0.3;
      position: absolute;
      top: 8px;
      left: 20px;
      color: #ff5800;
      z-index: 0;

      &:nth-of-type(2) {
        color: #d800ff;
        top: -30px;
        left: -30px;
        transform: rotateY(180deg);
      }
    }

    .toggle {
      background: $effect-body-bg;
      color: $effect-dark-font-color;
    }

    .fa-times {
      display: block;
    }

    .fa-angle-down {
      display: none;
    }
  }
}
</style>
