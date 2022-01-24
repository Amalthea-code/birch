<template>
  <div class="holiday">
    <div class="holiday__title">Семейный отдых</div>
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
    />
    <div class="holiday-outro">
      <div class="holiday-outro__box">
        <div class="holiday-outro__title">ПАРКОВКА</div>
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
        <div class="holiday-outro__title">КОНТАКТЫ</div>
        <div class="holiday-outro__text">
          <strong>Велопрокат:</strong> <a href="tel:+79873038754">+79873038754</a><br /><br />
          <strong>Прокат лыж:</strong> <a href="tel:+78452563107">+7(8452)563107</a><br /><br />
          <strong>Кафе/банкеты/проживание/сауна:</strong><br /> <a href="tel:+79878090745">+7 987 809 07 45</a> (Стрелкова Ольга Сергеевна)<br /><br />
          <strong>Администратор:</strong> <a href="tel:+78452563107">+7(8452) 56-31-07</a>
        </div>
      </div>
      <img src="@/assets/images/photo/holiday-contacts.png" alt="" class="holiday-outro__image">
    </div>
  </div>
</template>

<script>
  import infoBlock from '@/components/elements/infoBlock'
  export default {
    components: {
      infoBlock
    },
    data () {
      return {
        relaxation: [
          {
            title: 'ВЕЛОПРОКАТ',
            color: '#43D440',
            text: 'Располагается рядом с лагерем, соседние ворота.<br /><br />Работает с весны по осень в сухую погоду. <br /><br />График работы можно уточнить по номеру телефона <a href="tel:+79873038754" style="color: black">+79873038754</a>. <br /><br />Стоимость проката: 200-300 руб./час',
            aligin: 'right',
            slider: true,
            infoBox: true,
            images: [
              {
                alt: '',
                url: 'https://randomfox.ca/images/1.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/2.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/3.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/4.jpg'
              },
            ]
          },
          {
            title: 'ПРОКАТ ЛЫЖ',
            color: '#60ABF0',
            text: 'Прокат лыж начинает работать с устойчивым покровом снега и располагается в Зимнем корпусе.<br /><br />В прокате представлены лыжи различных марок. В помещении работают раздевалка и туалеты.<br /><br /><strong>Стоимость проката:</strong> 250 руб./первый час, последующие 30 мин./50 руб. Дети до 10 лет: 150 руб./час, последующие 30 мин./50 руб.<br /><br /><strong>График работы:</strong> ср. - вск. с 9:00 до 17:00<br /><br /><strong>Телефон:</strong><a href="tel:+78452563107" style="color: black">+7(8452)563107</a>',
            aligin: 'left',
            slider: true,
            infoBox: true,
            images: [
              {
                alt: '',
                url: 'https://randomfox.ca/images/5.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/6.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/7.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/8.jpg'
              },
            ]
          },
          {
            title: 'КАФЕ',
            color: '#F9871E',
            text: 'Кафе работает в лыжный сезон. Для Вас и Вашей компании всегда найдется столик в одном из 4-х просторных залов.<br /><br />После прогулки по зимнему лесу Вам обязательно захочется погреться в нашем уютном кафе за чашкой ароматного, травяного чая, кофе или безалкогольного глинтвейна. А также попробовать нашу вкусную домашнюю кухню, разнообразный шашлык на углях и знаменитую березовскую выпечку.',
            aligin: 'right',
            slider: true,
            infoBox: true,
            images: [
              {
                alt: '',
                url: 'https://randomfox.ca/images/9.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/10.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/11.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/12.jpg'
              },
            ]
          },
          {
            title: 'БАНКЕТЫ',
            color: '#A18AD5',
            text: 'В Березке Вы можете провести мероприятие и заказать банкет. Для этого мы располагаем несколькими залами разной вместимости, разнообразным банкетным меню, штатом профессиональных поваров и официантов.<br /><br /><strong>Контакты:</strong><br /><br /><a href="tel:+79878090745" style="color: black">+7 987 809 07 45</a> (Ольга Сергеевна)',
            aligin: 'left',
            slider: true,
            infoBox: true,
            images: [
              {
                alt: '',
                url: 'https://randomfox.ca/images/13.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/14.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/15.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/16.jpg'
              },
            ]
          },
          {
            title: 'СЕМЕЙНЫЕ НОМЕРА И САУНА',
            color: '#F7B618',
            text: 'В Зимнем корпусе есть возможность проживания в семейных номерах со всеми удобствами и аренды сауны с бассейном.<br /><br /><strong>Контакты:</strong><br /><br /><a href="tel:+79878090745" style="color: black">+7 987 809 07 45</a> (Ольга Сергеевна)',
            aligin: 'right',
            slider: true,
            infoBox: true,
            images: [
              {
                alt: '',
                url: 'https://randomfox.ca/images/17.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/18.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/19.jpg'
              },
              {
                alt: '',
                url: 'https://randomfox.ca/images/20.jpg'
              },
            ]
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .holiday {
    padding: 70px calc((100vw - 1080px)/2) 20px;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 62px;
    }
    &-outro {
      display: flex;
      justify-content: space-between;
      margin: 0 0 80px;
      &:nth-child(1) {
        margin: 120px 0 80px;
      }
      &__box {
        width: 60%;
      }
      &__title {
        font-family: RF Dewi Expanded;
        font-size: 64px;
        line-height: 77px;
        margin: 40px 0 24px;
      }
      &__text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 22px;
        a {
          color: black;
          text-decoration: none;
        }
      }
      &__image {
        width: 280px;
      }
    }
  }
</style>