<template>
  <teleport to="body">
    <div class="loading">
      <div><slot></slot></div>
      <div class="spinner"><font-awesome-icon icon="spinner" /></div>
    </div>
  </teleport>
</template>
<style scoped>
.loading {
  position: fixed;
  z-index: 100;
  background-color: #000;
  display: flex;
  width: 100%;
  height: 100%;
  color: #fff;
  top: 0;
  opacity: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.spinner {
  animation: loader 2s linear infinite;
  font-size: 5rem;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
