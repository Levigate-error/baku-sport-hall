<template>
  <div id="main-content">
    <main-content-text></main-content-text>
    <main-content-small-img></main-content-small-img>
  </div>
</template>

<script>
import MainContentText from '@/components/main/MainContentText.vue'
import MainContentSmallImg from '@/components/main/MainContentSmallImg.vue'

export default {
  name: 'MainContent',
  components: {
    MainContentText,
    MainContentSmallImg
  }
}
</script>

<style scoped lang="scss">
#main-content {
  margin-top: 71px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 14%;
  margin-right: 14%;
  //width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
}
</style>
