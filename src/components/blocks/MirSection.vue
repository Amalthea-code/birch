<template>
  <div class="mir">
    <div class="mir__box">
      <h2 class="mir__title">Путешествия в&nbsp;детский лагерь с&nbsp;картой &laquo;Мир&raquo;</h2>
      <p class="mir__sub-title">Продажи путёвок по программе кешбэк на нашем сайте начнутся 15 апреля.</p>
      <p class="mir__text">
        С&nbsp;31&nbsp;марта до&nbsp;31&nbsp;августа получайте кешбэк&nbsp;50% при оплате путешествия в&nbsp;детский лагерь картой &laquo;Мир&raquo;, зарегистрированной в&nbsp;Программе лояльности держателей карт &laquo;Мир&raquo;. Отправиться в&nbsp;путешествие можно на&nbsp;смену с&nbsp;1&nbsp;мая по&nbsp;30&nbsp;сентября 2022 года включительно. Максимальный размер кешбэка за&nbsp;одну операцию&nbsp;&mdash; 20&nbsp;000&nbsp;рублей.<br /><br /> 
        Чтобы получить кешбэк:<br /><br />
        &mdash;&nbsp;<a href="https://privetmir.ru/russiatravel" target="blank">Зарегистрируйте</a> вашу карту &laquo;Мир&raquo; <a href="https://privetmir.ru/upload/Bank.pdf" target="blank">банка-участника</a> в&nbsp;Программе лояльности для держателей карт &laquo;Мир&raquo; или проверьте, что карта уже зарегистрирована. *<br />
        &mdash;&nbsp;Выберите смену в&nbsp;период с&nbsp;1&nbsp;мая по&nbsp;30&nbsp;сентября включительно. **<br />
        &mdash;&nbsp;С&nbsp;00:01 мск 31&nbsp;марта по&nbsp;23:59 31&nbsp;августа оплатите полную стоимость поездки на&nbsp;сайте.<br /><br />
        Кешбэк в&nbsp;размере&nbsp;50% от&nbsp;суммы бронирования, но&nbsp;не&nbsp;более 20&nbsp;000 рублей за&nbsp;одну бронь, придет в&nbsp;течение 5&nbsp;рабочих дней с&nbsp;момента оплаты. Количество операций по&nbsp;одной карте не&nbsp;ограничено, можете получить кешбэк несколько раз. 
        Официальный сайт государственной Программы субсидирования поездок: <a href="https://xn--b1afakdgpzinidi6e.xn--p1ai/" target="blank">мирпутешествий.рф</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .mir {
    background-color: #5EC0A9;
    position: relative;
    padding: 100px 0;
    @media screen and (max-width: 680px) {
      padding: 100px 0;
    }
    &::before {
      background-image: url("~@/assets/images/photo/conditions-bg.png");
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
    &__box {
      max-width: 1080px;
      margin: auto;
      background-color: #fff;
      border-radius: 25px;
      padding: 40px;
      box-sizing: border-box;
      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
        padding: 20px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 62px;
      font-weight: 900;
      line-height: 70px;
      letter-spacing: -1.2px;
      position: relative;
      z-index: 1;
      margin: 10px 0 50px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
        margin: 10px 0 30px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 10px 0 30px;
      }
    }
    &__sub-title {
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 500;
      line-height: 40px;
      color: #F05156;
      @media screen and (max-width: 1300px) {
        font-size: 22px;
        line-height: 27px;
      }
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    &__text {
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      position: relative;
      z-index: 1;
      a {
        color: #F05156;
      }
      @media screen and (max-width: 1300px) {
        font-size: 22px;
        line-height: 27px;
      }
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
</style>