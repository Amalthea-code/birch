<template>
  <form class="registration-parent">
    <div class="registration-parent__title">Данные родителя/опекуна</div>
      <div class="registration-parent__radio">
        <div class="registration-parent__radio-title">Плательщиком является родитель/официальный опекун?</div>
        <div class="registration-parent__radio-box">
          <input type="radio" value="да" id="parent-1" name="parent" class="registration-parent__radio-input" v-model="isTreatment">
          <label for="parent-1" class="registration-parent__radio-label">Да</label>
          <input type="radio" value="нет" id="parent-2" name="parent" class="registration-parent__radio-input" v-model="isTreatment">
          <label for="parent-2" class="registration-parent__radio-label">Нет</label>
        </div>
      </div>
      <div class="registration-parent__forms">
        <div class="registration-parent__block">
          <div class="registration-parent__box">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.surName.$dirty && v$.surName.$error)}" placeholder="Фамилия" type="text" v-model="surName" :maxlength="maxLength">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.name.$dirty && v$.name.$error)}" placeholder="Имя" type="text" v-model="name" :maxlength="maxLength">
            <input class="registration-parent__input" placeholder="Отчество" type="text" v-model="lastName" :maxlength="maxLength">
          </div>
          <div class="registration-parent__box">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.phone.$dirty && v$.phone.$error)}" placeholder="Телефон" type="tel" v-model="phone" :maxlength="maxLength" v-mask="'+# (###) ###-##-##'" />
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.mail.$dirty && v$.mail.$error)}" placeholder="E-mail" type="email" v-model="mail" :maxlength="maxLength">
          </div>
        </div>
        <div class="registration-parent__block">
          <div class="registration-parent__box">
            <div class="registration-parent__box-title">Адрес регистрации</div>
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.city.$dirty && v$.city.$error)}" placeholder="Город/населенный пункт" type="text" v-model="city" :maxlength="maxLength">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.street.$dirty && v$.street.$error)}" placeholder="Улица" type="text" v-model="street" :maxlength="maxLength">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.home.$dirty && v$.home.$error)}" placeholder="Дом, корпус" type="text" v-model="home" :maxlength="maxLength">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.apartment.$dirty && v$.apartment.$error)}" placeholder="Квартира" type="text" v-model="apartment" :maxlength="maxLength">
            <div class="apartment-alert">Если это частный дом укажите в&nbsp;поле Квартира&nbsp;&mdash; 0</div>
            <button type="button" class="registration-parent__button" @click="createParent">Сохранить</button>
          </div>
          <div class="registration-parent__box">
            <div class="registration-parent__box-title">Паспортные данные</div>
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.series.$dirty && v$.series.$error)}" placeholder="Серия и номер" type="text" v-model="series" :maxlength="maxLength">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.date.$dirty && v$.date.$error)}" placeholder="Дата выдачи (дд.мм.гггг)" type="text" v-model="date" v-mask="'##.##.####'">
            <input :class="{'registration-parent__input': true, 'registration-parent__input_error':(v$.issued.$dirty && v$.issued.$error)}" placeholder="Кем выдан" type="text" v-model="issued" :maxlength="maxLength">
            <img src="@/assets/images/icons/parent.png" alt="" class="registration-parent__image">
          </div>
        </div>
      </div>
    <alert ref="alert" />
  </form>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { email, required, minLength, maxLength } from '@vuelidate/validators'
  import { mapActions, mapMutations } from 'vuex'
  import Alert from '@/components/elements/Alert'
  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    components: {
      Alert,
    },
    data () {
      return {
          parent: {},
          maxLength: 50,
          isTreatment: null,
          surName: '',
          name: '',
          lastName: '',
          phone: '+7',
          mail: '',
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
        this.mail = val.replace(/[^\\a-zA-Z, @, 0-9, -, _, . ]/g, '')
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
        fetchCreateParent: 'parents/fetchCreateParent'
      }),
      ...mapMutations({
        SET_PARENT: 'parents/SET_PARENT',
      }),
      createParent () {
        this.v$.$touch()
        if (this.v$.$errors.length || (this.isTreatment !== 'нет' && this.isTreatment !== 'да')) {
          this.$refs.alert.switchActive();
        } else {
          this.collector()
          this.SET_PARENT(this.parent)
          this.fetchCreateParent()
          this.$router.push({ name: 'cabinet', params: { returnFetch: true }})
        }
        if (this.v$.$invalid) {
          return;
        }
      },
      collector () {
        this.parent.sName = this.surName
        this.parent.username = this.name,
        this.parent.tName = this.lastName,
        this.parent.phone = this.phone,
        this.parent.email = this.mail,
        this.parent.street = this.street,
        this.parent.home = this.home,
        this.parent.apartment = this.apartment,
        this.parent.city = this.city,
        this.parent.series = this.series,
        this.parent.datePassport = this.date,
        this.parent.issued = this.issued,
        this.parent.isParent = this.isTreatment
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
  .registration-parent {
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
    &__radio {
      margin: 0 0 26px;
      &-title {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        margin: 0 0 16px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-box {}
      &-input {
        margin: 0 34px 0 0;
        width: 0px;
        @media screen and (max-width: 680px) {
          margin: 0 24px 0 0;
        }
        position: relative;
        &::before {
          cursor: pointer;
          width: 20px;
          height: 20px;
          border: 1px solid #000;
          border-radius: 50%;
          content: '';
          top: -4px;
          left: 0;
          position: absolute;
          @media screen and (max-width: 680px) {
            top: 0;
            width: 14px;
            height: 14px;
          }
        }
        &:checked {
          &::after {
            cursor: pointer;
            content: '';
            top: 2px;
            left: 6px;
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: black;
            @media screen and (max-width: 680px) {
              top: 4px;
              left: 4px;
              width: 8px;
              height: 8px;
            }
          }
        }
      }
      &-label {
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        margin: 0 28px 0 0;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
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
      @media screen and (max-width: 1300px) {
        margin: 0 0 20px;
      }
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
