<template>
  <div class="default">
    <the-header/>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'
  import TheFooter from '@/components/TheFooter'
  export default {
    components: {
      TheHeader,
      TheFooter
    },
  }
</script>

<style lang="scss" scoped>
  .default {
    overflow: hidden;
  }
</style>