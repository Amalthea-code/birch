<template>
  <div id="foto" class="gallery">
    <h3 class="gallery__title">фотогалерея</h3>
    <div class="wrapper__fotoHronivc">
      <div>
        <a href="https://disk.yandex.ru/d/kEjbTtpQa1jehw" target="_blank">ФОТОХРОНИКА 1 СМЕНА 2023</a>
        <a href="https://disk.yandex.ru/d/Qk1tkDiyFV7BnA" target="_blank">ФОТОХРОНИКА 2 СМЕНА 2023</a>
        <a href="https://disk.yandex.ru/d/UbRMMorwiMDCkQ" target="_blank">ФОТОХРОНИКА 3 СМЕНА 2023</a>
        <a href="https://disk.yandex.ru/d/dpCTzWca94I4FA" target="_blank">ФОТОХРОНИКА 4 СМЕНА 2023</a>
        <a href="https://disk.yandex.ru/d/6gu7Eo6RsWmJZQ" target="_blank">ФОТОХРОНИКА 5 СМЕНА 2023</a>
      </div>
<!--      <div>-->
<!--        <a href="https://disk.yandex.ru/d/I37HcAQlhP9uUA" target="_blank">ФОТОХРОНИКА 1 СМЕНА 2024</a>-->
<!--      </div>-->
    </div>
    <div class="top-galery">
     <div
      v-for="(item, index) in 28"
      :key="index"
      >
      <img
        :src="require(`@/assets/images/gallery/gallery/galery${index+=1}.jpg`)" alt="Фото из галереи" class="gallery__item"
      >
     </div>
  </div>
    <div class="gallery__box">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="['gallery__image', 'gallery__image-' + image.id]">
    </div>
    <div class="gallery__button">
      <router-link to='/gallery'>показать еще</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {
            alt: 'Фото в галерее',
            src: require('@/assets/images/photo/gallery-1.jpg'),
            id: 1
          },
          {
            alt: 'Фото в галерее',
            src: require('@/assets/images/photo/gallery-2.jpg'),
            id: 2
          },
          {
            alt: 'Фото в галерее',
            src: require('@/assets/images/photo/gallery-3.jpg'),
            id: 3
          },
          {
            alt: 'Фото в галерее',
            src: require('@/assets/images/photo/gallery-4.jpg'),
            id: 4
          },
          {
            alt: 'Фото в галерее',
            src: require('@/assets/images/photo/gallery-5.jpg'),
            id: 5
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrapper__fotoHronivc {
  display: flex;
  gap: 24px;
}
.top-galery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;


  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    width: 100%;
    border-radius: 20px;
  }
}
  .gallery {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 0 70px;

    a {
      display: block;
      margin-bottom: 10px;
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
        margin: 34px 0 24px;
      }
    }
    &__box {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 340px);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      @media screen and (max-width: 1300px) {
        grid-template-rows: repeat(2, 192px);
      }
      @media screen and (max-width: 680px) {
        grid-template-rows:  140px 140px 200px;
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
      @media screen and (max-width: 1300px) {
        border-radius: 20px;
      }
      &-1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
        @media screen and (max-width: 680px) {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 1;
        }
      }
      &-2 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 1;
        @media screen and (max-width: 680px) {
          grid-column-start: 1;
          grid-column-end: 7;
          grid-row-start: 3;
          grid-row-end: 4;
        }
      }
      &-3 {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 1;
        @media screen and (max-width: 680px) {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      &-4 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;
        @media screen and (max-width: 680px) {
          grid-column-start: 4;
          grid-column-end: 7;
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      &-5 {
        grid-column-start: 4;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 2;
        @media screen and (max-width: 680px) {
          grid-column-start: 4;
          grid-column-end: 7;
          grid-row-start: 1;
          grid-row-end: 1;
        }
      }
    }
    &__button {
      margin-top: 50px;
      display: flex;
      justify-content: center;

      a {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-style: normal;
        font-weight: 900;
        line-height: 22px;
        border: 2px solid black;
        padding: 20px 40px;
        border-radius: 50px;
        text-decoration: none;
        text-transform: uppercase;
        color: black;
        @media screen and (max-width: 1300px) {
          font-size: 16px;
        }
      }
    }
    @media screen and (max-width: 1300px) {
      max-width: 620px;
    }
    @media screen and (max-width: 680px) {
      max-width: 300px;
    }
  }
</style>