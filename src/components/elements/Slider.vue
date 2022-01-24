<template>
  <div class="slider">
    <swiper
      class="slider-body"
      :slidesPerView="slidesView"
      :spaceBetween="30"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="{
        nextEl: '.slider__navigation-next',
        prevEl: '.slider__navigation-prev',
      }"
      :pagination="{
        type: 'bullets',
        clickable: true
      }"
    >
      <swiper-slide
        class="slider__slide"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.url" :alt="image.alt" class="slider__image">
      </swiper-slide>
      <div class="slider__navigation">
        <div class="slider__navigation-prev"><sliderPrev /></div>
        <div class="slider__navigation-next"><sliderNext /></div>
      </div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import sliderNext from '@/assets/images/icons/sliderNext'
  import sliderPrev from '@/assets/images/icons/sliderPrev'
  import "swiper/swiper-bundle.min.css";
  import "swiper/swiper.min.css";
  export default {
    components: {
      Swiper,
      SwiperSlide,
      sliderNext,
      sliderPrev
    },
    props: {
      images: {
        default: () => [
          {
            alt: '',
            url: '',
          }
        ],
        type: Array
      },
      slidesView: {
        type: Number,
        default: 1
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
    :root {
      --color: red;
    }
    .slider {
      height: 100%;
      position: relative;
      &-body {}
      &__image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
      }
      &__navigation {
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 36px);
        transform: translate(-50%, -50%);
        z-index: 2;
        display: flex;
        justify-content: space-between;
        &-prev {
          cursor: pointer;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        &-next {
          cursor: pointer;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        
      }
      ::v-deep .swiper-pagination-bullet {
        margin: 0 9px;
        width: 14px;
        height: 14px;
        background-color: #000000;
        opacity: 0.2;
        cursor: pointer;
      }
      ::v-deep .swiper-pagination-bullet-active {
        background-color: white;
        opacity: 0.8;
      }
    }
</style>