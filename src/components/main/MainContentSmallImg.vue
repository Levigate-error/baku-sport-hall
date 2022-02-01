<template>
  <div id="main-content-small-img">
    <img class="reveal" src="@/assets/images/main-content-small-img.png" alt="main content small img">
  </div>
</template>

<script>
export default {
  name: 'MainContentSmallImg'
}
</script>

<style scoped lang="scss">
#main-content-small-img{
  width: 35%;
  display: flex;
  align-items: end;
  padding-bottom: 15px;
  @media (max-width: 1000px) {
    width: 90%;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
}
</style>
