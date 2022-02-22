<template>
  <div class="modal">
    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .modal {
    overflow: hidden;
    background: linear-gradient(265.82deg, #5EC0A9 4.04%, rgba(13, 175, 150, 0.81) 64.05%);
    position: relative;
    &::before {
      background-image: url("~@/assets/images/photo/conditions-bg.png");
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      content: '';
      user-select: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  }
</style>