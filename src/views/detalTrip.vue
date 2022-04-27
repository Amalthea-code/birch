<template>
  <div class="detal-trip">
    <div class="detal-trip__box">
      <div class="detal-trip__item">
        <div class="detal-trip__item-title">№ ДОГОВОРА</div>
        <div class="detal-trip__item-info">{{ keeperField }}</div>
      </div>
      <div class="detal-trip__item">
        <div class="detal-trip__item-title">ДАТЫ</div>
        <div class="detal-trip__item-info">{{ tour }}</div>
      </div>
      <div class="detal-trip__item">
        <div class="detal-trip__item-title">СТОИМОСТЬ</div>
        <div class="detal-trip__item-info">{{ String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') }} руб.</div>
      </div>
      <div class="detal-trip__item">
        <div class="detal-trip__item-title">СТАТУС</div>
        <div class="detal-trip__item-info">{{ status === 'success' ? 'Оплачено' : 'Отменено' }}</div>
      </div>
    </div>
    <div v-if="false" class="detal-trip__info">
      <div class="detal-trip__info-text">Оставшиеся 50% от общей стоимости путевки оплачиваются не позднее 14 календарных дней до начала смены.</div>
      <button class="detal-trip__info-button">ОПЛАТИТЬ</button>
    </div>
    <div class="detal-trip__how">
      <div class="detal-trip__how-title">Как вернуть</div>
      <div class="detal-trip__how-text">
        <!-- Распечатайте, заполните и подпишите заявление на возврат. -->
        <!-- <br /><br /> -->
        Скан или фото заявления пришлите на электронную почту sales@berezka64.ru
        <br /><br />
        Для уточнения информации по сумме возврата согласно договору свяжитесь с менеджером по телефону +79372256244 или напишите запрос на электронную почту: sales@berezka64.ru
      </div>
      <button v-if="false" class="detal-trip__how-button">СКАЧАТЬ ЗАЯВЛЕНИЕ НА ВОЗВРАТ</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        keeperField: null,
        tour: null,
        price: null,
        status: null,
      }
    },
    computed: {
      ...mapGetters({
        foundTrips: 'trips/GET_FOUNDTRIPS'
      })
    },
    methods: {
      ...mapActions({
        searchTrips: 'trips/searchTrips'
      }),
      getProps () {
        this.keeperField = this.foundTrips.keeperField
        this.tour = this.foundTrips.tour
        this.price = this.foundTrips.price
        this.status = this.foundTrips.status
      }

    },
    created () {
      this.searchTrips(this.$route.params.id)
    },
    mounted () {
      this.getProps()
    }
  }
</script>

<style lang='scss' scoped>
  .detal-trip {
    margin: 0 auto;
    max-width: 1080px;
    padding: 176px;
    min-height: 100vh;

    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
    &__box {
      display: flex;
      padding: 0 0 44px;
      border-bottom: 1px solid #DFDFDF;
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
      @media screen and (max-width: 680px) {
        padding: 0 0 10px;
      }
    }
    &__item {
      width: 25%;
      @media screen and (max-width: 1300px) {
        width: 50%;
        margin: 0 0 50px;
      }
      @media screen and (max-width: 680px) {
        width: 100%;
        margin: 0 0 24px;
      }
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        margin: 0 0 14px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-info {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
    &__info {
      display: flex;
      padding: 40px 0 44px;
      border-bottom: 1px solid #dfdfdf;
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 31px;
        width: 50%;
        @media screen and (max-width: 1300px) {
          width: 100%;
          margin: 0 0 34px;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 24px;
        }
      }
      &-button {
        cursor: pointer;
        padding: 0 68px;
        height: 68px;
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        color: white;
        background-color: #84d0b8;
        border: none;
        border-radius: 50px;
      }
    }
    &__how {
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 36px;
        font-weight: 900;
        line-height: 46px;
        margin: 40px 0 24px;
        @media screen and (max-width: 680px) {
          font-size: 24px;
          line-height: 31px;
        }
      }
      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-button {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        border: 2px solid #000;
        border-radius: 30px;
        padding: 22px 38px;
        background-color: white;
        margin: 40px 0 0;
        @media screen and (max-width: 680px)  {
          font-size: 16px;
          line-height: 20px;
          padding: 18px 14px;
        }
      }
    }
  }
</style>