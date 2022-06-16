<template>
  <div class="main">
    <main-section />
    <shift-selection />
    <reviews />
    <news-slider/>
    <maps />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ShiftSelection from '@/components/blocks/ShiftSelection'
import MainSection from '@/components/blocks/MainSection'
import NewsSlider from '@/components/blocks/NewsSlider'
import Maps from '@/components/blocks/Maps'
import Reviews from '@/components/blocks/Reviews'
export default {
  components: { 
    MainSection,
    ShiftSelection,
    NewsSlider,
    Reviews,
    Maps
  },
  methods: {
    ...mapActions({
      fetchNews: 'news/fetchNews'
    })
  },
  created () {
    this.fetchNews()
  }
}
</script>
