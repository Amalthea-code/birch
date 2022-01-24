<template>
  <div class="conditions">
    <div class="conditions__box">
      <div class="conditions__title">Условия заезда и отъезда детей в смену</div>
      <div class="conditions__card">
        <ul>
          
          <li class="conditions__card-text">Заезд в лагерь происходит организованно с 7:00 до 12:00 в первый день смены, в обязательном масочном режиме, с прохождением температурного контроля у ворот. Далее вас встретят сотрудники лагеря и помогут пройти процедуру регистрации и медосмотр ребенка.</li>
          <li class="conditions__card-text">Время заезда регламентировано, т.к. до обеда необходимо сформировать заявку с точным количеством детей на питание и размещение в отрядах. </li>
          <li class="conditions__card-text">Для комфортной психологической адаптации ребенка привозите его в строго установленное время. </li>
          <li class="conditions__card-text">Для ускорения прохождения процедуры регистрации при заезде, заранее распечатайте и подпишите
            <a target="_blank" href="" class="conditions__card-link">Памятку для родителей</a>
            и 
            <a target="_blank" href="" class="conditions__card-link">Медсогласие</a>.
            Предъявите подписанные документы на заезде.</li>
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
    background-image: url("~@/assets/images/photo/conditions-bg.png");
    background-size: cover;
    background-color: #0EDBBE;
    padding: 60px 0 90px;
    &__box {
      max-width: 1080px;
      margin: 0 auto;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 58px;
      font-weight: 900;
      line-height: 70px;
      color: white;
      margin: 0 0 30px;
    }
    &__card {
      display: flex;
      justify-content: space-between;
      background-color: white;
      border-radius: 30px;
      padding: 48px;
      &-text {
        float:left;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        margin-bottom: 22px;
      }
      &-link {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        color: black;
      }
      &-image {
        object-fit: contain;
      }
    }
  
  }
</style>