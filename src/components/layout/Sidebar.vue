<template>
  <aside>
    <ul>
      <li><router-link to="/expandingcards">Expanding Cards</router-link></li>
      <li>
        <router-link :to="{ name: 'Progress' }">Progress Bar</router-link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 200px;
  padding: 25px 0;
  position: absolute;
  height: 80vh;
}

li {
  list-style: none;
  position: relative;
  a {
    text-decoration: none;
    color: $secondary-color;
    padding: 10px;
    border-radius: 15px 0 0 15px;
    width: 100%;
    display: block;
  }

  a.router-link-active {
    color: $body;
    background: $main-background;
  }
}
</style>
