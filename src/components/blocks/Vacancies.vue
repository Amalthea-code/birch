<template>
  <div class="vacancies">
    <div class="vacancies__title">Вакансии</div>
    <div class="vacancies__box">
      <div class="vacancies__item">
        <info
          title="УБОРЩИЦА"
          color="#F7B618"
        >
          <div class="vacancies__item-text">
            Описание вакансии Описание вакансии Описание вакансии 
          </div>
        </info>
      </div>
      <div class="vacancies__item">
        <info
          title="УБОРЩИЦА"
          color="#F7B618"
        >
          <div class="vacancies__item-text">
            Описание вакансии Описание вакансии Описание вакансии 
          </div>
        </info>
      </div>
      <div class="vacancies__item">
        <info
          title="УБОРЩИЦА"
          color="#F7B618"
        >
          <div class="vacancies__item-text">
            Описание вакансии Описание вакансии Описание вакансии 
          </div>
        </info>
      </div>
      <div class="vacancies__item">
        <info
          title="УБОРЩИЦА"
          color="#F7B618"
        >
          <div class="vacancies__item-text">
            Описание вакансии Описание вакансии Описание вакансии 
          </div>
        </info>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/elements/Info'
  export default {
    components: {
      Info 
    },
  }
</script>

<style lang="scss" scoped>
  .vacancies {
    margin: 0 auto;
    max-width: 1080px;
    padding: 72px 0 92px;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 58px;
    }
    &__box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__item {
      margin: 0 0 74px;
      width: calc(50% - 15px);

      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
</style>