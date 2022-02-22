<template>
  <div class="promotion">
    <div class="promotion__mein">
      <img src="@/assets/images/icons/promotion-card.png" alt="" class="promotion__mein-img">
      <div class="promotion__mein-title">ПОЛУЧИТЕ<br />КЕШБЭК</div>
      <div class="promotion__mein-subtitle">С КАРТОЙ МИР</div>
      <promotion class="promotion__mein-svg"/>
      <div class="promotion__mein-button">
        <router-link to="/payment">Назад</router-link>
      </div>
    </div>
    <div class="promotion__info">
      <div class="promotion__info-title">Кешбэк при оплате картой «Мир»</div>
      <div class="promotion__info-text">
        Получите кешбэк до 20 000 ₽ за каждое бронирование на нашем официальном сайте!
        <br /><br />
        С 18 марта по 15 июня 2021 года совершите бронирование с оплатой на официальном сайте и получите кешбэк 20%. Забронировать и оплатить по акции можно 2 и более ночи на период с 18 марта по 30 июня 2021 года включительно.
      </div>
      <div class="promotion__info-title">Чтобы получить кешбэк:</div>
      <ul class="promotion__info-list">
        <li class="promotion__info-element">Зарегистрируйте вашу карту «Мир» в программе лояльности платёжной системы «Мир». Либо войдите в личный кабинет и проверьте, что ваша карта уже зарегистрирована.</li>
        <li class="promotion__info-element">Проверьте, что карту платёжной системы «Мир» вашего банка можно зарегистрировать в программе лояльности.</li>
        <li class="promotion__info-element">С 18 марта по 15 июня 2021 года забронируйте и оплатите проживание на сайте.</li>
        <li class="promotion__info-element">Выберите проживание от 2 ночей на период с 18 марта по 30 июня 2021 года включительно.</li>
        <li class="promotion__info-element">Выберите тариф, отмеченный знаком «Кешбэк по карте Мир».</li>
        <li class="promotion__info-element">Оплатите полную стоимость бронирования на нашем сайте банковской картой «Мир».</li>
      </ul>
      <div class="promotion__info-sub-text">
        Кешбэк в размере 20% от суммы бронирования, но не более 20 000 ₽ за одну бронь, придёт в течение 5 рабочих дней с момента оплаты. Количество бронирований по одной карте не ограничено, вы можете получить кешбэк несколько раз.
      </div>
    </div>
  </div>
</template>

<script>
  import Promotion from '@/assets/images/icons/promotion'
  export default {
    components: {
      Promotion
    }
  }
</script>

<style lang="scss" scoped>
  .promotion {
    position: relative;
    z-index: 1;
    max-width: 1050px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      margin: 40px 0 40px;
      max-width: 300px;
    }
    &__mein {
      background: linear-gradient(258.58deg, #F98419 8.47%, #FF9C41 100%);
      height: 352px;
      position: relative;
      @media screen and (max-width: 1300px) {
        height: 210px;
      }
      @media screen and (max-width: 680px) {
        height: 340px;
        border-radius: 20px;
      }
      &-title {
        position: relative;
        z-index: 1;
        font-family: RF Dewi Expanded;
        font-size: 48px;
        font-weight: 900;
        line-height: 58px;
        color: #fff;
        padding: 100px 0 0 320px;
        @media screen and (max-width: 1300px) {
          padding: 60px 0 0 194px;
          font-size: 24px;
          line-height: 29px;
        }
        @media screen and (max-width: 680px) {
          padding: 50px 0 0 60px;
        }
      }
      &-subtitle {
        position: relative;
        z-index: 1;
        font-family: RF Dewi Expanded;
        font-size: 24px;
        font-weight: 900;
        line-height: 29px;
        color: #fff;
        margin: 14px 0 0 320px;
        @media screen and (max-width: 1300px) {
          margin: 14px 0 0 194px;
          font-size: 14px;
          line-height: 17px;
        }
        @media screen and (max-width: 680px) {
          margin: 8px 0 0 60px;
        }
      }
      &-button {
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
        a {
          color: #000;
          text-decoration: none;
        }
      }
      &-img {
        position: absolute;
        width: 258px;
        bottom: 0;
        left: 32px;
        @media screen and (max-width: 1300px) {
          width: 150px;
          left: 24px;
        }
        @media screen and (max-width: 680px) {
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
      &-svg {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        @media screen and (max-width: 1300px) {
          width: 264px;
          height: 190px;
        }
        @media screen and (max-width: 680px) {
          display: none;
        }
      }
      &::before {
        background-image: url("~@/assets/images/photo/promotion.png");
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
    }
    &__info {
      background-color: #fff;
      padding: 38px 32px 40px;
      @media screen and (max-width: 680px) {
        padding: 30px 22px 32px;
      }
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        margin: 0 0 14px;
        @media screen and (max-width: 680px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      &-text {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 19px;
        margin: 0 0 14px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
      &-list {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 19px;
        margin: 0 0 14px;
        padding-inline-start: 20px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
      &-element {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 19px;
        margin: 0 0 14px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
      &-sub-text {
        font-family: Montserrat;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>