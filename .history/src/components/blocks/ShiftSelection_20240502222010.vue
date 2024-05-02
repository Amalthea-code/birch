<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="shift-selection" id="buy">
    <!-- <h1 class="shift-selection__title shift-selection__title_little">ДОРОГИЕ БЕРЁЗОВЦЫ!</h1>;-->
    <!--<p class="shift-selection__contein-info shift-selection__alert-info">
      <strong>ВНИМАНИЕ! Продажи путёвок на Лето_2024 г. открыты! Путёвки можно приобрести, зарегистрировавшись в личном кабинете</strong>
    </p>-->
    <div :style="{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', marginTop: '20px'}">
      <p><strong :style="{fontFamily: 'Montserrat', fontSize: '20px'}">Мы в соцсетях</strong></p>
      <a target="_blank" href="https://t.me/berezka64_camp" class="footer__info-social">
        <svg width="30" height="30" viewBox="0 0 51 51" fill="#000" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.7619 6.77275C42.2093 6.79713 41.6945 6.95809 41.2412 7.1413C40.8166 7.31209 39.1944 8.00786 36.6393 9.10361C34.0819 10.2003 30.6956 11.6541 27.0834 13.2075C19.8589 16.3143 11.7368 19.8114 7.57656 21.6013C7.42013 21.6685 6.87427 21.8429 6.29492 22.2952C5.71557 22.7475 5.09961 23.6847 5.09961 24.729C5.09961 25.5711 5.50092 26.4076 6.00605 26.9071C6.51119 27.4066 7.04568 27.6533 7.50352 27.8401C9.1647 28.5179 14.3168 30.6263 15.2896 31.0243C15.632 32.0732 17.4968 37.7776 17.9293 39.1757C18.2144 40.0983 18.4857 40.6761 18.8391 41.1347C19.0157 41.3639 19.2211 41.5649 19.4699 41.7224C19.5694 41.7853 19.6785 41.8338 19.7887 41.8784L19.7953 41.8817C19.8207 41.8919 19.8426 41.9092 19.8684 41.9183C19.917 41.9352 19.9495 41.9373 20.0145 41.9515C20.2734 42.0351 20.5348 42.0876 20.7682 42.0876C21.7629 42.0876 22.3719 41.5397 22.3719 41.5397L22.4084 41.5132L27.525 37.0872L33.7307 42.9575C33.818 43.0811 34.6329 44.1993 36.4301 44.1993C37.4972 44.1993 38.3437 43.6639 38.8871 43.0936C39.4306 42.5234 39.7692 41.9244 39.9131 41.1712V41.1679C40.0477 40.4561 45.7668 11.0958 45.7668 11.0958L45.7568 11.1356C45.9243 10.3715 45.9681 9.6598 45.7834 8.95751C45.5987 8.25523 45.1119 7.58282 44.5084 7.22099C43.9049 6.85924 43.3145 6.74837 42.7619 6.77275ZM42.4432 10.3255C42.435 10.3751 42.4493 10.3501 42.4365 10.4085L42.4332 10.4284L42.4299 10.4483C42.4299 10.4483 36.7816 39.4331 36.5729 40.537C36.5881 40.4536 36.5183 40.6194 36.4467 40.7196C36.3454 40.6498 36.1379 40.5602 36.1379 40.5602L36.1047 40.5237L27.6279 32.5052L21.6348 37.6849L23.4178 30.5462C23.4178 30.5462 34.5633 19.0089 35.2348 18.3374C35.7754 17.8002 35.8889 17.6129 35.8889 17.4276C35.8889 17.1794 35.7595 16.9993 35.4705 16.9993C35.2104 16.9993 34.8606 17.2522 34.6736 17.3712C32.2374 18.9242 21.5417 25.1578 16.7473 27.9464C15.9854 27.6346 10.692 25.4678 8.89805 24.7356C8.91163 24.7297 8.90716 24.7318 8.92129 24.7257C13.0826 22.9353 21.2014 19.4382 28.4248 16.3319C32.0365 14.7788 35.4254 13.3238 37.9807 12.228C40.4966 11.1491 42.2448 10.4065 42.4432 10.3255Z" fill="#000"/>
        </svg>                
      </a>
      <a target="_blank" href="https://vk.com/berezka64_camp" class="footer__info-social">
        <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7365 2.7365C0 5.473 0 9.8787 0 18.6875V20.3125C0 29.12 0 33.527 2.7365 36.2635C5.473 39 9.8787 39 18.6875 39H20.3125C29.12 39 33.527 39 36.2635 36.2635C39 33.527 39 29.1213 39 20.3125V18.6875C39 9.88 39 5.473 36.2635 2.7365C33.527 0 29.1213 0 20.3125 0H18.6875C9.88 0 5.473 0 2.7365 2.7365ZM7.71934 12.1882H10.5624C11.2891 12.1882 11.5621 12.5067 11.8351 13.2945C13.2261 17.3453 15.5713 20.8865 16.5346 20.8865C16.8973 20.8865 17.0624 20.7201 17.0624 19.801V15.6137C16.9973 14.4217 16.5809 13.9061 16.2724 13.5242C16.082 13.2884 15.9327 13.1036 15.9327 12.8421C15.9327 12.5236 16.2044 12.1882 16.6555 12.1882H21.1249C21.7281 12.1882 21.9374 12.5106 21.9374 13.2334V18.8676C21.9374 19.4695 22.1987 19.6814 22.3794 19.6814C22.7408 19.6814 23.0424 19.4695 23.7054 18.8065C25.7542 16.5172 27.1998 12.9929 27.1998 12.9929C27.3805 12.5704 27.7146 12.1882 28.4374 12.1882H31.2805C32.1411 12.1882 32.3231 12.6315 32.1411 13.2334C31.7797 14.8909 28.3152 19.7711 28.3152 19.7711C28.0136 20.2534 27.8927 20.4939 28.3152 21.036C28.4643 21.2448 28.7824 21.5566 29.1461 21.9131C29.5181 22.2777 29.9378 22.6891 30.273 23.0848C31.495 24.4589 32.4154 25.6185 32.6715 26.4167C32.9068 27.2188 32.4999 27.6257 31.6874 27.6257H28.843C28.0815 27.6257 27.6984 27.1992 26.8698 26.2769C26.5187 25.8861 26.0876 25.4062 25.5137 24.832C23.825 23.2057 23.1035 22.9951 22.681 22.9951C22.109 22.9951 21.9374 23.1576 21.9374 23.9701V26.5207C21.9374 27.2188 21.7138 27.6257 19.9055 27.6257C16.8934 27.6257 13.5823 25.7966 11.2332 22.4218C7.70764 17.4818 6.74434 13.7456 6.74434 12.9929C6.74434 12.5704 6.90684 12.1882 7.71934 12.1882Z" fill="#000"/>
        </svg>
      </a>
    </div>
      <!-- <strong>Для тех, кто приобрел путевки на 5 СМЕНУ и хочет записаться в определённый отряд! <br> Бронирование мест в отрядах осуществляется 13 АВГУСТА, с 11:00 до 13:00 и с 16:00 до 19:00 часов, по номеру телефона: <a href="tel:+79172023343">+7(917) 202-33-43</a> Горобец Елена Ивановна</strong><br><br> -->
      <!-- <strong style="color: red;">АКЦИЯ С 29 НОЯБРЯ!
