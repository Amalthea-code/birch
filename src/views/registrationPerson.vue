<template>
  <form class="registration-person">
    <div class="registration-person__title">Учетная запись плательщика</div>
      <div class="registration-person__forms">
        <div class="registration-person__alert">ПОЖАЛУЙСТА, ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ НАПИСАНИЯ ВАШЕЙ ДЕЙСТВУЮЩЕЙ ЭЛЕКТРОННОЙ ПОЧТЫ И СОХРАНИТЕ СЕБЕ ЛОГИН И ПАРОЛЬ ОТ ЛИЧНОГО КАБИНЕТА ДОПОЛНИТЕЛЬНО!</div>
        <div class="registration-person__block">
          <div class="registration-person__box">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.surName.$dirty && v$.surName.$error)}" placeholder="Фамилия" type="text" v-model="surName" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.name.$dirty && v$.name.$error)}" placeholder="Имя" type="text" v-model="name" :maxlength="maxLength">
            <input class="registration-person__input" placeholder="Отчество" type="text" v-model="lastName" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.phone.$dirty && v$.phone.$error)}" placeholder="Телефон" type="tel" v-model="phone" :maxlength="maxLength" v-mask="'+# (###) ###-##-##'" />
          </div>
          <div class="registration-person__box">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.mail.$dirty && v$.mail.$error)}" placeholder="E-mail" type="email" v-model="mail" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input-password': true, 'registration-person__input_error':(v$.password.$dirty && v$.password.$error)}" placeholder="Пароль" :type="isPassword" v-model="password" autocomplete="on" :maxlength="maxLength"><span @click="switchPassword" class="password-hidden"><hidden/></span>
            <input :class="{'registration-person__input': true, 'registration-person__input-password': true, 'registration-person__input_error':(v$.morePassword.$dirty && v$.morePassword.$error)}" placeholder="Повторите пароль" :type="isMorePassword" v-model="morePassword" autocomplete="on" :maxlength="maxLength"><span @click="switchMorePassword" class="password-hidden"><hidden/></span>
          </div>
        </div>
        <div class="registration-person__block">
          <div class="registration-person__box">
            <div class="registration-person__box-title">Адрес регистрации</div>
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.city.$dirty && v$.city.$error)}" placeholder="Город/населенный пункт" type="text" v-model="city" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.street.$dirty && v$.street.$error)}" placeholder="Улица" type="text" v-model="street" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.home.$dirty && v$.home.$error)}" placeholder="Дом, корпус" type="text" v-model="home" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.apartment.$dirty && v$.apartment.$error)}" placeholder="Квартира" type="text" v-model="apartment" :maxlength="maxLength">
            <div class="apartment-alert">Если это частный дом укажите в&nbsp;поле Квартира&nbsp;&mdash; 0</div>
            <input id="registration-person" class="registration-person__input-checkbox" type="checkbox" v-model="isTreatment"/>
            <label for="registration-person" class="registration-person__input-label">Я согласен на <a href="">обработку персональных данных</a></label>
            <button type="button" @click="registration" class="registration-person__button">зарегестрироваться</button>
          </div>
          <div class="registration-person__box">
            <div class="registration-person__box-title">Паспортные данные</div>
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.series.$dirty && v$.series.$error)}" placeholder="Серия и номер" type="text" v-model="series" :maxlength="maxLength">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.date.$dirty && v$.date.$error)}" placeholder="Дата выдачи (дд.мм.гггг)" type="text" v-model="date" v-mask="'##.##.####'">
            <input :class="{'registration-person__input': true, 'registration-person__input_error':(v$.issued.$dirty && v$.issued.$error)}" placeholder="Кем выдан" type="text" v-model="issued" :maxlength="maxLength">
            <img src="@/assets/images/icons/registration-person.png" alt="" class="registration-person__image">
          </div>
        </div>
      </div>
    <alert ref="alert" />
  </form>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import hidden from '@/assets/images/icons/hidden'
  import { email, required, minLength, maxLength } from '@vuelidate/validators'
  import { mapActions, mapMutations } from 'vuex'
  import Alert from '@/components/elements/Alert'
  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    components: {
      hidden,
      Alert
    },
    data () {
      return {
          isPassword: 'password',
          isMorePassword: 'password',
          profile: {},
          maxLength: 50,
          isTreatment: false,
          surName: '',
          name: '',
          lastName: '',
          phone: '+7',
          mail: '',
          password: '',
          morePassword: '',
          street: '',
          home: '',
          apartment: '',
          city: '',
          series: '',
          date: '',
          issued: ''
      }
    },
    watch: {
      surName(val) {
        this.surName = val.replace(/[^\\а-яёА-ЯЁ ]/g, '')
      },
      name(val) {
        this.name = val.replace(/[^\\а-яёА-ЯЁ ]/g, '')
      },
      lastName(val) {
        this.lastName = val.replace(/[^\\а-яёА-ЯЁ ]/g, '')
      },
      mail(val) {
        this.mail = val.replace(/[^\\a-zA-Z, @, 0-9, ., /,, ;, :, (, ), _, -]/g, '')
      },
      series(val) {
        this.series = val.replace(/[^0-9, -]/g, '')
      },
      issued(val) {
        this.issued = val.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g, '')
      },
      street(val) {
        this.street = val.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g, '')
      },
      home(val) {
        this.home = val.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g, '')
      },
      apartment(val) {
        this.apartment = val.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g, '')
      },
      city(val) {
        this.city = val.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g, '')
      },
    },
    validations () {
      return {
          surName: { required },
          name: { required },
          phone: {
            required,
            minLength: minLength(18),
            maxLength: maxLength(18),
          },
          mail: { required, email },
          password: { 
            required,
            minLength: minLength(6)
          },
          morePassword: {
            required,
            minLength: minLength(6)
          },
          street: { required },
          home: { required },
          apartment: { required },
          city: { required },
          series: { required },
          date: { required },
          issued: { required },
      }
    },
    methods: {
      ...mapActions({
        fetchRegistration: 'profile/fetchRegistration'
      }),
      ...mapMutations({
        SET_PROFILE: 'profile/SET_PROFILE',
      }),
      switchPassword () {
        this.isPassword === 'password' ? this.isPassword = 'text' : this.isPassword = 'password' 
      },
      switchMorePassword () {
        this.isMorePassword === 'password' ? this.isMorePassword = 'text' : this.isMorePassword = 'password' 
      },
      registration () {
        this.v$.$touch()
        if (this.v$.$errors.length || this.password !== this.morePassword || !this.isTreatment) {
          this.$refs.alert.switchActive();
        } else {
          this.collector()
          this.SET_PROFILE(this.profile)
          this.fetchRegistration()
          this.$router.push({ name: 'answer', params: { mode: 'reg' }})
        }
        if (this.v$.$invalid) {
          return;
        }
      },
      collector () {
        this.profile.sName = this.surName
        this.profile.username = this.name,
        this.profile.tName = this.lastName,
        this.profile.phone = this.phone,
        this.profile.email = this.mail,
        this.profile.password = this.password,
        this.profile.street = this.street,
        this.profile.home = this.home,
        this.profile.apartment = this.apartment,
        this.profile.city = this.city,
        this.profile.series = this.series,
        this.profile.datePassport = this.date,
        this.profile.issued = this.issued
      }
    }
  }
