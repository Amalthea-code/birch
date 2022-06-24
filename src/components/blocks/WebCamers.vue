<template>
  <div class="camers">
    <h3 v-if="GET_CAMERS.length" class="camers__title">ВЕБ-КАМЕРЫ</h3>
    <div v-if="GET_CAMERS.length" class="camers__box">
      <div class="camers__items">
        <div v-for="(el, i) in GET_CAMERS" :key="i">
          <div v-if="select === i && el.attributes.switch" class="camers__item">
            <iframe :src="el.attributes.link" width="100%" height="600" frameBorder="0" seamless="seamless" allowfullscreen>Ваш браузер не поддерживает фреймы!</iframe>
          </div>
        </div>
      </div>
      <div class="camers__tabs">
        <div v-for="(el, i) in GET_CAMERS" :key="i">
          <div
            v-if="el.attributes.switch"
            :class="{'camers__tab': true, 'camers__tab_active': select === i}"
            @click="select = i"
          >
            {{ el.attributes.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        select: 0
      }
    },
    computed: {
      ...mapGetters({
        GET_CAMERS: 'camers/GET_CAMERS'
      })
    },
    methods: {
      ...mapActions({
        fetchCamers: 'camers/fetchCamers'
      })
    },
    mounted () {
      this.fetchCamers()
    }
  }
</script>

<style lang="scss" scoped>
  .camers {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 0 70px;

    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 34px 0 24px;
      }
    }
    &__box {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1300px) {
        flex-direction: column-reverse;
      }
    }
    &__tabs {
      padding: 0 0 0 30px;
      @media screen and (max-width: 1300px) {
        padding: 0 0 40px 0;
      }
    }
    &__tab {
      font-family: Montserrat;
      font-size: 20px;
      line-height: 24px;
      padding: 10px 0;
      cursor: pointer;
      &_active {
        font-weight: 700;
      }
    }
    &__items {
      width: 100%;
    }
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
  }
</style>