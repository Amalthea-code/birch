<template>
  <div class="holiday">
    <div class="docs__nav">
      <a href="#family" class="docs__nav-link">Семейный отдых</a>
      <a href="#parking" class="docs__nav-link">Парковка</a>
      <a href="#contacts" class="docs__nav-link">Контакты</a>
    </div>
    <div id="family" class="holiday__title">Семейный отдых</div>
    <info-block
      v-for="(item,index) in relaxation"
      :key="index"
      :title="item.title"
      :color="item.color"
      :text="item.text"
      :aligin="item.aligin"
      :slider="item.slider"
      :infoBox="item.infoBox"
      :images="item.images"
      :backgroundColor='item.backgroundColor'
    />
    <div class="holiday-outro">
      <div class="holiday-outro__box">
        <div id="parking" class="holiday-outro__title">ПАРКОВКА</div>
        <div class="holiday-outro__text">
          На территории лагеря, возле Зимнего корпуса работает платная стоянка. 
          <br /><br />
          Стоимость въезда на парковку в будние дни – 100 руб., 
          в выходные и праздничные дни – 200 руб.
        </div>
      </div>
      <img src="@/assets/images/photo/holiday-parking.png" alt="" class="holiday-outro__image">
    </div>
    <div class="holiday-outro">
      <div class="holiday-outro__box">
        <div id="contacts" class="holiday-outro__title">КОНТАКТЫ</div>
        <div class="holiday-outro__text">
          <strong>Велопрокат:</strong> <a href="tel:+79873038754">+7(987) 303-87-54</a><br /><br />
          <strong>Прокат лыж:</strong> <a href="tel:+78452563107">+7(8452) 56-31-07</a><br /><br />
          <strong>Кафе/банкеты:</strong><br /> <a href="tel:+79878090745">+7(987) 809-07-45</a> (Стрелкова Ольга Сергеевна)<br /><br />
          <strong>Администратор:</strong> <a href="tel:+78452563107">+7(8452) 56-31-07</a>
        </div>
      </div>
      <img src="@/assets/images/photo/holiday-contacts.png" alt="" class="holiday-outro__image">
    </div>
  </div>
</template>

