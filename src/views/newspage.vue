<template>
  <div class="newspage">
    <h1 class="newspage__title">{{ this.foundNews?.attributes.title }}</h1>
    <div class="newspage__date">{{ this.foundNews?.attributes.publish_date?.replace(/-/g, '.') }}</div>
    <img :src="'https://berezka64.ru/server' + this.foundNews?.attributes.preview.data?.attributes.url" alt="" class="newspage__image">
    <p class="newspage__text" v-html="this.foundNews?.attributes.description"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        foundNews: 'news/GET_FOUNDNEWS',
      }),
    },
    methods: {
      ...mapActions({
        fetchNewsId: 'news/fetchNewsId',
      }),

    },
    created () {
      this.fetchNewsId(this.$route.params.id)
    },
  }
</script>

<style lang="scss" scoped>
  .newspage {
    padding: 132px 0 0;
    max-width: 1080px;
    margin: 0 auto;
    min-height: 70vh;
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      padding: 120px 0 0;
      max-width: 300px;
    }

    &__title {
      font-family: Montserrat;
      font-size: 36px;
      font-weight: 500;
      line-height: 44px;
      @media screen and (max-width: 1300px) {
        font-size: 26px;
        line-height: 32px;
      }
      @media screen and (max-width: 680px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__date {
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      color: #c4c4c4;
      margin: 0 0 32px;
    }
    &__image {
      width: 100%;
      border-radius: 20px;
      object-fit: cover;
      height: 550px;
      @media screen and (max-width: 680px) {
        height: auto;
      }
    }
    &__text {
      margin: 44px 0;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      @media screen and (max-width: 1300px) {
        font-size: 26px;
        line-height: 32px;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>