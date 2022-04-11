<template>
  <div class="main">
    <main-section />
    <mir-section />
    <shift-selection />
    <reviews />
    <gallery />
    <maps />
  </div>
</template>

<script>
import ShiftSelection from '@/components/blocks/ShiftSelection'
import MainSection from '@/components/blocks/MainSection'
import MirSection from '@/components/blocks/MirSection'
import Maps from '@/components/blocks/Maps'
import Reviews from '@/components/blocks/Reviews'
import Gallery from '@/components/blocks/Gallery'
export default {
  components: { 
    MainSection,
    ShiftSelection,
    MirSection,
    Reviews,
    Gallery,
    Maps
  },
}
</script>
