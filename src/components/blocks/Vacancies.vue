<template>
  <div class="vacancies">
    <div class="vacancies__title">Вакансии</div>
    <div
      v-if="vacancies.length"
      class="vacancies__box"
    >
      <div
        v-for="(vacancie, index) in vacancies"
        :key="index"
        class="vacancies__item"
      >
        <info
          :title="vacancie.title"
          :color="vacancie.color"
          backgroundColor='linear-gradient(258.87deg, #F7B618 0%, #F5C54E 94.92%)'
        >
          <div class="vacancies__item-text" v-html="vacancie.content" />
        </info>
      </div>
    </div>
    <div
      v-else
      class="vacancies__box"
    >
      <div class="vacancies__err">Здесь скоро появятся наши вакансии!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Info from '@/components/elements/Info'

  export default {
    components: {
      Info 
    },
    computed: {
      ...mapGetters({
        vacancies: 'vacancies/GET_VACANCIES'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .vacancies {
    margin: 0 auto;
    max-width: 1080px;
    padding: 72px 0 92px;
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 58px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__item {
      margin: 0 0 74px;
      width: calc(50% - 15px);
      @media screen and (max-width: 1300px) {
        width: 100%;
      }

      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
      }
    }
    &__err {
      font-family: RF Dewi Expanded;
      font-size: 32px;
      font-weight: 900;
      line-height: 39px;
      text-align: center;
    }
  }
</style>