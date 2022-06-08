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
      <div class="promotion__info-title">Путешествия в детский лагерь с картой «Мир»</div>
      <div class="promotion__info-text">
        Продажи путёвок по программе кешбэк на нашем сайте начнутся 15 апреля.
        <br /><br />
        С 31 марта до 14 июня получайте кешбэк 50% при оплате путешествия в детский лагерь картой «Мир», зарегистрированной в Программе лояльности держателей карт «Мир». Отправиться в путешествие можно на смену с 1 мая по 30 сентября 2022 года включительно. Максимальный размер кешбэка за одну операцию — 20 000 рублей.
      </div>
      <div class="promotion__info-title">Чтобы получить кешбэк:</div>
      <ul class="promotion__info-list">
        <li class="promotion__info-element"><a href="https://privetmir.ru/register/" target="blank">Зарегистрируйте</a> вашу карту «Мир» <a href="https://privetmir.ru/upload/Bank.pdf" target="blank">банка-участника</a> в Программе лояльности для держателей карт «Мир» или проверьте, что карта уже зарегистрирована. *</li>
        <li class="promotion__info-element">Выберите смену в период с 1 мая по 30 сентября включительно.</li>
        <li class="promotion__info-element">С 00:01 мск 31 марта по&nbsp;23:59 14&nbsp;июня оплатите полную стоимость поездки на сайте.</li>
      </ul>
      <div class="promotion__info-sub-text">
        Кешбэк в размере 50% от суммы бронирования, но не более 20 000 рублей за одну бронь, придет в течение 5 рабочих дней с момента оплаты. Количество операций по одной карте не ограничено, можете получить кешбэк несколько раз. Официальный сайт государственной Программы субсидирования поездок: <a href="https://xn--b1afakdgpzinidi6e.xn--p1ai/" target="blank" data-v-063c1818="">мирпутешествий.рф</a>
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