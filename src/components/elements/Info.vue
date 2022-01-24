<template>
  <div class="info">
    <div class="info__title" :style="{ backgroundColor: color }">{{ title }}</div>
    <div class="info__box" :style="{ borderColor: color }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: '',
        type: String
      },
      color: {
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    position: relative;
    &__title {
      position: absolute;
      top: 0;
      width: calc(100% - 120px);
      font-family: RF Dewi Expanded;
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      background-image: url("~@/assets/images/photo/events-title.png");
      background-size: cover;
      color: white;
      padding: 30px 60px;
      border-radius: 24px;
    }
    &__box {
      padding: 120px 60px 34px;
      border: 2px solid;
      border-radius: 24px;
      height: calc(100% - 158px);
    }
  }
</style>