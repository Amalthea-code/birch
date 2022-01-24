<template>
  <div class="main">
    <main-section />
    <shift-selection />
    <reviews />
    <gallery />
    <maps />
  </div>
</template>

<script>
import ShiftSelection from '@/components/blocks/ShiftSelection'
import MainSection from '@/components/blocks/MainSection'
import Maps from '@/components/blocks/Maps'
import Reviews from '@/components/blocks/Reviews'
import Gallery from '@/components/blocks/Gallery'
export default {
  components: { 
    MainSection,
    ShiftSelection,
    Reviews,
    Gallery,
    Maps
  },
}
</script>
