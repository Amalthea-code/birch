<template>
  <div class="main-section">
    <h1 class="main-section__title">ЛАГЕРЬ «БЕРЁЗКА»</h1>
    <img class="main-section__image" src="@/assets/images/photo/main-section.jpg" alt="">
    <p class="main-section__sub-title">
      <span :style="{ backgroundColor: color }">
        {{ subTitle }}
      </span>
    </p>
    <router-link to="/#buy">
      <span :style="{ backgroundColor: colorBuy }" class="main-section__buy-button">
        Купить путевку
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: 'г. саратов, кумысная поляна'
    },
    color: {
      type: String,
      default: '#F98419'
    },
    colorBuy: {
      type: String,
      default: '#F98419'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-section {
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative;
    a {
      text-decoration: none;
    }
    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
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
      display: flex;
      justify-content: center;
      margin: 14px auto 0;
      text-transform: uppercase;   
      span {
        display: inline;
        color: white;
        font-family: RF Dewi Expanded;
        font-size: 22px;
        font-weight: 900;
        position: relative;
        text-align: center;
        z-index: 3;
        padding: 20px 24px;
        border-radius: 14px;
      }
    }
    &__buy-button {
      box-sizing: border-box;
      display: block;
      position: relative;
      z-index: 3;
      font-family: RF Dewi Expanded;
      font-size: 22px;
      font-weight: 900;
      color: white;
      padding: 20px 24px;
      border-radius: 14px;
      width: 280px;
      top: 40px;
      left: calc(50% - 140px);
    }
    @media screen and (max-width: 1300px) {
      &__title {
        font-size: 46px;
        line-height: 55px;
      }
      &__sub-title {
        span {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
    @media screen and (max-width: 680px) {
      &__title {
        font-size: 30px;
        line-height: 36px;
      }
      &__sub-title {
        span {
          width: auto;
          padding: 20px 24px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
</style>
