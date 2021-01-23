<template>
  <div id="blury-image">
    <question-answer
      @change-question="changeQuestion()"
      :item="randomItem"
    ></question-answer>
  </div>
</template>

<script lang="ts">
import QuestionAnswer from "@/components/blury-images/QuestionAnswer.vue";
export default {
  components: {
    "question-answer": QuestionAnswer
  },
  data() {
    return {
      randomItem: null,
      questions: [
        {
          id: 1,
          question: "Do you know the five colours of the Olympic rings?",
          answerImage: "olympic-rings.jpg"
        },
        {
          id: 2,
          question:
            "Which vitamin is the only one that you will not find in an egg?",
          answerImage: "Vitamin_C.jpg"
        },
        {
          id: 3,
          question: "Do you know the smallest country in the world??",
          answerImage: "Vatican_City.png"
        },
        {
          id: 4,
          question: "4Do you know the most famous Mexican beer?",
          answerImage: "corona.jpg"
        },
        {
          id: 5,
          question:
            " Who has scored more career goals - Cristiano Ronaldo or Lionel Messi?",
          answerImage: "ronaldo.jpg"
        }
      ]
    };
  },
  methods: {
    changeQuestion() {
      this.randomItem = this.questions[
        Math.floor(Math.random() * this.questions.length)
      ];
    }
  },
  created() {
    this.changeQuestion();
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
