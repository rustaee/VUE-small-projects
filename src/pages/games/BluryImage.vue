<template>
  <div class="container">
    <!-- Game description -->
    <div class="description">
      <h1>General Knowledge</h1>
      <p>
        How's your general knowledge? Let's find out. <br />
        you have 5 seconds to answer every questions. After that, the answer
        image will be clear.
      </p>
    </div>
    <!-- Q/A boxes -->
    <div id="blury-image">
      <question-answer
        @change-question="changeQuestion()"
        :item="randomItem"
      ></question-answer>
    </div>
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
          answer: null,
          answerImage: "olympic-rings.jpg"
        },
        {
          id: 2,
          question:
            "Which vitamin is the only one that you will not find in an egg?",
          answer: null,
          answerImage: "Vitamin_C.jpg"
        },
        {
          id: 3,
          question: "Do you know the smallest country in the world??",
          answer: "Vatican City",
          answerImage: "Vatican_City.png"
        },
        {
          id: 4,
          question: "Do you know the most famous Mexican beer?",
          answer: null,
          answerImage: "corona.jpg"
        },
        {
          id: 5,
          question:
            " Who has scored more career goals - Cristiano Ronaldo or Lionel Messi?",
          answer: null,
          answerImage: "ronaldo.jpg"
        },
        {
          id: 6,
          question: " What colour are the seats in the House of Commons?",
          answer: null,
          answerImage: "commons.jpg"
        },
        {
          id: 7,
          question: " What colour is found on 75% of the world’s flags?",
          answer: null,
          answerImage: "red.png"
        },
        {
          id: 8,
          question: "The song 'How Far I'll Go' features in which Disney film?",
          answer: "Moana",
          answerImage: "moana.jpg"
        },
        {
          id: 9,
          question: "Who discovered Penicillin?",
          answer: "alexander fleming",
          answerImage: "fleming.jpg"
        },
        {
          id: 10,
          question: "What is the most spoken language in the world?",
          answer: "Mandarin Chinese",
          answerImage: "mandarin.jpg"
        },
        {
          id: 11,
          question:
            "In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?",
          answer: "Pineapple",
          answerImage: "trophy.jpg"
        },
        {
          id: 12,
          question: " What colour is a giraffe's tongue?",
          answer: "blue",
          answerImage: "giraff.jpg"
        },
        {
          id: 13,
          question: "How many legs does a lobster have?",
          answer: "Eight",
          answerImage: "lobster.jpg"
        },
        {
          id: 14,
          question: "What's the best selling book of all time?",
          answer: "The Bible",
          answerImage: "bible.jpg"
        },
        {
          id: 15,
          question: "How many teeth does an adult human have?",
          answer: "32",
          answerImage: "teeth.jpg"
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

.description {
  text-align: center;
}

@media screen and (max-width: 768px) {
  #blury-image {
    flex-direction: column;
  }
}
</style>
