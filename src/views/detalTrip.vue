<template>
  <div class="detal-trip">
    <div class="detal-trip__box">
      <div class="detal-trip__item">
        <div class="detal-trip__item-title">№ ПЛАТЕЖА</div>
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
    <div v-if="user && keeperField" class="detal-trip__mail">
      <div class="detal-trip__mail-text">
        Вы можете повторно отправить копию путевки себе на почту которую указывали при регистрации.
      </div>
      <div @click="postMail" class="detal-trip__mail-button">
        ОТПРАВИТЬ КОПИЮ ПУТЕВКИ НА ПОЧТУ
      </div>
    </div>
    <div v-if="false" class="detal-trip__info">
      <div class="detal-trip__info-text">Оставшиеся 50% от общей стоимости путевки оплачиваются не позднее 14 календарных дней до начала смены.</div>
      <button class="detal-trip__info-button">ОПЛАТИТЬ</button>
    </div>
    <div class="detal-trip__how">
      <div class="detal-trip__how-title">Как вернуть</div>
      <div class="detal-trip__how-text">
        Распечатайте, заполните и подпишите заявление на возврат.
        <br /><br />
        Скан или фото заявления пришлите на электронную почту sales-b@berezka64.ru
        <br /><br />
        Для уточнения информации по сумме возврата согласно договору свяжитесь с менеджером по телефону +79372256244 или напишите запрос на электронную почту: sales-b@berezka64.ru
      </div>
      <a href="https://drive.google.com/file/d/1Alt6UEiJEraBA2NFIga1amoZmRciTmIn/view" target="blank" class="detal-trip__how-button">СКАЧАТЬ ЗАЯВЛЕНИЕ НА ВОЗВРАТ</a>
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
        foundTrips: 'trips/GET_FOUNDTRIPS',
        user: 'profile/GET_AUTORIZEDUSER'
      })
    },
    methods: {
      ...mapActions({
        searchTrips: 'trips/searchTrips',
        fetchUserData: 'profile/fetchUserData'
      }),
      getProps () {
        this.keeperField = this.foundTrips.keeperField
        this.tour = this.foundTrips.tour
        this.price = this.foundTrips.price
        this.status = this.foundTrips.status
      },
      async postMail () {
        try {
          await fetch('https://berezka64.ru/rewritemail.php', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              keeperField: this.foundTrips.keeperField,
              voucher_id_utf: this.foundTrips.tour,
              child_sname: this.foundTrips.children.child_sname,
              child_name: this.foundTrips.children.child_name,
              child_totalYear: this.foundTrips.children.child_totalyear,
              child_address: this.foundTrips.children.child_city + ' ' + this.foundTrips.children.child_street + ' ' + this.foundTrips.children.child_home + ' ' + this.foundTrips.children.child_apartment,
              user_sname: this.foundTrips.parents.parent_sname,
              user_name: this.foundTrips.parents.parent_name,
              user_tname: this.foundTrips.parents.parent_tname,
              user_phone: this.foundTrips.parents.parent_phone,
              price: this.foundTrips.price,
              user_email: this.foundTrips.user.user_email
            })
          }).then((response) => {
            if (response.status === 200) {
              alert('Письмо успешно отправлено!');
            } else {
              alert('Повторите позже');
            }
          })
        }
        catch (err) {
          alert('Повторите позже. Код ошибки:' + err);
        }
  
      }
    },
    mounted () {
      this.fetchUserData().then(()=> {
        this.searchTrips(this.$route.params.id).then(() => {
          this.getProps()
        })
      })
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
      padding: 20px;
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
    &__mail {
      &-text {
        margin: 20px 0 0;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        color: #f05156;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
      &-button {
        cursor: pointer;
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        border: 2px solid #000;
        border-radius: 30px;
        padding: 22px 38px;
        background-color: white;
        margin: 16px 0 0;
        display: inline-block;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        @media screen and (max-width: 680px)  {
          font-size: 16px;
          line-height: 20px;
          padding: 18px 14px;
        }
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
        display: inline-block;
        color: #000;
        text-decoration: none;
        @media screen and (max-width: 680px)  {
          font-size: 16px;
          line-height: 20px;
          padding: 18px 14px;
        }
      }
    }
  }
</style>