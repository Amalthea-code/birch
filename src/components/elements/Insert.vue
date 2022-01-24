<template>
  <div class="insert" :style="{ backgroundColor: color }">
    <img :src="image" alt="" class="insert__image">
    <div class="insert__text">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        default: '#6bb1f2',
        type: String
      },
      image: {
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .insert {
    background-image: url("~@/assets/images/photo/insert-bg.png");
    background-size: cover;
    padding: 20px calc((100vw - 1080px)/2);
    display: flex;
    align-items: center;

    margin: 0;
    &__image {
      width: 120px;
      height: 120px;
      margin: 0 40px 0 0;
    }
    &__text {
      color: white;
      font-family: RF Dewi Expanded;
      font-size: 18px;
      font-weight: 900;
      line-height: 23px;
    }
  }
</style>