</script>

<style lang="scss" scoped>
  .apartment-alert {
    font-family: Montserrat;
    font-size: 16px;
    line-height: 20px;
    color: #F05156;
  }
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
  .registration-person {
    margin: 0 auto;
    max-width: 1080px;
    position: relative;
    padding: 144px 0 0;

    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
    &__alert {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 600;
      line-height: 23px;
      color: #F05156;
      margin: 0 0 40px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__input {
    border-radius: 0;
    height: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 15px 0;
    padding: 4px 0;
    border: none;
    border-bottom: 1px solid #000;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 25px;
    width: 100%;
    &-password {
      width: calc(100% - 36px);
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
    @media screen and (max-width: 680px) {
      font-size: 16px;
      line-height: 20px;
    }
    &-label {
      display: inline-block;
      padding: 0 0 0 40px;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 18px;
      cursor: pointer;
      position: relative;
      margin: 28px 0 0;
      a {
        color: black;
      }
      &::before {
        content: '';
        position: absolute;
        width: 21px;
        height: 21px;
        border: 1px solid #000;
        border-radius: 50%;
        top: -3px;
        left: 0;
      }
      &::after {
        display: none;
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        top: 4px;
        left: 7px;
      }
    }
    &-checkbox {
      display: inline;
      opacity: 0;
      width: 0;
      height: 0;
      
      &:checked+label::after {
        display: block;
      }
    }
    &_error {
      border-color: red;
    }
    &:focus-visible {
      outline: none;
    }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 44px;
      margin: 0 0 78px;
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 0 0 20px;
      }
    }
    &__button {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 22px;
      text-transform: uppercase;
      cursor: pointer;
      background-color: white;
      border: 2px solid black;
      border-radius: 50px;
      padding: 22px 42px;
      margin: 28px 0 0;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 16px;
        padding: 22px 24px;
      }
    }
    &__block {
      display: flex;
      justify-content: space-between;
      margin: 0 0 120px;

      @media screen and (max-width: 1300px) {
        margin: 0 0 90px;
        flex-wrap: wrap;
        &:last-child {
          flex-wrap: wrap-reverse;
        }
      }
    }
    &__box {
      width: calc(50% - 45px);
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      &-title {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        margin: 0 0 50px;
        @media screen and (max-width: 1300px) {
          margin: 0 0 40px;
        }
        @media screen and (max-width: 680px) {
          margin: 0 0 10px;
        }
      }
    }
    &__image {
      display: block;
      width: 190px;
      margin: 42px auto 0;
      @media screen and (max-width: 1300px) {
        width: 140px;
        margin: 20px auto;
      }
      @media screen and (max-width: 680px) {
        margin: 50px auto;
      }
    }
  }
</style>
