<template>
  <div class="footer">
    <div class="footer__box">
      <div class="footer__info">
        <div class="footer__info-phones">
          <div class="footer__info-phones-title">Номер телефона</div>
          <a target="_blank" href="tel:+78452563107" class="footer__info-phone">Администрация: +7(8452) 56-31-07</a>
          <a target="_blank" href="tel:+79372256244" class="footer__info-phone">Отдел продаж путевок: +7(937) 225-62-44</a>
          <a target="_blank" href="tel:+78452256244" class="footer__info-phone">Отдел продаж путевок: +7(8452) 25-62-44</a>
          <a target="_blank" href="tel:+79271654678" class="footer__info-phone">Бухгалтер: +7 (927) 165-46-78</a>
          <a target="_blank" href="tel:+79372245663" class="footer__info-phone">Отдел кадров: +7 (937) 224-56-63</a>
          <a v-if="false" target="_blank" href="tel:+79869880433" class="footer__info-phone">Медпункт: +7(986) 988-04-33</a>
          <p class="footer__info-phone"><strong>Время работы отдела продаж путёвок:</strong><br/> Пн, Вт, Ср, Чт, Пт с
            10:00 до 17:00</p>
        </div>
        <div class="footer__info-mails">
          <div class="footer__info-mails-title">Электронная почта</div>
          <a target="_blank" href="mailto:admin@berezka64.ru" class="footer__info-mail">Администрация: admin@berezka64.ru</a>
          <a target="_blank" href="mailto:sales-b@berezka64.ru" class="footer__info-mail">Отдел продаж путевок: sales-b@berezka64.ru</a>
          <a target="_blank" href="mailto:nazarova.elena@berezka64.ru" class="footer__info-mail">Бухгалтерия: nazarova.elena@berezka64.ru</a>
          <a target="_blank" href="mailto:project@berezka64.ru" class="footer__info-mail">Онлайн-проекты/реклама: project@berezka64.ru</a>
          <a target="_blank" href="mailto:otdel.kadrov@berezka64.ru" class="footer__info-mail">Отдел кадров: otdel.kadrov@berezka64.ru</a>
        </div>
        <div class="footer__info-socials">
          <a v-if="false" target="_blank" href="" class="footer__info-social">
            <svg width="42" height="42" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.2192 2.04688H6.65868C5.17486 2.04688 3.75177 2.63633 2.70254 3.68556C1.6533 4.73482 1.06384 6.15788 1.06384 7.64173V36.2023C1.06384 37.6862 1.6533 39.1092 2.70254 40.1584C3.75177 41.2076 5.17486 41.7971 6.65868 41.7971H19.657V27.2883H14.7429V21.6288H19.657V17.46C19.657 15.0974 20.3104 13.2614 21.6172 11.9571C22.924 10.6503 24.6954 9.99445 26.9337 9.99445C29.1747 9.99445 30.6255 10.0814 31.2889 10.2454V15.2837H28.3026C27.2244 15.2837 26.489 15.5123 26.094 15.9694C25.7015 16.424 25.5052 17.1097 25.5052 18.0215V21.6288H31.1026L30.3572 27.2883H25.5052V41.7971H35.2192C36.7031 41.7971 38.1262 41.2076 39.1753 40.1584C40.2247 39.1092 40.814 37.6862 40.814 36.2023V7.64173C40.814 6.15788 40.2247 4.73482 39.1753 3.68556C38.1262 2.63633 36.7031 2.04688 35.2192 2.04688Z" fill="white"/>
            </svg>
          </a>
          <a target="_blank" href="https://t.me/berezka64_camp" class="footer__info-social">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.7619 6.77275C42.2093 6.79713 41.6945 6.95809 41.2412 7.1413C40.8166 7.31209 39.1944 8.00786 36.6393 9.10361C34.0819 10.2003 30.6956 11.6541 27.0834 13.2075C19.8589 16.3143 11.7368 19.8114 7.57656 21.6013C7.42013 21.6685 6.87427 21.8429 6.29492 22.2952C5.71557 22.7475 5.09961 23.6847 5.09961 24.729C5.09961 25.5711 5.50092 26.4076 6.00605 26.9071C6.51119 27.4066 7.04568 27.6533 7.50352 27.8401C9.1647 28.5179 14.3168 30.6263 15.2896 31.0243C15.632 32.0732 17.4968 37.7776 17.9293 39.1757C18.2144 40.0983 18.4857 40.6761 18.8391 41.1347C19.0157 41.3639 19.2211 41.5649 19.4699 41.7224C19.5694 41.7853 19.6785 41.8338 19.7887 41.8784L19.7953 41.8817C19.8207 41.8919 19.8426 41.9092 19.8684 41.9183C19.917 41.9352 19.9495 41.9373 20.0145 41.9515C20.2734 42.0351 20.5348 42.0876 20.7682 42.0876C21.7629 42.0876 22.3719 41.5397 22.3719 41.5397L22.4084 41.5132L27.525 37.0872L33.7307 42.9575C33.818 43.0811 34.6329 44.1993 36.4301 44.1993C37.4972 44.1993 38.3437 43.6639 38.8871 43.0936C39.4306 42.5234 39.7692 41.9244 39.9131 41.1712V41.1679C40.0477 40.4561 45.7668 11.0958 45.7668 11.0958L45.7568 11.1356C45.9243 10.3715 45.9681 9.6598 45.7834 8.95751C45.5987 8.25523 45.1119 7.58282 44.5084 7.22099C43.9049 6.85924 43.3145 6.74837 42.7619 6.77275ZM42.4432 10.3255C42.435 10.3751 42.4493 10.3501 42.4365 10.4085L42.4332 10.4284L42.4299 10.4483C42.4299 10.4483 36.7816 39.4331 36.5729 40.537C36.5881 40.4536 36.5183 40.6194 36.4467 40.7196C36.3454 40.6498 36.1379 40.5602 36.1379 40.5602L36.1047 40.5237L27.6279 32.5052L21.6348 37.6849L23.4178 30.5462C23.4178 30.5462 34.5633 19.0089 35.2348 18.3374C35.7754 17.8002 35.8889 17.6129 35.8889 17.4276C35.8889 17.1794 35.7595 16.9993 35.4705 16.9993C35.2104 16.9993 34.8606 17.2522 34.6736 17.3712C32.2374 18.9242 21.5417 25.1578 16.7473 27.9464C15.9854 27.6346 10.692 25.4678 8.89805 24.7356C8.91163 24.7297 8.90716 24.7318 8.92129 24.7257C13.0826 22.9353 21.2014 19.4382 28.4248 16.3319C32.0365 14.7788 35.4254 13.3238 37.9807 12.228C40.4966 11.1491 42.2448 10.4065 42.4432 10.3255Z" fill="white"/>
            </svg>
          </a>
          <a target="_blank" href="https://vk.com/berezka64_camp" class="footer__info-social">
            <svg width="42" height="42" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7365 2.7365C0 5.473 0 9.8787 0 18.6875V20.3125C0 29.12 0 33.527 2.7365 36.2635C5.473 39 9.8787 39 18.6875 39H20.3125C29.12 39 33.527 39 36.2635 36.2635C39 33.527 39 29.1213 39 20.3125V18.6875C39 9.88 39 5.473 36.2635 2.7365C33.527 0 29.1213 0 20.3125 0H18.6875C9.88 0 5.473 0 2.7365 2.7365ZM7.71934 12.1882H10.5624C11.2891 12.1882 11.5621 12.5067 11.8351 13.2945C13.2261 17.3453 15.5713 20.8865 16.5346 20.8865C16.8973 20.8865 17.0624 20.7201 17.0624 19.801V15.6137C16.9973 14.4217 16.5809 13.9061 16.2724 13.5242C16.082 13.2884 15.9327 13.1036 15.9327 12.8421C15.9327 12.5236 16.2044 12.1882 16.6555 12.1882H21.1249C21.7281 12.1882 21.9374 12.5106 21.9374 13.2334V18.8676C21.9374 19.4695 22.1987 19.6814 22.3794 19.6814C22.7408 19.6814 23.0424 19.4695 23.7054 18.8065C25.7542 16.5172 27.1998 12.9929 27.1998 12.9929C27.3805 12.5704 27.7146 12.1882 28.4374 12.1882H31.2805C32.1411 12.1882 32.3231 12.6315 32.1411 13.2334C31.7797 14.8909 28.3152 19.7711 28.3152 19.7711C28.0136 20.2534 27.8927 20.4939 28.3152 21.036C28.4643 21.2448 28.7824 21.5566 29.1461 21.9131C29.5181 22.2777 29.9378 22.6891 30.273 23.0848C31.495 24.4589 32.4154 25.6185 32.6715 26.4167C32.9068 27.2188 32.4999 27.6257 31.6874 27.6257H28.843C28.0815 27.6257 27.6984 27.1992 26.8698 26.2769C26.5187 25.8861 26.0876 25.4062 25.5137 24.832C23.825 23.2057 23.1035 22.9951 22.681 22.9951C22.109 22.9951 21.9374 23.1576 21.9374 23.9701V26.5207C21.9374 27.2188 21.7138 27.6257 19.9055 27.6257C16.8934 27.6257 13.5823 25.7966 11.2332 22.4218C7.70764 17.4818 6.74434 13.7456 6.74434 12.9929C6.74434 12.5704 6.90684 12.1882 7.71934 12.1882Z" fill="white"/>
            </svg>
          </a>
          <a v-if="false" target="_blank" href="" class="footer__info-social">
            <svg width="42" height="42" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0.990234C4.48867 0.990234 0 5.4789 0 10.9902V32.9902C0 38.5016 4.48867 42.9902 10 42.9902H32C37.5113 42.9902 42 38.5016 42 32.9902V10.9902C42 5.4789 37.5113 0.990234 32 0.990234H10ZM14.0059 9.0332C14.6339 9.0602 15.2106 9.41403 15.5586 9.95703C15.9546 10.575 16.5691 11.5342 17.3691 12.7852C18.0991 13.9262 18.15 15.3998 17.498 16.5898L16.0332 18.6738C15.6372 19.2378 15.5582 19.9597 15.8242 20.5957C16.2382 21.5857 17.0408 23.1072 18.4668 24.5332C19.8928 25.9592 21.4143 26.7618 22.4043 27.1758C23.0403 27.4418 23.7622 27.3628 24.3262 26.9668L26.4102 25.502C27.6002 24.85 29.0738 24.9019 30.2148 25.6309C31.4658 26.4309 32.425 27.0454 33.043 27.4414C33.586 27.7894 33.9398 28.3661 33.9668 28.9941C34.1208 32.5581 31.3596 34.002 30.5566 34.002C30.0006 34.002 23.3163 34.7617 15.7773 27.2227C8.23834 19.6837 8.99805 12.9994 8.99805 12.4434C8.99805 11.6404 10.4419 8.8792 14.0059 9.0332Z" fill="white"/>
            </svg>
          </a>
          <router-link to="/confidence" class="footer__info-social">
            <div>О детском<br /> телефоне<br /> доверия</div>
          </router-link>
        </div>
      </div>
      <div class="footer__info-docs">
        <div class="footer__info-docs-box">
          <!-- <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1VMW7rwQH3VvhDa-4ILMLFS8S9ehNnGag/view"><doc/> Памятка для родителей</a> -->
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1QFXs9NEDjusVu-zRT9vDTkFSyiWDSE3y/view?usp=sharing"><doc/> Медсогласие</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1ZuTsGflpKmwtLcToS1VwiWDFxrxNYNMc/view?usp=sharing"><doc/> Договор оказания услуг</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1cWhQAyVmdy8nAHdWFCje6nxoMDVYm2F7/view?usp=sharing"><doc/> Оферта</a>
          <!-- <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1nXEV0BeCkjvDnKs0C0_RR085yAD6BOFl/view"><doc/> Анкета</a> -->
          <!-- <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/17Vl_RN0LAu2auWmSwDpCZ5VJ-K5bAduQ/view"><doc/> Политика конфиденциальности</a> -->
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1vYS_v1XX8Ex7Ey3_A1OKtF1W1qmALBj6/view?usp=sharing"><doc/> Заявление на возврат</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1nXWsr1kL6cPM38sm9Ul4x-2L9kFim0oI/view"><doc/> Программа СОЦ Берёзка</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1lwvc3NQJEDF2WHYHhIakU4Fy4FhLrClR/view"><doc/> Меры поддержки</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1JJ1hkgYPaP15BE-7o25veTiT6gWe7Z9g/view?usp=sharing"><doc/> Справка о пребывании</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1qS61SASVEqAI6iTu95n_AlA_SfxIDFE8/view?usp=drivesdk"><doc/> Положение и приказы о противодействии коррупции</a>
        </div>
        <div class="footer__info-org">
          Автономная некоммерческая организация
          <br />
          «Спортивно-оздоровительный центр «Березка»
          <br />
          ИНН 6455072031
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import doc from '@/assets/images/icons/doc'
  export default {
    components: {
      doc
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    color: white;
    background-color: #F98419;
    background-image: url('~@/assets/images/photo/footer-bg.png');
    background-size: cover;
    padding: 60px 0 58px;
    &__box {
      max-width: 1080px;
      margin: 0 auto;
      @media screen and (max-width: 1300px) {
        max-width: calc(100vw - 160px);
      }
      @media screen and (max-width: 680px) {
        max-width: calc(100vw - 100px);
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
      padding: 0 0 54px;
      &-phones {
        &-title {
          font-family: RF Dewi Expanded;
          font-size: 24px;
          font-weight: 900;
          line-height: 29px;
          margin: 0 0 10px;
          @media screen and (max-width: 1300px) {
            font-size: 20px;
            line-height: 24px;
          }
        }
        @media screen and (max-width: 1300px) {
          width: 50%;
        }
        @media screen and (max-width: 680px) {
          width: 100%;
          margin: 0 0 28px;
        }
      }
      &-mails {
        &-title {
          font-family: RF Dewi Expanded;
          font-size: 24px;
          font-weight: 900;
          line-height: 29px;
          margin: 0 0 10px;
          @media screen and (max-width: 1300px) {
            font-size: 20px;
            line-height: 24px;
          }
        }
        @media screen and (max-width: 1300px) {
          width: 50%;
          text-align: right;
          margin: 0 0 40px;
        }
        @media screen and (max-width: 680px) {
          width: 100%;
          text-align: left;
        }
      }
      &-phone {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        display: block;
        color: white;
        text-decoration: none;
        margin-bottom: 2px;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-mail {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        display: block;
        color: white;
        text-decoration: none;
        margin-bottom: 2px;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-docs {
        display: flex;
        justify-content: space-between;
        &-box {
          display: flex;
          flex-wrap: wrap;
          @media screen and (max-width: 1300px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 680px) {
            width: 100%;
            flex-wrap: wrap;
          }
        }
        @media screen and (max-width: 680px) {
          flex-wrap: wrap;
        }
      }
      &-doc {
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        font-family: Montserrat;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        margin-right: 10px;
        svg {
          margin-right: 10px;
          width: 16px;
          height: 16px;
        }
        @media screen and (max-width: 680px) {
          width: 100%;
          margin: 0 0 12px;
        }
      }
      &-org {
        color: white;
        text-decoration: none;
        text-align: right;
        font-family: Montserrat;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        @media screen and (max-width: 680px) {
          width: 100%;
          text-align: left;
          margin: 30px 0 0;
        }
      }
      &-socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 260px;
      }
      &-social {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        text-align: right;
        color: white;
        text-decoration: none;
        margin: 0 0 0 20px;
        &:nth-child(4) {
          margin: 20px 0 0 20px;
        }
        &:nth-child(5) {
          margin: 20px 0 0 20px;
        }
        @media screen and (max-width: 680px) {
          &:nth-child(1) {
            margin: 0;
          }
          &:nth-child(4) {
            margin: 20px 0 0;
          }
        }
      }
      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      @media screen and (max-width: 680px) {
        justify-content: flex-start;
        padding: 0 0 38px;
      }
    }
  }
</style>
