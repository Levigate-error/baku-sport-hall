<template>
  <div id="app-service">
    <div class="wrapper">
      <app-title title="Услуги" size="60px"></app-title>
      <div class="service-content">
        <app-service-item-left></app-service-item-left>
        <app-service-item-right></app-service-item-right>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/global/AppTitle.vue'
import AppServiceItemRight from '@/components/services/AppServiceItemRight.vue'
import AppServiceItemLeft from '@/components/services/AppServiceItemLeft.vue'

export default {
  name: 'AppServices',
  components: {
    AppTitle,
    AppServiceItemRight,
    AppServiceItemLeft
  }
}
</script>

<style scoped lang="scss">
#app-service {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 50%;
    @media (max-width: 1100px) {
      width: 80%;
    }
    .service-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
