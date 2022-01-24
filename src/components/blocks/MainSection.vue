<template>
  <div class="main-section">
    <h1 class="main-section__title">ЛАГЕРЬ «БЕРЁЗКА»</h1>
    <p class="main-section__sub-title">г. саратов, кумысная поляна</p>
  </div>
</template>
<style lang="scss" scoped>
  .main-section {
    background: url(~@/assets/images/photo/main-section.jpg) 0 0 no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000a3;
      z-index: 2;
      content: '';
    }
    
    &__title {
      color: white;
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-align: center;
      margin: 0;
      position: relative;
      z-index: 3;
      width: 100%;
      padding-top: 40vh;
    }
    &__sub-title {
      color: white;
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      margin: 0;
      position: relative;
      text-align: center;
      width: 100%;
      z-index: 3;
      width: 100%;
    }
    @media screen and (max-width: 1300px) {
      &__title {
        font-size: 46px;
        line-height: 55px;
      }
      &__sub-title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        line-height: 30px;
      }
    }
    @media screen and (max-width: 680px) {
      &__title {
        font-size: 30px;
        line-height: 36px;
      }
      &__sub-title {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
</style>
