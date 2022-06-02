<template>
  <div class="cam">
    <h3 class="cam__title">ВЕБ-КАМЕРЫ</h3>
    <div class="cam__box">
      <iframe src="https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=e851fb8225f04010afd0e642be6e7e09&autoplay=0&archive=1" width="800" height="600" frameBorder="0" seamless="seamless" allowfullscreen>Ваш браузер не поддерживает фреймы!</iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cam {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 0 70px;

    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 34px 0 24px;
      }
    }
    &__box {
      display: flex;
      justify-content: center;
    }
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
  }
</style>