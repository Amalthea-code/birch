<template>
  <div
    :class="{
      'answer-page': true,
      'answer-page_succes': GET_ANSWER === 'succes',
      'answer-page_fail': GET_ANSWER === 'fail' || GET_ANSWER === 'mailerr'

    }"
  >
    <div class="answer-page__logo">
      <span class="answer-page__logo-left" />
      <span class="answer-page__logo-right" />
    </div>
    <div class="answer-page__title">
      
      <span v-if="GET_ANSWER === 'expect'">Ожидаем ответ...</span>
      <span v-if="GET_ANSWER === 'succes reg'">Вам на почту отправлено письмо с подтверждением регистрации</span>
      <span v-if="GET_ANSWER === 'succes' && mode === 'reg'">Личный кабинет<br /> успешно создан</span>
      <span v-if="GET_ANSWER === 'mailerr' && mode === 'reg'">Пользователь с&nbsp;таким email уже&nbsp;существует</span>
      <span v-if="GET_ANSWER === 'succes' && mode === 'mail'">Письмо отправлено на почту</span>
      <span v-if="GET_ANSWER === 'succes' && mode === 'recovery'">Письмо отправлено на почту</span>
      <span v-if="GET_ANSWER === 'succes' && mode === 'autorisation'">Авторизация прошла успешно!</span>
      <span v-if="GET_ANSWER === 'fail'">Произошла ошибка.<br />Попробуйте ещё раз.</span>
    </div>
    <div class="answer-page__button">
      <button @click="enter">ВОЙТИ</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: {
      mode: {
        type: String,
        default: 'expect'
      }
    },
    computed: {
      ...mapGetters({
        GET_ANSWER: 'profile/GET_ANSWER'
      })
    },
    methods: {
      enter () {
        if (this.GET_ANSWER === 'succes' && this.mode === 'autorisation') {
          this.$router.push({ name: 'cabinet', params: { returnFetch: true }})
        } else {
          this.$router.push({ name: 'authorization'})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @keyframes expect {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(180deg);
    }
  }
  .answer-page {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 40px 60px;
    border-radius: 20px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 680px) {
      max-width: 260px;
      padding: 20px;
    }
    &_succes {
      .answer-page__logo {
        animation: none;
      }
      .answer-page__logo-left {
        background-color: #84D0B8;
        transform: translate(-80%, -50%) rotate(45deg);
        width: 68px;
      }
      .answer-page__logo-right {
        background-color: #84D0B8;
        transform: translate(-27%, -88%) rotate(-45deg);
      }
    }
    &_fail {
      .answer-page__logo {
        animation: none;
      }
      .answer-page__logo-left {
        background-color: #F27277;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      .answer-page__logo-right {
        background-color: #F27277;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
    &__logo {
      width: 100px;
      height: 100px;
      position: relative;
      animation: expect 3s infinite linear;
      transition: transform .5s;
      
      &-left {
        height: 22px;
        width: 92px;
        background-color: #F9871E;
        position: absolute;
        border-radius: 5px;
        top: 50%;
        left: 50%;
        transition: transform .5s, background-color .5s width .5s;
        transform: translate(-50%, -50%);
      }
      &-right {
        height: 22px;
        width: 92px;
        background-color: #F9871E;
        position: absolute;
        border-radius: 5px;
        top: 50%;
        left: 50%;
        transition: transform .5s, background-color .5s;
        transform: translate(-50%, -50%);
      }
    }
    &__title {
      margin: 30px 0 0;
      span {
        font-family: RF Dewi Expanded;
        font-size: 36px;
        font-weight: 900;
        line-height: 44px;
        text-align: center;
        @media screen and (max-width: 680px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
    &__button {
      margin: 30px 0 0;
      button {
        background-color: #fff;
        display: block;
        font-family: RF Dewi Expanded;
        font-size: 16px;
        font-weight: 900;
        line-height: 20px;
        padding: 22px 72px;
        border-radius: 50px;
        border: 2px solid #000;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        @media screen and (max-width: 680px) {
          padding: 14px 52px;
        }
      }
    }
  }
</style>