<template>
  <div id="app-service-item-right">
    <img class="reveal" src="@/assets/images/service-right-image.png" alt="service right image">
    <p class="reveal">Развлечения</p>
  </div>
</template>

<script>
export default {
  name: 'AppServiceItemRight'
}
</script>

<style scoped lang="scss">
#app-service-item-right {
  width: 33%;
  @media (max-width: 1100px) {
    width: 45%;
  }
  img {
    width: 100%;
  }
  p {
    text-align: center;
    font-weight: 300;
    font-size: 30px;
    line-height: 56px;
    padding: 0;
    margin: 0;
    color: #FFF;
    font-style: normal;
    letter-spacing: 0.05em;
    @media (max-width: 1100px) {
      font-size: 20px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
}
</style>
