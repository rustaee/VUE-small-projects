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
  width: 40%;

  img {
    width: 90%;
  }
}

.desc {
  font-size: 0.75rem;
  min-height: 150px;
}

@media screen and(max-width: 768px) {
  h2 {
    font-size: 1rem;
    padding: 15px 0;
  }
  .thumb {
    width: 50%;
    img {
      width: 100%;
    }
  }

  .desc {
    display: none;
  }
}

@media screen and(min-width: 1200px) {
  .desc {
    min-height: 200px;
  }
}
</style>
