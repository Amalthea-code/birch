<template>
  <div :class="['wrapper-item-full-width', 'wrapper-item']">
    <div :class="['shift-selection-item', 'shift-selection-item-' + index]">
    <!-- <div v-if="headingText" class="shift-selection-item__title text">{{ headingText }} <div class="info">i <span class="tooltiptext">Информацию по программе Осенней смены смотрите <router-link to="/news/8">здесь</router-link></span></div></div> -->
    <div class="shift-selection-item__title">{{ number }}-Я<br /><span>смена</span></div>
    <div class="shift-selection-item__box">
      <h3 v-if="discount" class="doscount-hedaing">АКЦИЯ</h3>
      <p class="shift-selection-item__date" v-html="date" />
      <hr v-if="price > 0" align="center" width="40%" size="1" class="shift-selection-item__line"/>
      <div v-if="price > 0" :class="{'shift-selection-item__price': true, 'disc': discount}"> {{ discount || price }} руб.
        <div v-if="discount"> {{ price }} руб.</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        default: 0,
        type: Number
      },
      date: {
        default: '',
        type: String,
      },
      headingText: {
        default: '',
        type: String,
      },
      number: {
        default: 0,
        type: Number,
      },
      index: {
        default: 0,
        type: Number,
      },
      discount: {
        default: 0,
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>

.wrapper-item-full-width {
  flex-basis: 100%;
  display: flex;
  justify-content: center;
}
.wrapper-item {
  width: fit-content;
}
.shift-selection-item__price.disc {
  color:red;
  // font-size: 24px;
}
.doscount-hedaing {
  color:red;
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
  font-family: RF Dewi Expanded;
}
.shift-selection-item {
  padding: 48px 0 0;
  position: relative;
  width: 350px;
  margin-bottom: 20px;
    @media screen and (max-width: 1300px) {
      width: 300px;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
      margin-bottom: 10px;
    }
  &__title {
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 210px;
    font-family: RF Dewi Expanded;
    font-size: 64px;
    font-weight: 900;
    line-height: 43px;
    color: white;
    padding: 20px 6px;
    border-radius: 30px;
    @media screen and (max-width: 1300px) {
      width: 146px;
      padding: 20px;
    }
    @media screen and (max-width: 680px) {
      font-size: 44px;
      line-height: 30px;
    }
    span {
      font-size: 30px;
      line-height: 25px;
    }
  }
  &__box {
    border: 2px solid;
    border-radius: 30px;
    padding: 100px 10px 44px;
    @media screen and (max-width: 680px) {
      padding: 58px 10px 44px;
    }
  }
  &__date {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__price {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 26px;
    position: relative;
    display: flex;
    justify-content: center;

    div {
      position: absolute;
      font-size: 16px;
      top: -20px;
      text-decoration: line-through;
      color: black;
    }
  }
  .shift-selection-item__title {
    &.text {
      font-size: 22px;
    }
  }
  &-0 {
    .shift-selection-item__title {
      background-color: #3FD33C;
    }
    .shift-selection-item__box {
      border-color: #3FD33C;
    }
    .shift-selection-item__line {
      border-style: solid;
      border-color: #3FD33C;
    }
  }
  &-1 {
    .shift-selection-item__title {
      background-color: #9DCEFC;
    }
    .shift-selection-item__box {
      border-color: #9DCEFC;
    }
    .shift-selection-item__line {
      border-style: solid;
      border-color: #9DCEFC;
    }
  }
  &-2 {
    .shift-selection-item__title {
      background-color: #F98419;
    }
    .shift-selection-item__box {
      border-color: #F98419;
    }
    .shift-selection-item__line {
      border-style: solid;
      border-color: #F98419;
    }
  }
  &-3 {
    .shift-selection-item__title {
      background-color: #FB6F8A;
    }
    .shift-selection-item__box {
      border-color: #FB6F8A;
    }
    .shift-selection-item__line {
      border-style: solid;
      border-color: #FB6F8A;
    }
  }
  &-4 {
    .shift-selection-item__title {
      background-color: #F7B618;
    }
    .shift-selection-item__box {
      border-color: #F7B618;
    }
    .shift-selection-item__line {
      border-style: solid;
      border-color: #F7B618;
    }
  }
  &-5 {
    
    background: url(/img/listik.cb49c751.png) top/105% 115% no-repeat;
    padding: 200px 70px 0;
    @media screen and (max-width: 1300px) {
      width: 300px;
    }
    @media screen and (max-width: 540px) {
      background: url(/img/listik.cb49c751.png) top/105% 70% no-repeat;
      padding: 150px 30px 0;
    }
    .shift-selection-item__title {
      position: relative;
      background-color: rgba(163, 21, 46, 1);
      transform: translate(-50%, -50%);

      .info {
        font-size: 12px;
        color: white;
        background-color: #a5a1a1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 25px;
        cursor: pointer;

        .tooltiptext {
          visibility: hidden;
          padding: 10px;
          min-width: 280px;
          background-color: rgb(177, 79, 79);
          color: #fff;
          text-align: center;
          border-radius: 6px;
          font-size: 12px;

          /* Position the tooltip */
          position: absolute;
          transform: translate(-20%, 0);
          z-index: 1;
        }

        &:hover .tooltiptext {
          visibility: visible;
        }
      }
      &.text {
        top: 30%;
        @media screen and (max-width: 540px) {
          top: 20%;
        }
      }
    }
    .shift-selection-item__box {
      border-color: rgba(163, 21, 46, 1);
      background: #FFF;
      
      color: #000;
    }
    
    .shift-selection-item__line {
      border-style: solid;
      border-color: rgba(163, 21, 46, 1);
    }
  }
}
</style>