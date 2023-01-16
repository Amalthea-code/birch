<template>
  <div class="docs">
    <div class="docs__nav">
      <a href="#docs" class="docs__nav-link">Документы</a>
      <a href="#structure" class="docs__nav-link">Cтруктура</a>
      <a href="#counselors" class="docs__nav-link">О вожатых</a>
      <a href="#nutrition" class="docs__nav-link">Питание</a>
      <a href="#safety" class="docs__nav-link">Безопасность</a>
    </div>
    <div class="docs__title" id="docs">ДОКУМЕНТЫ</div>
    <info
      class="docs__card"
      title="Для заезда в лагерь необходимо предоставить следующие документы и справки:"
      color="#F98419"
      backgroundColor='linear-gradient(258.58deg, #F98419 8.47%, #FF9C41 100%)'
    >
    <ul>
      <li class="docs__info-text">путевку*;</li>
      <li class="docs__info-text">медицинскую справку (форма 079/у), полученную не ранее, чем за 3 дня до заезда**;</li>
      <li class="docs__info-text">документ об отсутствии контактов с COVID-19 и эпидокружении , полученный не ранее, чем за 3 дня до заезда***;</li>
      <li class="docs__info-text">копию свидетельства о рождении или паспорта;</li>
      <li class="docs__info-text">копию страхового медицинского полиса.</li>
    </ul>
    <span class="docs__sub-info">Без указанных документов ребенок в СОЦ не допускается.</span>
    </info>
    <div class="docs__info">
      <p class="docs__text">* После полной оплаты Путёвки Вы можете получить её на бумажном носителе при регистрации в день заезда в смену или забрать путёвку заранее в Отделе продаж в лагере по адресу: 410056, г. Саратов, Большая Кумысная поляна, АНО СОЦ «Берёзка», т.: +7 937 225-62-44</p>
      <p class="docs__text">График работы Отдела продаж: Вт-Сб с 11:00 до 16:00, обед с 13:00 до 13:30.</p>
      <br />
      <p class="docs__text">** Форма 079/У запрашивается у участкового педиатра в клинике (Медицинская справка на ребенка, отъезжающего в санаторный оздоровительный лагерь (форма 079/у) - это обязательный медицинский документ ребенка, который планирует посетить детский лагерь с целью отдыха. Справка заполняется медицинским работником амбулаторно-поликлинического учреждения или школы. Назначение справки - обеспечить медицинский персонал лагеря всей необходимой информацией о состоянии здоровья ребенка, прибывшего на отдых и оздоровление (о хронических заболеваниях, об АКДС, перенесенных инфекционных заболеваниях, физкультурной группе).</p>
      <p class="docs__text">Эти сведения дадут возможность работникам лагеря обеспечить правильный режим отдыха и оздоровительных мероприятий, подобрать индивидуальную физическую нагрузку для ребенка. Справка заполняется после медицинского осмотра ребенка. Медицинский работник поликлиники (школы) вносит записи на лицевой стороне справки. Обратная ее часть заполняется уже непосредственно медперсоналом оздоровительного заведения).</p>
      <br />
      <p class="docs__text">*** Справка об эпидокружении и отсутствии контакта с COVID-зараженными может быть выдана отдельно или вписана в форму 079/У.</p>
    </div>
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
  .docs {
    padding: 48px 0 62px;
    max-width: 1080px;
    margin: 0 auto;
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
      margin: 34px 0 54px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__nav {
      &-link {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        display: inline-block;
        margin: 0 12px 0 0;
        border: 2px solid;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        transition: background-color .3s, color .3s;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          line-height: 18px;
          padding: 8px 14px;
          margin: 0 12px 18px 0;
        }
        &:nth-child(1) {
          color: #9DCEFC;
          border-color: #9DCEFC;
          &:hover {
            background-color: #9DCEFC;
            color: white;
          }
        }
        &:nth-child(2) {
          color: #F98419;
          border-color: #F98419;
          &:hover {
            background-color: #F98419;
            color: white;
          }
        }
        &:nth-child(3) {
          color: #FB6F8A;
          border-color: #FB6F8A;
          &:hover {
            background-color: #FB6F8A;
            color: white;
          }
        }
        &:nth-child(4) {
          color: #5EC0A9;
          border-color: #5EC0A9;
          &:hover {
            background-color: #5EC0A9;
            color: white;
          }
        }
        &:nth-child(5) {
          color: #676FB2;
          border-color: #676FB2;
          &:hover {
            background-color: #676FB2;
            color: white;
          }
        }
      }
    }
    &__info {
      padding: 42px 0 0;
    }
    &__card {
      ul {
        padding-inline-start: 20px;
      }
    }
    &__text {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__info-text {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__sub-info {
      display: inline-block;
      width: 100%;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      text-align: center;
      border-top: 1px solid #DFDFDF;
      padding: 16px 0 0;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>