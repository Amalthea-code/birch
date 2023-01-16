<template>
  <div class="news">
    <h2 class="news__title">Наши новости</h2>
    <div class="news__box" v-if="news">
    <router-link
      v-for="(oneNews, index) in news"
      :key="index"
      class="news__link"
      :to="('/news/' + oneNews.id)"
      style="text-decoration: none;"
    >
      <news-item
        :title='oneNews.attributes.title'
        :text='oneNews.attributes.description'
        :date='oneNews.attributes.publish_date'
        :image='"https://berezka64.ru/server" + oneNews.attributes.preview.data.attributes.url'
        :id='oneNews.id'
      />
    </router-link>
    </div>
    <button class="news__button" @click="showMore">
      показать еще
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsItem from '@/components/elements/NewsItem'
  export default {
    components: {
        NewsItem
    },
    data () {
      return {
        page: 1
      }
    },
    computed: {
      ...mapGetters({
        news: 'news/GET_NEWS'
      })
    },
    methods: {
      ...mapActions({
        showMore: 'news/fetchNews',
        fetchNews: 'news/fetchNews'
      }),
      showMore () {
        this.page += 1
        this.fetchNews(this.page)
      }
    },
    created () {
      this.fetchNews()
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    padding: 58px 0 0;
    max-width: 1080px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      padding: 120px 0 0;
      max-width: 300px;
    }

    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }

    }
    &__box {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    &__link {
      display: block;
      margin: 25px 14px;
      @media screen and (max-width: 1300px) {
        margin: 25px 0;
      }
    }
    &__button {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 22px;
      text-align: center;
      display: block;
      background-color: white;
      border-radius: 50px;
      border: 2px solid #000;
      padding: 22px 40px;
      margin: 40px auto 160px;
    }
  }
</style>