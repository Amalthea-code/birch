<template>
  <div class="relaxation">
    <main-section
      subTitle='Семейный отдых'
      color='#3FD33C'
    />
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