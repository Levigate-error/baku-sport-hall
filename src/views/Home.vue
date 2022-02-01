<template>
  <div class="home">
    <app-header></app-header>
    <app-main></app-main>
    <app-services></app-services>
    <what-we-offer></what-we-offer>
    <up-coming-events></up-coming-events>
    <my-news></my-news>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import AppHeader from '@/components/header/AppHeader.vue'
import AppMain from '@/components/main/AppMain.vue'
import AppServices from '@/components/services/AppServices.vue'
import WhatWeOffer from '@/components/offers/WhatWeOffer.vue'
import UpComingEvents from '@/components/events/UpComingEvents.vue'
import MyNews from '@/components/news/MyNews.vue'
import AppFooter from '@/components/footer/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMain,
    AppServices,
    WhatWeOffer,
    UpComingEvents,
    MyNews,
    AppFooter
  }
}
</script>
<style scoped lang="scss">
.home {
  height: auto;
  background-color: #1D1B25;
}
</style>
