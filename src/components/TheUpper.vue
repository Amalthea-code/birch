<template>
  <button @click="upper" type="button" class="upper">
    <select-arrow/>
  </button>
</template>

<script>
import selectArrow from '@/assets/images/icons/selectArrow'
export default {
  components: {
    selectArrow
  },
  methods: {
    upper () {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .upper {
    cursor: pointer;
    background-color: #5EC0A9;
    position: fixed;
    z-index: 2;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 40px;
    border: none;
    box-shadow: 0 0 10px #00000050;
    border-radius: 50%;
    svg {
      transform: translate(0, 2px) rotate(180deg);
    }
  }
</style>