<template>
  <div class="media">
    <main-section />
    <gallery />
    <networks />
  </div>
</template>

<script>

import MainSection from '@/components/blocks/MainSection'
import Networks from '@/components/blocks/Networks'
import Gallery from '@/components/blocks/Gallery'

  export default {
    components: { 
      Networks,
      MainSection,
      Gallery
    },
    
  }
</script>

<style lang="scss" scoped>

</style>