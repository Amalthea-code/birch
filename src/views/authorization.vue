<template>
  <form class="authorization">
    <div class="authorization__logo"><authorization /></div>
    <div class="authorization__title">Авторизация</div>
    <div class="authorization__box">
      <input :class="{'authorization__input': true, 'authorization__input_error':(v$.email.$dirty && v$.email.$error)}" autocomplete="email" placeholder="E-mail" type="text" v-model="email">
      <input :class="{'authorization__input': true, 'authorization__input_error':(v$.password.$dirty && v$.password.$error)}" autocomplete="current-password" placeholder="Пароль" type="password" v-model="password">
    </div>
    <button type="button" class="authorization__button" @click="enter">ВОЙТИ</button>
    <div class="authorization__link">
      <router-link to='/registration'>Регистрация</router-link>
    </div>
    <div v-if="false" class="authorization__link">
      <router-link to='/recovery'>Забыли пароль?</router-link>
    </div>
    <alert ref="alert" />
  </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Alert from '@/components/elements/Alert'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Authorization from '@/assets/images/icons/authorization'
  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    components: {
      Authorization,
      Alert
    },
    data () {
      return {
        email: '',
        password: '',
      }
    },
    watch: {
      email(val) {
        this.email = val.replace(/[^\\a-zA-Z, @, 0-9, -, _, . ]/g, '')
      },

    },
    validations () {
      return {
        email: { required, email },
        password: { required },
      }
    },
    methods: {
      ...mapActions({
        fetchAutorisation: 'profile/fetchAutorisation'
      }),
      ...mapMutations({
        SET_AUTORISATION: 'profile/SET_AUTORISATION',
      }),
      enter () {
        this.v$.$touch()
        if (this.v$.$errors.length) {
          this.$refs.alert.switchActive();
        } else {
          this.SET_AUTORISATION({
            identifier: this.email,
            password: this.password
          })
          this.fetchAutorisation()
          this.$router.push({ name: 'answer', params: { mode: 'autorisation' }})
        }
        if (this.v$.$invalid) {
          return;
        }
      },
    },
    mounted () {
      if (localStorage.getItem('token')) {
        this.$router.push({ name: 'cabinet'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .authorization {
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
      width: 272px;
      padding: 30px 14px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 44px;
      text-align: center;
      @media screen and (max-width: 680px) {
        font-size: 22px;
        line-height: 27px;
      }
    }
    &__button {
      cursor: pointer;
      margin: 58px 0 0;
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 22px;
      text-transform: uppercase;
      padding: 18px 92px;
      border: solid 2px black;
      border-radius: 50px;
      background-color: white;
      @media screen and (max-width: 680px) {
        padding: 18px 82px;
      }
    }
    &__box {
      margin: 20px 0 0;
    }
    &__link {
      margin: 14px 0 0;
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
    @media screen and (max-width: 680px) {
      font-size: 14px;
      line-height: 20px;
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