<template>
  <div class="history">
    <div class="history__box">
      <div class="history__nav">
        <a href="#history" class="history__nav-link">История</a>
        <a href="#administration" class="history__nav-link">Администрация</a>
        <a href="#infrastructure" class="history__nav-link">Инфраструктура</a>
      </div>
      <div id="history" class="history__title">история «Березки»</div>
      <info-block
        v-for="(story,index) in storys"
        :key="index"
        :text="story.text"
        :aligin="story.aligin"
        :infoBox="story.infoBox"
        :images="story.images"
      />
      <div class="building">
        <div class="building__title">В строительстве и развитии «Берёзки» большое участие и помощь оказали:</div>
        <ul class="building__list">
          <li class="building__list-element">Начальник Саратовского Областного Управления связи С.И. Комаров</li>
          <li class="building__list-element">Председатель Обкома Профсоюза работников связи А.С. Лопаткина</li>
          <li class="building__list-element">Начальник Областного Управления СаратовАвтодор Н.П. Самотеев</li>
          <li class="building__list-element">Главный инженер Управления  СаратовАвтодор  В.П. Максимов</li>
        </ul>
      </div>
      <div class="building">
        <div class="building__title">Директора Саратовского Областного радиотелевизионного Центра:</div>
        <ul class="building__list-line">
          <li class="building__list-element">Чинчиков Г.М.</li>
          <li class="building__list-element">Мартиров А.Б.</li>
          <li class="building__list-element">Соколовский Н.С.</li>
          <li class="building__list-element">Пономарев В.М.</li>
          <li class="building__list-element">Крук Л.Н.</li>
        </ul>
      </div>
      <div class="delegation">
        <div class="delegation__text">За эти годы в лагере были в гостях и отдыхали делегации из Вьетнама, Китая, Кореи, Колумбии, Западной Словакии, Германии, Польши, Болгарии, Америки, Франции, Белоруссии, Украины, Грузии, Чечни.<br /><br />Почти 30 лет плодотворно продолжается на базе «Березки» дружба юных пожарных Земли Гессен Германии и Саратовской области.<br /><br />В лагере совместно с руководителями делегаций были построены пожарная полоса препятствий и клуб дружбы юных пожарных.</div>
        <img src="@/assets/images/photo/insert.png" alt="" class="delegation__image">
      </div>
      <div class="honorary">
        <div class="honorary__title">Почетные «Березовцы»:</div>
        <ul class="honorary__list">
          <li class="honorary__list-element">Мирослав Валент (Словакия)</li>
          <li class="honorary__list-element">Йохан Кробут (Германия)</li>
          <li class="honorary__list-element">Вилли Донат (Германия)</li>
          <li class="honorary__list-element">Стефан Корнель (Германия)</li>
          <li class="honorary__list-element">Сергей Голод (Германия)</li>
        </ul>
      </div>
      <div class="guests">
        <div class="guests__info">
          <div class="guests__title">Большая дружба связывает «Березку» с руководителями МЧС Саратовской области:</div>
          <ul class="guests__list">
            <li class="guests__list-element">Полковник Жуйков Ю.Г.</li>
            <li class="guests__list-element">Генерал-майор Рабаданов А.Н.</li>
            <li class="guests__list-element">Генерал-майор Лихачев М.В.</li>
            <li class="guests__list-element">Генерал-майор Качев И.Н.</li>
            <li class="guests__list-element">Генерал-майор Татаркин А.В.</li>
          </ul>
        </div>
        <div class="guests__slider">
          <slider
            :images="guests"
          />
        </div>
      </div>
      <div class="guests-also">
        <div class="guests-also__title">Также лагерь посещали:</div>
        <ul class="guests-also__list">
          <li class="guests-also__list-element">Председатель Государственной думы Володин В.В.</li>
          <li class="guests-also__list-element">Бывшая Заместитель Председателя Государственной думы Слизка Л.К.</li>
          <li class="guests-also__list-element">Губернаторы Саратовской области: Аяцков Д.Ф., Ипатов П.Л., Радаев В.В.</li>
          <li class="guests-also__list-element">Заместители Председателя Правительства Саратовской области: Марон В.М., Гатвинский А.Н., Старшова Н.И., Горемыко М.В., Данилов А.Н., Россошанский А.В., Гречушкина В.В., Грибов Р.В., Мэр г. Саратов Сараев В.Н.</li>
        </ul>
      </div>
    </div>
    <insert
      color="#7db9f1"
      :image="require('@/assets/images/photo/insert-1.png')"
    >
      Много лет «Берёзка» является победителем межлагерных спартакиад, которые проводятся на её площадках.
    </insert>
    <div class="history__box">
      <div class="athletes">
        <div class="athletes__box">
          <div class="athletes__title">Почетные «Березовцы» Чемпионы Олимпийских игр, Мира, Европы, России:</div>
          <ul class="athletes__list">
            <li class="athletes__list-element">Третьяк В.А.</li>
            <li class="athletes__list-element">Захаров И.Л.</li>
            <li class="athletes__list-element">Улегин С.В.</li>
            <li class="athletes__list-element">Логинов А.В.</li>
            <li class="athletes__list-element">Даци А. Дациев</li>
            <li class="athletes__list-element">Чеботарев А.Н.</li>
            <li class="athletes__list-element">Максюта В.А.</li>
            <li class="athletes__list-element">Антон Яворка (Словакия)</li>
          </ul>
        </div>
        <div class="athletes__slider">
          <slider
            :images="athletes"
          />
        </div>
      </div>
    </div>
    <insert
      color="#59bfa9"
      :image="require('@/assets/images/photo/insert-2.png')"
    >
      Последние 15 лет в «Берёзке» проводится межлагерный фестиваль «Радуга талантов». Практически на всех фестивалях наш лагерь занимал первое место.
    </insert>
    <div class="history__box">
      <div class="artists">
        <div class="artists__slider-box">
          <div class="artists__slider">
            <slider
              :images="artists"
            />
          </div>
          <div class="artists__info">
            <div class="artists__info-title">Гостями «Берёзки» были Народные артисты СССР, Народные артисты России, Заслуженные артисты России:</div>
            <ul class="artists__list">
              <li class="artists__list-element">Олег Табаков</li>
              <li class="artists__list-element">Олег Янковский</li>
              <li class="artists__list-element">Евгений Леонов</li>
              <li class="artists__list-element">Михаил Казаков</li>
              <li class="artists__list-element">Вахтанг Кикабидзе</li>
              <li class="artists__list-element">Михаил Глузский</li>
              <li class="artists__list-element">Сергей Безруков</li>
              <li class="artists__list-element">Александр Збруев</li>
              <li class="artists__list-element">Нина Мусатова</li>
              <li class="artists__list-element">Андрей Леонов</li>
              <li class="artists__list-element">Юрий Ошеров</li>
              <li class="artists__list-element">Игорь Слуцкий</li>
              <li class="artists__list-element">Борис Хвашнянский</li>
              <li class="artists__list-element">Валерий Гаркалин</li>
              <li class="artists__list-element">Мария Шукшина</li>
              <li class="artists__list-element">Леонид Сметанников</li>
              <li class="artists__list-element">Лев Горелик</li>
              <li class="artists__list-element">Владимир Познер</li>
              <li class="artists__list-element">Виктор Гусев</li>
            </ul>
          </div>
        </div>
        <div class="artists-musicians">
          <div class="artists-musicians__title">Знаменитые музыканты:</div>
          <ul class="artists-musicians__list">
            <li class="artists-musicians__list-element">Александр Розенбаум</li>
            <li class="artists-musicians__list-element">Даниил Крамер</li>
            <li class="artists-musicians__list-element">Борис Тевлин</li>
            <li class="artists-musicians__list-element">Екатерина Мечетина</li>
            <li class="artists-musicians__list-element">Ричи Гудс (США)</li>
            <li class="artists-musicians__list-element">Ансамбль «На-на» и Бари Алибасов</li>
            <li class="artists-musicians__list-element">Ансамбль «Премьер министр»</li>
            <li class="artists-musicians__list-element">Валерий Гроховский (США)</li>
            <li class="artists-musicians__list-element">Олег Бутман (США)</li>
            <li class="artists-musicians__list-element">Анита Кинг (США)</li>
            <li class="artists-musicians__list-element">Фредерик Белинский (Франция)</li>
          </ul>
        </div>
      </div>
    </div>
    <insert
      color="#ad95d8"
      :image="require('@/assets/images/photo/insert-3.png')"
    >
      В нашем лагере работает уникальный коллектив профессионалов.
    </insert>
    <div class="history__box">
      <div class="veterans">
        <div class="veterans__title">Ветераны «Березки»:</div>
        <ul class="veterans__list">
          <li class="veterans__list-element">Амхир Б.К. (директор с 1976 г. и по наст.вр.)</li>
          <li class="veterans__list-element">Стрелкова О.С. (администратор с 1977 г. и по наст.вр.)</li>
          <li class="veterans__list-element">Горобец Е.И. (старший воспитатель с 1995 г. и по наст.вр.)</li>
        </ul>
        <ul class="veterans__person">
          <li class="veterans__person-element">Нугаева Г.М.</li>
          <li class="veterans__person-element">Кузнецова Е.В.</li>
          <li class="veterans__person-element">Лушников Н. А.</li>
          <li class="veterans__person-element">Жога С.А.</li>
          <li class="veterans__person-element">Жамборова Л.В.</li>
          <li class="veterans__person-element">Воротилова Л.А.</li>
          <li class="veterans__person-element">Петелин А.Ф.</li>
          <li class="veterans__person-element">Сутырина Г.Н.</li>
          <li class="veterans__person-element">Новосельцева О.Н.</li>
          <li class="veterans__person-element">Чернухин С. А.</li>
          <li class="veterans__person-element">Новак М.А.</li>
          <li class="veterans__person-element">Зеленов А.Н.</li>
          <li class="veterans__person-element">Медведев В.С.</li>
          <li class="veterans__person-element">Иноземцев В.А.</li>
          <li class="veterans__person-element">Мстоев В.</li>
          <li class="veterans__person-element">Семененко С.Е.</li>
          <li class="veterans__person-element">Калинина Н.И.</li>
          <li class="veterans__person-element">Шаюпова Н.В.</li>
          <li class="veterans__person-element">Воротилов А.К.</li>
          <li class="veterans__person-element">Прытков Г.И. </li>
          <li class="veterans__person-element">Крук Н.Е.</li>
        </ul>
        <slider
          :images="veterans"
          :slidesView="3"
          isVisibly="tablet"
        />
      </div>
      <div id="administration" class="administration">
        <div class="administration__title">АДМИНИСТРАЦИЯ:</div>
        <div class="administration__text"><strong>Крук Илья Леонидович</strong> – директор лагеря</div>
        <div class="administration__text"><strong>Амхир Борис Константинович</strong> – исполнительный директор</div>
        <div class="administration__text"><strong>Стрелкова Ольга Сергеевна</strong> – заместитель директора по хозяйственно - административным вопросам с 1977 г.</div>
        <div class="administration__text"><strong>Горобец Елена Ивановна</strong> – заместитель директора по воспитательной работе с 1995 г.</div>
      </div>
      <div id="infrastructure" class="infrastructure">
        <div class="infrastructure__title">Инфраструктура</div>
        <div class="infrastructure__box">
          <div
            class="infrastructure__item"
            v-for="(item, index) in infrastructure"
            :key="index"
          >
            <img :src="item.image" alt="" class="infrastructure__item-image">
            <div class="infrastructure__item-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InfoBlock from '@/components/elements/infoBlock'
  import Slider from '@/components/elements/Slider'
  import Insert from '@/components/elements/Insert'
  export default {
    components: {
      InfoBlock,
      Slider,
      Insert
    },
    data () {
      return {
        storys: [
          {
            infoBox: false,
            text: 'В 1934 году в центре Кумысной поляны связистам области была выделена земля для строительства городской радиовышки. Построенная вышка высотой 118 метров принимала и транслировала радиопередачи в дома Саратова.<br /><br />В 1948 году по инициативе председателя Обкома профсоюза работников связи Серафима Матвеевича Десятова рядом с вышкой началось строительство пионерского лагеря.',
            aligin: 'right',
            images: [
              {
                alt: '',
                url: require('@/assets/images/history/2.jpg')
              },
              {
                alt: '',
                url:  require('@/assets/images/history/3.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/history/4.jpg')
              },
            ]
          },
          {
            infoBox: false,
            text: 'Летом 1951 года в лагере были построены первые две деревянные дачи, столовая, баня, медпункт. Лагерь принял первых 37 детей. Для строительства дач использовались телеграфные столбы.<br /><br />Первым начальником лагеря назначили телеграфистку Галину Константиновну Харьковскую, старшей пионервожатой выпускницу Саратовского пединститута Калинину Нелли Израилевну. Они вместе проработали много лет, по их инициативе по растущей в центре березке, было дано название лагерю.<br /><br />Со дня основания лагеря и на сегодняшний день в «Берёзке» отдохнули более 120 000 детей.',
            aligin: 'left',
            images: [
              {
                alt: '',
                url: require('@/assets/images/history/6.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/history/58.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/history/23.jpg')
              },
            ]
          },
          {
            infoBox: false,
            text: 'В 1981, 1983, 1985 г.г. в лагере были построены двухэтажные кирпичные корпуса, стадион, волейбольные и баскетбольная площадки. С 1995 г. построены новая столовая, летняя эстрада, библиотека, игротека. Был реконструирован бассейн. <br /><br />С 1976 г. в Березке организован зимний оздоровительный досуг для семей и любителей зимнего спорта. В зимнем корпусе лагеря работают лыжный прокат и кафе. В осенне-весенний период работает прокат велосипедов.',
            aligin: 'right',
            images: [
              {
                alt: '',
                url: require('@/assets/images/history/7.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/history/8.jpg')
              },
              {
                alt: '',
                url: require('@/assets/images/history/9.jpg')
              },
            ]
          }
        ],
        guests: [
          {
            alt: '',
            url: require('@/assets/images/history/16.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/17.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/18.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/19.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/20.jpg')
          },
        ],
        infrastructure: [
          {
            text: 'Деревянные домики со всеми удобствами внутри',
            image: require('@/assets/images/icons/infrastructure-1.png')
          },
          {
            text: 'Кирпичные двухэтажные корпуса со всеми удобствами внутри',
            image: require('@/assets/images/icons/infrastructure-2.png')
          },
          {
            text: 'Медпункт',
            image: require('@/assets/images/icons/infrastructure-3.png')
          },
          {
            text: 'Столовый комплекс кондиционированный на 300 мест и на 120 мест, кухня с современным оборудованием',
            image: require('@/assets/images/icons/infrastructure-4.png')
          },
          {
            text: 'Бассейн открытый 25X10 с аквагоркой и 2-мя каскадами, с подогревом.',
            image: require('@/assets/images/icons/infrastructure-5.png')
          },
          {
            text: 'Стадион с футбольным полем 60х30 м., круговые беговые дорожки с резиновым покрытием, трибуна на 800 мест',
            image: require('@/assets/images/icons/infrastructure-6.png')
          },
          {
            text: '2 волейбольных площадки',
            image: require('@/assets/images/icons/infrastructure-7.png')
          },
          {
            text: 'Снайпер площадка',
            image: require('@/assets/images/icons/infrastructure-8.png')
          },
          {
            text: 'Баскетбольная площадка',
            image: require('@/assets/images/icons/infrastructure-9.png')
          },
          {
            text: 'Мини футбол на траве',
            image: require('@/assets/images/icons/infrastructure-10.png')
          },
          {
            text: 'Пожарная полоса препятствий',
            image: require('@/assets/images/icons/infrastructure-11.png')
          },
          {
            text: 'Открытая тренажерная площадка',
            image: require('@/assets/images/icons/infrastructure-12.png')
          },
          {
            text: 'Видеосалон/караоке кондиционированное помещение',
            image: require('@/assets/images/icons/infrastructure-13.png')
          },
          {
            text: 'Веселая площадка - крытые 3 трибуны на 600 мест с цветными пластиковыми креслами, крытая ракушка – эстрада, оснащенная современной акустикой и светом',
            image: require('@/assets/images/icons/infrastructure-14.png')
          },
          {
            text: 'Игротека с настольными играми, видео-приставками, аэро-хоккеем и настольным футболом',
            image: require('@/assets/images/icons/infrastructure-15.png')
          },
          {
            text: 'Библиотека укомплектована самой разнообразной литературой для всех возрастных категорий детей',
            image: require('@/assets/images/icons/infrastructure-16.png')
          },
          {
            text: 'Уличный игровой комплекс для малышей',
            image: require('@/assets/images/icons/infrastructure-17.png')
          },
          {
            text: 'Администрация',
            image: require('@/assets/images/icons/infrastructure-18.png')
          },
          {
            text: 'Зимний корпус',
            image: require('@/assets/images/icons/infrastructure-19.png')
          },
          {
            text: 'Общежития сотрудников',
            image: require('@/assets/images/icons/infrastructure-20.png')
          },
          {
            text: 'Складские помещения',
            image: require('@/assets/images/icons/infrastructure-21.png')
          },
          {
            text: 'Домик охраны',
            image: require('@/assets/images/icons/infrastructure-22.png')
          },
          {
            text: 'Артезианские скважины',
            image: require('@/assets/images/icons/infrastructure-23.png')
          },
        ],
        veterans: [
          {
            alt: '',
            url: require('@/assets/images/history/21.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/22.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/23.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/24.jpg')
          },
           {
            alt: '',
            url: require('@/assets/images/history/25.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/26.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/27.jpg')
          }
        ],
        athletes: [
          {
            alt: '',
            url: require('@/assets/images/history/28.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/29.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/30.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/31.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/32.jpg')
          },
        ],
        artists: [
          {
            alt: '',
            url: require('@/assets/images/history/33.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/34.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/35.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/36.jpg')
          },
          {
            alt: '',
            url: require('@/assets/images/history/37.jpg')
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .history {
    padding: 50px 0 0;
    &__box {
      max-width: 1080px;
      margin: 0 auto;
      @media screen and (max-width: 1300px) {
        max-width: 620px;
      }
      @media screen and (max-width: 680px) {
        max-width: 300px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      line-height: 77px;
      margin: 30px 0 40px;
      text-transform: uppercase;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 29px;
        margin: 28px 0;
      }
    }
    &__nav {
      &-link {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        display: inline-block;
        margin: 0 12px 0 0;
        border: 2px solid;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        transition: background-color .3s, color .3s;

        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
          margin: 0 12px 10px 0;
          padding: 10px 20px;
        }

        &:nth-child(1) {
          color: #F6496B;
          border-color: #F6496B;
          &:hover {
            background-color: #F6496B;
            color: white;
          }
        }
        &:nth-child(2) {
          color: #9DCEFC;
          border-color: #9DCEFC;
          &:hover {
            background-color: #9DCEFC;
            color: white;
          }
        }
        &:nth-child(3) {
          color: #F98419;
          border-color: #F98419;
          &:hover {
            background-color: #F98419;
            color: white;
          }
        }
      }
    }
  }
  .building {
    margin: 0 0 56px;
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      padding-inline-start: 20px;
      &-line {
        display: flex;
        padding-inline-start: 20px;
        .building__list-element {
          margin: 0 0 0 40px;
        }
        .building__list-element:first-child {
          margin: 0;
          @media screen and (max-width: 680px) {
            margin: 0 0 14px;
          }
        }
        @media screen and (max-width: 1300px) {
          flex-wrap: wrap;
          margin: 42px 0 0;
          .building__list-element {
            margin: 0;
            width: 33%;
          }
        }
        @media screen and (max-width: 680px) {
          margin: 34px 0 0;
          .building__list-element {
            margin: 0 0 14px;
            width: 100%;
          }
        }
      }
      &-element {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 29px;
        margin: 0 0 14px;

        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
  .delegation {
    display: flex;
    padding: 64px 0;
    border-top: 1px solid #DFDFDF;
    border-bottom: 1px solid #DFDFDF;
    margin: 0 0 60px;
    @media screen and (max-width: 1300px) {
      justify-content: center;
      padding: 40px 0 12px;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 680px) {
      padding: 20px 0 10px;
    }
    &__text {
      font-family: Montserrat;
      font-size: 18px;
      line-height: 23px;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__image {
      width: 220px;
    }
  }
  .guests {
    display: flex;
    margin: 86px 0 70px;
    @media screen and (max-width: 1300px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 680px) {
      margin: 32px 0 70px;
    }
    &-also {
      margin: 0 0 70px;
      &__title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &__list {
        padding-inline-start: 20px;
        &-element {
          font-family: Montserrat;
          font-size: 18px;
          line-height: 36px;
          @media screen and (max-width: 680px) {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
    &__info {
      width: 50%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    } 
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      margin: 0 0 18px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      margin: 0 0 14px;
      padding-inline-start: 20px;
      &-element {
        margin: 0 0 14px;
      }
      @media screen and (max-width: 1300px) {
        margin: 0 0 44px;
        &-element {
          margin: 0 0 14px;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;

        &-element {
       
          margin: 0 0 14px;
        }
      }
    }
    &__slider {
      width: 50%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
  }
  .veterans {
    margin: 62px 0 134px;
    @media screen and (max-width: 1300px) {
      margin: 54px 0 90px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      margin: 0 0 16px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      margin: 0 0 40px;
      padding-inline-start: 20px;
      &-element {
        margin: 0 0 14px;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
        padding-inline-start: 10px;
      }
    }
    &__person {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      margin: 0 0 56px;
      padding-inline-start: 20px;
      
      &-element {
        width: 25%;
        margin: 0 0 14px;
      }
      @media screen and (max-width: 1300px) {
        &-element {
          width: 50%;
        }
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
        padding-inline-start: 10px;
        &-element {
          width: 44%;
        }
      }
    }
  }
  .administration {
    margin: 0 0 140px;
    @media screen and (max-width: 1300px) {
      margin: 0 0 34px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 44px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
      }
      @media screen and (max-width: 680px) {
        font-size: 22px;
        line-height: 26px;
      }
    }
    &__text {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;
      margin: 0 0 14px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 22px;
        strong {
          display: block;
        }
      }
    }
  }
  .infrastructure {
    margin: 0 0 92px;
    @media screen and (max-width: 680px) {
      margin: 60px 0;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 64px;
      font-weight: 900;
      line-height: 77px;
      text-transform: uppercase;
      margin: 0 0 52px;
      @media screen and (max-width: 1300px) {
        font-size: 46px;
        line-height: 55px;
      }
      @media screen and (max-width: 680px) {
        font-size: 22px;
        line-height: 26px;
        margin: 0 0 20px;
      }
    }
    &__box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__item {
      display: flex;
      padding: 20px 0;
      align-items: center;
      width: calc(50% - 15px);
      border-bottom: 1px dashed #5ec0a961;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      &-image {
        width: 62px;
        height: 62px;
        @media screen and (max-width: 680px) {
          width: 42px;
          height: 42px;
        }
      }
      &-text {
        margin: 0 0 0 30px;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        @media screen and (max-width: 680px) {
          margin: 0 0 0 14px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
  .honorary {
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-inline-start: 20px;
      &-element {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        width: 33%;
        margin: 0 0 14px;
        @media screen and (max-width: 1300px) {
          width: calc(50% - 40px);
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
          width: 100%;
        }
      }
      @media screen and (max-width: 1300px) {
        justify-content: space-between;
      }
    }
  }
  .athletes {
    display: flex;
    justify-content: space-between;
    margin: 78px 0 114px;
    @media screen and (max-width: 1300px) {
      flex-wrap: wrap;
      margin: 50px 0 70px;
    }
    &__box {
      width: 49%;
      @media screen and (max-width: 1300px) {
        width: 100%;
        margin: 0 0 28px;
      }
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__list {
      padding-inline-start: 20px;
      &-element {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        margin: 0 0 14px;
      }
      @media screen and (max-width: 1300px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        &-element {
          width: 50%;
        }
      }
      @media screen and (max-width: 680px) {
        &-element {
          font-size: 14px;
          line-height: 18px;
          width: 100%;
        }
      }
    }
    &__slider {
      width: 49%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
  }
  .artists {
    margin: 84px 0 80px;
    @media screen and (max-width: 1300px) {
      margin: 50px 0 80px;
    }
    @media screen and (max-width: 680px) {
      margin: 42px 0 46px;
    }
    &__slider {
      width: 49%;
      margin: 0 2% 0 0;
      @media screen and (max-width: 1300px) {
        width: 100%;
        margin: 0;
      }
      &-box {
        display: flex;
        justify-content: space-between;
        margin: 0 0 110px;
        @media screen and (max-width: 1300px) {
          flex-wrap: wrap-reverse;
          margin: 0 0 70px;
        }
      }
    }
    &__info {
      width: 49%;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
      &-title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    &__list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-inline-start: 20px;

      &-element {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
        width: 50%;
        margin: 0 0 14px;
      }
      @media screen and (max-width: 1300px) {
        margin: 0 0 40px;
        &-element {
          margin: 0 0 14px;
        }
      }
      @media screen and (max-width: 680px) {
        margin: 20px 0 0;
        &-element {
          font-size: 14px;
          line-height: 18px;
          width: 100%;
        }
      }
    }
    &-musicians {
      &__title {
        font-family: RF Dewi Expanded;
        font-size: 18px;
        font-weight: 900;
        line-height: 23px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &__list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-inline-start: 20px;

        &-element {
          width: 33%;
          font-family: Montserrat;
          font-size: 18px;
          line-height: 23px;
          margin: 0 0 14px;
        }
        @media screen and (max-width: 1300px) {
          &-element {
            width: calc(50% - 40px);
            margin: 0 0 14px;
          }
        }
        @media screen and (max-width: 680px) {
          &-element {
            width: 100%;
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  }

</style>