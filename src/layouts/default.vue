<template>
  <div class="default">
    <the-header/>
    <router-view/>
    <the-footer/>
    <the-upper/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'
  import TheFooter from '@/components/TheFooter'
  import TheUpper from '@/components/TheUpper'
  export default {
    components: {
      TheHeader,
      TheFooter,
      TheUpper
    },
  }
</script>

<style lang="scss" scoped>
  .default {
    overflow: hidden;
  }
</style>