МЫ ОТКРЫЛИ ПРЕДПРОДАЖИ ПУТЕВОК 
НА ЛЕТО_2024
КОЛИЧЕСТВО ПУТЕВОК ОГРАНИЧЕНО!
ДАННАЯ ЦЕНА АКТУАЛЬНА НА ВРЕМЯ АКЦИИ!
УСПЕЙ КУПИТЬ ПО ВЫГОДНОЙ ЦЕНЕ!</strong> -->
      <!-- <br/><br/> -->
      <!-- Если вы не успели купить путевку, напишите заявку в Лист ожидания на адрес отдела продаж: <a href="mailto:sales-b@berezka64.ru">sales-b@berezka64.ru.</a> Форма заявки: в теме письма напишите Лист ожидания; в самом письме: смена, ФИО ребенка полностью, возраст ребенка полных лет, ФИО родителя, контактный телефон родителя, электронный адрес родителя. -->
    <p class="shift-selection__contein-info shift-selection__alert-info" style="color: red;"><strong>Электронный адрес Отдела продаж летних путëвок: <a style="color: red;" href="mailto:sales-b@berezka64.ru">sales-b@berezka64.ru</a> <br> телефон: <a style="color: red;" href="tel:+79372256244">+7(937) 225-62-44</a> <br> Время работы: <br>Пн, Вт, Ср, Чт, Пт <br> с 10:00 до 17:00</strong></p>
    <div class="important-info">
      <a href="/parents#comp">Компенсация по путёвкам</a>
      
    </div>
    <div style="font-size: 20px; font-weight: 500; font-family: Montserrat; margin-top: 20px; text-align: center;" class="info">Если вы не успели купить путёвку на желаемую смену, напишите заявку в Лист ожидания на электронную почту отдела продаж:
      <a href="mailto:sales-b@berezka64.ru">sales-b@berezka64.ru</a>. Форма заявки - в теме письма пишите ЛИСТ ОЖИДАНИЯ СМЕНА N_, в самом письме пишите: СМЕНА , ФИО ребенка полностью, полных лет, ФИО родителя, контактный телефон и электронную почту родителя. При появлении свободной путёвки мы с вами свяжемся в порядке очереди.</div>
    <h1 class="shift-selection__title shift-selection__title_little">Расписание смен Лето-2024</h1>
    <div class="info"></div>
    <div class="shift-selection__box" v-if="selections.length">
      <div :class="['wrapper-temp', {order: selection.attributes.text_name}]" v-for="(selection, index) in selections" :key="index">
        <shift-selection-item
        :headingText="selection.attributes.text_name"
        :index="index"
        :number="selection.attributes.number"
        :date="selection.attributes.date"
        :price="selection.attributes.price"
        :discount="selection.attributes.with_discount"
      />
    </div>
      <div  class="shift-selection__button">
        <router-link to="/payment">купить путёвку</router-link>
      </div>
      
    </div>
     
    <div class="shift-selection__contein">
      <div class="shift-selection__contein-box">
        <img src="@/assets/images/photo/shift-selection.jpg" alt="" class="shift-selection__contein-image">
        <span class="shift-selection__contein-signature">Амхир Борис Константинович</span>
        <p class="shift-selection__contein-sub-signature">Директор АНО СОЦ «Берёзка»</p>
      </div>
      <p class="shift-selection__contein-info">
        «Дорогие ребята и родители! Наш лагерь вот уже 70 с лишним лет принимает в свою семью березовцев. За это время в Березке отдохнуло более 120 000 детей. Многие из вас возвращаются сюда из года в год, проходя путь взросления от отдыхающего до вожатого.
        <br /><br />
        Березка – это отдельная территория детства - добрая, уютная, любимая для многих поколений. И я с гордостью могу сказать, что за 47 лет работы директором в Березке, я и наша команда профессионалов сохранили и преумножили традиции, которые являются фундаментом нашего детского оздоровительно-развлекательного центра. Каждый сезон мы стараемся встретить и порадовать вас новшествами в благоустройстве, а также проводить ремонт и реконструкцию имеющегося материального фонда. Мы всегда делаем все возможное, чтобы этот лесной детский мир был максимально безопасным и комфортным для ребят. Благодаря нашей с вами совместной любви к Березке и заботе о ней, она продолжает оставаться одним из лучших лагерей Саратовской области.
        <br /><br />
        Ждем вас всегда!»
      </p>
    </div>
  </div>
