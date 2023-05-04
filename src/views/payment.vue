<!-- https://berezka64.server.paykeeper.ru/ -->
<!-- https://mir-berezka64.server.paykeeper.ru/payments/ -->
<template>
  <form ref="form" accept-charset="utf-8" class="payment" method='POST' action="https://berezka64.server.paykeeper.ru/create">
    <div v-if="user" class="payment__title">{{user.sName + ' ' + user.fName + ' ' + user.tName}}</div>
    <div v-if="this.$route.hash !== '#created'" class="payment__text">Счет формируется на каждую путевку отдельно</div>
    <div class="payment__steps">
      <div class="payment__step">
        <div class="payment__step-title">ШАГ 1</div>
        <div class="payment__step-text">ВЫБЕРИТЕ РОДИТЕЛЯ/ОПЕКУНА</div>
        <div
          v-if='parents.length'
          :class="{
            'select': true,
            'select_active': isParentsSelect
          }"
          @click="switchOpenSelect(0)"
        >
          <div class="select__box">
            <div
              @click.stop="switchActiveSelect(null, 'parent')"
              :class="{
                'select__item-slug': true,
                'select__item-slug_parent': true,
                'select__item-slug_noActive': isParentsSelect
              }">
              Родитель не выбран
            </div>
            <div
              v-for="(parent, index) in parents"
              :key="index"
              :class="{
                'select__item': true,
                'select__item_active': index === isParentSelect
              }"
            >
              <input type="radio" class="select__input" name="parent" :data-value="parent.tName + parent.fName + parent.sName" :id="('parent' + index)" v-model="selectParent"><label @click="switchActiveSelect(index, 'parent')" class="select__radio" :for="('parent' + index)">{{ parent.sName }} {{ parent.fName }} {{ parent.tName }}</label>
            </div>
            <select-arrow class="select__arrow"/>
          </div>
        </div>
        <div v-else class="payment__step-slag">Добавьте родителя/опекуна в личном кабинете</div>
        <input v-if="this.$route.hash !== '#created'" type="checkbox" class="payment__step-checkbox payment__step-checkbox_red" id="checkboxPer" v-model="isParentPaying">
        <label v-if="this.$route.hash !== '#created'" for="checkboxPer" class="payment__step-label payment__step-label_red">Плательщиком является опекун/родитель</label>
      </div>
      <div class="payment__step">
        <div class="payment__step-title">ШАГ 2</div>
        <div class="payment__step-text">ВЫБЕРИТЕ РЕБЕНКА</div>
        <div
          v-if='childen.length'
          :class="{
            'select': true,
            'select_active': isChildrenSelect
          }"
          @click="switchOpenSelect(1)"
        >
          <div class="select__box">
            <div
              @click.stop="switchActiveSelect(null, 'child')"
              :class="{
                'select__item-slug': true,
                'select__item-slug_noActive': isChildrenSelect
              }">
              Ребенок не выбран
            </div>
            <div
              v-for="(child, index) in childen"
              :key="index"
              :class="{
                'select__item': true,
                'select__item_active-child': index === isChildSelect
              }"
              @click="switchActiveSelect(index, 'child')"
            >
              <input type="radio" class="select__input" name="child" :id="('child' + index)" :value="child.tName + child.fName + child.sName" v-model="selectChild" ><label @click="switchActiveSelect(index, 'child')" class="select__radio" :for="('child' + index)">{{ child.sName }} {{ child.fName }} {{ child.tName }}</label>
            </div>
            <select-arrow class="select__arrow"/>
          </div>
        </div>
        <div v-else class="payment__step-slag">Добавьте ребенка в личном кабинете</div>
      </div>
      <div class="payment__step">
        <div class="payment__step-title">ШАГ 3</div>
        <div class="payment__step-text">ВЫБЕРИТЕ ПУТЕВКУ</div>
        <div v-if="shifts.length" class="payment__step-box">
          <div class="payment__step-element" v-for="(shift, index) in shifts" :key="index">
            <input v-if="this.$route.hash === '#created' || vipHendler(shift.attributes.count, index)" :value="index" type="radio" :id="('shift-' + index)" class="payment__step-radio" v-model="itemShift">
            <label v-if="this.$route.hash === '#created' || vipHendler(shift.attributes.count, index)" :for="('shift-' + index)" class="payment__step-label"><strong> {{ shift.attributes.number }} смена</strong> (<span v-html="shift.attributes.date" />)</label>
          </div>
        </div>
      </div>
      <div v-if="this.$route.hash !== '#created'" class="payment__step">
        <div class="payment__step-box_agreement">
          <input type="checkbox" class="payment__step-checkbox" id="checkbox" v-model="isAgreement"><label for="checkbox" class="payment__step-label">Я принимаю условия <a target="_blank" href="https://drive.google.com/file/d/1PxjUDG-HHtzjnbN6SmuZ6mJPI_NYVS-9/view">договора оферты</a> и даю согласие на <a target="_blank" href="https://drive.google.com/file/d/17Vl_RN0LAu2auWmSwDpCZ5VJ-K5bAduQ/view">обработку персональных данных</a></label>
        </div>
      </div>
    </div>
    <div class="payment__step-lust">
        <div v-if="false" class="payment__step-left">
          <div class="payment__step-title">ШАГ 4</div>
          <div class="payment__step-text">СУММА</div>
          <div class="payment__step-element"><input name="cashback" :value="true" v-model="paymentSum" type="radio" id="cashback-2" class="payment__step-radio" checked><label for="cashback-2" class="payment__step-label">с кэшбеком по карте МИР</label></div>
          <div class="payment__step-hardly">Внимание! Перед оплатой нужно зарегистрировать карту МИР в программе лояльности для получения Кешбэка.</div>
          <div class="payment__step-hardly"><router-link to="/promotion">Ознакомьтесь с ИНСТРУКЦИЕЙ.</router-link></div>
        </div>
        <div v-if="this.$route.hash !== '#created'" class="payment__step-left payment__info">
          <h4 class="payment__info-title">Информация о путевке</h4> 
          Информацию о Вашей покупке с указанием смены, сроков поездки, данными на родителя и ребенка Вы можете увидеть в путёвке, которая придёт Вам в виде письма на электронную почту. Также Вы получите по почте чеки от ОФД и PayKeeper. Распечатайте путёвку в формате А4 и предъявите ее вместе с остальными необходимыми документами в день заезда. ВСЯ ИНФОРМАЦИЯ ПО ДОКУМЕНТАМ, СПРАВКАМ, УСЛОВИЯМ ПРОЖИВАНИЯ ЕСТЬ НА САЙТЕ В РАЗДЕЛЕ <router-link to="/parents">"РОДИТЕЛЯМ"</router-link>
          <br /><br />
          Если в течении 10 рабочих дней Вы не получили путёвку на свой электронный адрес, то напишите обращение в отдел продаж на почту: <a href="mailto:sales@berezka64.ru">sales@berezka64.ru</a>
        </div>
        <div v-else class="payment__step-left payment__info">
          <h4 class="payment__info-title">ПОСЛЕ МОДЕРАЦИИ ВАШЕЙ ЗАЯВКИ, В ВАШЕМ ЛИЧНОМ КАБИНЕТЕ ПОЯВИТСЯ КНОПКА - ОТПРАВИТЬ КОПИЮ ПУТЕВКИ НА ПОЧТУ</h4>
        </div>
        <div v-if="user" class="payment__step-right payment__step-pay">
          <input class="payment__hidden-input" type="hidden" name='sum' :value='sum'/>
          <input class="payment__hidden-input" type="hidden" name='client_email' :value='user.email'/>
          <input class="payment__hidden-input" type="hidden" name='client_phone' :value="user.phone"/>
          <input class="payment__hidden-input" type="hidden" name='clientid' :value="nameFull"/>
          <input class="payment__hidden-input" type="hidden" name='service_name' :value="value"/>
          <input class="payment__hidden-input" type="hidden" name='orderid' :value="orderId"/>
          <div
            v-if="this.$route.hash !== '#created'"
            :class="{
              'payment__step-sum': true,
              'payment__step-sum_special': this.user.vip === 'vip2' || this.user.vip === 'vip1' || this.user.vip === 'vipAll' ? true : false
            }"
          >{{ sum }} руб.</div>
          <button
            :class="{
              'payment__step-button': true,
              'payment__step-button_disable': sum === 0 || !isAgreement || !selectChild || !selectParent,
            }"
            @click="fetchPutShifts"
            type="button"
          >
          {{ this.$route.hash !== "#created" ? 'ОПЛАТИТЬ' : 'СОЗДАТЬ ЗАЯВКУ' }}
          </button>
        </div>
    </div>
    <alert ref="alert" />
  </form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import selectArrow from '@/assets/images/icons/selectArrow'
    import Alert from '@/components/elements/Alert'
  export default {
    components: {
      selectArrow,
      Alert
    },
    computed: {
      ...mapGetters({
        childen: 'children/GET_CHILDREN',
        parents: 'parents/GET_PARENTS',
        shifts: 'shifts/GET_SHIFTS',
        user: 'profile/GET_AUTORIZEDUSER',
        token: 'profile/GET_TOKEN'
      }),
      sum () {
        if (this.user && this.shifts.length) {
          return (this.user.vipSale ? Number(this.shifts[this.itemShift].attributes.vip_price) : Number(this.shifts[this.itemShift].attributes.price))
        } else {
          return 'Идет расчет'
        }
      },
      value () {
        if (this.shifts.length) {
          return this.shifts[this.itemShift].attributes.service_name
        } else {
          return 'Идет загрузка'
        }
        
      },
      nameFull () {
        return this.user.sName + ' ' + this.user.fName + ' ' + this.user.tName
      }
    },
    data () {
      return {
        orderId: null,
        isParentPaying: false,
        itemShift: 0,
        isChildrenSelect: false,
        isParentsSelect: false,
        isChildSelect: null,
        isParentSelect: null,
        isAgreement: this.$route.hash !== '#created' ? false : true,
        selectParent: null,
        selectChild: null,
        paymentSum: null
      }
    },
    methods: {
      ...mapActions({
        fetchOrder: 'profile/fetchOrder',
        fetchShifts: 'shifts/fetchShifts',
        rewriteChild: 'children/rewriteChild',
        fetchUserData: 'profile/fetchUserData'
      }),
      vipHendler (count, index) {
        if (count > 0) { return true }
        switch (index) {
          case 0:
            return this.user.vip1
          case 1:
            return this.user.vip2
          case 2:
            return this.user.vip3
          case 3:
            return this.user.vip4
          case 4:
            return this.user.vip5
          case 5:
            return this.user.vip6
          default:
            return false
        }
      },
      isVip (index) {
        switch (index) {
          case 0:
            return this.user.vip1
          case 1:
            return this.user.vip2
          case 2:
            return this.user.vip3
          case 3:
            return this.user.vip4
          case 4:
            return this.user.vip5
          case 5:
            return this.user.vip6
          default:
            return false
        }
      },
      async fetchPutShifts () {
        await Promise.allSettled([
          this.fetchShifts()
        ]).then(()=> {
          if(this.shifts[this.itemShift].attributes.count <= 0) {
            switch (this.itemShift) {
              case 0:
                if (this.user.vip1 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              case 1:
                if (this.user.vip2 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              case 2:
                if (this.user.vip3 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              case 3:
                if (this.user.vip4 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              case 4:
                if (this.user.vip5 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              case 5:
                if (this.user.vip6 || this.$route.hash === "#created") {
                  this.createOrder()
                } else {
                  this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
                }
                break
              default:
                this.$refs.alert.switchActive(('Путевки на выбранную смену закончились'))
            }
          } else {
            this.createOrder()
          }
        })
      },
      switchOpenSelect (props) {
        props === 1 ? this.isChildrenSelect = !this.isChildrenSelect : this.isParentsSelect = !this.isParentsSelect
      },
      switchActiveSelect (props, selects) {
        if (selects === 'parent') {
          this.isParentSelect = props
          this.switchOpenSelect(0)
        } else {
          this.isChildSelect = props
          this.switchOpenSelect(1)
        }
      },
      async calcTotalYear () {
        let time = new Date().getTime();
        let date = new Date(time + (4 * 60 * 60 * 1000));
        const birth = new Date(this.childen[this.isChildSelect].birth.split('.').reverse().join('/'))
        let fall = (birth.getTime() - date.getTime()) / 1000
        fall /= (60 * 60 * 24)
        this.rewriteChild({
          id: this.childen[this.isChildSelect].id,
          year: String(Math.abs(Math.round(fall/365.25)))
        })
        console.log(Math.abs(Math.round(fall/365.25)))
        console.log(birth)
        return Math.abs(Math.round(fall/365.25))
      },
      async createOrder () {
        let date = new Date()
        let order = {
          date: date,
          number: date,
          price: this.sum,
          order_type:'(Полная оплата)',
          order_name: this.shifts[this.itemShift].attributes.service_name,
          order_id: this.orderId,
          changeable: Boolean(!this.isVip(this.itemShift)),
          parent: {
            parent_name: this.parents[this.isParentSelect].fName,
            parent_sname: this.parents[this.isParentSelect].sName,
            parent_tname: this.parents[this.isParentSelect].tName,
            parent_email: this.parents[this.isParentSelect].email,
            parent_phone: this.parents[this.isParentSelect].phone,
            parent_city: this.parents[this.isParentSelect].city,
            parent_street: this.parents[this.isParentSelect].street,
            parent_home: this.parents[this.isParentSelect].home,
            parent_apartment: this.parents[this.isParentSelect].apartment,
            parent_series: this.parents[this.isParentSelect].series,
            parent_issued: this.parents[this.isParentSelect].issued,
            parent_datepassport: this.parents[this.isParentSelect].datepassport,
            parent_isparent: this.parents[this.isParentSelect].isparent,
          },
          child: {
            child_name: this.childen[this.isChildSelect].fName,
            child_sname: this.childen[this.isChildSelect].sName,
            child_tname: this.childen[this.isChildSelect].tName,
            child_totalyear: await this.calcTotalYear(),
            child_birthday: this.childen[this.isChildSelect].birth,
            child_city: this.childen[this.isChildSelect].city,
            child_street: this.childen[this.isChildSelect].street,
            child_home: this.childen[this.isChildSelect].home,
            child_apartment: this.childen[this.isChildSelect].apartment,
            child_series: this.childen[this.isChildSelect].series,
            child_issued: this.childen[this.isChildSelect].issued,
            child_datepassport: this.childen[this.isChildSelect].datepassport,
            child_birthсertificate: this.childen[this.isChildSelect].birthCertificate,
            child_gender: this.childen[this.isChildSelect].gender,
          },
          user: {
            user_name: this.isParentPaying ? this.parents[this.isParentSelect].fName : this.user.fName,
            user_sname: this.isParentPaying ? this.parents[this.isParentSelect].sName : this.user.sName,
            user_tname: this.isParentPaying ? this.parents[this.isParentSelect].tName : this.user.tName,
            user_phone: this.isParentPaying ? this.parents[this.isParentSelect].phone : this.user.phone,
            user_email: this.user.email,
            user_city: this.isParentPaying ? this.parents[this.isParentSelect].city : this.user.city,
            user_street: this.isParentPaying ? this.parents[this.isParentSelect].street : this.user.street,
            user_apartment: this.isParentPaying ? this.parents[this.isParentSelect].apartment : this.user.apartment,
            user_home: this.isParentPaying ? this.parents[this.isParentSelect].home : this.user.home,
            user_series: this.isParentPaying ? this.parents[this.isParentSelect].series : this.user.series,
            user_datepassport: this.isParentPaying ? this.parents[this.isParentSelect].datePassport : this.user.datePassport,
            user_issued: this.isParentPaying ? this.parents[this.isParentSelect].issued : this.user.issued
          }
        }
        try {
          await this.fetchOrder(order)
          this.$route.hash !== "#created" ? this.$refs.form.submit() : null
          this.$route.hash === "#created" ? this.$router.push({ name: 'cabinet'}) : null
          this.$route.hash === "#created" ? alert('ПОСЛЕ МОДЕРАЦИИ ВАШЕЙ ЗАЯВКИ, В ВАШЕМ ЛИЧНОМ КАБИНЕТЕ ПОЯВИТСЯ КНОПКА - ОТПРАВИТЬ КОПИЮ ПУТЕВКИ НА ПОЧТУ') : null
        }
        catch {
          this.$refs.alert.switchActive(('Произошла ошибка. Попробуйте еще раз'))
        }
        
      }
    },
    mounted () {
      this.orderId = Math.floor(Math.random() * 100000000) + 1
      this.shifts.length ? null : this.fetchShifts()
      this.user ? null : this.fetchUserData()
    }
  }
</script>

<style lang="scss" scoped>
  .payment {
    padding: 178px 0 0;
    margin: 0 auto;
    max-width: 1080px;

    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
      padding: 120px 0 0;
    }
    &__title {
      font-family: Montserrat;
      font-size: 36px;
      font-weight: 500;
      line-height: 46px;
      margin: 0 0 34px;
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 31px;
        margin: 0 0 14px;
      }
    }
    &__text {
      font-family: Montserrat;
      font-size: 18px;
      line-height: 23px;
      margin: 0 0 34px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__steps {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      border-bottom: 1px solid #000;
    }
    &__step {
      width: calc(50% - 15px);
      margin: 0 0 44px;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 20px;
        font-weight: 900;
        line-height: 26px;
        color: #00000018;
        margin: 0 0 22px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
          margin: 0 0 14px;
        }
      }
      &-slag {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: #F05156;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-pay {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      &-lust {
        display: flex;
        justify-content: space-between;
        padding: 48px 0 138px;
        @media screen and (max-width: 680px) {
          padding: 0 0 138px;
          flex-wrap: wrap-reverse;
        }
      }
      &-left {
        width: 45%;
        @media screen and (max-width: 680px) {
          width: 100%;
        }
      }
      &-right {

        width: 45%;
        @media screen and (max-width: 680px) {
          width: 100%;
        }
      }
      &-hardly {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 20px;
        margin: 12px 0 0;
        color: #f05156;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
        a {
          color: #f05156;
        }
      }
      &-sum {
        font-family: RF Dewi Expanded;
        font-size: 28px;
        font-weight: 900;
        line-height: 36px;
        text-align: right;
        margin: 30px 0 0;
        position: relative;
        &_special {
          &::before {
            content: 'Персональные условия';
            border: 2px solid #84D0B8;
            padding: 6px 8px;
            border-radius: 10px;
            position: absolute;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 16px;
            right: 0;
            bottom: -52px;
            color: #84D0B8;
            @media screen and (max-width: 680px) {
              left: 0;
              right: auto;
            }
          }
        }
        @media screen and (max-width: 680px) {
          font-size: 20px;
          line-height: 26px;
          text-align: left;
        }
      }
      &-button {
        cursor: pointer;
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        text-transform: uppercase;
        padding: 22px 68px;
        border-radius: 50px;
        background-color: #84D0B8;
        color: #fff;
        border: none;
        margin: 33px 0 0;
        transition: opacity .5s;
        &_disable {
          cursor: default;
          opacity: .3;
          pointer-events: none;
        }
        @media screen and (max-width: 680px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      &-text {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        margin: 0 0 32px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
          margin: 0 0 24px;
        }
      }
      &-info {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        margin: 20px 0;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-box {
        &_agreement {
          margin: 120px 0 0;
        }
      }
      &-element {
        margin: 0 0 18px;
      }
      &-checkbox {
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
        &_red {
          &::before {
            border-color: red;
          }
          &:checked {
            &::after {
              background-color: red;
            }
          }
        }
      }
      &-radio {
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
        &_disable {
          pointer-events: none;
          &::before {
            border-color: #C4C4C4;
          }
        }
      }
      &-label {
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        &_red {
          color: red;
        }
        a {
          color: #000;
        }
        &_disable {
          cursor: default;
          pointer-events: none;
          color: #C4C4C4;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
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
      font-weight: 900;
      a {
        color: #baa3e4;
      }
    }
  }
  .select {
    width: 100%;
    height: 68px;
    position: relative;
    margin: 0 0 20px;
    &_active {
      .select__box {
        height: auto;
        box-shadow: 0 0 20px 4px #cdcccc;
        z-index: 3;
      }
      .select__arrow {
        transform: rotate(180deg);
        top: 28px;
      }
    }

    &__box {
      position: absolute;
      top: 0;
      left: 0;
      height: 68px;
      width: 100%;
      overflow: hidden;
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      transition: box-shadow .3s;
      border-radius: 37px;
    }
    &__item {
      display: flex;
      align-items: center;
      position: relative;
      height: 68px;
      padding: 0 40px 0 22px;
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      width: 100%;
      margin: 0;
      border-radius: 50px;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
      cursor:pointer;
      color: #000;
      &-slug {
        display: flex;
        align-items: center;
        position: relative;
        height: 68px;
        padding: 0 40px 0 22px;
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        width: 100%;
        margin: 0;
        border-radius: 50px;
        -webkit-box-orient: vertical;
        line-clamp: 2;
        overflow: hidden;
        cursor:pointer;
        color: #fff;
        background-color: #84d0b8;
        &_parent {
          background-color: #BAA3E4;
        }
        &_noActive {
          color: #000;
          background-color: #fff;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
          width: 238px;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
        width: 238px;
      }
      &_active {
        order: -1;
        color: #fff;
        background: linear-gradient(268.41deg, rgba(156, 132, 210, 0.96) 6.43%, #BAA3E4 95.7%);
        &-child {
          background: #84D0B8;
          order: -1;
          color: #fff;
        }
      }
    }
    &__radio {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 22px);
      height: calc(100% - 44px);
      padding:  22px 0 22px 22px;
    }
    &__input {
      opacity: 0;
    }
    &__arrow {
      cursor: pointer;
      position: absolute;
      transition: transform .3s, top .3s;
      top: 22px;
      right: 30px;
    }
  }
</style>