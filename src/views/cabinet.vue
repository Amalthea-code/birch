<template>
  <div class="cabinet">
    <div class="cabinet__box">
      <div v-if="GET_AUTORIZEDUSER" class="cabinet__title">{{GET_AUTORIZEDUSER.sName + ' ' + GET_AUTORIZEDUSER.fName + ' ' + GET_AUTORIZEDUSER.tName}}</div>
      <cabinet-slider />
      <div class="cabinet__info">
        <h4 class="cabinet__info-title">Информация о путевке</h4>
        Информацию о Вашей покупке с указанием смены и сроков поездки вы можете увидеть в чеке, который придёт Вам на электронную почту. Забрать путёвку Вы сможете в лагере в часы работы отдела продаж 11.00 - 16.00 вт-сб. Или в день заезда в смену. ВСЯ ИНФОРМАЦИЯ ПО ДОКУМЕНТАМ, СПРАВКАМ, СМЕНАМ ЕСТЬ НА САЙТЕ В РАЗДЕЛЕ "РОДИТЕЛЯМ"
      </div>
      <div class="cabinet__link">
        <router-link to="/payment">ОФОРМИТЬ ПУТЕВКУ</router-link>
      </div>
      <div class="cabinet__button" @click="output">Выйти из аккаунта</div>
    </div>
    <trips v-if="GET_AUTORIZEDUSER" :trips="GET_AUTORIZEDUSER.orders" />
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
    }
    },
    created () {
      this.fetchShifts()
    },
    mounted () {
      if (this.returnFetch) {
        this.fetchUserData()
      }
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
      margin: 0 0 124px;
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
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 24px;
        font-weight: 900;
        color: #f05156;
      }
      display: block;
      font-family: Montserrat;
      font-size: 16px;
      line-height: 24px;
      margin: 60px 0;
    }
  }
</style>