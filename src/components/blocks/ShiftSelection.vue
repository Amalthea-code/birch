<template>
  <div class="shift-selection">
    <h1 class="shift-selection__title">ВЫБЕРИ СМЕНУ</h1>
    <p class="shift-selection__sub-title">Предварительные даты смен на лето 2022</p>
    <div class="shift-selection__box">
      <shift-selection-item
        v-for="(selection, index) in selections"
        :key="index"
        :index="index"
        :number="selection.number"
        :date="selection.date"
        :price="selection.price"
      />
    </div>
    <div class="shift-selection__button">
      <router-link to="#">купить путёвку</router-link>
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
        Березка – это отдельная территория детства - добрая, уютная, любимая для многих поколений. И я с гордостью могу сказать, что за 45 лет работы директором в Березке, я и наша команда профессионалов сохранили и преумножили традиции, которые являются фундаментом нашего детского оздоровительно-развлекательного центра. Каждый сезон мы стараемся встретить и порадовать вас новшествами в благоустройстве, а также проводить ремонт и реконструкцию имеющегося материального фонда. Мы всегда делаем все возможное, чтобы этот лесной детский мир был максимально безопасным и комфортным для ребят. Благодаря нашей с вами совместной любви к Березке и заботе о ней, она продолжает оставаться одним из лучших лагерей Саратовской области.
        <br /><br />
        Ждем вас всегда!»
      </p>
    </div>
  </div>
</template>

<script>
import shiftSelectionItem from '@/components/elements/ShiftSelectionItem'
  export default {
    components: {
      shiftSelectionItem
    },
    data () {
      return {
        selections: [
          {
            number: 1,
            date: '2 июня — 14 июня',
            price: 29900
          },
          {
            number: 2,
            date: '17 июня — 29 июня',
            price: 29900
          },
          {
            number: 3,
            date: '2 июля — 14 июля',
            price: 29900
          },
          {
            number: 4,
            date: '17 июля — 29 июля',
            price: 29900
          },
          {
            number: 5,
            date: '1 августа — 13 августа',
            price: 29900
          },
          {
            number: 6,
            date: '16 августа — 28 августа',
            price: 29900
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shift-selection {
      max-width: 1080px;
      margin: 0 auto;
      padding: 20px 0 100px;
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
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
        margin: 28px 0 0;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__sub-title {
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
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
      justify-content: space-between;
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
      width: 45%;
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
  }
</style>