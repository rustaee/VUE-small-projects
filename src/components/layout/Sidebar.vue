<template>
  <aside>
    <ul>
      <li><router-link to="/expandingcards">Expanding Cards</router-link></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  background: $sidebar;
  width: 200px;
  padding: 10px;
  position: absolute;
  height: 80vh;
}

li {
  list-style: none;
  a {
    text-decoration: none;
    color: $secondary-color;
  }
}
</style>
