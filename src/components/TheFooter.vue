<template>
  <div class="footer">
    <div class="footer__box">
      <div class="footer__info">
        <div class="footer__info-phones">
          <div class="footer__info-phones-title">Номер телефона</div>
          <a target="_blank" href="tel:+78452563107" class="footer__info-phone">Администрация: +7(8452) 56-31-07</a>
          <a target="_blank" href="tel:+79372256244" class="footer__info-phone">Отдел продаж путевок: +7(937) 225-62-44</a>
          <a target="_blank" href="tel:+78452256244" class="footer__info-phone">Отдел продаж путевок: +7(8452) 25-62-44 </a>
        </div>
        <div class="footer__info-mails">
          <div class="footer__info-mails-title">Электронная почта</div>
          <a target="_blank" href="mailto:admin@berezka64.ru" class="footer__info-mail">Администрация: admin@berezka64.ru</a>
          <a target="_blank" href="mailto:sales@berezka64.ru" class="footer__info-mail">Отдел продаж: sales@berezka64.ru</a>
          <a target="_blank" href="mailto:nazarova.elena@berezka64.ru" class="footer__info-mail">Бухгалтерия: nazarova.elena@berezka64.ru</a>
        </div>
        <div class="footer__info-socials">
          <a v-if="false" target="_blank" href="" class="footer__info-social">
            <svg width="42" height="42" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.2192 2.04688H6.65868C5.17486 2.04688 3.75177 2.63633 2.70254 3.68556C1.6533 4.73482 1.06384 6.15788 1.06384 7.64173V36.2023C1.06384 37.6862 1.6533 39.1092 2.70254 40.1584C3.75177 41.2076 5.17486 41.7971 6.65868 41.7971H19.657V27.2883H14.7429V21.6288H19.657V17.46C19.657 15.0974 20.3104 13.2614 21.6172 11.9571C22.924 10.6503 24.6954 9.99445 26.9337 9.99445C29.1747 9.99445 30.6255 10.0814 31.2889 10.2454V15.2837H28.3026C27.2244 15.2837 26.489 15.5123 26.094 15.9694C25.7015 16.424 25.5052 17.1097 25.5052 18.0215V21.6288H31.1026L30.3572 27.2883H25.5052V41.7971H35.2192C36.7031 41.7971 38.1262 41.2076 39.1753 40.1584C40.2247 39.1092 40.814 37.6862 40.814 36.2023V7.64173C40.814 6.15788 40.2247 4.73482 39.1753 3.68556C38.1262 2.63633 36.7031 2.04688 35.2192 2.04688Z" fill="white"/>
            </svg>
          </a>
          <a target="_blank" href="https://www.instagram.com/berezka_camp64_official/" class="footer__info-social">
            <svg width="42" height="42" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_473_1953)">
            <path d="M38.9618 11.4661C38.8704 9.39389 38.5353 7.96925 38.0553 6.73479C37.5601 5.42444 36.7982 4.25128 35.8001 3.27603C34.8248 2.2856 33.6439 1.516 32.3487 1.02852C31.1071 0.548485 29.6899 0.213382 27.6177 0.122018C25.53 0.0229155 24.8673 0 19.5723 0C14.2773 0 13.6145 0.0229155 11.5346 0.11428C9.46237 0.205645 8.03773 0.541045 6.80357 1.02078C5.49292 1.516 4.31976 2.27787 3.34451 3.27603C2.35408 4.25128 1.58478 5.43218 1.097 6.72735C0.616966 7.96925 0.281864 9.38615 0.190499 11.4584C0.091397 13.5461 0.0684814 14.2088 0.0684814 19.5038C0.0684814 24.7988 0.091397 25.4616 0.182762 27.5415C0.274126 29.6137 0.609526 31.0384 1.08956 32.2728C1.58478 33.5832 2.35408 34.7563 3.34451 35.7316C4.31976 36.722 5.50065 37.4916 6.79583 37.9791C8.03773 38.4591 9.45463 38.7942 11.5271 38.8856C13.6068 38.9773 14.2699 38.9999 19.5648 38.9999C24.8598 38.9999 25.5226 38.9773 27.6025 38.8856C29.6748 38.7942 31.0994 38.4591 32.3336 37.9791C34.9546 36.9658 37.0268 34.8935 38.0401 32.2728C38.5199 31.0309 38.8553 29.6137 38.9466 27.5415C39.038 25.4616 39.0609 24.7988 39.0609 19.5038C39.0609 14.2088 39.0532 13.5461 38.9618 11.4661ZM35.4498 27.3891C35.3659 29.2938 35.0459 30.3223 34.7793 31.008C34.124 32.707 32.7755 34.0555 31.0765 34.7108C30.3908 34.9775 29.3548 35.2974 27.4576 35.381C25.4006 35.4727 24.7836 35.4953 19.58 35.4953C14.3764 35.4953 13.7517 35.4727 11.7021 35.381C9.79747 35.2974 8.76895 34.9775 8.08327 34.7108C7.23777 34.3983 6.46817 33.9031 5.8435 33.2555C5.19591 32.6231 4.70069 31.8612 4.38821 31.0157C4.12156 30.3301 3.80163 29.2938 3.718 27.3969C3.62634 25.3398 3.60372 24.7226 3.60372 19.519C3.60372 14.3154 3.62634 13.6907 3.718 11.6414C3.80163 9.73673 4.12156 8.70821 4.38821 8.02253C4.70069 7.17673 5.19591 6.40743 5.85123 5.78246C6.48334 5.13487 7.24521 4.63965 8.091 4.32747C8.77668 4.06081 9.81294 3.74089 11.7099 3.65696C13.7669 3.5656 14.3841 3.54268 19.5875 3.54268C24.7988 3.54268 25.4157 3.5656 27.4653 3.65696C29.37 3.74089 30.3985 4.06081 31.0842 4.32747C31.9297 4.63965 32.6993 5.13487 33.324 5.78246C33.9716 6.41487 34.4668 7.17673 34.7793 8.02253C35.0459 8.70821 35.3659 9.74417 35.4498 11.6414C35.5411 13.6984 35.5641 14.3154 35.5641 19.519C35.5641 24.7226 35.5411 25.3321 35.4498 27.3891Z" fill="white"/>
            <path d="M19.5723 9.48633C14.0413 9.48633 9.55371 13.9736 9.55371 19.5049C9.55371 25.0362 14.0413 29.5234 19.5723 29.5234C25.1035 29.5234 29.5908 25.0362 29.5908 19.5049C29.5908 13.9736 25.1035 9.48633 19.5723 9.48633ZM19.5723 26.0037C15.9841 26.0037 13.0735 23.0934 13.0735 19.5049C13.0735 15.9164 15.9841 13.0061 19.5723 13.0061C23.1608 13.0061 26.0711 15.9164 26.0711 19.5049C26.0711 23.0934 23.1608 26.0037 19.5723 26.0037Z" fill="white"/>
            <path d="M32.3261 9.08888C32.3261 10.3805 31.2788 11.4278 29.9869 11.4278C28.6953 11.4278 27.6481 10.3805 27.6481 9.08888C27.6481 7.79697 28.6953 6.75 29.9869 6.75C31.2788 6.75 32.3261 7.79697 32.3261 9.08888Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_473_1953">
            <rect width="39" height="39" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </a>
          <a v-if="false" target="_blank" href="" class="footer__info-social">
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
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1sbHQ76V-GRaCdt_lIBcjj8ki0d9zU7EP/view"><doc/> Предварительный договор</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1tmMeqM9jiz2EecX0EAOOQiUfle5Eacxy/view"><doc/> Оферта</a>
          <a class="footer__info-doc" target="_blank" href="https://drive.google.com/file/d/1G0F96Or4EWSIJ8QYkfW8OXj8XJlTxGG8/view"><doc/> Политика конфиденциальности</a>
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
        margin-right: 30px;
        svg {
          margin-right: 10px;
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
        width: 200px;
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