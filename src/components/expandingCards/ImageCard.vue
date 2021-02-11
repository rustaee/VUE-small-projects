<template>
  <div
    class="panel"
    :class="{ active: active }"
    :style="`background-image: url(../../../assets/expandingcards/${url}`"
    @click="addActiveClass()"
  >
    <h3>{{ title }}</h3>
  </div>
</template>
<script lang="ts">
export default {
  props: ["title", "url", "active", "id"],
  emits: ["activateClass"],
  data() {
    return {
      imageId: this.id
    };
  },
  methods: {
    addActiveClass() {
      this.$emit("activateClass", this.imageId);
    }
  }
};
</script>
<style lang="scss" scoped>
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  border-radius: 50px;
  color: $secondary-color;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;

  h3 {
    font-size: 20px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
    margin: 0;
  }
}

.panel.active {
  flex: 5;
  background-color: #ccc;

  h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
}

@media screen and (max-width: 768px) {
  .panel:nth-of-type(7),
  .panel:nth-of-type(5),
  .panel:nth-of-type(6) {
    display: none;
  }
}
</style>
