<template>
  <div class="shift-selection" id="buy">
    <h1 class="shift-selection__title shift-selection__title_little">ДОРОГИЕ БЕРЁЗОВЦЫ!</h1>
    <p class="shift-selection__contein-info shift-selection__alert-info">
      <strong>Для тех, кто приобрел путевки на 4 смену и хочет записаться в определённый отряд. Бронирование мест в отрядах на 4 смену осуществляется 26 и 28 июля с 11 до 13 и с 16 до 19 по номеру телефона: <a href="tel:+79172023343">+7(917) 202-33-43</a> Горобец Елена Ивановна</strong>
      <br/><br/>
      На данный момент информации о запуске программы детского кешбэка в 2023 году нет.
      <br/><br/>
      Если вы не успели купить путевку, напишите заявку в Лист ожидания на адрес отдела продаж: <a href="mailto:sales-b@berezka64.ru">sales-b@berezka64.ru.</a> Форма заявки: в теме письма напишите Лист ожидания; в самом письме: смена, ФИО ребенка полностью, возраст ребенка полных лет, ФИО родителя, контактный телефон родителя, электронный адрес родителя.
    </p>
    <h1 class="shift-selection__title shift-selection__title_little">Расписание смен 2023 г.</h1>
    <div class="shift-selection__box" v-if="selections.length">
      <shift-selection-item
        v-for="(selection, index) in selections"
        :headingText="selection.attributes.text_name"
        :key="index"
        :index="index"
        :number="selection.attributes.number"
        :date="selection.attributes.date"
        :price="selection.attributes.price"
        :discount="selection.attributes.with_discount"
      />
    </div>
    <div class="shift-selection__button">
      <router-link to="/payment">купить путёвку</router-link>
    </div>
    <div class="shift-selection__contein">
      <div class="shift-selection__contein-box">
        <img src="@/assets/images/photo/shift-selection.jpg" alt="" class="shift-selection__contein-image">
        <span class="shift-selection__contein-signature">Амхир Борис Константинович</span>
        <p class="shift-selection__contein-sub-signature">Директор АНО СОЦ «Берёзка»</p>
      </div>
      <p class="shift-selection__contein-info">
        «Дорогие ребята и родители! Наш лагерь вот уже 70 с лишним лет принимает в свою семью березовцев. За это время в Березке отдохнуло более 120 000 детей. Многие из вас возвращаются сюда из года в год, проходя путь взросления от отдыхающего до вожатого.
        <br /><br />
        Березка – это отдельная территория детства - добрая, уютная, любимая для многих поколений. И я с гордостью могу сказать, что за 47 лет работы директором в Березке, я и наша команда профессионалов сохранили и преумножили традиции, которые являются фундаментом нашего детского оздоровительно-развлекательного центра. Каждый сезон мы стараемся встретить и порадовать вас новшествами в благоустройстве, а также проводить ремонт и реконструкцию имеющегося материального фонда. Мы всегда делаем все возможное, чтобы этот лесной детский мир был максимально безопасным и комфортным для ребят. Благодаря нашей с вами совместной любви к Березке и заботе о ней, она продолжает оставаться одним из лучших лагерей Саратовской области.
        <br /><br />
        Ждем вас всегда!»
      </p>
    </div>
  </div>
</template>

<script>
import shiftSelectionItem from '@/components/elements/ShiftSelectionItem'
import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      shiftSelectionItem
    },
    computed: {
      ...mapGetters({
        selections: 'shifts/GET_SHIFTS'
      })
    },
    methods: {
      ...mapActions({
        fetchShifts: 'shifts/fetchShifts'
      })
    },
    created () {
      this.fetchShifts()
    }
  }
</script>

<style lang="scss" scoped>
  .shift-selection {
      max-width: 1080px;
      margin: 0 auto;
      padding: 20px 0 100px;
      &_green {
        color: #64c2ac;
      }
      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
      }

    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      &_little {
        font-size: 40px;
        text-align: center;
      }
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
        margin: 28px 0 0;
        &_little {
          font-size: 36px;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        &_little {
          font-size: 16px;
        }
      }
    }
    &__sub-title {
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin: 22px 0 60px;
      @media screen and (max-width: 1300px) {
        font-size: 22px;
        line-height: 27px;
      }
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    &__box {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 90px;
      margin: 0 0 70px;
      @media screen and (max-width: 680px) {
        margin: 44px 0 0;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      a {
        font-family: RF Dewi Expanded;
        font-size: 32px;
        font-weight: 900;
        text-align: center;
        padding: 22px 62px;
        border-radius: 50px;
        border: solid 2px black;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
      }
      @media screen and (max-width: 680px) {
        a {
          font-size: 18px;
          padding: 22px 34px;
        }
      }
    }
    &__contein {
      margin-top: 110px;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
    }
    &__contein-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 47%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
    &__contein-image {
      width: 100%;
      border-radius: 20px;
    }

    &__contein-signature {
      margin-top: 20px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    &__contein-sub-signature {
      margin-top: 6px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    &__contein-info {
      width: 50%;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      margin: 0;
      @media screen and (max-width: 1300px) {
        width: 100%;
        margin: 38px 0 0;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__alert-info {
      text-align: center;
      padding: 0 0 60px;
      width: 100%;
      font-size: 22px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
</style>