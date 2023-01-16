<template>
  <div class="header">
    <router-link to="/" class="header__logo">
      <logo/>
    </router-link>
    <nav class="header__nav">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :class="['header__link', 'header__link-' + link.color]"
        :to="link.to"
      >
        {{ link.title }}
      </router-link>
    </nav>
    <router-link class="header__button-cabinet" to="/autorization"><person/>Личный кабинет</router-link>
    <div v-click-outside="outsideMenu" class="header-mobile">
      <router-link to="/" class="header-mobile__logo">
        <logo/>
      </router-link>
      <div
        :class="{
          'header-mobile__burger': true,
          'header-mobile__burger_active': isSideMenu,
        }"
        @click="switchSideMenu"
      />
      <div
        :class="{
          'side-menu': true,
          'side-menu_active': isSideMenu,
        }"
      >
        <nav class="side-menu__nav">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :class="['header__link', 'header__link-' + link.color]"
            :to="link.to"
            @click="switchSideMenu"
          >
            {{ link.title }}
          </router-link>
          <router-link @click="switchSideMenu" class="header__button-cabinet" to="/autorization"><person/>Личный кабинет</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import person from '@/assets/images/icons/person'
import logo from '@/assets/images/icons/logo'

  export default {
    components: {
      person,
      logo
    },
    data () {
      return {
        links: [
          {title: 'Главная', to: '/', color: 'orange'},
          {title: 'О лагере', to: '/history', color: 'blue'},
          {title: 'Детям', to: '/kids', color: 'turquoise'},
          {title: 'Родителям', to: '/parents', color: 'violet'},
          {title: 'Вакансии', to: '/vacancies', color: 'red'},
          {title: 'Медиацентр', to: '/media-center', color: 'blue'},
          {title: 'Семейный отдых', to: '/relaxation', color: 'green'},
          {title: 'Контакты', to: '/contacts', color: 'yellow'},
        ],
        isSideMenu: false
      }
    },
    methods: {
      switchSideMenu () {
        this.isSideMenu = !this.isSideMenu
      },
      outsideMenu () {
        if (this.isSideMenu) {
          this.isSideMenu = !this.isSideMenu
        }
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: white;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: calc(100vw - 92px);
    align-items: center;
    padding: 8px 20px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 0 14px 14px #83838324;

    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    &__logo {
        svg {
          width: 100px;
          height: 62px;
        }
    }
    &__nav {
      display: flex;
    }
    &__link {
      padding: 14px 16px;
      border-radius: 14px;
      text-decoration: none;
      color: black;
      margin-right: 10px;
      transition: color .3s, background-color .3s;
      &:hover {
        color: white;
      }
      &-orange.router-link-exact-active {
        background-color: #F98419;
        color: white;
      }
      &-orange:hover {
        background-color: #F98419;
      }
      &-blue.router-link-exact-active {
        background-color: #9DCEFC;
        color: white;
      }
      &-blue:hover {
        background-color: #9DCEFC;
      }
      &-turquoise.router-link-exact-active {
        background-color: #5EC0A9;
        color: white;
      }
      &-turquoise:hover {
        background-color: #5EC0A9;
      }
      &-violet.router-link-exact-active {
        background-color: #BAA3E4;
        color: white;
      }
      &-violet:hover {
        background-color: #BAA3E4;
      }
      &-red.router-link-exact-active {
        background-color: #FB6F8A;
        color: white;
      }
      &-red:hover {
        background-color: #FB6F8A;
      }
      &-blue.router-link-exact-active {
        background-color: #5493CC;
        color: white;
      }
      &-blue:hover {
        background-color: #5493CC;
      }
      &-green.router-link-exact-active {
        background-color: #3FD33C;
        color: white;
      }
      &-green:hover {
        background-color: #3FD33C;
      }
      &-yellow.router-link-exact-active {
        background-color: #F7B618;
        color: white;
      }
      &-yellow:hover {
        background-color: #F7B618;
      }
    }
    &__button-cabinet {
      color: black;
      text-decoration: none;
      display: flex;
      svg {
        margin-right: 10px;
      }
    }
    &-mobile {
      width: 100%;
      display: none;
      justify-content: space-between;
      align-items: center;
      &__logo {
        svg {
          width: 100px;
          height: 62px;
        }
      }
      &__burger {
        z-index: 2;
        position: relative;
        width: 60px;
        height: 60px;
        cursor: pointer;
        &::before {
          content: '';
          position: absolute;
          width: 60px;
          height: 6px;
          background-color: black;
          right: 0;
          top: 18px;
          transition: background-color .5s, top .5s, transform .5s;
        }
        &::after {
          content: '';
          position: absolute;
          width: 42px;
          height: 6px;
          background-color: black;
          right: 0;
          top: 33px;
          transition: background-color .5s, width .5s, top .5s, transform .5s;
        }
        &_active {
          &::before {
            top: 27px;
            background-color: black;
            transform: rotate(-45deg);
          }
          &::after {
            top: 27px;
            width: 60px;
            background-color: black;
            transform: rotate(45deg);
          }
        }
      }
    }
    @media screen and (max-width: 1300px) {

        &__logo {
          display: none;
        }
        &__nav {
          display: none;
        }
        &__button-cabinet {
          display: none;
        }
        &-mobile {
          display: flex;
        }
    }
  }
  .side-menu {
    display: none;
    background-color: white;
    top: 0;
    right: -610px;
    box-sizing: border-box;
    width: 580px;
    height: 100vh;
    transition: right .5s;

      @media screen and (max-width: 600px) {
        width: 280px;
        right: -310px;
      }
    .header__button-cabinet {
      display: flex;
      align-items: center;
      margin: 20px auto 20px 14px;
    }

    &_active {
      box-shadow: 0 0 14px 14px #83838324;
      right: -30px;
    }
    &__nav {
      display: flex;
      flex-direction: column;
      padding: 10vh 40px 10px;
      a {
        margin: 6px auto 6px 0;
        display: inline-block;
      }
      @media screen and (max-width: 600px) {
        padding: 10vh 20px 10px;
      }
    }
      @media screen and (max-width: 1300px) {
        display: block;
        position: fixed;
      }
  }
</style>