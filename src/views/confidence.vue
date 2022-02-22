<template>
  <div class="confidence">
    <confidence class="confidence__logo" />
    <div class="confidence__title">О детском телефоне доверия</div>
    <div class="confidence__text">
      Единый Общероссийский телефон доверия для детей, подростков и их родителей 8-800-2000-122.
      <br /><br />
      Принципы работы единого федерального номера телефона доверия для детей, подростков и их родителей:
    </div>
    <div class="confidence__button">
      <span @click="$router.go(-1)">Назад</span>
    </div>
    <ul class="confidence__list">
      <li class="confidence__list-element">Набираете номер;</li>
      <li class="confidence__list-element">Происходит определение региона, из которого звонят;</li>
      <li class="confidence__list-element">Звонок переадресуется в службу вашего региона;</li>
      <li class="confidence__list-element">Если линия занята, звонок переадресуется во вторую службу этого региона и т.д., пока не ответит психолог.</li>
    </ul>
    <div class="confidence__text">
      В службе телефона доверия работают прошедшие специальную подготовку психологи-консультанты.
      <br /><br />
      Их главная задача — снять остроту психо-эмоционального напряжения, переживаний, которые испытывает звонящий в данный момент, и уберечь юного или взрослого собеседника от опрометчивых и опасных поступков.
    </div>
  </div>
</template>

<script>
import confidence from '@/assets/images/icons/confidence'
  export default {
    components: {
      confidence
    }
  }
</script>

<style lang="scss" scoped>
  .confidence {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    max-width: 660px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding: 40px;
    @media screen and (max-width: 1300px) {
      max-width: 580px;
    }
    @media screen and (max-width: 680px) {
      margin: 40px 0 40px;
      padding: 20px;
      max-width: 260px;
    }
    &__logo {
      margin: 0 auto;
    }
    &__title {
      width: 100%;
      font-family: RF Dewi Expanded;
      font-size: 26px;
      font-weight: 900;
      line-height: 32px;
      text-align: center;
      margin: 24px 0 26px;
      @media screen and (max-width: 680px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      width: 100%;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 24px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      &-element {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    &__button {
        position: absolute;
        z-index: 2;
        border-radius: 20px;
        font-family: Montserrat;
        font-size: 16px;
        line-height: 19px;
        padding: 6px 8px;
        background-color: #fff;
        box-shadow: 0 4px 25px rgb(0 0 0 / 25%);
        top: 10px;
        right: 10px;
        cursor: pointer;
        span {
          color: #000;
          text-decoration: none;
        }
      }
  }
</style>