<template>
  <div class="newspage">
    <h1 class="newspage__title">{{ title }}</h1>
    <div class="newspage__date">{{ date }}</div>
    <img :src="image" alt="" class="newspage__image">
    <p class="newspage__text">{{ text }}</p>
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
        foundNews: 'news/GET_FOUNDNEWS'
      })
    },
    methods: {
      ...mapActions({
        searchNews: 'news/searchNews'
      }),
      getProps () {
        this.title = this.foundNews.title
        this.date = this.foundNews.date
        this.text = this.foundNews.text
        this.image = this.foundNews.image
      }

    },
    created () {
      this.searchNews(this.$route.params.id)
    },
    mounted () {
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

    &__title {
      font-family: Montserrat;
      font-size: 36px;
      font-weight: 500;
      line-height: 44px;
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
    }
    &__text {
      margin: 44px 0;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
</style>