<template>
  <form class="registration-child">
    <div class="registration-child__title">Данные ребенка</div>
      <div class="registration-child__radio">
        <div class="registration-child__radio-title">Пол</div>
        <div class="registration-child__radio-box">
          <input type="radio" value="мальчик" id="child-1" name="child" class="registration-child__radio-input" v-model="isTreatment">
          <label for="child-1" class="registration-child__radio-label">Мальчик</label>
          <input type="radio" value="девочка" id="child-2" name="child" class="registration-child__radio-input" v-model="isTreatment">
          <label for="child-2" class="registration-child__radio-label">Девочка</label>
        </div>
      </div>
      <div class="registration-child__forms">
        <div class="registration-child__block">
          <div class="registration-child__box">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.surName.$dirty && v$.surName.$error)}" placeholder="Фамилия" type="text" v-model="surName">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.name.$dirty && v$.name.$error)}" placeholder="Имя" type="text" v-model="name">
            <input class="registration-child__input" placeholder="Отчество" type="text" v-model="lastName">
          </div>
          <div class="registration-child__box">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.birthday.$dirty && v$.birthday.$error)}" placeholder="Дата рождения" type="text" v-model="birthday" v-mask="'##.##.####'">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.old.$dirty && v$.old.$error)}" placeholder="Возраст (полных лет на день заезда в смену)" type="text" v-model="old" v-mask="'##'">
            <div class="registration-child__radio-box">
              <div style="margin-bottom: 30px;">
                <label class="registration-child__radio-label">Наличие аллергических реакций</label>
                <!-- <div :style="{paddingBottom: '10px', marginTop: '10px', borderBottom: (v$.isAlergic?.$dirty && v$.isAlergic.$error)  ? '2px solid red' : ''}">
                  <input name="alergic" :value="true" id="alergic" type="radio" class="registration-child__radio-input" v-model="isAlergic">
                  <label for="alergic"  :class="[ 'registration-child__radio-label', {} ]">Есть</label>
                  <input name="alergic" :value="false" id="alergic1" type="radio" class="registration-child__radio-input" v-model="isAlergic">
                  <label for="alergic1"  class="registration-child__radio-label">Нет</label>
                </div> -->
                <input  :class="{'registration-child__input': true, 'registration-child__input_error':(v$.alergic.$dirty && v$.alergic.$error)}" placeholder="Укажите достоверную информацию или напишите 'нет'" type="text" v-model="alergic">
              </div>
              <div style="margin-bottom: 30px;">
                <label class="registration-child__radio-label">Наличие хронических заболеваний у Ребенка, в том числе требующих постоянного приема лекарственных препаратов</label>
                <!-- <div :style="{paddingBottom: '10px', marginTop: '10px', borderBottom: (v$.isHronic?.$dirty && v$.isHronic.$error)  ? '2px solid red' : ''}">
                  <input :value="true" id="hronic" type="radio" class="registration-child__radio-input" v-model="isHronic">
                  <label for="hronic"  class="registration-child__radio-label">Есть</label>
                  <input :value="false" id="hronic1" type="radio" class="registration-child__radio-input" v-model="isHronic">
                  <label for="hronic1"  class="registration-child__radio-label">Нет</label>
                </div> -->
                <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.hronic.$dirty && v$.hronic.$error)}" placeholder="Укажите достоверную информацию или напишите 'нет'" type="text" v-model="hronic">
              </div>
              <div style="margin-bottom: 30px;">
                <label class="registration-child__radio-label">Наличие поведенческих, психологических проблем и проблем в адаптации к новым социальным условиям</label>
                <!-- <div :style="{paddingBottom: '10px', marginTop: '10px', borderBottom: (v$.isPsycholog?.$dirty && v$.isPsycholog.$error)  ? '2px solid red' : ''}">
                  <input :value="true" id="psycholog" type="radio" class="registration-child__radio-input" v-model="isPsycholog">
                  <label for="psycholog"  class="registration-child__radio-label">Есть</label>
                  <input :value="false" id="psycholog1" type="radio" class="registration-child__radio-input" v-model="isPsycholog">
                  <label for="psycholog1"  class="registration-child__radio-label">Нет</label>
                </div> -->
                <input  :class="{'registration-child__input': true, 'registration-child__input_error':(v$.psycholog.$dirty && v$.psycholog.$error)}" placeholder="Укажите достоверную информацию или напишите 'нет'" type="text" v-model="psycholog">
              </div>
          </div>
          </div>
        </div>
        <div class="registration-child__block">
          <div class="registration-child__box">
            <div class="registration-child__box-title">Адрес фактического проживания</div>
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.city.$dirty && v$.city.$error)}" placeholder="Город/населенный пункт" type="text" v-model="city">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.street.$dirty && v$.street.$error)}" placeholder="Улица" type="text" v-model="street">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.home.$dirty && v$.home.$error)}" placeholder="Дом, корпус" type="text" v-model="home">
            <input :class="{'registration-child__input': true, 'registration-child__input_error':(v$.apartment.$dirty && v$.apartment.$error)}" placeholder="Квартира" type="text" v-model="apartment">
            <div class="apartment-alert">Если это частный дом укажите в&nbsp;поле Квартира&nbsp;&mdash; 0</div>
            <div :style="{marginTop: '30px', borderBottom: isConfirm === false  ? '2px solid red' : ''}">
              <input type="checkbox" id="oferta" name="oferta" class="registration-child__radio-input" v-model="isConfirm">
              <label style="color: red;" for="oferta" class="registration-child__radio-label">Я информирован и согласен с тем, что согласно <a style="color: blue;" target="_blank" href="https://drive.google.com/file/d/1cWhQAyVmdy8nAHdWFCje6nxoMDVYm2F7/view?usp=sharing">Оферте</a> несу полную ответственность за достоверность предоставленной мною информации.</label>
            </div>
            <button type="button" class="registration-child__button" @click="createChild">Сохранить</button>
          </div>
          <div class="registration-child__box">
            <div class="registration-child__box-title">Паспортные данные</div>
            <input :class="{'registration-child__input': true }" placeholder="Серия и номер" type="text" v-model="series" :maxlength="maxLength">
            <input :class="{'registration-child__input': true }" placeholder="Дата выдачи (дд.мм.гггг)" type="text" v-model="date" v-mask="'##.##.####'">
            <input :class="{'registration-child__input': true }" placeholder="Кем выдан" type="text" v-model="issued">
            <div class="registration-child__box-subTitle">Или свидетельство о рождении</div>
            <input :class="{'registration-child__input': true }" placeholder="Номер" type="text" v-model="birthCertificate">
            <div class="registration-child__alert">Заполнить одно из полей</div>
            <img src="@/assets/images/icons/child.png" alt="" class="registration-child__image">
          </div>
        </div>
      </div>
    <alert ref="alert" />
  </form>
