<template>
  <div class="iq-container">
    <IqBox
      v-for="question in questions"
      :key="question.id"
      :question="question.question"
      :answer="question.answer"
    ></IqBox>
  </div>
</template>
<script>
import IqBox from "@/components/funIQ/IqBox.vue";
export default {
  components: { IqBox },
  data() {
    return {
      questions: [
        {
          id: 0,
          question:
            "How can you drop a raw egg onto a concrete floor without cracking it?",
          answer: "Concrete floors are very hard to crack"
        },
        {
          id: 2,
          question: "What looks like half apple?",
          answer: "The other half."
        },
        {
          id: 3,
          question: " What often falls but never gets hurt?",
          answer: "Rain"
        },
        {
          id: 4,
          question:
            "If you throw a red stone into the blue sea, what it will become?",
          answer: " It becomes wet"
        },
        {
          id: 5,
          question:
            "Why is it impossible to send a telegram to Washington today?",
          answer: "Because he is dead"
        },
        {
          id: 6,
          question: "How can a man go 8 days without sleep?",
          answer: "He sleeps at night"
        },
        {
          id: 7,
          question: "How can you lift an elephant with one hand?",
          answer:
            "It is not a problem. Since you will never find an elephant with one hand"
        },
        {
          id: 8,
          question:
            "If you have 3 apples and 4 oranges in 1 hand and 4 apples and 3 oranges in the other hand. What would you have?",
          answer: "Very large hands"
        },
        {
          id: 9,
          question:
            "Approximately how many birthdays does the average Japanese woman have?",
          answer: "Just one. All the others are anniversaries"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.iq-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
