<template>
  <div class="home">
    <base-card>
      <div class="biography">
        <img class="avatar" src="/assets/avatar.jpg" />
        <h1>Welcome to my portfolio</h1>
        <p>
          My name is Mahdieh. I'm Practicing to be a front-end Developer and
          here you can see some of my small projects.
        </p>
        <p>Wish you a happy time!</p>
        <div class="signiture">
          Mahdieh Roustaei Shalmani
        </div>
      </div>
    </base-card>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Miss+Fajardose&display=swap");
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 15px;
}

.biography {
  font-family: "Kalam", sans-serif;
  font-size: 1.2rem;
  h1 {
    font-size: 1.4rem;
  }
  .avatar {
    width: 40%;
    float: left;
  }

  .signiture {
    font-family: "Miss Fajardose", cursive;
    font-size: 2em;
  }
}

@media screen and (max-size: 768px) {
  .home {
    flex-direction: column;
  }
}
</style>
