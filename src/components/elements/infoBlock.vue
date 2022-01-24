<template>
  <div :class="['info-block', 'info-block_' + aligin]">
    <div class="info-block__box">
      <info
        v-if="infoBox"
        :title="title"
        :color="color"
        class="info-block__box-info"
      >
        <div v-html="text"/>
      </info>
      <div
        v-else
        class="info-block__box-text"
      >
        <div v-html="text"/>
      </div>
    </div>
    <div class="info-block__box">
      <slider
        :images="images"
      />
    </div>
  </div>
</template>

<script>
  import Info from '@/components/elements/Info'
  import Slider from '@/components/elements/Slider'

  export default {
    components: {
      Info,
      Slider
    },
    props: {
      aligin: {
        default: 'right',
        type: String
      },
      slider: {
        default: false,
        type: Boolean
      },
      infoBox: {
        default: false,
        type: Boolean
      },
      images: {
        default: () => {
          return [
            {
              alt: '',
              url: ''
            }
          ]
        },
        type: Array,
      },
      color: {
        default: '',
        type: String
      },
      title: {
        default: '',
        type: String
      },
      text: {
        default: '',
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  .info-block {
    display: flex;
    justify-content: space-between;
    height: 400px;
    margin: 0 0 120px;
    &_right {
      flex-direction: row;
    }
    &_left {
      flex-direction: row-reverse;
    }
    &__box {
      width: calc(50% - 15px);
      &-info {
        height: 400px;
        font-family: Montserrat;
        font-size: 16px;
        line-height: 18px;
      }
      &-text {
        font-family: Montserrat;
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
</style>