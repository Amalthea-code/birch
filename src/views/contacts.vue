<template>
  <div class="contacts">
    <main-section />
    <contacts />
    <maps />
  </div>
</template>

<script>
import MainSection from '@/components/blocks/MainSection'
import Maps from '@/components/blocks/Maps'
import Contacts from '@/components/blocks/Contacts'
export default {
  components: { 
    MainSection,
    Maps,
    Contacts
  },
}
</script>