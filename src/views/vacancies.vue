<template>
  <div class="vacancies">
    <main-section />
    <vacancies />
  </div>
</template>

<script>

  import MainSection from '@/components/blocks/MainSection'
  import Vacancies from '@/components/blocks/Vacancies'
  export default {
    components: { 
      MainSection,
      Vacancies
    },
  }
</script>