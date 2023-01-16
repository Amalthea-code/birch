<template>
  <div class="gallery">
    <div class="gallery__title">ФОТОГАЛЕРЕЯ</div>
    <div class="gallery__box">
      <img
        v-for="(item, index) in gallery"
        :key="index"
        :src="item.image" alt="Фото из галереи" class="gallery__item"
      >
    </div>
    <div class="gallery__button"><span @click="showMore">Смотреть еще</span></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions({
      showMore: 'gallery/showMore'
    })
  },
  computed: {
    ...mapGetters({
      gallery: 'gallery/GET_SHOWGALLERY'
    })
  },
  created () {
    this.showMore()
  }
}
</script>
<style lang="scss" scoped>
  .gallery {
    padding: 150px 0 0;
    max-width: 1080px;
    margin: 0 auto;
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
      padding: 30px 0 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__item {
      width: calc(50% - 15px);
      object-fit: cover;
      object-position: center;
      margin: 15px 0;
      border-radius: 20px;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      padding: 40px 0 80px;
      span {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        text-align: center;
        padding: 22px 34px;
        border: 2px solid #000;
        border-radius: 50px;
        cursor: pointer;
      }
    }
  }
</style>