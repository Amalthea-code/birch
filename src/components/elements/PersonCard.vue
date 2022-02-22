<template>
  <div :class="{
    'person-card': true,
    'person-card_create': create,
    'person-card_child': child
  }">
    <div
      v-if="!create"
      class="person-card__title"
    >
      {{ lastName }} {{ name }} {{ surName }}
    </div>
    <router-link class="person-card__create-button" :to="(parent ? '/registrationParent' : '/registrationChild')" v-else>
      <span v-if="child">Добавить ребенка</span>
      <span v-else>Добавить родителя или опекуна</span>
      <person-card-plus/>
    </router-link>
    <router-link
      v-if="!create"
      class="person-card__link"
      :to="((parent ? '/parent/' : '/child/') + id)"
    >
      Проверить данные
    </router-link>
  </div>
</template>

<script>
  import personCardPlus from '@/assets/images/icons/personCardPlus'
  export default {
    components: {
      personCardPlus
    },
    props: {
      surName: {
        type: String,
        default: '',
      },
      lastName: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      id: {
        type: Number,
        default: 0,
      },
      parent: {
        type: Boolean,
        default: false,
      },
      child: {
        type: Boolean,
        default: false,
      },
      create: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person-card {
    height: 220px;
    width: 200px;
    border-radius: 24px;
    background-size: cover;
    background-image: url('~@/assets/images/icons/person-card.png');
    background-repeat: no-repeat;
    background-color: #9c84d2;
    padding: 0 60px;
    user-select: none;
    position: relative;
    @media screen and (max-width: 1300px) {
      width: 180px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
    &_child {
      background-color: #84d0b8;
    }
    &_create {
      height: 218px;
      width: 318px;
      padding: 0;
      border: 1px solid #000;
      background-image: none;
      background-color: white;
      @media screen and (max-width: 1300px) {
        width: 298px;
      }
    }
    &__create-button {
      display: flex;
      align-items: center;
      margin: 90px 0 0 30px;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 23px;
      text-decoration: none;
      


      span {
        width: 190px;
        color: black;
      }
      svg {
        margin: 0 0 0 38px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      color: white;
      padding: 40px 0 0;
    }
    &__link {
      display: block;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 17px;
      margin: 12px 0 0;
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>