<script>
  import InfoBlock from '@/components/elements/infoBlock'
  export default {
    components: {
      InfoBlock
    },
    data () {
      return {
        relaxation: [
          {
            title: 'KATOK',
            color: '#43D440',
            text: '<b>График работы:</b><br>Ежедневно с 10.00 до 21.00 <br><br> <b>Прокат коньков:</b><br> Дети от 12 лет и взрослые - 250р.<br> Дети до 12 лет - 150р.<br><br> <b>Выход на лед со своими коньками:</b><br> Взрослые - 200 ₽ <br> Дети от 6 до 12 лет - 100 ₽<br>Дети до 6 лет - бесплатно',
            aligin: 'right',
            slider: true,
            infoBox: true,
            backgroundColor: 'linear-gradient(266.46deg, rgb(48 18 211) 0.89%, rgb(61 36 189) 99.37%)',
            images: [
              {
                alt: '',
                url: require('@/assets/images/relaxation/k1.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k2.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k3.jpg')
              },
            ]
          },
          {
            title: 'ПРОКАТ ЛЫЖ',
            color: '#60ABF0',
            text: 'Прокат лыж начинает работать с устойчивым покровом снега и располагается в Зимнем корпусе.<br /><br />В прокате представлены лыжи различных марок. В помещении работают раздевалка и туалеты.<br /><br /><strong>Стоимость проката:</strong> 250 руб./первый час, последующие 30 мин./50 руб. Дети до 10 лет: 150 руб./час, последующие 30 мин./50 руб.<br /><br /><strong>График работы:</strong> пн. - вск. с 9:00 до 17:00<br /><br /><strong>Телефон:</strong><a href="tel:+78452563107" style="color: black">+7(8452) 56-31-07</a>',
            aligin: 'left',
            slider: true,
            infoBox: true,
            backgroundColor: 'linear-gradient(89.75deg, #9DCEFC -42.68%, #5BA8EF 99.94%)',
            images: [
              {
                alt: '',
                url: require('@/assets/images/relaxation/p1.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/p2.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/p3.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/p4.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/p5.png')
              },
            ]
          },
          {
            title: 'КАФЕ',
            color: '#F9871E',
            text: 'Кафе работает в лыжный сезон. Для Вас и Вашей компании всегда найдется столик в одном из 4-х просторных залов.<br /><br />После прогулки по зимнему лесу Вам обязательно захочется погреться в нашем уютном кафе за чашкой ароматного, травяного чая, кофе или безалкогольного глинтвейна. А также попробовать нашу вкусную домашнюю кухню, разнообразный шашлык на углях и знаменитую березовскую выпечку.<br /><br />График работы:<br /> ср. - пт. с 11.00 до 16.00 буфет<br /> сб. - вск. с 11.00 до 17.00 кафе',
            aligin: 'right',
            slider: true,
            infoBox: true,
            backgroundColor: 'linear-gradient(258.58deg, #F98419 8.47%, #FF9C41 100%)',
            images: [
              {
                alt: '',
                url: require('@/assets/images/relaxation/k1.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k2.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k3.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k4.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/k5.jpg')
              },
            ]
          },
          {
            title: 'БАНКЕТЫ',
            color: '#A18AD5',
            text: 'В Березке Вы можете провести мероприятие и заказать банкет. Для этого мы располагаем несколькими залами разной вместимости, разнообразным банкетным меню, штатом профессиональных поваров и официантов.<br /><br /><strong>Контакты:</strong><br /><br /><a href="tel:+79878090745" style="color: black">+7(987) 809-07-45</a> (Стрелкова Ольга Сергеевна)',
            aligin: 'left',
            slider: true,
            infoBox: true,
            backgroundColor: 'linear-gradient(268.41deg, rgba(156, 132, 210, 0.96) 6.43%, #BAA3E4 95.7%)',
            images: [
              {
                alt: '',
                url: require('@/assets/images/relaxation/b1.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/b2.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/b3.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/b5.png')
              },
              {
                alt: '',
                url: require('@/assets/images/relaxation/b7.png')
              },
            ]
          },
          {
            title: 'ВЕЛОПРОКАТ',
            color: '#43D440',
            text: 'Располагается рядом с лагерем, соседние ворота.<br /><br />Работает с весны по осень в сухую погоду. <br /><br />График работы можно уточнить по номеру телефона <a href="tel:+79873038754" style="color: black">+7(987) 303-87-54</a>. <br /><br />Стоимость проката: 200-300 руб./час',
            aligin: 'right',
            slider: true,
            infoBox: true,
            backgroundColor: 'linear-gradient(266.46deg, #3FD33C 0.89%, #5FD65C 99.37%)',
            images: [
              {
                alt: '',
                url: require('@/assets/images/relaxation/1.jpg')
              },
            ]
          },
          // {
          //   title: 'СЕМЕЙНЫЕ НОМЕРА И САУНА',
          //   color: '#F7B618',
          //   text: 'В Зимнем корпусе есть возможность проживания в семейных номерах со всеми удобствами и аренды сауны с бассейном.<br /><br /><strong>Контакты:</strong><br /><br /><a href="tel:+79878090745" style="color: black">+7(987) 809-07-45</a> (Стрелкова Ольга Сергеевна)',
          //   aligin: 'right',
          //   slider: true,
          //   infoBox: true,
          //   backgroundColor: 'linear-gradient(258.87deg, #F7B618 0%, #F5C54E 94.92%)',
          //   images: [
          //     {
          //       alt: '',
          //       url: require('@/assets/images/relaxation/s1.jpg')
          //     },
          //     {
          //       alt: '',
          //       url: require('@/assets/images/relaxation/s2.jpg')
          //     },
          //     {
          //       alt: '',
          //       url: require('@/assets/images/relaxation/s3.jpg')
          //     },
          //     {
          //       alt: '',
          //       url: require('@/assets/images/relaxation/s4.jpg')
          //     },
          //   ]
          // },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.docs__nav {
  padding-bottom: 40px;
      &-link {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        display: inline-block;
        margin: 8px 12px 0 0;
        border: 2px solid;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        transition: background-color .3s, color .3s;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          line-height: 18px;
          padding: 8px 14px;
          margin: 0 12px 18px 0;
        }
        &:nth-child(1) {
          color: #9DCEFC;
          border-color: #9DCEFC;
          &:hover {
            background-color: #9DCEFC;
            color: white;
          }
        }
        &:nth-child(2) {
          color: #F98419;
          border-color: #F98419;
          &:hover {
            background-color: #F98419;
            color: white;
          }
        }
        &:nth-child(3) {
          color: #FB6F8A;
          border-color: #FB6F8A;
          &:hover {
            background-color: #FB6F8A;
            color: white;
          }
        }
        &:nth-child(4) {
          color: #5EC0A9;
          border-color: #5EC0A9;
          &:hover {
            background-color: #5EC0A9;
            color: white;
          }
        }
        &:nth-child(5) {
          color: #676FB2;
          border-color: #676FB2;
          &:hover {
            background-color: #676FB2;
            color: white;
          }
        }
        &:nth-child(6) {
          color: #3FD33C;
          border-color: #3FD33C;
          &:hover {
            background-color: #3FD33C;
            color: white;
          }
        }
        &:nth-child(7) {
          color: #1A66AC;
          border-color: #1A66AC;
          &:hover {
            background-color: #1A66AC;
            color: white;
          }
        }
      }
    }
  .holiday {
    padding: 70px calc((100vw - 1080px)/2) 20px;
    @media screen and (max-width: 1300px) {
      padding: 70px calc((100vw - 620px)/2) 20px;
    }
    @media screen and (max-width: 680px) {
      padding: 70px calc((100vw - 300px)/2) 20px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 62px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &-outro {
      display: flex;
      justify-content: space-between;
      margin: 0 0 80px;
      @media screen and (max-width: 680px) {
        justify-content: center;
        flex-wrap: wrap;
      }
      &:nth-child(1) {
        margin: 120px 0 80px;
      }
      &__box {
        width: 60%;
        @media screen and (max-width: 680px) {
          width: 100%;
        }
      }
      &__title {
        font-family: RF Dewi Expanded;
        font-size: 64px;
        line-height: 77px;
        font-weight: 900;
        margin: 40px 0 24px;
        @media screen and (max-width: 1300px) {
          font-size: 46px;
          line-height: 55px;
        }
        @media screen and (max-width: 680px) {
          font-size: 24px;
          line-height: 29px;
          margin: 0 0 24px;
        }
      }
      &__text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        a {
          color: black;
          text-decoration: none;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
      &__image {
        width: 280px;
        object-fit: contain;
        @media screen and (max-width: 1300px) {
          width: 194px;
        }
        @media screen and (max-width: 680px) {
          margin: 30px 0 0;
          width: 140px;
        }
      }
    }
  }
</style>