<template>
  <div class="not-found">
    <img src="@/assets/images/photo/404.png" alt="404" class="not-found__image" />
    <div class="not-found__title">404</div>
    <div class="not-found__text">Что-то пошло не так...</div>
    <div class="not-found__link">
      <router-link to="/">На главную</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    max-width: 1080px;
    margin: 0 auto;
    height: 65vh;
    &__image {
      display: block;
      width: 158px;
      height: 158px;
      margin: 168px auto 0;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 144px;
      font-weight: 900;
      line-height: 176px;
      color: #9a95a7;
      text-align: center;
      @media screen and (max-width: 680px) {
        font-size: 100px;
        line-height: 130px;
      }
    }
    &__text {
      font-family: RF Dewi Expanded;
      font-size: 24px;
      font-weight: 900;
      line-height: 29px;
      text-align: center;
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 12px;
      }
    }
    &__link {
      display: flex;
      justify-content: center;
      margin: 58px 0 0;
      @media screen and (max-width: 680px) {
        margin: 34px 0 0;
      }
      a {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        border: 2px solid black;
        padding: 26px 68px;
        border-radius: 50px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          padding: 12px 30px;
        }
      }
    }
  }
</style>