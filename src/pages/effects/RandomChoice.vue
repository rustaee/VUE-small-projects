<template>
  <div class="dark-bg">
    <div class="content" id="random-choice-content">
      <h3>
        Enter All of the choices divided by comma ( , ). <br />Press Enter when
        you're done
      </h3>
      <textarea
        v-model="textareaInput"
        @keyup="createTag()"
        @keyup.enter="randomSelect()"
        placeholder="choice 1, choice 2, choice3, ..."
        id="textarea"
      ></textarea>
      <div id="tags">
        <span
          :class="{ highlight: index == randomTag }"
          v-for="(tag, index) in tags"
          :key="index"
          class="tag"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textareaInput: "",
      tags: [],
      times: 30, //number of times highlighting options
      randomTag: null
    };
  },
  methods: {
    createTag() {
      this.tags = this.textareaInput
        .split(",")
        .filter(tag => tag.trim() !== "")
        .map(tag => tag.trim());

      //Empty previous random selected
      this.randomTag = null;
    },
    randomSelect() {
      const interval = setInterval(() => {
        this.selectRandomTag();
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        //choosing an item after the process is done
        this.textareaInput = "";
        this.selectRandomTag();
      }, this.times * 100);
    },
    selectRandomTag() {
      this.randomTag = Math.floor(Math.random() * this.tags.length);
    }
  }
};
</script>
<style lang="scss">
#random-choice-content {
  width: 80%;
  max-width: 800px;

  h3 {
    margin: 10px 0 20px;
  }

  textarea {
    display: block;
    border: none;
    width: 100%;
    height: 100px;
    padding: 10px;
    font-family: inherit;
    margin: 0 0 20px;
    font-size: 16px;
    opacity: 0.9;

    &:focus {
      outline: none;
    }
  }

  .tag {
    background-color: $effect-base-color;
    border-radius: 50px;
    color: $effect-light-font-color;
    padding: 10px 20px;
    margin: 0 5px 10px 0;
    font-size: 14px;
    display: inline-block;

    &.highlight {
      background-color: $effect-analogous-color-2;
      color: #fff;
    }
  }
}
</style>
