<template>
  <div class="trips" v-if="trips.length">
    <div class="trips__title">Мои путевки</div>
    <div class="trips__block">
      <div class="net">
        <div class="net__titles">
          <div class="net__title">№ ДОГОВОРА</div>
          <div class="net__title">СТОИМОСТЬ</div>
          <div class="net__title">СТАТУС</div>
          <div class="net__title">ДАТЫ</div>
        </div>
        <div class="net__list">
          <router-link
            v-for="(trip, index) in trips"
            :to="('/detalTrip/' + trip.id)"
            :key="index"
          >
            <div class="net__list-element" v-if="trip.status === 'success'">
              <div class="net__list-number">{{ trip.keeperField }}</div>
              <div class="net__list-price">{{trip.price > 0 ? String(trip.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' руб.' : '' }}</div>
              <div
                :class="{
                  'net__list-status': true
                }"
              >
                {{ trip.status === 'success' ? 'Оплачено' : 'Отменено' }}
              </div>
              <div class="net__list-dates">{{ trip.tour }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      trips: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      stringDate: (value) => {
        const stringDate = new Date(value)
        return stringDate.getDate() + '.' + (stringDate.getMonth() + 1) + '.' + stringDate.getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .trips {
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 46px;
      margin: 0 auto 50px;
      max-width: 1080px;

      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__block {
      padding: 0 calc((100vw - 1080px)/2) 100px;
      overflow: scroll;

      @media screen and (max-width: 1300px) {
        padding: 0 calc((100vw - 620px)/2) 100px;
      }
      @media screen and (max-width: 680px) {
        padding: 0 calc((100vw - 300px)/2) 100px;
      }
    }
  }
  .net {
    width: 1080px;
    padding: 90px 60px 0;
    position: relative;
    border: #F98419 solid 2px;
    border-radius: 30px;
    &__titles {
      background: linear-gradient(258.58deg, #F98419 8.47%, #FF9C41 100%);
      border-radius: 24px;
      height: 88px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 120px);
      padding: 0 60px;
      z-index: 2;
      &::before {
        background-image: url("~@/assets/images/photo/events-title.png");
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        z-index: -1;
        border-radius: 24px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      color: white;
      width: 25%;
    }
    &__list {
      display: flex;
      flex-direction: column-reverse;
      a {
        text-decoration: none;
        color: #000;
        &:last-child .net__list-element {
          border-bottom: none;
        }
      }
      &-element {
        display: flex;
        width: 100%;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        padding: 32px 0;
        border-bottom: 1px solid #DFDFDF;

      }
      &-number {
        width: 25%;
        font-family: Montserrat;
        font-weight: 600;
        text-decoration: underline;
      }
      &-price {
        width: 25%;
      }
      &-status {
        width: 25%;
        &_process {}

      }
      &-dates {
        width: 25%;
      }
    }
  }
</style>