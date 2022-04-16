<template>
  <div :class="{
    'alert' : true,
    'alert_active' : isActive,
    'alert_disable' : isDisable
    }">
    <div v-if="text" class="alert__title">Извините</div> 
    <div v-else class="alert__title">Ошибка!</div>
    <div v-if="text" class="alert__text">{{this.text}}</div>
    <div v-else class="alert__text">Поля выделенные <span>красным</span> заполнены неверно.<br />Попробуйте еще раз.</div>
    <button @click="switchActive()" type="button" class="alert__button">Хорошо</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false,
        isDisable: false,
        text: false
      }
    },
    methods: {
      switchActive(props) {
        if (props) {
          this.text = props
        } else {
          this.text = false
        }
        if (this.isActive) {
          this.isDisable = !this.isDisable
          setTimeout(() => {
            this.isDisable = !this.isDisable
            this.isActive = !this.isActive
          }, 500)
        } else {
          this.isActive = !this.isActive
          setTimeout(() => {
            if (this.isActive) {
              this.isDisable = !this.isDisable
              setTimeout(() => {
                this.isDisable = !this.isDisable
                this.isActive = !this.isActive
              }, 500)
            }
          }, 5000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert {
    position: fixed;
    bottom: 30px;
    right: -440px;
    background-color: white;
    box-shadow: 0px 4px 25px #00000025;
    border-radius: 20px;
    padding: 14px;
    width: 410px;
    z-index: 4;
    @media screen and (max-width: 680px) {
      width: 280px;
      padding: 10px;
    }
    &_active {
      transition: right .5s;
      right: 50px;
      @media screen and (max-width: 680px) {
        right: 10px;
      }
    }
    &_disable {
      transition: bottom .5s;
      bottom: -425px;
    }
    &__title {
      font-family: RF Dewi Expanded;
      font-size: 24px;
      font-weight: 900;
      line-height: 23px;
      margin: 0px 0 10px;
      @media screen and (max-width: 1300px) {
        font-size: 20px;
        line-height: 18px;
      }
    }
    &__text {
      font-family: Montserrat;
      font-size: 16px;
      line-height: 23px;
      span {
        color: #f05156;
        font-weight: 600;
      }
    }
    &__button {
      display: block;
      font-family: RF Dewi Expanded;
      font-size: 12px;
      font-weight: 900;
      line-height: 22px;
      color: #fff;
      background-color: #84d0b8;
      padding: 10px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      border: solid #84d0b8 2px;
      margin: 18px 0 0 auto;
      cursor: pointer;
      transition: .1s;
      &:active {
        background-color: white;
      }
      @media screen and (max-width: 680px) {
        padding: 6px 10px;
      }
    }
  }
</style>