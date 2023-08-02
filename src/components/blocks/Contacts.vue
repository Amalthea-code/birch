<template>
  <div class="contacts">
    <div class="contacts__title">Контакты</div>
    <info
      title="Автономная некоммерческая организация «Спортивно-оздоровительный центр «Березка»"
      color="#BAA3E4"
      backgroundColor="linear-gradient(268.41deg, rgba(156, 132, 210, 0.96) 6.43%, #BAA3E4 95.7%)"
    >
      <div class="contacts__box">
        <div class="contacts__address"><span>Юр. адрес:</span>  410012, Саратовская область, г. Саратов, ул. Аткарская, д. 29А, оф. 30</div>
        <div class="contacts__address"><span>Адрес местонахождения:</span> 410071, Саратовская область, г. Саратов, ул. Большая Кумысная поляна</div>
        <p class="contacts__text">
          Телефон:<a href="tel:88452563107"> 8(8452) 56-31-07</a><br />
          ИНН / КПП 6455072031/645501001<br />
          ОГРН:1196451005684; ОКПО: 36517428<br />
          р/с 40703810614240000002 ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)<br />
          к/с № 30101810145250000411<br />
          БИК 044525411<br />
        </p>
        <div class="contacts__persons">
          <div class="contacts__person"> <span>Директор:</span> Крук Илья Леонидович</div>
          <div class="contacts__person"> <span>Исполнительный директор:</span> Амхир Борис Константинович</div>
          <div class="contacts__person"> <span>Главный бухгалтер:</span> Назарова Елена Петровна</div>
        </div>
        <div class="contacts__block">
          <div class="contacts__item">
            <div class="contacts__item-title">Номер телефона</div>
            <p class="contacts__item-text">
              Администрация: <a href="tel:+78452563107">+7(8452) 56-31-07</a><br />
              Отдел продаж путевок: <a href="tel:+79372256244">+7(937) 225-62-44</a><br />
              Отдел продаж путевок: <a href="tel:+78452256244">+7(8452) 25-62-44</a><br />
              Бухгалтер: <a href="tel:+79271654678">+7 (927) 165-46-78</a><br />
              Отдел кадров: <a href="tel:+79372245663">+7 (937) 224-56-63</a><br />
              <span v-if="false">Медпункт: <a href="tel:+79869880433">+7(986) 988-04-33</a><br /></span> 
            </p>
          </div>
          <div class="contacts__item">
            <div class="contacts__item-title">Электронная почта</div>
            <p class="contacts__item-text">
              Администрация: <a href="mailto:admin@berezka64.ru">admin@berezka64.ru</a><br />
              Отдел продаж путевок: <a href="mailto: sales-b@berezka64.ru">sales-b@berezka64.ru</a><br />
              Бухгалтерия: <a href="mailto:nazarova.elena@berezka64.ru">nazarova.elena@berezka64.ru</a><br />
              Онлайн-проекты/реклама: <a href="mailto:project@berezka64.ru">project@berezka64.ru</a><br />
              Отдел кадров: <a href="mailto:otdel.kadrov@berezka64.ru">otdel.kadrov@berezka64.ru</a><br />
            </p>
          </div>
        </div>
        <p class="contacts__text">
          <strong>Время работы отдела продаж путёвок:</strong> вт - сб с 11:00 до 16:00
        </p>
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
      margin: 70px 0 58px;

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
      @media screen and (max-width: 1300px) {
        padding: 20px 0 0;
      }
      @media screen and (max-width: 680px) {
        padding: 50px 0 0;
      }
    }
    &__address {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 22px;
      }

      span {
        font-weight: 600;
      }
    }
    &__text {
      margin: 24px 0;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 23px;
      a {
        text-decoration: none;
        color: black;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    &__person {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;

      span {
        font-weight: 600;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    &__block {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #DFDFDF;
      padding: 38px 0 0;
      margin: 40px 0 0;
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
      @media screen and (max-width: 680px) {
        padding: 18px 0 0;
        margin: 18px 0 0;
      }
    }
    &__item {
      width: 50%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 24px;
        font-weight: 900;
        line-height: 29px;
        @media screen and (max-width: 680px) {
          font-size: 16px;
          line-height: 19px;
        }
      }
      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        a {
          color: black;
          text-decoration: none;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
</style>