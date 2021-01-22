<template>
  <div class="container">
    <ImageCard
      v-for="image in images"
      :key="image.id"
      :id="image.id"
      :url="image.url"
      :title="image.title"
      :active="image.active"
      @activate-class="addActiveClass"
    >
    </ImageCard>
  </div>
</template>

<script lang="ts">
import ImageCard from "@/components/expandingCards/ImageCard.vue";
export default {
  components: { ImageCard },
  data() {
    return {
      images: [
        {
          id: 1,
          title: "1 - Explore The World",
          url: "1.jpg",
          active: true
        },
        {
          id: 2,
          title: "2 - Explore The World",
          url: "2.jpg",
          active: false
        },
        {
          id: 3,
          title: "3 - Explore The World",
          url: "3.jpg",
          active: false
        },
        {
          id: 4,
          title: "4 - Explore The World",
          url: "4.jpg",
          active: false
        },
        {
          id: 5,
          title: "5 - Explore The World",
          url: "5.jpg",
          active: false
        },
        {
          id: 6,
          title: "6 - Explore The World",
          url: "6.jpg",
          active: false
        },
        {
          id: 7,
          title: "7 - Explore The World",
          url: "7.jpg",
          active: false
        }
      ]
    };
  },
  methods: {
    addActiveClass(event) {
      this.images.forEach(image => {
        image.id == event ? (image.active = true) : (image.active = false);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");

.container {
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  height: 80vh;
  width: 90%;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}
</style>
