<template>
  <div id="main-big-image">
    <img src="@/assets/images/main-big-image.png" alt="main-big-image">
  </div>
</template>

<script>
export default {
  name: 'MainBigImage'
}
</script>

<style scoped lang="scss">
#main-big-image {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  img {
    width: 62.5%;
  }
}
</style>
