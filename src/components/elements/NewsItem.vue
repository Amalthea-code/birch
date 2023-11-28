<template>
  <div class="newsitem">
    <img :src="image" alt="" class="newsitem__image">
    <div class="newsitem__title">{{ title }}</div>
    <p v-html="text" class="newsitem__text"></p>
    <div class="newsitem__date">{{ date }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: '',
        type: String,
      },
      text: {
        default: '',
        type: String,
      },
      date: {
        default: '',
        type: String,
      },
      image: {
        default: '',
        type: String,
      },
      id: {
        default: 0,
        type: Number,
      },
    }
  }
</script>

<style lang="scss" scoped>
  .newsitem {
    width: 330px;
    height: 510px;
    border: 1px solid #fd9bae;
    border-radius: 10px;
    position: relative;
    color: black;

    @media screen and (max-width: 1300px) {
      width: 298px;
      height: 490px;
    }
    &__image {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 192px;
      border-radius: 10px;
    }
    &__title {
      margin: 25px 32px 0;
      font-family: RF Dewi Expanded;
      font-size: 16px;
      font-weight: 900;
      line-height: 19px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      @media screen and (max-width: 1300px) {
        margin: 18px 20px 0;
      }
    }
    &__text {
      margin: 18px 32px 0;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 8;
      overflow: hidden;
      @media screen and (max-width: 1300px) {
        margin: 18px 20px 0;
      }
    }
    &__date {
      font-family: Montserrat;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      color: #6b6b6b;
      position: absolute;
      bottom: 28px;
      left: 32px;
      @media screen and (max-width: 1300px) {
        left: 20px;
      }
    }
  }
</style>