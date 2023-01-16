<template>
<a target="blank" href="https://yandex.ru/maps/-/CCUyvXaXGD">
  <div class="maps">
    <div class="maps__card">
      <div class="maps__logo"><maps-logo /></div>
      <p class="maps__link">Саратовская обл. г.Саратов, Большая Кумысная поляна, а/я 1344</p>
    </div>
  </div>
</a>
</template>

<script>
  import mapsLogo from '@/assets/images/icons/maps-logo'
  export default {
    components: {
      mapsLogo
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  .maps {
    padding: 198px calc((100vw - 1080px)/2) 200px;
    background-image: url('~@/assets/images/photo/maps.png');
    background-size: cover;
    background-position: bottom;
    position: relative;
    @media screen and (max-width: 1300px) {
      padding: 56px calc((100vw - 620px)/2) 400px;
    }
    @media screen and (max-width: 680px) {
      background-position: 80%;
      padding: 0 0 400px;
    }

    &__card {
      height: 364px;
      width: 500px;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 28px 56px 0;
      justify-content: flex-start;
      align-items: center;
      @media screen and (max-width: 1300px) {
        width: 400px;
        height: 300px;
      }
      @media screen and (max-width: 680px) {
        border-radius: 0;
        width: calc(100% - 164px);
        padding: 28px 82px 44px;
        height: auto;
      }
    }
    &__logo {
      width: 88px;
      height: 112px;
      margin: 0 0 32px;
    }
    &__link {
      width: 100%;
      font-family: RF Dewi Expanded;
      font-size: 24px;
      font-weight: 900;
      line-height: 29px;
      color: black;
      text-decoration: none;
      @media screen and (max-width: 1300px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>