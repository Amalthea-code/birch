<template>
  <div class="recovery-password">
    <div class="recovery-password__logo"><authorization /></div>
    <div class="recovery-password__title">Восстановлене пароля</div>
    <div class="recovery-password__box">
      <input class="recovery-password__input recovery-password__input_password" placeholder="Новый Пароль" :type="isPassword" v-model="password" autocomplete="on" :maxlength="maxLength" minlength="6"><span @click="switchPassword" class="password-hidden"><hidden/></span>
      <input class="recovery-password__input recovery-password__input_password" placeholder="Повторите пароль" :type="isMorePassword" v-model="morePassword" autocomplete="on" :maxlength="maxLength" minlength="6"><span @click="switchMorePassword" class="password-hidden"><hidden/></span>
    </div>
    <button class="recovery-password__button" @click="enter">ВОССТАНОВИТЬ</button>
    <div class="recovery-password__link">
      <router-link to='/autorization'>Войти</router-link>
    </div>
  </div>
</template>

<script>
  import Authorization from '@/assets/images/icons/authorization'
  import hidden from '@/assets/images/icons/hidden'
  import { mapActions } from 'vuex'
  export default {
    components: {
      hidden,
      Authorization
    },
    data () {
      return {
        maxLength: 50,
        password: '',
        morePassword: '',
        isPassword: 'password',
        isMorePassword: 'password',
      }
    },
    methods: {
      ...mapActions({
        fetchPassword: 'profile/fetchPassword'
      }),
      switchPassword () {
        this.isPassword === 'password' ? this.isPassword = 'text' : this.isPassword = 'password' 
      },
      switchMorePassword () {
        this.isMorePassword === 'password' ? this.isMorePassword = 'text' : this.isMorePassword = 'password' 
      },
      enter() {
        if (this.password === this.morePassword) {
          Promise.allSettled([
            this.fetchPassword({
              code: this.$route.query.code,
              password: this.password,
              passwordConfirmation: this.morePassword
            })
          ]).then(() => {
            this.$router.push({ name: 'authorization'})
          })
        }
      }
    },
    mounted () {
      console.log(this.$route.query.code)
    }
  }
</script>

<style lang="scss" scoped>
  .password-hidden {
    cursor: pointer;
    display: inline-block;
    border: 1px solid #000;
    width: 34px;
    height: 35px;
    @media screen and (max-width: 680px) {
      height: 34.5px;
    }
    svg {
      position: relative;
      top: 5px;
      left: 5px;
      width: 24px;
      height: 24px;
    }
  }
  .recovery-password {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 40px 60px;
    border-radius: 20px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 680px) {
      padding: 40px 14px;
      width: 272px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 44px;
      @media screen and (max-width: 680px) {
        font-size: 22px;
        line-height: 27px;
      }
    }
    &__button {
      margin: 54px 0 0;
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 22px;
      text-transform: uppercase;
      padding: 20px 34px;
      border: solid 2px #000;
      border-radius: 50px;
      background-color: white;
        @media screen and (max-width: 680px) {
          padding: 12px 14px;
          font-size: 16px;
          line-height: 20px;
        }
    }
    &__link {
      margin: 20px 0 0;

      a {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 25px;
        color: black;
        text-decoration: none;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    &__input {
    margin: 15px 0;
    padding: 4px 0;
    border: none;
    border-bottom: 1px solid #000;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 25px;
    width: 100%;
    &_password {
      width: calc(100% - 36px);
    }
    @media screen and (max-width: 680px) {
      font-size: 16px;
      line-height: 24px;
    }
    &_error {
      border-color: red;
    }
    &:focus-visible {
      outline: none;
    }
    }
  }
</style>