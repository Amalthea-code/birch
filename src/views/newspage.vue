<template>
  <div class="newspage">
    <h1 class="newspage__title">{{ title }}</h1>
    <div class="newspage__date">{{ date.replace(/-/g, '.') }}</div>
    <img :src="image" alt="" class="newspage__image">
    <p class="newspage__text" v-html="text"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        title: '',
        date: '',
        text: '',
        image: ''
      }
    },
    computed: {
      ...mapGetters({
        foundNews: 'news/GET_FOUNDNEWS',
        GET_NEWS: 'news/GET_NEWS'
      }),
    },
    methods: {
      ...mapActions({
        searchNews: 'news/searchNews',
        fetchNews: 'news/fetchNews'
      }),
      getProps () {
        this.title = this.foundNews.attributes.title
        this.date = this.foundNews.attributes.publish_date
        this.text = this.foundNews.attributes.description
        this.image = "http://89.108.98.57:1337" + this.foundNews.attributes.preview.data.attributes.url
      }

    },
    created () {
      this.fetchNews()
      this.searchNews(this.$route.params.id)
      this.getProps()
    }
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