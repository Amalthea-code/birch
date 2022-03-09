<template>
  <div class="cabinet-slider">
    <swiper
      class="cabinet-slider__box"
      :slidesPerView="3"
      :spaceBetween="30"
      :slidesPerGroup="1"
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
        class="cabinet-slider__slide"
        v-for="(parent, index) in parents"
        :key="index"
      >
        <person-card
          :surName="parent.sName"
          :lastName="parent.tName"
          :name="parent.fName"
          :id="index"
          parent
        />
      </swiper-slide>
      <swiper-slide
        class="cabinet-slider__slide"
      >
        <person-card
          create
          parent
        />
      </swiper-slide>
    </swiper>
    <swiper
      class="cabinet-slider__box"
      :slidesPerView="3"
      :spaceBetween="30"
      :slidesPerGroup="1"
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
        class="cabinet-slider__slide"
        v-for="(child, index) in childen"
        :key="index"
      >
        <person-card
          :surName="child.sName"
          :lastName="child.tName"
          :name="child.fName"
          :id="index"
          child
        />
      </swiper-slide>
      <swiper-slide
        class="cabinet-slider__slide"
      >
        <person-card
          create
          child
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import PersonCard from '@/components/elements/PersonCard'
  import "swiper/swiper-bundle.min.css";
  import "swiper/swiper.min.css";
  export default {
    components: {
      Swiper,
      SwiperSlide,
      PersonCard
    },
    computed: {
      ...mapGetters({
        childen: 'children/GET_CHILDREN',
        parents: 'parents/GET_PARENTS'

      }),
    }
  }
</script>

<style lang="scss" scoped>
  .cabinet-slider {
    &__box {
      margin: 0 0 50px;
    }
    .swiper-container {
      overflow: visible;
    }
  }
</style>