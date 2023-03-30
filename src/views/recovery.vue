<template>
  <div class="recovery">
    <div class="recovery__logo"><authorization /></div>
    <div class="recovery__title">Восстановление</div>
    <input :class="{'recovery__input': true, 'recovery__input_error':(v$.imput.$dirty && v$.imput.$error)}" placeholder="E-mail" v-model="imput">
    <button @click="enter" class="recovery__button">ВОССТАНОВИТЬ</button>
    <div class="recovery__link">
      <router-link to='/autorization'>Войти</router-link>
    </div>
    <alert ref="alert" />
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'
  import Authorization from '@/assets/images/icons/authorization'
  import Alert from '@/components/elements/Alert'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Authorization,
      Alert
    },
    setup () {
      return { v$: useVuelidate() }
    },
    data () {
      return {
        imput: ''
      }
    },
    validations () {
      return {
        imput: { required, email } // Matches this.firstName
      }
    },
    methods: {
      ...mapActions({
        fetchRecovery: 'profile/fetchRecovery'
      }),
      enter () {
        this.v$.$touch()
        if (this.v$.$errors.length) {
          this.$refs.alert.switchActive();
        } else {
          this.fetchRecovery(this.imput)
          this.$router.push({ name: 'answer', params: { mode: 'recovery' }})
        }
        if (this.v$.$invalid) {
          return;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recovery {
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
      &_error {
        border-color: red;
      }
      &:focus-visible {
        outline: none;
      }
    @media screen and (max-width: 680px) {
      font-size: 14px;
      line-height: 20px;
    }

    &:focus-visible {
      outline: none;
    }
    }
  }
</style>