<template>
  <div class="parents">
    <main-section
      subTitle='Родителям'
      color='#BAA3E4'
      colorBuy='#FB6F8A'
    />
    <docs />
    <conditions />
    <docs-info />
  </div>
</template>

<script>
import MainSection from '@/components/blocks/MainSection'
import Docs from '@/components/blocks/Docs'
import Conditions from '@/components/blocks/Conditions'
import DocsInfo from '@/components/blocks/DocsInfo'
export default {
  components: { 
    MainSection,
    Docs,
    Conditions,
    DocsInfo
  },
}
</script>