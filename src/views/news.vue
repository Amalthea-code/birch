<template>
  <div class="news">
    <h2 class="news__title">Наши новости</h2>
    <div class="news__box">
    <router-link 
      v-for="(oneNews, index) in news"
      :key="index"
      class="news__link"
      :to="('/news/' + oneNews.id)"
      style="text-decoration: none;"
    >
      <news-item
        :title='oneNews.title'
        :text='oneNews.text'
        :date='oneNews.date'
        :image='oneNews.image'
        :id='oneNews.id'
      />
    </router-link>
    </div>
    <button class="news__button">
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsItem from '@/components/elements/NewsItem'
  export default {
    components: {
        NewsItem
    },
    computed: {
      ...mapGetters({
        news: 'news/GET_NEWS'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    padding: 58px 0 0;
    max-width: 1080px;
    margin: 0 auto;

    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
    }
    &__box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__link {
      display: block;
      margin: 25px 14px;
    }
  }
</style>