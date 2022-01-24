<template>
  <div class="review">
    <img :src="image" :alt="title" class="review__image">
    <div class="review__title">{{ title }}</div>
    <div class="review__text">{{ text }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        default: '',
        type: String
      },
      title: {
        default: '',
        type: String
      },
      text: {
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .review {
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 54px 50px;
    width: 680px;
    margin: 0 auto;
    user-select: none;
    @media screen and (max-width: 1300px){
      width: 620px;
    }
    @media screen and (max-width: 890px) {
      max-width: 500px;
      width: 60vw;
      padding: 54px 25px;
    }
    &__image {
      width: 140px;
      margin: 0 auto;
      object-fit: contain;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 20px;
      font-weight: 900;
      line-height: 27px;
      text-align: center;
      width: 100%;
      margin: 20px 0;
    }
    &__text {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      width: 100%;
    }
  }
</style>