</template>

<script>
import shiftSelectionItem from '@/components/elements/ShiftSelectionItem'
import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      shiftSelectionItem
    },
    computed: {
      ...mapGetters({
        selections: 'shifts/GET_SHIFTS'
      })
    },
    methods: {
      ...mapActions({
        fetchShifts: 'shifts/fetchShifts'
      })
    },
    created () {
      this.fetchShifts()
    }
  }
</script>

<style lang="scss" scoped>
.order {
  order: -1;
  width: 100%;
}

.important-info {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  border: 4px solid red;
  border-radius: 30px;
  padding: 30px;
  margin-top: 30px;
}
.wrapper-temp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
}
  .shift-selection {
      max-width: 1080px;
      margin: 0 auto;
      padding: 20px 0 100px;
      &_green {
        color: #64c2ac;
      }
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
      &_little {
        font-size: 40px;
        text-align: center;
      }
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
        margin: 28px 0 0;
        &_little {
          font-size: 36px;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        &_little {
          font-size: 16px;
        }
      }
    }
    &__sub-title {
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin: 22px 0 60px;
      @media screen and (max-width: 1300px) {
        font-size: 22px;
        line-height: 27px;
      }
      @media screen and (max-width: 680px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    &__box {
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      flex-wrap: wrap;
      margin-top: 90px;
      margin: 0 0 70px;
      @media screen and (max-width: 680px) {
        margin: 44px 0 0;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      a {
        font-family: RF Dewi Expanded;
        font-size: 32px;
        font-weight: 900;
        text-align: center;
        padding: 22px 62px;
        border-radius: 50px;
        border: solid 2px black;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
      }
      @media screen and (max-width: 680px) {
        a {
          font-size: 18px;
          padding: 22px 34px;
        }
      }
    }
    &__contein {
      margin-top: 110px;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
      }
    }
    &__contein-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 47%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
    &__contein-image {
      width: 100%;
      border-radius: 20px;
    }

    &__contein-signature {
      margin-top: 20px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    &__contein-sub-signature {
      margin-top: 6px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    &__contein-info {
      width: 50%;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      margin: 0;
      @media screen and (max-width: 1300px) {
        width: 100%;
        margin: 38px 0 0;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__alert-info {
      text-align: center;
      padding: 0;
      width: 100%;
      font-size: 22px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
</style>