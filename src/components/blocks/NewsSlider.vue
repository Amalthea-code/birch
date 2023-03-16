<template>
  <div class="news-slider">
    <div class="news-slider__title">Наши новости</div>
    <swiper
      class="news-slider__box"
      :slidesPerView="3"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="{
        nextEl: '.news-slider__next',
        prevEl: '.news-slider__prev',
      }"
      :pagination="{
        el: '.news-slider__pagination',
        type: 'bullets',
        clickable: true
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }"
    >
      <swiper-slide
        class="reviews__slide"
        v-for="(oneNews, index) in news"
        
        :key="index"
      >
      <router-link 
        v-if="index < 10"
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
      </swiper-slide>
    </swiper>
    <div class="news-slider__nav">
      <div class="news-slider__prev"><slider-prev/></div>
      <div class="news-slider__next"><slider-next/></div>
    </div>
    <div class="news-slider__pagination"></div>
    <div class="news-slider__button">
      <router-link class="news-slider__button-link" to="/news">ко всем новостям</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import NewsItem from '@/components/elements/NewsItem'
  import sliderNext from '@/assets/images/icons/sliderNext'
  import sliderPrev from '@/assets/images/icons/sliderPrev'
  import "swiper/swiper-bundle.min.css";
  import "swiper/swiper.min.css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
      NewsItem,
      sliderPrev,
      sliderNext
    },
    computed: {
      ...mapGetters({
        news: 'news/GET_NEWS'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .news-slider {
    margin: 0 auto;
    max-width: 1080px;
    position: relative;

    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 110px 0 70px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 30px 0 70px;
      }
    }
    &__pagination {
        bottom: 130px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        width: auto;
        margin: 0 auto;
        ::v-deep .swiper-pagination-bullet {
          margin: 0 14px;
          width: 14px;
          height: 14px;
          background-color: #c4c4c4;
          opacity: 1;
          cursor: pointer;

          @media screen and (max-width: 890px) {
            margin: 0 8px;
          }
        }
        ::v-deep .swiper-pagination-bullet-active {
          background-color: #fd9bae;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
    }
    &__nav {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 1170px;
      top: 50%;
      left: 50%;
      transform: translate( -50%, -100%);

      @media screen and (max-width: 1300px) {
        display: none;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      margin: 130px 0 50px;
 
      &-link {
        display: flex;
        font-family: RF Dewi Expanded;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        padding: 22px 34px;
        border: solid black 2px;
        text-decoration: none;
        color: black;
        border-radius: 50px;
        @media screen and (max-width: 680px) {
          font-size: 16px;
          line-height: 20px;
          padding: 20px;
        }
      }
    }
    &__next {
      position: relative;
      z-index: 2;
      cursor: pointer;
    }
    &__prev {
      position: relative;
      z-index: 2;
      cursor: pointer;
    }
  }
</style>