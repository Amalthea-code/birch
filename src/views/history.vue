<template>
  <div class="history">
    <main-section 
      subTitle='О лагере'
      color='#5493CC'
    />
    <history />
  </div>
</template>

<script>
import MainSection from '@/components/blocks/MainSection'
import History from '@/components/blocks/History'
export default {
  components: { 
    MainSection,
    History
  },
}
</script>