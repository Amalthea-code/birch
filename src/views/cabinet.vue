<template>
  <div class="cabinet">
    <div class="cabinet__box">
      <div v-if="GET_AUTORIZEDUSER" class="cabinet__title">{{GET_AUTORIZEDUSER.sName + ' ' + GET_AUTORIZEDUSER.fName + ' ' + GET_AUTORIZEDUSER.tName}}</div>
      <cabinet-slider />
      <div class="cabinet__info">
        <h4 class="cabinet__info-title">Информация о путевке</h4> 
        Информацию о Вашей покупке с указанием смены, сроков поездки, данными на родителя и ребенка Вы можете увидеть в путёвке, которая придёт Вам в виде письма на электронную почту. Также Вы получите по почте чеки от ОФД и PayKeeper. Распечатайте путёвку в формате А4 и предъявите ее вместе с остальными необходимыми документами в день заезда. ВСЯ ИНФОРМАЦИЯ ПО ДОКУМЕНТАМ, СПРАВКАМ, УСЛОВИЯМ ПРОЖИВАНИЯ ЕСТЬ НА САЙТЕ В РАЗДЕЛЕ <router-link to="/parents">"РОДИТЕЛЯМ"</router-link>
        <br /><br />
        Если в течении 10 рабочих дней Вы не получили путёвку на свой электронный адрес, то напишите обращение в отдел продаж на почту: <a href="mailto:sales-b@berezka64.ru">sales-b@berezka64.ru</a>
      </div>
      <div class="cabinet__link">
        <router-link to="/payment">ОФОРМИТЬ ПУТЕВКУ</router-link>
      </div>
      <div class="cabinet__button" @click="output">Выйти из аккаунта</div>
    </div>
    <trips v-if="GET_AUTORIZEDUSER" :trips="GET_AUTORIZEDUSER.orders" />
    <div class="cabinet__box">
      <div class="cabinet__info cabinet__info_red">
        <h4 class="cabinet__info-title center">ИНФОРМАЦИЯ О ЗАЯВКЕ НА ПОВТОРНУЮ ОТПРАВКУ ПУТЕВКИ</h4>
        Если вы не получили путевку на свою электронную почту, оформите заявку на повторную отправку путевки.
      </div>
      <div class="cabinet__link">
          <span @click="createdOrder">ЗАЯВКА НА ПОВТОРНУЮ ОТПРАВКУ ПУТЕВКИ</span>
      </div>
    </div>
    <div class="cabinet__link">
      <a target="_blank" href="https://drive.google.com/file/d/1td22QY0bpHrNwI_U9EYGmL_ghL-YbmNI/view">Заявление на возврат</a>
    </div>
  </div>
</template>

<script>
import CabinetSlider from '@/components/blocks/CabinetSlider'
import Trips from '@/components/elements/Trips'
import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    components: {
      CabinetSlider,
      Trips
    },
    props: {
      returnFetch: {
        default: false
      }
    },
    computed: {
      ...mapGetters({
        GET_AUTORIZEDUSER: 'profile/GET_AUTORIZEDUSER'
      })
    },
    methods: {
      ...mapActions({
        fetchUserData: 'profile/fetchUserData',
        fetchShifts: 'shifts/fetchShifts'
      }),
      ...mapMutations({
        SET_TOKEN: 'profile/SET_TOKEN'
      }),
      output () {
        localStorage.removeItem('token')
        this.SET_TOKEN(null)
        this.$router.push({ path: '/autorization'})
      },
      createdOrder () {
        if (confirm('Данная заявка позволяет повторно создать РАНЕЕ ОПЛАЧЕННУЮ ПУТЕВКУ, которая после модерации появится в разделе "Мои путевки". Вы уверены что хотите заполнить ЗАЯВКУ НА ПУТЕВКУ?')) {
          this.$router.push({ name: 'payment', hash: '#created' })
        }
      }
    },
    created () {
      this.fetchShifts()
    },
    mounted () {
      console.log('mounted');
      // if (this.returnFetch) {
      //   console.log('fetch ok');
        this.fetchUserData()
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .cabinet {
    &__box {
      max-width: 1080px;
      margin: 0 auto;
      position: relative;

      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
      }
    }
    &__title {
      margin: 188px 0 50px;
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 46px;
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__link {
      display: flex;
      justify-content: center;
      a {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        border-radius: 30px;
        padding: 22px 84px;
        border: 2px solid #000;
        color: black;
        text-decoration: none;
      }
      span {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        border-radius: 30px;
        padding: 22px 84px;
        border: 2px solid #000;
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      margin: 0 0 34px;
      @media screen and (max-width: 680px) {
        a {
          font-size: 16px;
          line-height: 20px;
          padding: 24px 24px;
        }
        margin: 0 0 54px;
      }
    }
    &__button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      z-index: 2;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 18px;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 1300px) {
        top: -30px;
      }
      @media screen and (max-width: 680px) {
        top: -25px;
        left: 0px;
      }
    }
    &__info {
      &_red {
        text-align: center;
        color: #f05156;
      }
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 24px;
        font-weight: 900;
        color: #f05156;
        &.center {
          text-align: center;
        }
      }
      display: block;
      font-family: Montserrat;
      font-size: 16px;
      line-height: 24px;
      font-weight: 900;
      margin: 36px 0;
      a {
        color: #baa3e4;
      }
    }
  }
</style>