<template>
  <div class="reviews">
    <h3 class="reviews__title">отзывы</h3>
    <swiper
      class="reviews__slider"
      :slidesPerView="1"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="{
        nextEl: '.reviews__slider-next',
        prevEl: '.reviews__slider-prev',
      }"
      :pagination="{
        el: '.reviews__slider-pagination',
        type: 'bullets',
        clickable: true
      }"
      
    >
      <swiper-slide
        class="reviews__slide"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <review
        :title="review.title"
        :text="review.text"
        :image="review.image"
        />
      </swiper-slide>
      <div class="reviews__slider-button">
        <div class="reviews__slider-prev"><slider-prev/></div>
        <div class="reviews__slider-next"><slider-next/></div>
      </div>
    </swiper>
    <div class="reviews__slider-pagination"></div>
  </div>
</template>

<script>
  import Review from '@/components/elements/Review'
  import sliderNext from '@/assets/images/icons/sliderNext'
  import sliderPrev from '@/assets/images/icons/sliderPrev'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/swiper-bundle.min.css";
  import "swiper/swiper.min.css";
  import SwiperCore, {
    Navigation,
    Pagination
  } from 'swiper';
  SwiperCore.use([Navigation, Pagination]);

  export default {
    components: {
      Review,
      Swiper,
      SwiperSlide,
      sliderNext,
      sliderPrev
    },
    data () {
      return {
        reviews: [
          {
            title: 'Мама Ярослава Топтыгина',
            text: 'Уважаемые наши вожатые. Хочу выразить огромную вам благодарность за ваш труд, заботу, любовь. Знаю, что было местами очень трудно. Ребенок приехал с большими положительными эмоциями. И сказал, что обязательно вернется в лагерь. Спасибо за все!!!',
            image: require('@/assets/images/photo/review-1.png')
          },
          {
            title: 'Терешонкова Елена',
            text: 'Рада, что дети так здорово отдыхают в лагере! Столько эмоций каждый день! Спасибо организаторам за прекрасное детское лето!',
            image: require('@/assets/images/photo/review-2.png')
          },
          {
            title: 'Ирина Русанова',
            text: 'Спасибо огромное за чудесное время в лагере, море внимания, заботы, за то, что вкладывали душу. Я полностью с лихвой оправдала ожидания от лагеря и всего, что получил ребенок, это бесценно!!! Вожатые, спасибо огромное за то, что ребенок получал столько тепла от вас, что спокойно прожил 2 смены без родителей.',
            image: require('@/assets/images/photo/review-3.png')
          },
          {
            title: 'Шинкаренко Татьяна',
            text: 'Первая смена в Березке - совсем не дождливая, совсем не скучная, а очень насыщенная и интересная!!! Спасибо Березка, спасибо администрации лагеря, спасибо Елена Ивановна, спасибо вожатым, спасибо медикам, спасибо поварам, спасибо физрукам за классный отдых для наших детей. Свежий воздух, спортивные и культурные мероприятия, отличное питание, нет времени на гаджеты, режим, живое общение- все о чем мы мечтали для своих детей. Ребёнок взахлёб по дороге домой рассказывает о новых друзьях, вкусных запеканках, вечерних встречах… грустно расставаться! Березка, до новых встреч!',
            image: require('@/assets/images/photo/review-4.png')
          },
          {
            title: 'Елена Потапова',
            text: 'Каждое утро начинаем с просмотра выложенных фото и видео - отличное настроение на день обеспечено! Спасибо вожатым и всем сотрудникам лагеря за вашу креативность, любовь и заботу о наших детях!!!',
            image: require('@/assets/images/photo/review-5.png')
          },
          {
            title: 'Анастасия Шуваева',
            text: 'Спасибо, Борис Константинович! Спасибо за Ваш многолетний труд! За тепло, которым окружены дети в "Берёзке"! За берёзовское братство. Дети с большим нетерпением ждут лета в любимом лагере)',
            image: require('@/assets/images/photo/review-6.png')
          },
          {
            title: 'Евгения',
            text: 'Огромное Спасибо вожатым и лагерю! Моя дочка наконец-то стала активной)) Очень рада видеть ее в постоянном движении. В наш век технологий, счастье когда ребенок подвижен! Особенно приятно видеть радость в ее глазках! Еще раз огромное Вам спасибо!',
            image: require('@/assets/images/photo/review-7.png')
          },
          {
            title: 'Виктория Донская',
            text: 'Добрый день, Березка! Хочу поблагодарить всех сотрудников лагеря за ваш нелегкий, но очень важный для наших деток труд! Огромное спасибо вожатым 14-го отряда за позитивное настроение, которое вы дарите детям и за вашу заботу! Желаю всем хорошей погоды и отличного настроения на все смены!',
            image: require('@/assets/images/photo/review-8.png')
          },
          {
            title: 'Евгения Чупаченко',
            text: 'Спасибо вожатым за моих деток, за поддержку Платона в трудную минуту адаптации, за искренние эмоции, любовь, понимание, за слезы при прощании с Платошенькой! Спасибо большое за фотографии, с помощью которых я видела счастье и улыбки своих деток. И спасибо за приучение моих деток к организации, поддержанию порядка с вещами! И конечно же, спасибо большое за то, что Евочка чувствовала себя так, как будто бы она всегда ездила отдыхать в лагерь "Березка". Уверена эта любовь и забота была ко всем! Это бесценно для меня! Низкий поклон и слова благодарности всем вожатым отряда "Горошки" и "Чебурашки"',
            image: require('@/assets/images/photo/review-9.png')
          },
          {
            title: 'Благодарная мама',
            text: 'Уважаемые, дорогие наши вожатые! Спасибо вам за ваш труд, доброту, отзывчивость, теплоту, интеллект, которыми вы обладаете и передаете нашим деткам. Я хочу поблагодарить ваших родителей, которые воспитали таких прекрасных детей и вы передаете хорошие качества нашим детям. Отдельное спасибо передайте Елене Ивановне. Она супер! Спасибо вам за все и удачи!',
            image: require('@/assets/images/photo/review-10.png')
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .reviews {
    background-image: url('~@/assets/images/photo/reviews-bg.png');
    background-color: #a68ed5;
    background-size: cover;
    padding: 42px 0 104px;
    position: relative;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      color: white;
      text-transform: uppercase;
      text-align: center;
      @media screen and (max-width: 1300px){
        font-size: 46px;
        line-height: 55px;
      }
    }
    &__slider {
      &-next {
        cursor: pointer;
        z-index: 2;
        position: relative;
      }
      &-prev {
        cursor: pointer;
        z-index: 2;
        position: relative;
      }
      &-button {
        display: flex;
        z-index: 2;
        justify-content: space-between;
        position: absolute;
        top: 200px;
        left: 50%;
        width: 1100px;
        transform: translate(-50%, 0);
        @media screen and (max-width: 1300px) {
          width: 840px;
        }
        @media screen and (max-width: 890px) {
          width: 90vw;
        }
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
      &-pagination {
        bottom: 64px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        width: auto;
        margin: 0 auto;
        ::v-deep .swiper-pagination-bullet {
          margin: 0 14px;
          width: 14px;
          height: 14px;
          background-color: white;
          opacity: 1;
          cursor: pointer;

          @media screen and (max-width: 890px) {
            margin: 0 8px;
          }
          @media screen and (max-width: 500px) {
          }
        }
        ::v-deep .swiper-pagination-bullet-active {
          background-color: #725f9b;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
          display: flex;
          justify-content: center;
        }


      }
    }
  }
</style>