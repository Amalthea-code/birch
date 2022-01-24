<template>
  <div class="contacts">
    <div class="contacts__title">Контакты</div>
    <info
      title="Автономная некоммерческая организация «Спортивно-оздоровительный центр «Березка»"
      color="#BAA3E4"
    >
      <div class="contacts__box">
        <div class="contacts__address"><span>Юр. адрес:</span>  410012, Саратовская область, г. Саратов, ул. Аткарская, д. 29 оф. 30</div>
        <div class="contacts__address"><span>Адрес местонахождения:</span> 410071, Саратовская область, г. Саратов, ул. Большая Кумысная поляна</div>
        <p class="contacts__text">
          Телефон: 8 8452 563107<br />
          ИНН / КПП 6455072031/645501001<br />
          ОГРН:1196451005684; ОКПО: 36517428<br />
          р/с 40703810614240000002 ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)<br />
          к/с № 30101810145250000411<br />
          БИК 044525411<br />
        </p>
        <div class="contacts__persons">
          <div class="contacts__person"> <span>Директор:</span> Амхир Борис Константинович</div>
          <div class="contacts__person"> <span>Исполнительный директор:</span> Крук Илья Леонидович</div>
          <div class="contacts__person"> <span>Главный бухгалтер:</span> Назарова Елена Петровна</div>
        </div>
        <div class="contacts__block">
          <div class="contacts__item">
            <div class="contacts__item-title">Номер телефона</div>
            <p class="contacts__item-text">
              Администрация: +7(8452) 56-31-07<br />
              Отдел продаж: +7 937 225 62 44<br />
              Отдел продаж: +7(8452) 25-62-44<br />
            </p>
          </div>
          <div class="contacts__item">
            <div class="contacts__item-title">Электронная почта</div>
            <p class="contacts__item-text">
              Администрация: admin@berezka64.ru<br />
              Отдел продаж: sales@berezka64.ru<br />
              Бухгалтерия: nazarova.elena@berezka64.ru<br />
            </p>
          </div>
        </div>
      </div>
    </info>
  </div>
</template>

<script>
  import Info from '@/components/elements/Info'
  export default {
    components: {
      Info
    }
  }
</script>

<style lang="scss" scoped>
  .contacts {
    margin: 0 auto 92px auto;
    max-width: 1080px;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 70px 0 58px;
    }
    &__box {}
    &__address {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;

      span {
        font-weight: 600;
      }
    }
    &__text {
      margin: 24px 0;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 23px;
    }
    &__person {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;

      span {
        font-weight: 600;
      } 
    }
    &__block {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #DFDFDF;
      padding: 38px 0 0;
      margin: 40px 0 0;
    }
    &__item {
      width: 50%;
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 24px;
        font-weight: 900;
        line-height: 29px;
      }
      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
</style>