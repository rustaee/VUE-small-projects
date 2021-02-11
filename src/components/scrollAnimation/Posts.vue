<template>
  <game-base-box class="news">
    <div class="thumb">
      <img :src="thumbnail" />
    </div>
    <h2>{{ title }}</h2>
    <div class="desc">{{ description }}</div>
  </game-base-box>
</template>

<script>
export default {
  props: ["title", "thumbnail", "description"]
};
</script>
<style lang="scss" scoped>
.news::after {
  clear: both;
  content: " ";
}

.thumb {
  float: right;
  width: 25%;

  img {
    width: 90%;
  }
}

.desc {
  font-size: 0.75rem;
  min-height: 150px;
  text-align: justify;
}

@media screen and(min-width: 1200px) {
  .desc {
    min-height: 200px;
  }
}

@media screen and(max-width: 768px) {
  .thumb {
    width: 50%;
  }
}
</style>
