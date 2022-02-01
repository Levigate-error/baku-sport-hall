<template>
  <div id="app-main">
    <main-big-image></main-big-image>
    <main-content></main-content>
  </div>
</template>

<script>
import MainBigImage from '@/components/main/MainBigImage.vue'
import MainContent from '@/components/main/MainContent.vue'

export default {
  name: 'AppMain',
  components: {
    MainBigImage,
    MainContent
  }
}
</script>

<style scoped lang="scss">
#app-main{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 85px;
}
</style>
