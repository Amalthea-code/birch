<template>
  <div class="detal-card">
    <img :src="(this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'parent' ? require('@/assets/images/icons/parent.png') : require('@/assets/images/icons/child.png'))" alt="" class="detal-card__image">
    <div class="detal-card__title">Данные 
      <span v-if="this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'parent'">родителя/опекуна</span>
      <span v-else>ребенка</span>
    </div>
    <span class="detal-card__delete" @click="remove">Удалить</span>
    <div class="detal-card__block">
      <div class="detal-card__block-title">Персональные данные</div>
      <div class="detal-card__box">
        <div class="detal-card__item"><span>Фамилия:</span><span>{{ surName }}</span></div>
        <div class="detal-card__item"><span>Имя:</span><span>{{ name }}</span></div>
        <div class="detal-card__item"><span>Отчество:</span><span>{{ lastName }}</span></div>
        <div v-if="mail" class="detal-card__item"><span>E-mail:</span><span>{{ mail }}</span></div>
        <div v-if="phone" class="detal-card__item"><span>Телефон:</span><span>{{ phone }}</span></div>
      </div>
      <div class="detal-card__block-title">Персональные данные</div>
      <div class="detal-card__box">
        <div v-if="series" class="detal-card__item"><span>Серия и номер:</span><span>{{ series }}</span></div>
        <div v-if="date" class="detal-card__item"><span>Дата выдачи:</span><span>{{ date }}</span></div>
        <div v-if="issued" class="detal-card__item"><span>Кем выдан:</span><span>{{ issued }}</span></div>
        <div v-if="birthCertificate" class="detal-card__item"><span>Свидетельство о рождении:</span><span>{{ birthCertificate }}</span></div>
      </div>
      <div class="detal-card__block-title">
        <span v-if="this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'parent'">Адрес регистрации</span>
        <span v-else>Адрес фактического проживания</span>
      </div>
      <div class="detal-card__box">
        <div class="detal-card__item"><span>Город/населенный пункт:</span><span>{{ city }}</span></div>
        <div class="detal-card__item"><span>Улица:</span><span>{{ street }}</span></div>
        <div class="detal-card__item"><span>Дом, корпус:</span><span>{{ home }}</span></div>
        <div class="detal-card__item"><span>Квартира:</span><span>{{ apartment }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        surName: null,
        lastName: null,
        name: null,
        birthCertificate: null,
        mail: null,
        series: null,
        date: null,
        issued: null,
        city: null,
        street: null,
        home: null,
        apartment: null,
        phone: null,
        id: null
      }
    },
    computed: {
      ...mapGetters({
        foundChild: 'children/GET_FOUNDCHILD',
        foundParent: 'parents/GET_FOUNDPARENT',
      })
    },
    methods: {
      ...mapActions({
        searchParant: 'parents/searchParent',
        searchChild: 'children/searchChild',
        deleteParent: 'parents/deleteParent',
        deleteChild: 'children/deleteChild',
      }),
      getChild () {
        this.surName = this.foundChild.sName
        this.lastName = this.foundChild.tName
        this.name = this.foundChild.fName
        this.birthCertificate = this.foundChild.birthCertificate
        this.series = this.foundChild.series
        this.date = this.foundChild.date
        this.issued = this.foundChild.issued
        this.city = this.foundChild.city
        this.street = this.foundChild.street
        this.home = this.foundChild.home
        this.apartment = this.foundChild.apartment
        this.id = this.foundChild.id
      },
      getParent () {
        this.surName = this.foundParent.sName
        this.lastName = this.foundParent.tName
        this.name = this.foundParent.fName
        this.phone = this.foundParent.phone
        this.mail = this.foundParent.email
        this.series = this.foundParent.series
        this.date = this.foundParent.date
        this.issued = this.foundParent.issued
        this.city = this.foundParent.city
        this.street = this.foundParent.street
        this.home = this.foundParent.home
        this.apartment = this.foundParent.apartment
        this.id = this.foundParent.id
      },
      remove () {
        if (this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'child') {
          this.deleteChild(this.id)
        } else {
          this.deleteParent(this.id)
        }
        this.$router.push({ name: 'cabinet', params: { returnFetch: true }})
      }
    },
    created () {
      if (this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'child') {
        this.searchChild(this.$route.params.id)
      } else {
        this.searchParant(this.$route.params.id)
      }
      
    },
    mounted () {
      if (this.$route.path.replace(/[^a-zа-яё]/gi, '') === 'child') {
        this.getChild()
      } else {
        this.getParent()
      }
    }
  }
</script>


<style lang="scss" scoped>
  .detal-card {
    background-color: white;
    padding: 24px 54px;
    border-radius: 20px;
    position: relative;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 36px;
      font-weight: 900;
      line-height: 44px;
      margin: 0 0 44px;
    }
    &__delete {
      position: absolute;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 18px;
      color: #F05156;

      &:hover {
        text-decoration: underline;
      }
    }
    &__image {
      margin: 0 auto;
      width: 200px;
      display: block;
    }
    &__block {
      &-title {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        margin: 0 0 14px;
      }
    }
    &__box {
      margin: 0 0 44px;
    }
    &__item {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      margin: 0 0 10px;
      span {
        display: inline-block;
        &:first-child {
          width: 300px;
        }
      }
    }
  }
</style>