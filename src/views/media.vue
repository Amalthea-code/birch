<template>
  <div class="media">
    <main-section
      subTitle='Медиацентр'
      color='#5493CC'
    />
    <web-camers />
    <gallery />
    <news-slider/>
    <networks />
    <maps />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Maps from '@/components/blocks/Maps'
import MainSection from '@/components/blocks/MainSection'
import Networks from '@/components/blocks/Networks'
import Gallery from '@/components/blocks/Gallery'
import NewsSlider from '@/components/blocks/NewsSlider'
import WebCamers from '@/components/blocks/WebCamers'

  export default {
    components: { 
      Networks,
      MainSection,
      Gallery,
      NewsSlider,
      WebCamers,
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

<style lang="scss" scoped>

</style>