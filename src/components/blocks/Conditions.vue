<template>
  <div class="conditions">
    <div class="conditions__box">
      <div class="conditions__title">Условия заезда и отъезда детей в смену</div>
      <div class="conditions__card">
        <ul>
          <li class="conditions__card-text">После покупки путевки Вы можете заранее забронировать место в отряде для своего ребёнка или группы детей, позвонив за 1-2 дня до начала смены по номеру телефона <a href="tel:+79172023343" class="conditions__card-link">+7(917) 202-33-43</a> Горобец Елена Ивановна</li>
          <li class="conditions__card-text">Заезд в лагерь происходит организованно с 7:00 до 12:00 в первый день смены. Вас встретят у главных ворот сотрудники лагеря и помогут пройти процедуру регистрации и медосмотр ребенка.</li>
          <li class="conditions__card-text">Время заезда регламентировано, т.к. до обеда необходимо сформировать заявку с точным количеством детей на питание и размещение в отрядах. </li>
          <li class="conditions__card-text">Для комфортной психологической адаптации ребенка привозите его в строго установленное время. </li>
          <li class="conditions__card-text">Для ускорения прохождения процедуры регистрации при заезде, заранее распечатайте и подпишите
            <a target="_blank" href="https://drive.google.com/file/d/1FrksnbaRWJDTsq2wEeAWZivOnWehMLHM/view" class="conditions__card-link">Медсогласие</a>.
            Предъявите подписанный документ на заезде.</li>
          <li class="conditions__card-text">Отъезд осуществляется в последний день смены до 13:00.</li>
          <li class="conditions__card-text">Заезд и отъезд осуществляются силами родителей или опекунов.</li>
        </ul>
        <img class="conditions__card-image" src="@/assets/images/photo/conditions.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .conditions {
    background: linear-gradient(265.82deg, #5EC0A9 4.04%, rgba(13, 175, 150, 0.81) 64.05%);
    padding: 60px 0 90px;
    position: relative;
    &::before {
      background-image: url("~@/assets/images/photo/conditions-bg.png");
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      content: '';
    }
    &__box {
      max-width: 1080px;
      position: relative;
      z-index: 2;
      margin: 0 auto;
      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 58px;
      font-weight: 900;
      line-height: 70px;
      color: white;
      margin: 0 0 30px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__card {
      display: flex;
      justify-content: space-between;
      background-color: white;
      border-radius: 30px;
      padding: 48px;
      ul {
        padding-inline-start: 20px;
      }
      @media screen and (max-width: 1300px) {
        justify-content: center;
        flex-wrap: wrap;
      }
      @media screen and (max-width: 680px) {
        padding: 30px 12px; 
      }
      &-text {
        float:left;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        margin-bottom: 22px;
        @media screen and (max-width: 1300px) {
          width: 100%;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 20px;
        }
      }
      &-link {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        color: black;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 20px;
        }
      }
      &-image {
        object-fit: contain;
        @media screen and (max-width: 680px) {
          width: 236px;
          height: 236px;
        }
      }
    }
  
  }
</style>