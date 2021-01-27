<template>
  <base-card class="news">
    <div class="thumb">
      <img :src="thumbnail" />
    </div>
    <h2>{{ title }}</h2>
    <div class="desc">{{ description }}</div>
  </base-card>
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
  flex: 40%;

  img {
    width: 90%;
  }
}

.desc {
  font-size: 0.75rem;
  min-height: 150px;
}

@media screen and(max-width: 768px) {
  .thumb {
    float: none;
  }
}

@media screen and(min-width: 1200px) {
  .desc {
    font-size: 1rem;
    min-height: 200px;
  }
}
</style>
