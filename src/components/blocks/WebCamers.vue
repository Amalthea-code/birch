<template>
  <div class="camers">
    <h3 class="camers__title">ВЕБ-КАМЕРЫ</h3>

    <div class="camers__box">
      <div class="camers__items">
        <div v-if="select === 0" class="camers__item">
          <iframe src="https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=e851fb8225f04010afd0e642be6e7e09&autoplay=0&archive=1" width="100%" height="600" frameBorder="0" seamless="seamless" allowfullscreen>Ваш браузер не поддерживает фреймы!</iframe>
        </div>
        <div v-if="select === 1" class="camers__item">
          <iframe src="https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=6209f86bf2bd41c18a1b28ee0bfd2bfe&autoplay=0&archive=1" width="100%" height="600" frameBorder="0" seamless="seamless" allowfullscreen>Ваш браузер не поддерживает фреймы!</iframe>
        </div>
        <div v-if="select === 2" class="camers__item">
          <iframe src="https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=53ff6fd49e204cc28db2dea0ef638064&autoplay=0&archive=1" width="100%" height="600" frameBorder="0" seamless="seamless" allowfullscreen>Ваш браузер не поддерживает фреймы!</iframe>
        </div>
      </div>
      <div class="camers__tabs">
        <div @click="select = 0" :class="{'camers__tab': true, 'camers__tab_active': select === 0}">Веселая площадка</div>
        <div @click="select = 1" :class="{'camers__tab': true, 'camers__tab_active': select === 1}">Бассейн</div>
        <div @click="select = 2" :class="{'camers__tab': true, 'camers__tab_active': select === 2}">Стадион</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        select: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .camers {
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
      justify-content: space-between;
      @media screen and (max-width: 1300px) {
        flex-direction: column-reverse;
      }
    }
    &__tabs {
      padding: 0 0 0 30px;
      @media screen and (max-width: 1300px) {
        padding: 0 0 40px 0;
      }
    }
    &__tab {
      font-family: Montserrat;
      font-size: 20px;
      line-height: 24px;
      padding: 10px 0;
      cursor: pointer;
      &_active {
        font-weight: 700;
      }
    }
    &__items {
      width: 100%;
    }
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
  }
</style>