<template>
  <div class="kids">
    <main-section />
    <events />
    <pool />
    <regulations />
    <gallery />
  </div>
</template>

<script>
import Pool from '@/components/blocks/Pool'
import MainSection from '@/components/blocks/MainSection'
import Gallery from '@/components/blocks/Gallery'
import Events from '@/components/blocks/Events'
import Regulations from '@/components/blocks/Regulations'
export default {
  components: { 
    MainSection,
    Gallery,
    Events,
    Pool,
    Regulations
  },
}
</script>