<template>
  <div class="relaxation">
    <main-section />
    <holiday />
  </div>
</template>

<script>

  import MainSection from '@/components/blocks/MainSection'
  import Holiday from '@/components/blocks/Holiday'
  export default {
    components: { 
      MainSection,
      Holiday
    },
  }
</script>