</template>

<script>
  import  { mapMutations, mapActions } from 'vuex'
  import useVuelidate from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
  import Alert from '@/components/elements/Alert'
  export default {
    setup () {
      // setInputs() {

      // }
      return { v$: useVuelidate() }
    },
    components: {
      Alert,
    },
    data () {
      return {
          child: {},
          maxLength: 50,
          isTreatment: null,
          isPsycholog: null,
          isHronic: null,
          isAlergic: null,
          isConfirm: false,
          psycholog: '',
          hronic: '',
          alergic: '',
          surName: '',
          name: '',
          lastName: '',
          birthday: '',
          old: '',
          street: '',
          home: '',
          apartment: '',
          city: '',
          series: '',
          date: '',
          issued: '',
          birthCertificate: '',
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
          street: { required },
          home: { required },
          apartment: { required },
          city: { required },
          birthday: { required },
          old: { required },
          // isPsycholog: { required },
          // isHronic: { required },
          // isAlergic: { required },
          psycholog: { required },
          hronic: { required },
          alergic: { required },
          isConfirm: { required },
      }
    },
    methods: {
      ...mapActions({
        fetchCreateChild: 'children/fetchCreateChild'
      }),
      ...mapMutations({
        SET_CHILD: 'children/SET_CHILD',
      }),
      createChild () {
        this.v$.$touch()
                  
          
        if (this.v$.$errors.length || ((this.series === '' && this.date === '' && this.issued === '') && this.birthCertificate === '') || (this.isTreatment !== 'мальчик' && this.isTreatment !== 'девочка')||
    this.isConfirm === false) {
          this.$refs.alert.switchActive();
        } else {
          this.collector()
          this.SET_CHILD(this.child)
          this.fetchCreateChild()
          this.$router.push({ name: 'cabinet', params: { returnFetch: true }})
        }
        if (this.v$.$invalid) {
          return;
        }
      },
      collector () {
        this.child.sName = this.surName,
        this.child.username = this.name,
        this.child.tName = this.lastName,
        this.child.totalYear = this.old,
        this.child.birth = this.birthday,
        this.child.street = this.street,
        this.child.home = this.home,
        this.child.apartment = this.apartment,
        this.child.city = this.city,
        this.child.series = this.series,
        this.child.datePassport = this.date,
        this.child.issued = this.issued,
        this.child.gender = this.isTreatment,
        this.child.birthCertificate = this.birthCertificate,
        this.child.alergic = this.alergic,
        this.child.hronic = this.hronic,
        this.child.psycholog = this.psycholog
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
  .registration-child {
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
      line-height: 23px;
      color: #ff262c;
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 20px;
      }
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
      &-subTitle {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        margin: 20px 0 10px;
        @media screen and (max-width: 1300px) {
          margin: 20px 0 10px;
        }
        @media screen and (max-width: 680px) {
          margin: 20px 0 10px;
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
