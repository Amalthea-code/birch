<template>
  <div class="info">
    <div class="info__title" :style="{ background: backgroundColor }">{{ title }}</div>
    <div class="info__box" :style="{ borderColor: color }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: '',
        type: String
      },
      color: {
        default: '',
        type: String
      },
      backgroundColor: {
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    border: 2px solid;
    position: relative;
    border-radius: 24px;
    margin: 0 0 50px;
    @media screen and (max-width: 680px) {
      margin: 0 0 20px;
    }
    &__title {
      box-sizing: border-box;
      position: relative;
      top: -4px;
      left: -2px;
      width: calc(100% + 4px);
      font-family: RF Dewi Expanded;
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      color: white;
      padding: 30px 50px;
      border-radius: 24px;
      z-index: 2;
      &::before {
        background-image: url("~@/assets/images/photo/events-title.png");
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        z-index: -1;
        border-radius: 24px;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
        padding: 24px 26px;
        width: calc(100% + 4px);
      }
    }
    &__box {
      padding: 24px 60px 44px;
      @media screen and (max-width: 680px) {
        padding: 24px 24px 30px;
        font-family: Montserrat;
        font-size: 14px;
        line-height: 18px;
        height: auto;
      }
    }
  }
</style>