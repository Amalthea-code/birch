<template>
  <the-header/>
  <router-view/>
  <the-footer/>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
  import SwiperCore, {
    Navigation,
    Pagination
  } from 'swiper';
  SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Montserrat";
    src: url("~@/assets/fonts/Montserrat-Medium.ttf") format("TrueType");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("~@/assets/fonts/Montserrat-Regular.ttf") format("TrueType");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
    @font-face {
    font-family: "Montserrat";
    src: url("~@/assets/fonts/Montserrat-SemiBold.ttf") format("TrueType");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "RF Dewi Expanded";
    src: url("~@/assets/fonts/RFDewiExpanded-Black.ttf") format("TrueType");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  
</style>
