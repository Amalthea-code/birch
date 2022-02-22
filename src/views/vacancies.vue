<template>
  <div class="vacancies">
    <main-section
      subTitle='Вакансии'
      color='#FB6F8A'
    />
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