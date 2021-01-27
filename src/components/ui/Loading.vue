<template>
  <teleport to="body">
    <div class="loading">
      <div class="load-background"></div>
      <div class="load-text">
        <div><slot></slot></div>
        <div class="spinner"><font-awesome-icon icon="spinner" /></div>
      </div>
    </div>
  </teleport>
</template>
<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  color: $body;
  top: 0;
}

.load-background {
  background-color: #000;
  opacity: 40%;
  width: 100%;
  height: 100%;
}

.load-text {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 40%;
  left: 50%;
  margin-left: -100px;
}

.spinner {
  animation: loader 2s linear infinite;
  font-size: 5rem;
  width: 5rem;
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
