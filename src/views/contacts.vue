<template>
  <div class="contacts">
    <main-section
      subTitle='Контакты'
      color='#F7B618'
    />
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