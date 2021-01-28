<template>
  <div id="scroll">
    <!-- Loading before fetching data -->
    <base-loading v-if="loading"
      ><h1>Retrieving Data from API</h1></base-loading
    >

    <h1 v-if="blink < 3" :class="{ blink: blink == 2 }">Scroll to see the animation</h1>
    <post-box
      v-for="post in data"
      :title="post.strCategory"
      :thumbnail="post.strCategoryThumb"
      :description="post.strCategoryDescription"
      :key="post.idCategory"
      class="news show"
    >
      <!-- <base-card v-for="post in data" class="news" :key="post.idCategory">
      <div>
        <h2>{{ post.strCategory }}</h2>
      </div>
    </base-card> -->
    </post-box>
  </div>
</template>
<script>
import Posts from "@/components/scrollAnimation/Posts.vue";

export default {
  components: { "post-box": Posts },
  data() {
    return {
      loading: true,
      data: [],
      showClass: false,
      error: null,
      blink: 1 //to deactive the animation after scrolling
    };
  },
  methods: {
    fetchData() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
        method: "GET",
        headers: {}
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          //console.log(data);
          this.data = data.categories;
          this.loading = false;
        })
        .catch(err => {
          //console.error(err);
          this.error = err;
        });
    },
    checkBoxes() {
      this.blink++; //to deactive the blink animation
      const trigger = (window.innerHeight / 5) * 4;
      const boxes = document.querySelectorAll(".news");
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < trigger) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
  },
  mounted() {
    setTimeout(this.fetchData, 2000);

    window.addEventListener("scroll", this.checkBoxes);
    this.checkBoxes();
  }
};
</script>
<style lang="scss" scoped>
#scroll {
  width: 90%;
  text-align: center;
}
.news {
  transform: translateX(400%);
  transition: transform 0.5s ease-out;
}

.news:nth-of-type(even) {
  transform: translateX(-400%);
}
.news.show {
  transform: translateX(0);
}

h1.blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media screen and(min-width: 1200px) {
  #scroll {
    width: 80%;
  }
}

@media screen and(max-width: 768px) {
  h1 {
    font-size: 1rem;
  }
}
</style>
